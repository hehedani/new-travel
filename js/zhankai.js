
var h = new Array(0,380,25,25,25,25);
var tf = new Array(false,true,false,false,false, false);
var minheight = 100;
var maxheight = 280;
function fn(likey,tag){
	if (tf[tag]){
		if (h[tag]>=minheight){
			document.getElementById("main"+tag).style.height = h[tag] + "px";
			setTimeout(function(){fn(likey,tag)},1);
			h[tag] -= 10;
		} else {
			likey.innerHTML = "展开全文";
			tf[tag] = !tf[tag];
			h[tag] += 10;
		}
	} else {
		if (h[tag]<=maxheight){
			document.getElementById("main"+tag).style.height = h[tag] + "px";
			setTimeout(function(){fn(likey,tag)},1);
			h[tag] += 10;
		} else {
			likey.innerHTML = "折叠";
			tf[tag] = !tf[tag];
			h[tag] -= 10;
		}
	}
}
				