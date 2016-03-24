/* Created in CSE HTML Validator */

//Take the URL in the Window
var url=window.location.href;

//Split the URL and the important information is in the 2nd half
var info=url.split("?");

//Place name value pairs into an array
var nameValuePairs=info[1].split("&");
object=new Object();
for(var i=0;i<nameValuePairs.length;i++){
	var map=nameValuePairs[i].toString().split("=");
	var name =map[0];
	var value=map[1];
	object[name]=value;
}

//Output the elements in the object
var str="";
for(var name in object){
str+=("<h2>"+name+"="+object[name]+"</h2>");
}
document.write(str);