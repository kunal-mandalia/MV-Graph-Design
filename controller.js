'use strict';

mvgd.controller = {
	
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

			var node = mvgd.node.create(view[i]);
			document.getElementById(svg).appendChild(node.title);
			document.getElementById(svg).appendChild(node.border);
			document.getElementById(svg).appendChild(node.stateicon);

		};
	}
}

//load the defaultview
mvgd.controller.renderview(mvgd.controller.defaultview, 'svg');
