// this file contains all the scripts used in the post/edit page

function new_tag_remove_tag() {
	var id = jQuery( this ).attr( 'id' );
	var num = id.substr( 10 );
	var current_tags = jQuery( '#tags-input' ).val().split(',');
	delete current_tags[num];
	var new_tags = [];
	jQuery.each( current_tags, function( key, val ) {
		if ( val && !val.match(/^\s+$/) && '' != val ) {
			new_tags = new_tags.concat( val );
		}
	});
	jQuery( '#tags-input' ).val( new_tags.join( ',' ).replace( /\s*,+\s*/, ',' ).replace( /,+/, ',' ).replace( /,+\s+,+/, ',' ).replace( /,+\s*$/, '' ).replace( /^\s*,+/, '' ) );
	tag_update_quickclicks();
	jQuery('#newtag').focus();
	return false;
}

function tag_update_quickclicks() {
	if ( jQuery( '#tags-input' ).length == 0 )
		return;
	var current_tags = jQuery( '#tags-input' ).val().split(',');
	jQuery( '#tagchecklist' ).empty();
	shown = false;
//	jQuery.merge( current_tags, current_tags ); // this doesn't work anymore, need something to array_unique
	jQuery.each( current_tags, function( key, val ) {
		val = val.replace( /^\s+/, '' ).replace( /\s+$/, '' ); // trim
		if ( !val.match(/^\s+$/) && '' != val ) {
			txt = '<span><a id="tag-check-' + key + '" class="ntdelbutton">X</a>&nbsp;' + val + '</span> ';
			jQuery( '#tagchecklist' ).append( txt );
			jQuery( '#tag-check-' + key ).click( new_tag_remove_tag );
			shown = true;
		}
	});
	if ( shown )
		jQuery( '#tagchecklist' ).prepend( '<strong>'+postL10n.tagsUsed+'</strong><br />' );
}

function tag_flush_to_text() {
	var newtags = jQuery('#tags-input').val() + ',' + jQuery('#newtag').val();
	// massage
	newtags = newtags.replace( /\s+,+\s*/g, ',' ).replace( /,+/g, ',' ).replace( /,+\s+,+/g, ',' ).replace( /,+\s*$/g, '' ).replace( /^\s*,+/g, '' );
	jQuery('#tags-input').val( newtags );
	tag_update_quickclicks();
	jQuery('#newtag').val('');
	jQuery('#newtag').focus();
	return false;
}

function tag_save_on_publish() {
	if ( jQuery('#newtag').val() != postL10n.addTag )
		tag_flush_to_text();
}

function tag_press_key( e ) {
	if ( 13 == e.keyCode ) {
		tag_flush_to_text();
		return false;
	}
}

jQuery(document).ready( function($) {
	// close postboxes that should be closed
	jQuery('.if-js-closed').removeClass('if-js-closed').addClass('closed');

	// postboxes
	postboxes.add_postbox_toggles('post');

	// Editable slugs
	make_slugedit_clickable();

	// hide advanced slug field
	jQuery('#slugdiv').hide();

	jQuery('#tags-input').hide();
	tag_update_quickclicks();
	// add the quickadd form
	jQuery('#jaxtag').prepend('<span id="ajaxtag"><input type="text" name="newtag" id="newtag" class="form-input-tip" size="16" autocomplete="off" value="'+postL10n.addTag+'" /><input type="button" class="button" id="tagadd" value="' + postL10n.add + '" tabindex="3" /><input type="hidden"/><input type="hidden"/><span class="howto">'+postL10n.separate+'</span></span>');
	jQuery('#tagadd').click( tag_flush_to_text );
	jQuery('#newtag').focus(function() {
		if ( this.value == postL10n.addTag )
			jQuery(this).val( '' ).removeClass( 'form-input-tip' );
	});
	jQuery('#newtag').blur(function() {
		if ( this.value == '' )
			jQuery(this).val( postL10n.addTag ).addClass( 'form-input-tip' );
	});

	// auto-save tags on post save/publish
	jQuery('#publish').click( tag_save_on_publish );
	jQuery('#save-post').click( tag_save_on_publish );

	jQuery('#title').blur( function() { if ( (jQuery("#post_ID").val() > 0) || (jQuery("#title").val().length == 0) ) return; autosave(); } );

	// auto-suggest stuff
	jQuery('#newtag').suggest( 'admin-ajax.php?action=ajax-tag-search', { delay: 500, minchars: 2, multiple: true, multipleSep: ", " } );
	jQuery('#newtag').keypress( tag_press_key );

	// category tabs
	var categoryTabs =jQuery('#category-tabs').tabs();

	// Ajax Cat
	var newCat = jQuery('#newcat').one( 'focus', function() { jQuery(this).val( '' ).removeClass( 'form-input-tip' ) } );
	jQuery('#category-add-sumbit').click( function() { newCat.focus(); } );
	var newCatParent = false;
	var newCatParentOption = false;
	var noSyncChecks = false; // prophylactic. necessary?
	var syncChecks = function() {
		if ( noSyncChecks )
			return;
		noSyncChecks = true;
		var th = jQuery(this);
		var c = th.is(':checked');
		var id = th.val().toString();
		jQuery('#in-category-' + id + ', #in-popular-category-' + id).attr( 'checked', c );
		noSyncChecks = false;
	};
	var popularCats = jQuery('#categorychecklist-pop :checkbox').map( function() { return parseInt(jQuery(this).val(), 10); } ).get().join(',');
	var catAddBefore = function( s ) {
		s.data += '&popular_ids=' + popularCats + '&' + jQuery( '#categorychecklist :checked' ).serialize();
		return s;
	};
	var catAddAfter = function( r, s ) {
		if ( !newCatParent ) newCatParent = jQuery('#newcat_parent');
		if ( !newCatParentOption ) newCatParentOption = newCatParent.find( 'option[value=-1]' );
		jQuery(s.what + ' response_data', r).each( function() {
			var t = jQuery(jQuery(this).text());
			t.find( 'label' ).each( function() {
				var th = jQuery(this);
				var val = th.find('input').val();
				var id = th.find('input')[0].id
				jQuery('#' + id).change( syncChecks ).change();
				if ( newCatParent.find( 'option[value=' + val + ']' ).size() )
					return;
				var name = jQuery.trim( th.text() );
				var o = jQuery( '<option value="' +  parseInt( val, 10 ) + '"></option>' ).text( name );
				newCatParent.prepend( o );
			} );
			newCatParentOption.attr( 'selected', true );
		} );
	};
	jQuery('#categorychecklist').wpList( {
		alt: '',
		response: 'category-ajax-response',
		addBefore: catAddBefore,
		addAfter: catAddAfter
	} );
	jQuery('#category-add-toggle').click( function() {
		jQuery(this).parents('div:first').toggleClass( 'wp-hidden-children' );
		// categoryTabs.tabs( 'select', '#categories-all' ); // this is broken (in the UI beta?)
		categoryTabs.find( 'a[href="#categories-all"]' ).click();
		jQuery('#newcat').focus();
		return false;
	} );
	jQuery('.categorychecklist .popular-category :checkbox').change( syncChecks ).filter( ':checked' ).change();
	var stamp = $('#timestamp').html();

	$('.edit-timestamp').click(function () {
		if ($('#timestampdiv').is(":hidden")) {
			$('#timestampdiv').slideDown("normal");
			$('.edit-timestamp').hide();
		}

		return false;
	});

	$('.cancel-timestamp').click(function() {
		$('#timestampdiv').slideUp("normal");
		$('#mm').val($('#hidden_mm').val());
		$('#jj').val($('#hidden_jj').val());
		$('#aa').val($('#hidden_aa').val());
		$('#hh').val($('#hidden_hh').val());
		$('#mn').val($('#hidden_mn').val());
		$('#timestamp').html(stamp);
		$('.edit-timestamp').show();

		var attemptedDate = new Date( $('#aa').val(), $('#mm').val() -1, $('#jj').val(), $('#hh').val(), $('#mn').val() );
		var currentDate = new Date( $('#cur_aa').val(), $('#cur_mm').val() -1, $('#cur_jj').val(), $('#cur_hh').val(), $('#cur_mn').val() );
		if ( attemptedDate > currentDate ) {
			$('#publish').val( postL10n.schedule );
		} else if ( $('#original_post_status').val() != 'publish' ) {
			$('#publish').val( postL10n.publish );
		} else {
			$('#publish').val( postL10n.update );
		}

		return false;
	});

	$('.save-timestamp').click(function () { // crazyhorse - multiple ok cancels
		$('#timestampdiv').slideUp("normal");
		$('.edit-timestamp').show();
		var attemptedDate = new Date( $('#aa').val(), $('#mm').val() -1, $('#jj').val(), $('#hh').val(), $('#mn').val() );
		var currentDate = new Date( $('#cur_aa').val(), $('#cur_mm').val() -1, $('#cur_jj').val(), $('#cur_hh').val(), $('#cur_mn').val() );
		if ( attemptedDate > currentDate ) {
			var publishOn = postL10n.publishOnFuture;
			$('#publish').val( postL10n.schedule );
		} else if ( $('#original_post_status').val() != 'publish' ) {
			var publishOn = postL10n.publishOn;
			$('#publish').val( postL10n.publish );
		} else {
			var publishOn = postL10n.publishOnPast;
			$('#publish').val( postL10n.update );
		}
		$('#timestamp').html(
			publishOn + '<br />' +
			$( '#mm option[value=' + $('#mm').val() + ']' ).text() + ' ' +
			$('#jj').val() + ', ' +
			$('#aa').val() + ' @ ' +
			$('#hh').val() + ':' +
			$('#mn').val() + ' '
		);

		return false;
	});

	$('.edit-post-status').click(function() {
		if ($('#post-status-select').is(":hidden")) {
			$('#post-status-select').slideDown("normal");
			$(this).hide();
		}

		return false;
	});

	$('.save-post-status').click(function() {
		$('#post-status-select').slideUp("normal");
		$('#post-status-display').html($('#post_status :selected').text());
		$('.edit-post-status').show();
		if ( $('#post_status :selected').val() == 'pending' ) {
			$('#save-post').val( postL10n.savePending );
		} else {
			$('#save-post').val( postL10n.saveDraft );
		}
		return false;
	});

	$('.cancel-post-status').click(function() {
		$('#post-status-select').slideUp("normal");
		$('#post_status').val($('#hidden_post_status').val());
		$('#post-status-display').html($('#post_status :selected').text());
		$('.edit-post-status').show();
		if ( $('#post_status :selected').val() == 'pending' ) {
			$('#save-post').val( postL10n.savePending );
		} else {
			$('#save-post').val( postL10n.saveDraft );
		}

		return false;
	});

	// Custom Fields
	jQuery('#the-list').wpList( { addAfter: function( xml, s ) {
		if ( jQuery.isFunction( autosave_update_post_ID ) ) {
			autosave_update_post_ID(s.parsed.responses[0].supplemental.postid);
		}
	}, addBefore: function( s ) {
		s.data += '&post_id=' + jQuery('#post_ID').val();
		return s;
	}
	});
});

(function($){
	commentsBox = {
		st : 0,

		get : function(total, num) {
			var st = this.st;
			if ( ! num )
				num = 20;

			this.st += num;
			this.total = total;
			$('.waiting').show();

			var data = {
				'action' : 'get-comments',
				'mode' : 'single',
				'_ajax_nonce' : $('#add_comment_nonce').val(),
				'post_ID' : $('#post_ID').val(),
				'start' : st,
				'num' : num
			};

			$.post('admin-ajax.php', data,
				function(r) {
					var r = wpAjax.parseAjaxResponse(r);
					$('#commentstatusdiv .widefat').show();
					$('.waiting').hide();

					if ( 'object' == typeof r && r.responses[0] ) {
						$('#the-comment-list').append( r.responses[0].data );
						$('#the-comment-list .hide-if-no-js').removeClass('hide-if-no-js');

						theList = theExtraList = null;
						$("a[className*=':']").unbind();
						setCommentsList();

						if ( commentsBox.st > commentsBox.total )
							$('#show-comments').hide();
						else
							$('#show-comments').html(postL10n.showcomm);
						return;
					} else if ( 1 == r ) {
						$('#show-comments').parent().html(postL10n.endcomm);
						return;
					}

					$('#the-comment-list').append('<tr><td colspan="5">'+wpAjax.broken+'</td></tr>');
				}
			);

			return false;
		}
	}

})(jQuery);

