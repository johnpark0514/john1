$(document).ready(function() {
	$("#bars").click(function() {
		$("#popup").fadeToggle();
	});
	$(document).ready(function() {
	$("#about").click(function() {
		$("#popup1").fadeToggle();
	});
	$("#hover-me").hover(
		function() {
		$("#hover-me").text("Hover out");
	},
	function(){
		$("#hover-me").text("Hover in");
	}
   );
  
	
	
// Add a little popup menu underneath "About"
//when the mouse is hovered on top of it
//1. About us
//2. Careers
//3. Location
});