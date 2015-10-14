'use strict';

var mvgd = mvgd || {};

//todo: load from db/open socket to db
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
	},

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

mvgd.node = {

	create: function(nodeproperties){

			/*			
			nodeproperties = 
			{
				node: "a",
				state: "close"
				topleft: {x: "50", y: "50"},
				size: {x: "200", y: "350"}
			}

			    The simple business process contains 3 components:
				1. title (SVG:text) 2. border (SVG:rect) 3. stateicon (SVG:path)

			*/

			//1. create individual SVG DOM elements

			var ns = 'http://www.w3.org/2000/svg';

			var border = document.createElementNS(ns, 'rect');
			border.setAttributeNS(null,'id', nodeproperties.node + "-border");
			border.setAttributeNS(null,'x','10');
			border.setAttributeNS(null,'y','10');
			border.setAttributeNS(null,'width','100');
			border.setAttributeNS(null,'height','100');
			border.setAttributeNS(null,'fill','none');
			border.setAttributeNS(null,'stroke','#000');
			border.setAttributeNS(null,'stroke-width','2');
			border.setAttributeNS(null,'rx','7');


			var name = document.createElementNS(ns, 'text');
			name.setAttributeNS(null,'id', nodeproperties.node + "-title");
			name.setAttributeNS(null,'x', '20');
			name.setAttributeNS(null,'y', '45');
			name.setAttributeNS(null,'fill', '#000');
			name.setAttributeNS(null,'font-size', '40px');
			name.textContent = 'a';

			var stateicon = document.createElementNS(ns, 'text');
			stateicon.setAttributeNS(null,'id', nodeproperties.node + "-stateicon");
			stateicon.setAttributeNS(null,'x', '40');
			stateicon.setAttributeNS(null,'y', '100');
			stateicon.setAttributeNS(null,'fill', '#000');
			stateicon.setAttributeNS(null,'font-size', '50px');
			stateicon.setAttributeNS(null,'font-weight', '800');
			stateicon.setAttributeNS(null,'fill', 'lightgray');
			stateicon.setAttributeNS(null,'state', nodeproperties.state);
			stateicon.textContent = '+';


			stateicon.onclick = function(){
				//todo remove magic numbers, GUIDs to reference
				// nodes instead of node name
				var state = this.getAttributeNS(null, 'state');
				var id = this.id.split('-')[0];

				if (state==='open'){

					//stateicon
					this.setAttributeNS(null,'state','close');
					this.textContent = '+';
					this.setAttributeNS(null,'x', '40');
					this.setAttributeNS(null,'y', '100');
					//border
					document.getElementById(id+'-border')
						.setAttributeNS(null,'width','100');
					document.getElementById(id+'-border')
						.setAttributeNS(null,'height','100');

					//todo: update activeview

				}
				else {
					//stateicon
					this.setAttributeNS(null,'state','open');
					this.textContent = '-';
					this.setAttributeNS(null,'x', '175');
					this.setAttributeNS(null,'y', '300');
					//border
					document.getElementById(id+'-border')
						.setAttributeNS(null,'width','400');
					document.getElementById(id+'-border')
						.setAttributeNS(null,'height','300');

				}

				console.log("clicked state sign");

			}

			stateicon.onmouseover = function(){
				console.log("onmouseover state sign");
				this.setAttributeNS(null,'fill', '#B2CCCC');
				this.setAttributeNS(null,'cursor', 'pointer');
			}

			stateicon.onmouseout = function(){
				console.log("onmouseout state sign");
				this.setAttributeNS(null,'fill', 'lightgray');
				this.setAttributeNS(null,'cursor', 'auto');

			}

			border.ondrag = function(){
				console.log('drag');
			}
            return {title: name, border: border, stateicon: stateicon};

	}


}