<?php
/**
 * Used to set up all core blocks used with the block editor.
 *
 * @package WordPress
 */

// Include files required for core blocks registration.
require ABSPATH . WPINC . '/blocks/archives.php';
require ABSPATH . WPINC . '/blocks/block.php';
require ABSPATH . WPINC . '/blocks/calendar.php';
require ABSPATH . WPINC . '/blocks/categories.php';
require ABSPATH . WPINC . '/blocks/file.php';
require ABSPATH . WPINC . '/blocks/latest-comments.php';
require ABSPATH . WPINC . '/blocks/latest-posts.php';
require ABSPATH . WPINC . '/blocks/loginout.php';
require ABSPATH . WPINC . '/blocks/post-content.php';
require ABSPATH . WPINC . '/blocks/post-date.php';
require ABSPATH . WPINC . '/blocks/post-excerpt.php';
require ABSPATH . WPINC . '/blocks/post-featured-image.php';
require ABSPATH . WPINC . '/blocks/post-terms.php';
require ABSPATH . WPINC . '/blocks/post-title.php';
require ABSPATH . WPINC . '/blocks/query.php';
require ABSPATH . WPINC . '/blocks/query-loop.php';
require ABSPATH . WPINC . '/blocks/query-pagination.php';
require ABSPATH . WPINC . '/blocks/query-pagination-next.php';
require ABSPATH . WPINC . '/blocks/query-pagination-numbers.php';
require ABSPATH . WPINC . '/blocks/query-pagination-previous.php';
require ABSPATH . WPINC . '/blocks/query-title.php';
require ABSPATH . WPINC . '/blocks/rss.php';
require ABSPATH . WPINC . '/blocks/search.php';
require ABSPATH . WPINC . '/blocks/shortcode.php';
require ABSPATH . WPINC . '/blocks/site-tagline.php';
require ABSPATH . WPINC . '/blocks/site-title.php';
require ABSPATH . WPINC . '/blocks/social-link.php';
require ABSPATH . WPINC . '/blocks/tag-cloud.php';

/**
 * Registers core block types using metadata files.
 * Dynamic core blocks are registered separately.
 *
 * @since 5.5.0
 */
function register_core_block_types_from_metadata() {
	$block_folders = array(
		'audio',
		'button',
		'buttons',
		'code',
		'column',
		'columns',
		'embed',
		'freeform',
		'gallery',
		'group',
		'heading',
		'html',
		'image',
		'list',
		'media-text',
		'missing',
		'more',
		'nextpage',
		'paragraph',
		'preformatted',
		'pullquote',
		'quote',
		'separator',
		'social-links',
		'spacer',
		'table',
		'text-columns',
		'verse',
		'video',
	);

	foreach ( $block_folders as $block_folder ) {
		register_block_type(
			ABSPATH . WPINC . '/blocks/' . $block_folder
		);
	}
}
add_action( 'init', 'register_core_block_types_from_metadata' );
