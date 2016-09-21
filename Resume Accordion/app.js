$(document).ready(function(){
	var rotated = false;

	$(".open").click(function(){
		
		$(this).removeClass("rotated");
		$(this).removeClass("rotate");

		if(rotated == true)
		{
			$(this).addClass("rotated");
			rotated = false;
		}
		else if(rotated == false)
		{
			$(this).addClass("rotate");
			rotated = true;
		}
		// $(this).siblings("ul").slideToggle(700);
		// console.log(rotated);
		// $(this).toggleClass("rotate");				
	});

});
