var CrabBox = new Class({
	initialize: function(classname) {
		var as = $$(classname);
		as.each(function(a) {
			a.addEvent('load', this.showBox)
		});
	}
});