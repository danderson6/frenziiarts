$(function() {
	$(window).load(SetElementHeight("nav"));
	$(window).load(SmallLogoPosition());
	$(window).resize(function(){
		$("nav").css("height", "");
		SetElementHeight("nav");
		SmallLogoPosition();
	});
	/*Nav Show/hide functions
	$("#nav-icon").click(function(){
			setTimeout(ShowSociaIcons,1000);
			$("nav").css("width","200px");
			pressed =true;
			//$(this).hide();
			//$("#close-icon").show(1000);
		});
	;
	
	$("#close-icon").click(function(){
			HideSociaIcons();
			$("nav").css("width","0");
			pressed =false;
			$(this).hide();
			$("#nav-icon").show(400);
	})*/
	  
  $( "#nav-icon" ).click(function() {
  
  
var nav = $("nav");
var navWidth = nav.width();
    
    if (navWidth < 10) {
		$("nav").css("width","200px");
	//TweenMax.to(nav, 1, {"width":200});
    } else {
		$("nav").css("width","0");
      //TweenMax.to(nav, 1, {"width":0});
    };
    
  });
  
  
  
  // menu icon jquery
  
  
  // when whole menu div is clicked
  
  
  $("#nav-icon").click( function() {
    // if the menu height is not full, transform icon
    var nav = $("nav");
	var navWidth= nav.width();
	if (navWidth < 10 ) {
			$("#a").addClass("rotate-down");
			$("#nav-icon").removeClass("shift-icon");
			$("#b").addClass("disappear");
			$("#c").addClass("rotate-up");
			setTimeout(ShowNavElements,1000);
		} 
	else{
		// closes menu
			HideNavElements();
			$("#a").removeClass("rotate-down");
			$("#nav-icon").addClass("shift-icon");
			$("#b").removeClass("disappear");
			$("#c").removeClass("rotate-up");
		};
	});
  
  
  

});

function HideNavElements(){
	$(".social-icons").fadeOut(0);
	$("#menu-footer").fadeOut(0);
};

function ShowNavElements(){
	$(".social-icons").fadeIn(1000);
	$("#menu-footer").fadeIn(1000);
};
function SetElementHeight(element){
		var newHeight = $(document).height() +"px";
				$(element).css("height",newHeight);
	};
	
	function SmallLogoPosition(){
		var newHeight = $(window ).height();
		var logoHeight = $("#DA-logo-small").height();
		var copytextHeight = $("#menu-footer").height();
		$("#DA-logo-small").css("top",newHeight - logoHeight- 40 +"px");
		$("#menu-footer").css("top",newHeight - copytextHeight -5 +"px");
	};
	
	
function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=1,scrollbars=1,location=1,statusbar=1,menubar=1,resizable=1,width=500,height=600,left = 262,top = 134');");
}
// End -->

var  pressed = false;