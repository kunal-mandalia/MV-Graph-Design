(function(window){
'use strict';

capturn.controller = {
	
	defaultview: 
	[
		{ 
			node: "a",
			state: "close",
			topleft: {x:"50",y:"50"},
			size: {x: "200", y: "350"}
		}
	],

	//changes made to defaultview reflected in activeview
	activeview: [],

	renderview: function(view, svg){
		// take view and render to svg document

		for (var i = 0; i < view.length; i++) {

			var node = capturn.model.graphics.create(view[i]);
			document.getElementById(svg).appendChild(node.title);
			document.getElementById(svg).appendChild(node.border);
			document.getElementById(svg).appendChild(node.stateicon);

		};
	}
}

//load the defaultview

window.capturn.controller = capturn.controller;

capturn.controller.renderview(capturn.controller.defaultview, 'svg');
})(window);