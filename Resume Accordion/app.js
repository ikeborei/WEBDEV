$(document).ready(function(){

	var toggler = $(".toggler").get();
	var tracker = -1;
	
	$(".toggler").click(function(){

		var index = $("div.toggler").index(this);
		var i = 0;

		while(i < toggler.length)
		{
			if(i === index && index === tracker)
			{
				$(toggler[i]).removeClass("rotate");
				$(toggler[i]).addClass("rotated");
			}			
			else if(i === index && index !== tracker)
			{
				$(toggler[i]).removeClass("rotated");
				$(toggler[i]).addClass("rotate");
			}
			else
			{
				$(toggler[i]).removeClass("rotate");
				$(toggler[i]).addClass("rotated");				
			}	
			i++;
		}	
		
		if(tracker === index)
		{
			$(toggler[index]).siblings("ul").toggle();
			tracker = -1;			
		}
		else if( tracker !== index && tracker !== -1)
		{
			$(toggler[tracker]).siblings("ul").toggle();
			$(toggler[index]).siblings("ul").toggle();			
			tracker = index;
		}	
		else //if( tracker !== index)
		{
			$(toggler[index]).siblings("ul").toggle();
			tracker = index;
		}
	});
});