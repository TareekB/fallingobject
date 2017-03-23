
/*global $*/

$(document).ready(function () {

var $pic = $("#pic"); 

//$pic.click(function(){
   //Your code goes here
    //$pic.css("top", $pic.offset().top + 20);
//});
    
    var intervalId = setInterval(function () {
        $pic.css("top", $pic.offset().top + 1);
        
        
    }, 1);
});