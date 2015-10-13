'use strict';

var mvgd = mvgd || {};

mvgd.data = {
 	json: 
 			{
			  a: { layer: ["b", "c"], relationships: []},
			  b: { layer: ["d","e"], relationships: ["c"]},
			  c: { layer: [], relationships: []},
			  d: { layer: [], relationships: ["e"]},
			  e: { layer: [], relationships: []},
			},

	commit: function(change){
		//commit change to DB
	}
}

mvgd.node = {

	add: function(newnode, newlayer, newrelationships){

		mvgd.data.json[newnode] = {layer: newlayer, relationships: newrelationships};
	},

	delete: function(node){
		delete mvgd.data.json[node];
	},

	update: function(existingnode, newlayer, newrelationships){
		mvgd.data.json[existingnode] = {layer: newlayer, relationships: newrelationships};
	}

}