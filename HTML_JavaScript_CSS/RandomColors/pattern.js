function pattern(){
	var top_pos = 25, left_pos = 25;
	var wid = 1000,  height = 1000;
	var colors = ["violet","indigo","blue","green","yellow","orange","red"];
	var thebody = document.getElementById("thebody");
	while(wid>50){
		var node = document.createElement("div");
		random = Math.floor(Math.random()*7);
		node.style.top = top_pos + "px";
		node.style.left = left_pos + "px";
		node.style.width = wid + "px";
		node.style.height = height + "px";
		node.style.background = colors[random];
		thebody.appendChild(node);
		top_pos += 10;
		left_pos += 10;
		wid -= 20;
		height -= 20;
	}
}