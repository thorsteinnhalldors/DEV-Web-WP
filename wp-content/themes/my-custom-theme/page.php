<?php get_header(); ?>

<div id="content">
    <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            the_title( '<h2>', '</h2>' );
            the_content();
        endwhile;
    else :
        echo '<p>No content found</p>';
    endif;
    ?>
</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
