$(document).ready(function(){
	var navbarLinks= $(".navbar").find("a");
	for (var i=0; i<=navbarLinks.length; i++){
		if (navbarLinks[i].href === location.href){
			$(navbarLinks[i]).addClass("navbar__link--current");
		}
		else {
			$(navbarLinks[i]).removeClass("navbar__link--current");
		}
	}
});