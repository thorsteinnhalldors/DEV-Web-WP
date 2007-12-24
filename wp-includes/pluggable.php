<?php

	/* These functions can be replaced via plugins.  They are loaded after
	 plugins are loaded. */

if ( !function_exists('set_current_user') ) :
function set_current_user($id, $name = '') {
	return wp_set_current_user($id, $name);
}
endif;

if ( !function_exists('wp_set_current_user') ) :
function wp_set_current_user($id, $name = '') {
	global $current_user;

	if ( isset($current_user) && ($id == $current_user->ID) )
		return $current_user;

	$current_user = new WP_User($id, $name);

	setup_userdata($current_user->ID);

	do_action('set_current_user');

	return $current_user;
}
endif;

if ( !function_exists('wp_get_current_user') ) :
function wp_get_current_user() {
	global $current_user;

	get_currentuserinfo();

	return $current_user;
}
endif;

if ( !function_exists('get_currentuserinfo') ) :
function get_currentuserinfo() {
	global $current_user;

	if ( defined('XMLRPC_REQUEST') && XMLRPC_REQUEST )
		return false;

	if ( ! empty($current_user) )
		return;

	if ( ! $user = wp_validate_auth_cookie() ) {
		wp_set_current_user(0);
		return false;
	}

	wp_set_current_user($user);
}
endif;

if ( !function_exists('get_userdata') ) :
function get_userdata( $user_id ) {
	global $wpdb;

	$user_id = abs(intval($user_id));
	if ( $user_id == 0 )
		return false;

	$user = wp_cache_get($user_id, 'users');

	if ( '0' === $user )
		return false;
	else if ( $user )
		return $user;

	if ( !$user = $wpdb->get_row($wpdb->prepare("SELECT * FROM $wpdb->users WHERE ID = %d LIMIT 1", $user_id)) ) {
		wp_cache_add($user_id, 0, 'users');
		return false;
	}

	_fill_user($user);

	return $user;
}
endif;

if ( !function_exists('update_user_cache') ) :
function update_user_cache() {
	return true;
}
endif;

if ( !function_exists('get_userdatabylogin') ) :
function get_userdatabylogin($user_login) {
	global $wpdb;
	$user_login = sanitize_user( $user_login );

	if ( empty( $user_login ) )
		return false;

	$user_id = wp_cache_get($user_login, 'userlogins');
	if ( '0' === $user_id )
		return false;

	$user = false;
	if ( false !== $user_id )
		$user = wp_cache_get($user_id, 'users');

	if ( false !== $user )
		return $user;

	if ( !$user = $wpdb->get_row($wpdb->prepare("SELECT * FROM $wpdb->users WHERE user_login = %s", $user_login)) ) {
		wp_cache_add($user_login, 0, 'userlogins');
		return false;
	}

	_fill_user($user);

	return $user;
}
endif;

if ( !function_exists('get_user_by_email') ) :
function get_user_by_email($email) {
	global $wpdb;

	$user_id = wp_cache_get($email, 'useremail');

	if ( '0' === $user_id )
		return false;

	$user = false;
	if ( false !== $user_id )
		$user = wp_cache_get($user_id, 'users');

	if ( false !== $user )
		return $user;

	if ( !$user = $wpdb->get_row($wpdb->prepare("SELECT * FROM $wpdb->users WHERE user_email = %s", $email)) ) {
		wp_cache_add($email, 0, 'useremail');
		return false;
	}

	_fill_user($user);

	return $user;
}
endif;

if ( !function_exists( 'wp_mail' ) ) :
function wp_mail( $to, $subject, $message, $headers = '' ) {
	// Compact the input, apply the filters, and extract them back out
	extract( apply_filters( 'wp_mail', compact( 'to', 'subject', 'message', 'headers' ) ) );

	global $phpmailer;

	// (Re)create it, if it's gone missing
	if ( !is_object( $phpmailer ) || !is_a( $phpmailer, 'PHPMailer' ) ) {
		require_once ABSPATH . WPINC . '/class-phpmailer.php';
		require_once ABSPATH . WPINC . '/class-smtp.php';
		$phpmailer = new PHPMailer();
	}

	// Headers
	if ( empty( $headers ) ) {
		$headers = array();
	} elseif ( !is_array( $headers ) ) {
		// Explode the headers out, so this function can take both
		// string headers and an array of headers.
		$tempheaders = (array) explode( "\n", $headers );
		$headers = array();

		// If it's actually got contents
		if ( !empty( $tempheaders ) ) {
			// Iterate through the raw headers
			foreach ( $tempheaders as $header ) {
				if ( strpos($header, ':') === false )
					continue;
				// Explode them out
				list( $name, $content ) = explode( ':', trim( $header ), 2 );

				// Cleanup crew
				$name = trim( $name );
				$content = trim( $content );

				// Mainly for legacy -- process a From: header if it's there
				if ( 'from' == strtolower($name) ) {
					if ( strpos($content, '<' ) !== false ) {
						// So... making my life hard again?
						$from_name = substr( $content, 0, strpos( $content, '<' ) - 1 );
						$from_name = str_replace( '"', '', $from_name );
						$from_name = trim( $from_name );

						$from_email = substr( $content, strpos( $content, '<' ) + 1 );
						$from_email = str_replace( '>', '', $from_email );
						$from_email = trim( $from_email );
					} else {
						$from_name = trim( $content );
					}
				} elseif ( 'content-type' == strtolower($name) ) {
					if ( strpos( $content,';' ) !== false ) {
						list( $type, $charset ) = explode( ';', $content );
						$content_type = trim( $type );
						$charset = trim( str_replace( array( 'charset=', '"' ), '', $charset ) );
					} else {
						$content_type = trim( $content );
					}
				} else {
					// Add it to our grand headers array
					$headers[trim( $name )] = trim( $content );
				}
			}
		}
	}

	// Empty out the values that may be set
	$phpmailer->ClearAddresses();
	$phpmailer->ClearAllRecipients();
	$phpmailer->ClearAttachments();
	$phpmailer->ClearBCCs();
	$phpmailer->ClearCCs();
	$phpmailer->ClearCustomHeaders();
	$phpmailer->ClearReplyTos();

	// From email and name
	// If we don't have a name from the input headers
	if ( !isset( $from_name ) ) {
		$from_name = 'WordPress';
	}

	// If we don't have an email from the input headers
	if ( !isset( $from_email ) ) {
		// Get the site domain and get rid of www.
		$sitename = strtolower( $_SERVER['SERVER_NAME'] );
		if ( substr( $sitename, 0, 4 ) == 'www.' ) {
			$sitename = substr( $sitename, 4 );
		}

		$from_email = 'wordpress@' . $sitename;
	}

	// Set the from name and email
	$phpmailer->From = apply_filters( 'wp_mail_from', $from_email );
	$phpmailer->Sender = apply_filters( 'wp_mail_from', $from_email );
	$phpmailer->FromName = apply_filters( 'wp_mail_from_name', $from_name );

	// Set destination address
	$phpmailer->AddAddress( $to );

	// Set mail's subject and body
	$phpmailer->Subject = $subject;
	$phpmailer->Body = $message;

	// Set to use PHP's mail()
	$phpmailer->IsMail();

	// Set Content-Type and charset
	// If we don't have a content-type from the input headers
	if ( !isset( $content_type ) ) {
		$content_type = 'text/plain';
	}

	$content_type = apply_filters( 'wp_mail_content_type', $content_type );

	// Set whether it's plaintext or not, depending on $content_type
	if ( $content_type == 'text/html' ) {
		$phpmailer->IsHTML( true );
	} else {
		$phpmailer->IsHTML( false );
	}

	// If we don't have a charset from the input headers
	if ( !isset( $charset ) ) {
		$charset = get_bloginfo( 'charset' );
	}

	// Set the content-type and charset
	$phpmailer->CharSet = apply_filters( 'wp_mail_charset', $charset );

	// Set custom headers
	if ( !empty( $headers ) ) {
		foreach ( $headers as $name => $content ) {
			$phpmailer->AddCustomHeader( sprintf( '%1$s: %2$s', $name, $content ) );
		}
	}

	do_action_ref_array( 'phpmailer_init', array( &$phpmailer ) );

	// Send!
	$result = @$phpmailer->Send();

	return $result;
}
endif;

if ( !function_exists('wp_login') ) :
function wp_login($username, $password, $deprecated = false) {
	global $wpdb, $error;

	$username = sanitize_user($username);

	if ( '' == $username )
		return false;

	if ( '' == $password ) {
		$error = __('<strong>ERROR</strong>: The password field is empty.');
		return false;
	}

	$user = get_userdatabylogin($username);

	if ( !$user || ($user->user_login != $username) ) {
		$error = __('<strong>ERROR</strong>: Invalid username.');
		return false;
	}

	if ( !wp_check_password($password, $user->user_pass) ) {
		$error = __('<strong>ERROR</strong>: Incorrect password.');
		return false;
	}

	// If using old md5 password, rehash.
	if ( strlen($user->user_pass) <= 32 )
		wp_set_password($password, $user->ID);

	return true;
}
endif;

if ( !function_exists('wp_validate_auth_cookie') ) :
function wp_validate_auth_cookie($cookie = '') {
	if ( empty($cookie) ) {
		if ( empty($_COOKIE[AUTH_COOKIE]) )
			return false;
		$cookie = $_COOKIE[AUTH_COOKIE];
	}

	list($username, $expiration, $hmac) = explode('|', $cookie);

	$expired = $expiration;

	// Allow a grace period for POST and AJAX requests
	if ( defined('DOING_AJAX') || 'POST' == $_SERVER['REQUEST_METHOD'] )
		$expired += 3600;

	if ( $expired < time() )
		return false;

	$key = wp_hash($username . $expiration);
	$hash = hash_hmac('md5', $username . $expiration, $key);
	
	if ( $hmac != $hash )
		return false;

	$user = get_userdatabylogin($username);
	if ( ! $user )
		return false;

	return $user->ID;
}
endif;

if ( !function_exists('wp_set_auth_cookie') ) :
function wp_set_auth_cookie($user_id, $remember = false) {
	$user = get_userdata($user_id);

	if ( $remember ) {
		$expiration = $expire = time() + 1209600;
	} else {
		$expiration = time() + 172800;
		$expire = 0;
	}

	$key = wp_hash($user->user_login . $expiration);
	$hash = hash_hmac('md5', $user->user_login . $expiration, $key);

	$cookie = $user->user_login . '|' . $expiration . '|' . $hash;

	setcookie(AUTH_COOKIE, $cookie, $expire, COOKIEPATH, COOKIE_DOMAIN);
	if ( COOKIEPATH != SITECOOKIEPATH )
		setcookie(AUTH_COOKIE, $cookie, $expire, SITECOOKIEPATH, COOKIE_DOMAIN);
}
endif;

if ( !function_exists('wp_clear_auth_cookie') ) :
function wp_clear_auth_cookie() {
	setcookie(AUTH_COOKIE, ' ', time() - 31536000, COOKIEPATH, COOKIE_DOMAIN);
	setcookie(AUTH_COOKIE, ' ', time() - 31536000, SITECOOKIEPATH, COOKIE_DOMAIN);

	// Old cookies
	setcookie(USER_COOKIE, ' ', time() - 31536000, COOKIEPATH, COOKIE_DOMAIN);
	setcookie(PASS_COOKIE, ' ', time() - 31536000, COOKIEPATH, COOKIE_DOMAIN);
	setcookie(USER_COOKIE, ' ', time() - 31536000, SITECOOKIEPATH, COOKIE_DOMAIN);
	setcookie(PASS_COOKIE, ' ', time() - 31536000, SITECOOKIEPATH, COOKIE_DOMAIN);	
}
endif;

if ( !function_exists('is_user_logged_in') ) :
function is_user_logged_in() {
	$user = wp_get_current_user();

	if ( $user->id == 0 )
		return false;

	return true;
}
endif;

if ( !function_exists('auth_redirect') ) :
function auth_redirect() {
	// Checks if a user is logged in, if not redirects them to the login page
	if ( (!empty($_COOKIE[AUTH_COOKIE]) &&
				!wp_validate_auth_cookie($_COOKIE[AUTH_COOKIE])) ||
			 (empty($_COOKIE[AUTH_COOKIE])) ) {
		nocache_headers();

		wp_redirect(get_option('siteurl') . '/wp-login.php?redirect_to=' . urlencode($_SERVER['REQUEST_URI']));
		exit();
	}
}
endif;

if ( !function_exists('check_admin_referer') ) :
function check_admin_referer($action = -1) {
	$adminurl = strtolower(get_option('siteurl')).'/wp-admin';
	$referer = strtolower(wp_get_referer());
	if ( !wp_verify_nonce($_REQUEST['_wpnonce'], $action) &&
		!(-1 == $action && strpos($referer, $adminurl) !== false)) {
		wp_nonce_ays($action);
		die();
	}
	do_action('check_admin_referer', $action);
}endif;

if ( !function_exists('check_ajax_referer') ) :
function check_ajax_referer( $action = -1 ) {
	$nonce = $_REQUEST['_ajax_nonce'] ? $_REQUEST['_ajax_nonce'] : $_REQUEST['_wpnonce'];
	if ( !wp_verify_nonce( $nonce, $action ) ) {
		$current_id = '';
		if ( ( $current = wp_get_current_user() ) && $current->ID )
			$current_id = $current->ID;
		if ( !$current_id )
			die('-1');

		$auth_cookie = '';
		$cookie = explode('; ', urldecode(empty($_POST['cookie']) ? $_GET['cookie'] : $_POST['cookie'])); // AJAX scripts must pass cookie=document.cookie
		foreach ( $cookie as $tasty ) {
			if ( false !== strpos($tasty, AUTH_COOKIE) )
				$auth_cookie = substr(strstr($tasty, '='), 1);
		}

		if ( empty($auth_cookie) )
			die('-1');

		if ( ! $user_id = wp_validate_auth_cookie( $auth_cookie ) )
			die('-1');
	
		if ( $current_id != $user_id )
			die('-1');
	}
	do_action('check_ajax_referer');
}
endif;

// Cookie safe redirect.  Works around IIS Set-Cookie bug.
// http://support.microsoft.com/kb/q176113/
if ( !function_exists('wp_redirect') ) :
function wp_redirect($location, $status = 302) {
	global $is_IIS;

	$location = apply_filters('wp_redirect', $location, $status);

	if ( !$location ) // allows the wp_redirect filter to cancel a redirect
		return false;

	$location = wp_sanitize_redirect($location);

	if ( $is_IIS ) {
		header("Refresh: 0;url=$location");
	} else {
		if ( php_sapi_name() != 'cgi-fcgi' )
			status_header($status); // This causes problems on IIS and some FastCGI setups
		header("Location: $location");
	}
}
endif;

if ( !function_exists('wp_sanitize_redirect') ) :
/**
 * sanitizes a URL for use in a redirect
 * @return string redirect-sanitized URL
 **/
function wp_sanitize_redirect($location) {
	$location = preg_replace('|[^a-z0-9-~+_.?#=&;,/:%]|i', '', $location);
	$location = wp_kses_no_null($location);

	// remove %0d and %0a from location
	$strip = array('%0d', '%0a');
	$found = true;
	while($found) {
		$found = false;
		foreach($strip as $val) {
			while(strpos($location, $val) !== false) {
				$found = true;
				$location = str_replace($val, '', $location);
			}
		}
	}
	return $location;
}
endif;

if ( !function_exists('wp_safe_redirect') ) :
/**
 * performs a safe (local) redirect, using wp_redirect()
 * @return void
 **/
function wp_safe_redirect($location, $status = 302) {

	// Need to look at the URL the way it will end up in wp_redirect()
	$location = wp_sanitize_redirect($location);

	// browsers will assume 'http' is your protocol, and will obey a redirect to a URL starting with '//'
	if ( substr($location, 0, 2) == '//' )
		$location = 'http:' . $location;

	$lp  = parse_url($location);
	$wpp = parse_url(get_option('home'));

	$allowed_hosts = (array) apply_filters('allowed_redirect_hosts', array($wpp['host']), $lp['host']);

	if ( isset($lp['host']) && ( !in_array($lp['host'], $allowed_hosts) && $lp['host'] != strtolower($wpp['host'])) )
		$location = get_option('siteurl') . '/wp-admin/';

	wp_redirect($location, $status);
}
endif;

if ( ! function_exists('wp_notify_postauthor') ) :
function wp_notify_postauthor($comment_id, $comment_type='') {
	$comment = get_comment($comment_id);
	$post    = get_post($comment->comment_post_ID);
	$user    = get_userdata( $post->post_author );

	if ('' == $user->user_email) return false; // If there's no email to send the comment to

	$comment_author_domain = @gethostbyaddr($comment->comment_author_IP);

	$blogname = get_option('blogname');

	if ( empty( $comment_type ) ) $comment_type = 'comment';

	if ('comment' == $comment_type) {
		$notify_message  = sprintf( __('New comment on your post #%1$s "%2$s"'), $comment->comment_post_ID, $post->post_title ) . "\r\n";
		$notify_message .= sprintf( __('Author : %1$s (IP: %2$s , %3$s)'), $comment->comment_author, $comment->comment_author_IP, $comment_author_domain ) . "\r\n";
		$notify_message .= sprintf( __('E-mail : %s'), $comment->comment_author_email ) . "\r\n";
		$notify_message .= sprintf( __('URL    : %s'), $comment->comment_author_url ) . "\r\n";
		$notify_message .= sprintf( __('Whois  : http://ws.arin.net/cgi-bin/whois.pl?queryinput=%s'), $comment->comment_author_IP ) . "\r\n";
		$notify_message .= __('Comment: ') . "\r\n" . $comment->comment_content . "\r\n\r\n";
		$notify_message .= __('You can see all comments on this post here: ') . "\r\n";
		$subject = sprintf( __('[%1$s] Comment: "%2$s"'), $blogname, $post->post_title );
	} elseif ('trackback' == $comment_type) {
		$notify_message  = sprintf( __('New trackback on your post #%1$s "%2$s"'), $comment->comment_post_ID, $post->post_title ) . "\r\n";
		$notify_message .= sprintf( __('Website: %1$s (IP: %2$s , %3$s)'), $comment->comment_author, $comment->comment_author_IP, $comment_author_domain ) . "\r\n";
		$notify_message .= sprintf( __('URL    : %s'), $comment->comment_author_url ) . "\r\n";
		$notify_message .= __('Excerpt: ') . "\r\n" . $comment->comment_content . "\r\n\r\n";
		$notify_message .= __('You can see all trackbacks on this post here: ') . "\r\n";
		$subject = sprintf( __('[%1$s] Trackback: "%2$s"'), $blogname, $post->post_title );
	} elseif ('pingback' == $comment_type) {
		$notify_message  = sprintf( __('New pingback on your post #%1$s "%2$s"'), $comment->comment_post_ID, $post->post_title ) . "\r\n";
		$notify_message .= sprintf( __('Website: %1$s (IP: %2$s , %3$s)'), $comment->comment_author, $comment->comment_author_IP, $comment_author_domain ) . "\r\n";
		$notify_message .= sprintf( __('URL    : %s'), $comment->comment_author_url ) . "\r\n";
		$notify_message .= __('Excerpt: ') . "\r\n" . sprintf('[...] %s [...]', $comment->comment_content ) . "\r\n\r\n";
		$notify_message .= __('You can see all pingbacks on this post here: ') . "\r\n";
		$subject = sprintf( __('[%1$s] Pingback: "%2$s"'), $blogname, $post->post_title );
	}
	$notify_message .= get_permalink($comment->comment_post_ID) . "#comments\r\n\r\n";
	$notify_message .= sprintf( __('Delete it: %s'), get_option('siteurl')."/wp-admin/comment.php?action=cdc&c=$comment_id" ) . "\r\n";
	$notify_message .= sprintf( __('Spam it: %s'), get_option('siteurl')."/wp-admin/comment.php?action=cdc&dt=spam&c=$comment_id" ) . "\r\n";

	$wp_email = 'wordpress@' . preg_replace('#^www\.#', '', strtolower($_SERVER['SERVER_NAME']));

	if ( '' == $comment->comment_author ) {
		$from = "From: \"$blogname\" <$wp_email>";
		if ( '' != $comment->comment_author_email )
			$reply_to = "Reply-To: $comment->comment_author_email";
	} else {
		$from = "From: \"$comment->comment_author\" <$wp_email>";
		if ( '' != $comment->comment_author_email )
			$reply_to = "Reply-To: \"$comment->comment_author_email\" <$comment->comment_author_email>";
	}

	$message_headers = "$from\n"
		. "Content-Type: text/plain; charset=\"" . get_option('blog_charset') . "\"\n";

	if ( isset($reply_to) )
		$message_headers .= $reply_to . "\n";

	$notify_message = apply_filters('comment_notification_text', $notify_message, $comment_id);
	$subject = apply_filters('comment_notification_subject', $subject, $comment_id);
	$message_headers = apply_filters('comment_notification_headers', $message_headers, $comment_id);

	@wp_mail($user->user_email, $subject, $notify_message, $message_headers);

	return true;
}
endif;

/* wp_notify_moderator
   notifies the moderator of the blog (usually the admin)
   about a new comment that waits for approval
   always returns true
 */
if ( !function_exists('wp_notify_moderator') ) :
function wp_notify_moderator($comment_id) {
	global $wpdb;

	if( get_option( "moderation_notify" ) == 0 )
		return true;

	$comment = $wpdb->get_row($wpdb->prepare("SELECT * FROM $wpdb->comments WHERE comment_ID=%d LIMIT 1", $comment_id));
	$post = $wpdb->get_row($wpdb->prepare("SELECT * FROM $wpdb->posts WHERE ID=%d LIMIT 1", $comment->comment_post_ID));

	$comment_author_domain = @gethostbyaddr($comment->comment_author_IP);
	$comments_waiting = $wpdb->get_var("SELECT count(comment_ID) FROM $wpdb->comments WHERE comment_approved = '0'");

	$notify_message  = sprintf( __('A new comment on the post #%1$s "%2$s" is waiting for your approval'), $post->ID, $post->post_title ) . "\r\n";
	$notify_message .= get_permalink($comment->comment_post_ID) . "\r\n\r\n";
	$notify_message .= sprintf( __('Author : %1$s (IP: %2$s , %3$s)'), $comment->comment_author, $comment->comment_author_IP, $comment_author_domain ) . "\r\n";
	$notify_message .= sprintf( __('E-mail : %s'), $comment->comment_author_email ) . "\r\n";
	$notify_message .= sprintf( __('URL    : %s'), $comment->comment_author_url ) . "\r\n";
	$notify_message .= sprintf( __('Whois  : http://ws.arin.net/cgi-bin/whois.pl?queryinput=%s'), $comment->comment_author_IP ) . "\r\n";
	$notify_message .= __('Comment: ') . "\r\n" . $comment->comment_content . "\r\n\r\n";
	$notify_message .= sprintf( __('Approve it: %s'),  get_option('siteurl')."/wp-admin/comment.php?action=mac&c=$comment_id" ) . "\r\n";
	$notify_message .= sprintf( __('Delete it: %s'), get_option('siteurl')."/wp-admin/comment.php?action=cdc&c=$comment_id" ) . "\r\n";
	$notify_message .= sprintf( __('Spam it: %s'), get_option('siteurl')."/wp-admin/comment.php?action=cdc&dt=spam&c=$comment_id" ) . "\r\n";
	$strCommentsPending = sprintf( __ngettext('%s comment', '%s comments', $comments_waiting), $comments_waiting );
	$notify_message .= sprintf( __('Currently %s are waiting for approval. Please visit the moderation panel:'), $strCommentsPending ) . "\r\n";
	$notify_message .= get_option('siteurl') . "/wp-admin/moderation.php\r\n";

	$subject = sprintf( __('[%1$s] Please moderate: "%2$s"'), get_option('blogname'), $post->post_title );
	$admin_email = get_option('admin_email');

	$notify_message = apply_filters('comment_moderation_text', $notify_message, $comment_id);
	$subject = apply_filters('comment_moderation_subject', $subject, $comment_id);

	@wp_mail($admin_email, $subject, $notify_message);

	return true;
}
endif;

if ( !function_exists('wp_new_user_notification') ) :
function wp_new_user_notification($user_id, $plaintext_pass = '') {
	$user = new WP_User($user_id);

	$user_login = stripslashes($user->user_login);
	$user_email = stripslashes($user->user_email);

	$message  = sprintf(__('New user registration on your blog %s:'), get_option('blogname')) . "\r\n\r\n";
	$message .= sprintf(__('Username: %s'), $user_login) . "\r\n\r\n";
	$message .= sprintf(__('E-mail: %s'), $user_email) . "\r\n";

	@wp_mail(get_option('admin_email'), sprintf(__('[%s] New User Registration'), get_option('blogname')), $message);

	if ( empty($plaintext_pass) )
		return;

	$message  = sprintf(__('Username: %s'), $user_login) . "\r\n";
	$message .= sprintf(__('Password: %s'), $plaintext_pass) . "\r\n";
	$message .= get_option('siteurl') . "/wp-login.php\r\n";

	wp_mail($user_email, sprintf(__('[%s] Your username and password'), get_option('blogname')), $message);

}
endif;

if ( !function_exists('wp_verify_nonce') ) :
function wp_verify_nonce($nonce, $action = -1) {
	$user = wp_get_current_user();
	$uid = (int) $user->id;

	$i = ceil(time() / 43200);

	//Allow for expanding range, but only do one check if we can
	if( substr(wp_hash($i . $action . $uid), -12, 10) == $nonce || substr(wp_hash(($i - 1) . $action . $uid), -12, 10) == $nonce )
		return true;
	return false;
}
endif;

if ( !function_exists('wp_create_nonce') ) :
function wp_create_nonce($action = -1) {
	$user = wp_get_current_user();
	$uid = (int) $user->id;

	$i = ceil(time() / 43200);

	return substr(wp_hash($i . $action . $uid), -12, 10);
}
endif;

if ( !function_exists('wp_salt') ) :
function wp_salt() {

	$secret_key = '';
	if ( defined('SECRET_KEY') && ('' != SECRET_KEY) && ('put your unique phrase here' != SECRET_KEY) )
		$secret_key = SECRET_KEY;

	if ( defined('SECRET_SALT') ) {
		$salt = SECRET_SALT;
	} else {
		$salt = get_option('secret');
		if ( empty($salt) ) {
			$salt = wp_generate_password();
			update_option('secret', $salt);
		}
	}

	return apply_filters('salt', $salt);
}
endif;

if ( !function_exists('wp_hash') ) :
function wp_hash($data) {
	$salt = wp_salt();

	if ( function_exists('hash_hmac') ) {
		return hash_hmac('md5', $data, $salt);
	} else {
		return md5($data . $salt);
	}
}
endif;

if ( !function_exists('wp_hash_password') ) :
function wp_hash_password($password) {
	global $wp_hasher;

	if ( empty($wp_hasher) ) {
		require_once( ABSPATH . 'wp-includes/class-phpass.php');
		// By default, use the portable hash from phpass
		$wp_hasher = new PasswordHash(8, TRUE);
	}
	
	return $wp_hasher->HashPassword($password); 
}
endif;

if ( !function_exists('wp_check_password') ) :
function wp_check_password($password, $hash) {
	global $wp_hasher;

	if ( strlen($hash) <= 32 )
		return ( $hash == md5($password) );

	// If the stored hash is longer than an MD5, presume the
	// new style phpass portable hash.
	if ( empty($wp_hasher) ) {
		require_once( ABSPATH . 'wp-includes/class-phpass.php');
		// By default, use the portable hash from phpass
		$wp_hasher = new PasswordHash(8, TRUE);
	}

	return $wp_hasher->CheckPassword($password, $hash);
}
endif;

if ( !function_exists('wp_generate_password') ) :
/**
 * Generates a random password drawn from the defined set of characters
 * @return string the password
 **/
function wp_generate_password() {
	$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	$length = 7;
	$password = '';
	for ( $i = 0; $i < $length; $i++ )
		$password .= substr($chars, mt_rand(0, 61), 1);
	return $password;
}
endif;

if ( !function_exists('wp_set_password') ) :
function wp_set_password( $password, $user_id ) {
	global $wpdb;

	$hash = wp_hash_password($password);
	$query = $wpdb->prepare("UPDATE $wpdb->users SET user_pass = %s, user_activation_key = '' WHERE ID = %d", $hash, $user_id);
	$wpdb->query($query);
	wp_cache_delete($user_id, 'users');
}
endif;

// Deprecated. Use wp_set_auth_cookie()
if ( !function_exists('wp_setcookie') ) :
function wp_setcookie($username, $password = '', $already_md5 = false, $home = '', $siteurl = '', $remember = false) {
	$user = get_userdatabylogin($username);
	wp_set_auth_cookie($user->ID, $remember);
}
endif;

// Deprecated. Use wp_clear_auth_cookie()
if ( !function_exists('wp_clearcookie') ) :
function wp_clearcookie() {
	wp_clear_auth_cookie();
}
endif;

// Deprecated.  No alternative.
if ( !function_exists('wp_get_cookie_login') ):
function wp_get_cookie_login() {
	return false;
}
endif;

?>
