/* Import plugin specific language pack */
tinyMCE.importPluginLanguagePack('autosave', 'en,sv,cs,he,no,hu,de,da,ru,ru_KOI8-R,ru_UTF-8,fi,cy,es,is,pl');

function TinyMCE_autosave_getInfo() {
	return {
		longname : 'Auto save',
		author : 'Moxiecode Systems',
		authorurl : 'http://tinymce.moxiecode.com',
		infourl : 'http://tinymce.moxiecode.com/tinymce/docs/plugin_autosave.html',
		version : tinyMCE.majorVersion + "." + tinyMCE.minorVersion
	};
};

function TinyMCE_autosave_beforeUnloadHandler() {
	var msg = tinyMCE.getLang("lang_autosave_unload_msg");

	var anyDirty = false;
	for (var n in tinyMCE.instances) {
		var inst = tinyMCE.instances[n];
		if (!tinyMCE.isInstance(inst))
			continue;

		if (inst.isDirty())
			return msg;
	}

	return;
}

window.onbeforeunload = TinyMCE_autosave_beforeUnloadHandler;
