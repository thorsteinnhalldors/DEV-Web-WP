$(function(){$("#dialog-confirm").dialog({autoOpen:false,resizable:false,height:210,width:400,modal:true,buttons:{Save:function(){titletosave=$("#edittitle").attr("value");linktosave=$("#editlink").attr("value");anchortitletosave=$("#editanchortitle").attr("value");newwindowtosave=$("#editnewwindow").attr("value");desctosave=$("#editdescription").attr("value");$("#title"+$(this).dialog("option","itemID")).attr("value",titletosave);$("#linkurl"+$(this).dialog("option","itemID")).attr("value",linktosave);$("#anchortitle"+$(this).dialog("option","itemID")).attr("value",anchortitletosave);$("#newwindow"+$(this).dialog("option","itemID")).attr("value",newwindowtosave);$("#description"+$(this).dialog("option","itemID")).attr("value",desctosave);$("#menu-"+$(this).dialog("option","itemID")+" > dl > dt > span.title").text(titletosave);$("#view"+ +$(this).dialog("option","itemID")).attr("href",linktosave);$(this).dialog("close")},Cancel:function(){$(this).dialog("close")}}});$("#message").animate({opacity:1},2000).fadeOut(300,function(){$(this).remove()});$("#custom-nav li").prepend('<div class="dropzone"></div>');$("#custom-nav li").draggable({handle:" > dl",opacity:0.8,addClasses:false,helper:"clone",zIndex:100});$("#custom-nav dl, #custom-nav .dropzone").droppable({accept:"#custom-nav li",tolerance:"pointer",drop:function(f,d){var a=$(this).parent();var g=!$(this).hasClass("dropzone");if(g&&a.children("ul").length==0){a.append('<ul id="sub-menu" />')}if(g){a.children("ul").append(d.draggable)}else{a.before(d.draggable)}a.find("dl,.dropzone").css({backgroundColor:"",borderColor:""});var c=d.draggable.attr("value");var b=a.attr("value");a.find("#menu-"+c).find("#parent"+c).val(b);$(this).parent().find("dt").removeAttr("style");$(this).parent().find("div:first").removeAttr("style")},over:function(){if($(this).attr("class")=="dropzone ui-droppable"){$(this).parent().find("div:first").css("background","none").css("height","50px")}else{if($(this).attr("class")=="ui-droppable"){$(this).parent().find("dt:first").css("background","#d8d8d8")}else{}}var a=$(this).parent().attr("id")},out:function(){$(this).parent().find("dt").removeAttr("style");$(this).parent().find("div:first").removeAttr("style");$(this).filter(".dropzone").css({borderColor:""})},deactivate:function(){}});$("#save_top").click(function(){updatepostdata()});$("#save_bottom").click(function(){updatepostdata()})});