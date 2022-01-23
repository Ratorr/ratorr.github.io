var tools_text=[];
	var i=0;
document.getElementById("show_box").setAttribute("src","tools/"+i+".html");
if(i<4){
window.addEventListener('message',function(e){tools_text.push(e.data.msg);document.getElementById("show_box").setAttribute("src","tools/"+i+1+".html");i++;});
}
alert(tools_text.length);
//document.getElementById("show_box").setAttribute("src","fu");
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
			"<h3>"+tools_text[a]+"</h3>\n<a id='"+a+"' onclick='iframe_show();'>"+tools_intro[a]+"</a>"; 
			total_result++;
		}
		if(tools_text.length-a==1){}
	}
}
function iframe_show(){
	var data;
	show_box_src=event.target.id;
	document.getElementById("show_box").setAttribute("src","tools/"+show_box_src+".html");
}
