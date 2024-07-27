<aside id="sidebar">
    <?php if ( is_active_sidebar( 'main-sidebar' ) ) : ?>
        <?php dynamic_sidebar( 'main-sidebar' ); ?>
    <?php else : ?>
        <p>Add widgets to the sidebar in the WordPress admin panel.</p>
    <?php endif; ?>
</aside>
