<?php
function my_custom_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'my_custom_theme' ),
    ) );
}
add_action( 'after_setup_theme', 'my_custom_theme_setup' );

function my_custom_theme_scripts() {
    wp_enqueue_style( 'style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'my_custom_theme_scripts' );
?>
