//toggle full story1
$(document).ready(function() 
{ 

$("#shbtn1").click(function() 
{ 

$("#d1").toggle(); 

}); 

}); 

//toggle full story2
$(document).ready(function() 
{ 

$("#shbtn2").click(function() 
{ 

$("#d2").toggle(); 

}); 

});

//toggle full story3
$(document).ready(function() 
{ 

$("#shbtn3").click(function() 
{ 

$("#d3").toggle(); 

}); 

});

//toggle full story4
$(document).ready(function() 
{ 

$("#shbtn4").click(function() 
{ 

$("#d4").toggle(); 

}); 

});

/*-------CODE BREAK------*/

//Lazy loading img
$(document).ready (function(){
$("img").attr("loading", "lazy");
});

$(document).ready (function(){
$("video").attr("loading", "lazy");
});

$(document).ready (function(){
$("audio").attr("loading", "lazy");
});

/*open help dialog*/
$(function() {
            $( "#dialog-7" ).dialog({
               autoOpen: false, 
               resize: function( event, ui ) {
                  $( this ).dialog( "option", "title",
	         ui.size.height +- " x " +- ui.size.width );
               }
            });
            $( "#opener-6" ).click(function() {
               $( "#dialog-7" ).dialog( "open" );
            });
         });
/*end open help dialog*/

/* auto open dialog function*/
var myTimeout = setTimeout(function() {
         
         $(function() {
            $( "#dialog-6" ).dialog({
               autoOpen: true, 
               resize: function( event, ui ) {
                  $( this ).dialog( "option", "title",
	         ui.size.height +- " x " +- ui.size.width );
               }
            });
            $( "#opener-5" ).click(function() {
               $( "#dialog-6" ).dialog( "open" );
            });
         });
         
      }, 50000);
/*end  auto open dialog function*/

/*changing on text area focus*/
var area = document.getElementById("area");
      
   area.addEventListener("focus", function() {
         area.style.background = "teal";
      });
      
    area.addEventListener("blur", function() {
          area.style.background = "gray";
      });
/*end changing on text area focus*/

//functions
function linkWikipedia(){
open("https://salmandascript.github.io/LinkWikipedia-/");
}

function seer(){
open("https://salmandascript.github.io/Seer/");
}

function africaOnline(){
open("https://salmandascript.github.io/AfricaOnline/");
}

function royalFM(){
open("https://salmandascript.github.io/RoyalFM/");
}

function programming(){
open("https://salmandascript.github.io/SoftwareService/");
}

function salmandaMusiq(){
open("https://salmandascript.github.io/Salmandamusiq/");
}

function newsChannel(){
open("https://salmandascript.github.io/NewsChannel/");
}

function movieChannel(){
open("https://salmandascript.github.io/MovieChannel/");
}

function contact(){
open("https://salmandascript.github.io/Contact/");
}

function feedBack(){
var passkey = 3443
  passkey=prompt("Enter the passkey  provided by the administrator to proceed. to this site. The content  is highly classified.");

if(passkey==3443){
 open("file:///storage/emulated/0/Modules/Photos/photos.html");
 
 return false;
}

else if(passkey==""){
	open("file:///storage/emulated/0/Modules/Passkey/passkey.html");
	
	return false;
}
}

function link(){
	alert("This action opens an external source.");
}

function counter(){
	alert("The file will be downloaded now.");
}

$(document).ready(function() 
{ 
$("#myModal").modal("hide"); 
});    

/*-------CODE BREAK------*/

/*function to change button behaviour main menu */
function salmanda1(){
document.getElementById ("demo1"). style. color ="white";

document.getElementById ("demo1"). style. fontweight ="bold";

document.getElementById
 ("demo1"). style. fontsize ="30%";

document.getElementById
 ("demo1"). style. background ="maroon";
}

function salmanda3(){
document.getElementById ("demo3"). style. color ="white";

document.getElementById ("demo3"). style. fontweight ="bold";

document.getElementById
 ("demo3"). style. fontsize ="30%";

document.getElementById
 ("demo3"). style. background ="maroon";
}


function salmanda4(){
document.getElementById ("demo4"). style. color ="white";

document.getElementById ("demo4"). style. fontweight ="bold";

document.getElementById
 ("demo4"). style. fontsize ="30%";

document.getElementById
 ("demo4"). style. background ="maroon";
}


function salmanda5(){
document.getElementById ("demo5"). style. color ="white";

document.getElementById ("demo5"). style. fontweight ="bold";

document.getElementById
 ("demo5"). style. fontsize ="30%";

document.getElementById
 ("demo5"). style. background ="maroon";
}


function salmanda6(){
document.getElementById ("demo6"). style. color ="white";

document.getElementById ("demo6"). style. fontweight ="bold";

document.getElementById
 ("demo6"). style. fontsize ="30%";

document.getElementById
 ("demo6"). style. background ="maroon";
}

function salmanda7(){
document.getElementById ("demo7"). style. color ="white";

document.getElementById ("demo7"). style. fontweight ="bold";

document.getElementById
 ("demo7"). style. fontsize ="30%";

document.getElementById
 ("demo7"). style. background ="maroon";
}

function salmanda8(){
document.getElementById ("demo8"). style. color ="white";

document.getElementById ("demo8"). style. fontweight ="bold";

document.getElementById
 ("demo8"). style. fontsize ="30%";

document.getElementById
 ("demo8"). style. background ="maroon";
}


function salmanda9(){
document.getElementById ("demo9"). style. color ="white";

document.getElementById ("demo9"). style. fontweight ="bold";

document.getElementById
 ("demo9"). style. fontsize ="30%";

document.getElementById
 ("demo9"). style. background ="maroon";
}


function salmanda10(){
document.getElementById ("demo10"). style. color ="white";

document.getElementById ("demo10"). style. fontweight ="bold";

document.getElementById
 ("demo10"). style. fontsize ="30%";

document.getElementById
 ("demo10"). style. background ="maroon";
}


function salmanda11(){
document.getElementById ("demo11"). style. color ="white";

document.getElementById ("demo11"). style. fontweight ="bold";

document.getElementById
 ("demo11"). style. fontsize ="30%";

document.getElementById
 ("demo11"). style. background ="maroon";
 }

function salmanda12(){
document.getElementById ("demo12"). style. color ="white";

document.getElementById ("demo12"). style. fontweight ="bold";

document.getElementById
 ("demo12"). style. fontsize ="30%";

document.getElementById
 ("demo12"). style. background ="maroon";
}

function salmanda13(){
document.getElementById ("demo13"). style. color ="white";

document.getElementById ("demo13"). style. fontweight ="bold";

document.getElementById
 ("demo13"). style. fontsize ="30%";

document.getElementById
 ("demo13"). style. background ="maroon";
}

function salmanda14(){
document.getElementById ("demo14"). style. color ="white";

document.getElementById ("demo14"). style. fontweight ="bold";

document.getElementById
 ("demo14"). style. fontsize ="30%";

document.getElementById
 ("demo14"). style. background ="maroon";
}

function salmanda15(){
document.getElementById ("demo15"). style. color ="white";

document.getElementById ("demo15"). style. fontweight ="bold";

document.getElementById
 ("demo15"). style. fontsize ="30%";

document.getElementById
 ("demo15"). style. background ="maroon";
}