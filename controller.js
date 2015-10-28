(function(window){
'use strict';

capturn.controller = {

	defaultview: {
	 root: { state: open, position: {}, size: {} },
	 a: { state: close, position: {}, size: {} },
	 b: { state: open, position: {}, size: {}  },
	 c: { state: null, position: {}, size: {} }
	},

	//changes made to defaultview reflected in activeview
	activeview: {},

	renderview: function(view, svg){
		// take view and render to svg document
		var orderednodes = ["a","b","c"];
		var node;

		for (var i = 0; i < orderednodes.length; i++) {

			node = capturn.model.graphics.create(view[orderednodes[i]]);
		};
		document.getElementById(svg).appendChild(node.title);
		document.getElementById(svg).appendChild(node.border);
		document.getElementById(svg).appendChild(node.stateicon);
	}
}

//load the defaultview

window.capturn.controller = capturn.controller;

capturn.controller.renderview(capturn.controller.defaultview, 'svg');
})(window);