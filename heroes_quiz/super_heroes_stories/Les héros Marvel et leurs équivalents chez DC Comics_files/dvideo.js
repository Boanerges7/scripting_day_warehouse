$j = jQuery.noConflict();

var Dvideo = {};

Dvideo = {
	
	init: function() {
		
		if ($j(".video-container").size() > 0 || $j(".dvideo-container").size() > 0) {
			
			// autoplay cookie
			var autoplay = ("false" == HK.readCookie("autoplay") ? false : true);
			// hitv cookie
			var cap = decodeURIComponent(HK.readCookie("hitv")).split("::");
			
			var autoplayed = false;
			
			// loop containers
			$j(".dvideo-container").each(function() {
				// get video url
				var url = $j(this).data("url");
				var play;
				
				// autoplay cookie is true ? hitv cookie is not 1 ? first video in the DOM ? then play that shit
				if (true === autoplay) {
					play = ("yes" == $j(this).data("autoplay") ? true : false);
					if (true === autoplayed || "1" == cap[0]) {
						play = false;
					}
					autoplayed = true;
				}
				
				var width = 688;
				var height = 400;
				
				if ($j(window).width() <= 688) {
					width = $j(window).width() - 5;
					height = parseInt(width/1.72);
				}
				
				// init player
				var player = DM.player($j(this).attr("id"), {
					video: url, 
					width: width, 
					height: height, 
					params: {
						autoplay: play, 
						syndication: "218636"
					}
				});
			});
			
			// handle output
			if (false == autoplay) {
				var text = "Rétablir la lecture automatique";
			} else {
				var text = "Désactiver la lecture automatique";
			}
			// add disable autoplay link
			$j(".video-container,.dvideo-container").after("<a class='toggle-autoplay pointer'><img src='/img/noplay.png'>&nbsp;<span>"+text+"</span></a>");
			
		}
		
	}
	
}

$j(document).ready(function() {
	Dvideo.init();
});