'use strict';

mvgd.controller = {
	
	defaultview: 
	[
		{ 
			node: "a",
			state: "open"
		},
		{
			node: "b",
			state: "open"
		}
	],

	//changes made to defaultview reflected in activeview
	activeview: [],

	renderview: function(view, svg){
		// take view and render to svg document
	}
}

