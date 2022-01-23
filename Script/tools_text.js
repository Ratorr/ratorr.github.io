var tools_text=[
"pi_calc",
"body_height_calc"
];
var tools_intro=[
"Nothing is imposiible",
"Your Height By Your Parents!"
];
var show_box_src;
function find()
{  
	document.getElementById("shower").innerHTML="";
	var total_result=0;
	for(var a=0;a<tools_text.length;a++){
		if(tools_text[a].indexOf(document.getElementById("search").value)!=-1){
			document.getElementById("shower").innerHTML+=
			"<strong>"+tools_text[a]+"</strong></br><a id='"+tools_text[a]+"' onclick='iframe_show();'>"+tools_intro[a]+"</a></br>"; 
			total_result++;
		}
		if(tools_text.length-a==1){}
	}
}
function iframe_show(){
	show_box_src=event.target.id;
	document.getElementById("show_box").setAttribute("src","tools/"+show_box_src+".html");
}
