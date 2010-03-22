var wpNavMenu;(function(a){wpNavMenu={init:function(){wpNavMenu.initial_meta_boxes();wpNavMenu.drag_and_drop();a("#update-nav-menu .deletion").click(function(){if(confirm(navMenuL10n.warnDelete)){return true}else{return false}});a("#update-nav-menu").submit(function(){wpNavMenu.update_post_data()});a("#create-menu-name").keypress(function(b){if(13==b.keyCode){a("#create-menu-button").click();return false}});a("#custom-menu-item-url, #custom-menu-item-name").keypress(function(b){if(13==b.keyCode){a("#add-custom-links a.button").click();return false}}).focus(function(){if(a(this).val()==a(this).attr("defaultValue")&&a(this).attr("id")!="custom-menu-item-url"){a(this).val("")}}).blur(function(){if(a(this).val()==""){a(this).val(a(this).attr("defaultValue"))}});a("#create-menu-name").focus(function(){if(a(this).val()==a(this).attr("defaultValue")){a(this).val("")}}).blur(function(){if(a(this).val()==""){a(this).val(a(this).attr("defaultValue"))}});a(".if-js-closed").removeClass("if-js-closed").addClass("closed");postboxes.add_postbox_toggles("nav-menus");a(".quick-search").click(function(){a(this).attr("value","")});a(".quick-search-submit").click(function(){a(this).siblings(".quick-search").search()});a("#menu-container .item-edit").click(function(){wpNavMenu.edit_menu_item(a(this).attr("value"))});a("#menu-container .item-delete").click(function(){wpNavMenu.remove_menu_item(a(this).attr("value"))});a("#update-menu-item").click(function(){wpNavMenu.update_menu_item();tb_remove()});a("#cancel-save").click(function(){tb_remove()});a(".show-all").click(function(b){a(b.currentTarget).parent().parent().siblings(".list-wrap").css("display","block");a(b.currentTarget).parent().parent().siblings(".list-wrap").find("li").css("display","block");a(b.currentTarget).hide();a(b.currentTarget).siblings(".hide-all").show()});a(".hide-all").click(function(b){a(b.currentTarget).parent().parent().siblings(".list-wrap").css("display","none");a(b.currentTarget).parent().parent().siblings(".list-wrap").find("li").css("display","none");a(b.currentTarget).hide();a(b.currentTarget).siblings(".show-all").show()});a(".add-to-menu").click(function(b){wpNavMenu.add_checked_items_to_menu(b.currentTarget)});a("#add-custom-links .add-to-menu a").click(function(b){if(a("#custom-menu-item-url").val()==a("#custom-menu-item-url").attr("defaultValue")){return}wpNavMenu.add_custom_link(a("#custom-menu-item-name").val(),a("#custom-menu-item-url").val());a("#custom-menu-item-name").val(a("#custom-menu-item-name").attr("defaultValue"));a("#custom-menu-item-url").val(a("#custom-menu-item-url").attr("defaultValue")).focus()})},add_custom_link:function(c,b){var d={action:"save-custom-link",link_name:c,link_url:b};a.post(ajaxurl,d,function(e){if("-1"==e){return}wpNavMenu.add_to_menu(e,e,"custom","custom",navMenuL10n.custom,0,c,b,"","","_self","","")},"json")},initial_meta_boxes:function(){var c=a("#hidden-metaboxes").val().split(",");if(""!=c){for(var b=0;b<c.length;b++){a("#"+c[b]).attr("style","display: none;");a("#"+c[b]+"-hide").attr("checked",false)}}},drag_and_drop:function(){a(".menu li").each(function(){if(!a(this).children(".dropzone").attr("class")){a(this).prepend('<div class="dropzone"></div>')}});a(".menu li").draggable({handle:" > dl",opacity:0.8,addClasses:false,helper:"clone",zIndex:100});a(".menu li dl, .menu li .dropzone").droppable({accept:".menu li",tolerance:"pointer",drop:function(g,f){var b=a(this).parent();var h=!a(this).hasClass("dropzone");if(h&&b.children("ul").length==0){b.append('<ul class="sub-menu" />')}if(h){b.children("ul").append(f.draggable)}else{b.before(f.draggable)}b.find("dl,.dropzone").css({backgroundColor:"",borderColor:""});var d=f.draggable.attr("value");var c=b.attr("value");b.find("#menu-"+d).find("#parent"+d).val(c);a(this).parent().find("dt").removeAttr("style");a(this).parent().find("div:first").removeAttr("style")},over:function(b){if(a(this).attr("class")=="dropzone ui-droppable"){a(this).parent().find("div:first").css({background:"#f5f5f5",border:"1px dashed #bbb",margin:"10px 0px",height:"40px"})}else{if(a(this).attr("class")=="ui-droppable"){a(this).parent().find("dt:first").css("background","#d8d8d8")}else{}}},out:function(){a(this).parent().find("dt").removeAttr("style");a(this).parent().find("div:first").removeAttr("style");a(this).filter(".dropzone").css({borderColor:""})}})},update_post_data:function(){var b=0;a(".menu li").each(function(){b=b+1;var d=a(this).attr("value");var e=a(this).children("input[name=menu-item-db-id[]]").val();a(this).attr("value",b);a(this).children("input[name=menu-item-position[]]").attr("value",b);var c=a(this).parent(".sub-menu").siblings("input[name=menu-item-object-id[]]").val();if(undefined==c){c=0}a(this).children("input[name=menu-item-parent-id[]]").attr("value",c);a("#li-count").attr("value",b)})},autocomplete:function(b){a("#add-"+b+" .quick-search").autocomplete(a("#add-"+b+" .autocomplete").val().split("|"));a("#add-"+b+" .quick-search").result(function(c,e,d){a("#add-"+b+" .list-wrap").css("display","block");a("#add-"+b+" .list-wrap li:contains('"+e+"')").css("display","block");a("#add-"+b+" .show-all").hide();a("#add-"+b+" .hide-all").show()})},edit_menu_item:function(b){var g=a("#menu-item-"+b).children("input[name=menu-item-type[]]").val();var c=a("#menu-item-"+b).children("input[name=menu-item-title[]]").val();var h=a("#menu-item-"+b).children("input[name=menu-item-url[]]").val();var d=a("#menu-item-"+b).children("input[name=menu-item-attr-title[]]").val();var e=a("#menu-item-"+b).children("input[name=menu-item-target[]]").val();var i=a("#menu-item-"+b).children("input[name=menu-item-description[]]").val();var f=a("#menu-item-"+b).children("input[name=menu-item-classes[]]").val();var j=a("#menu-item-"+b).children("input[name=menu-item-xfn[]]").val();if("custom"!=g){a("#edit-menu-item-url").attr("disabled","disabled")}a("#edit-menu-item-id").val(b);a("#edit-menu-item-title").val(c);a("#edit-menu-item-url").val(h);a("#edit-menu-item-attr-title").val(d);a("#edit-menu-item-target").val(e);a("#edit-menu-item-target option[value='"+e+"']").attr("selected","selected");a("#edit-menu-item-description").val(i);a("#edit-menu-item-classes").val(f);a("#edit-menu-item-xfn").val(j)},update_menu_item:function(){var i=a("#edit-menu-item-id").val();var g=a("#edit-menu-item-title").val();var c=a("#edit-menu-item-url").val();var h=a("#edit-menu-item-attr-title").val();var e=a("#edit-menu-item-target").val();var d=a("#edit-menu-item-description").val();var b=a("#edit-menu-item-classes").val();var f=a("#edit-menu-item-xfn").val();a(".menu #menu-item-"+i).find("span.item-title:first").html(g);a("#menu-item-"+i).children("input[name=menu-item-title[]]").val(g);a("#menu-item-"+i).children("input[name=menu-item-url[]]").val(c);a("#menu-item-"+i).children("input[name=menu-item-attr-title[]]").val(h);a("#menu-item-"+i).children("input[name=menu-item-target[]]").val(e);a("#menu-item-"+i).children("input[name=menu-item-description[]]").val(d);a("#menu-item-"+i).children("input[name=menu-item-classes[]]").val(b);a("#menu-item-"+i).children("input[name=menu-item-xfn[]]").val(f);a(".menu #menu-item-"+i+" dt:first").animate({backgroundColor:"#FFFF33"},{duration:"normal",complete:function(){a(this).css("backgroundColor","")}})},remove_menu_item:function(c){var b=a("#menu-item-"+c);if(b){a(b).find("dt").each(function(){a(this).animate({backgroundColor:"#FF3333"},{duration:"normal",complete:function(){a(this).parent().parent().remove()}})})}},add_to_menu:function(b,m,c,h,p,n,d,o,j,g,f,e,k){var l=a(".menu li").length+1;var i=wpNavMenu.get_hidden_inputs(l,b,m,c,h,n,d,o,j,g,f,e,k);a(".menu").append('<li id="menu-item-'+l+'" value="'+l+'"><div class="dropzone ui-droppable"></div><dl class="ui-droppable"><dt><span class="item-title">'+d+'</span><span class="item-controls"><span class="item-type">'+p+'</span><a class="item-edit thickbox" id="edit'+l+'" value="'+l+'" onclick="wpNavMenu.edit_menu_item('+l+');" title="'+navMenuL10n.thickbox+'" href="#TB_inline?height=540&width=300&inlineId=menu-item-settings">'+navMenuL10n.edit+'</a> | <a class="item-delete" id="delete'+l+'" value="'+l+'" onclick="wpNavMenu.remove_menu_item('+l+');">Delete</a></span></dt></dl>'+i+"</li>");a(".menu #menu-item-"+l+" dt:first").animate({backgroundColor:"#FFFF33"},{duration:"normal",complete:function(){a(this).css("backgroundColor","")}});wpNavMenu.drag_and_drop();tb_init("a.thickbox, area.thickbox, input.thickbox")},add_checked_items_to_menu:function(c){var b=a(c).parent().siblings(".list-wrap").find(":checked");if(0==b.length){return false}a(b).each(function(){var j=a(this).parent().siblings(".menu-item-type").val();if("custom"==j){var g=a(this).parent().siblings(".menu-item-attr-title").val();var h=a(this).parent().siblings(".menu-item-target").val();var i=a(this).parent().siblings(".menu-item-classes").val();var l=a(this).parent().siblings(".menu-item-xfn").val()}else{var g="";var h="_self";var i="";var l=""}var d=a(this).parent().siblings(".menu-item-db-id").val();var m=a(this).parent().siblings(".menu-item-object-id").val();var e=a(this).parent().siblings(".menu-item-object").val();var p=a(this).parent().siblings(".menu-item-append").val();var n=a(this).parent().siblings(".menu-item-parent-id").val();var f=a(this).parent().siblings(".menu-item-title").val();var o=a(this).parent().siblings(".menu-item-url").val();var k=a(this).parent().siblings(".menu-item-description").val();if(undefined==k){k=""}if(undefined==g){g=""}wpNavMenu.add_to_menu(d,m,e,j,p,n,f,o,k,g,h,i,l);a(this).attr("checked",false)})},get_hidden_inputs:function(l,b,m,c,h,n,d,o,j,g,f,e,k){var i="";i+='<input type="hidden" name="menu-item-db-id[]" value="'+b+'" />';i+='<input type="hidden" name="menu-item-object-id[]" value="'+m+'" />';i+='<input type="hidden" name="menu-item-object[]" value="'+c+'" />';i+='<input type="hidden" name="menu-item-type[]" value="'+h+'" />';i+='<input type="hidden" name="menu-item-parent-id[]" value="'+n+'" />';i+='<input type="hidden" name="menu-item-position[]" value="'+l+'" />';i+='<input type="hidden" name="menu-item-title[]" value="'+d+'" />';i+='<input type="hidden" name="menu-item-attr-title[]" value="'+g+'" />';i+='<input type="hidden" name="menu-item-url[]" value="'+o+'" />';i+='<input type="hidden" name="menu-item-target[]" value="'+f+'" />';i+='<input type="hidden" name="menu-item-description[]" value="'+j+'" />';i+='<input type="hidden" name="menu-item-classes[]" value="'+e+'" />';i+='<input type="hidden" name="menu-item-xfn[]" value="'+k+'" />';return i}};a(document).ready(function(b){wpNavMenu.init()})})(jQuery);