var marginY = 0;
var destination = 0;
var speed =5;


function initScroll(elementId){
	destination = document.getElementById(elementId).offsetTop;
	consolge.log(destination);
}