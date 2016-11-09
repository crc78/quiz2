// write jQuery or vanilla javascript to do the following:
//  - loop through the list itmes in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)
var expandAccordian = true;

var ol = document.getElementById("theOl");
var li = ol.getElementsByTagName("li");
for(i=0;i<li.length;i++){
  li[i].innerHTML="This is item number " + (i + 1);
  li[i].style.color = "red";
};

function fading(){
  $("body").fadeOut(function(){
    document.getElementsByTagName("body")[0].innerHTML = "BYE";
  });
  $("body").fadeIn();
};

function happyFunction(){
  alert("Hi Bowytz.\nI own this quiz now.");
  var dumbArray = document.getElementsByClassName("cool");
  for(i=0;i<dumbArray.length;i++){
    dumbArray[i].innerHTML = dumbArray[i].innerHTML + "	&copy;Caitlin Campbell 1995";
  }
  //document.getElementById("ownership").innerHTML = "	&copy;Caitlin Campbell 1995";
};

function openAccordian(){
  theAccordian = document.getElementsByClassName("accordian")[0];
  if(this.expandAccordian){
    theAccordian.style.height = "100px";
    theAccordian.innerHTML = "sup?";
    this.expandAccordian = false;
  }
  else{
    theAccordian.style.height = "10px";
    theAccordian.innerHTML = "";
    this.expandAccordian = true;
  }
  
};

(function($){
	$('.links li a').on('click', function(e) {
		e.preventDefault()
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!");
})(jQuery);
