<?php
/**
 * Multisite administration panel.
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.0.0
 */

require_once( './admin.php' );

wp_redirect( network_admin_url() );
exit;
