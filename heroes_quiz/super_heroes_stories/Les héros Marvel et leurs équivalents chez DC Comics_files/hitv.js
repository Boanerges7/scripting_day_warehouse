$j = jQuery.noConflict();

var Hitv = {};

Hitv = {

	init: function() {
		
		if ($j(".hitv").size() > 0) {
			
			var s = 0;
			var i = 100;
			var minimize_logged = false;
			var close_logged = false;
			var t = setInterval(function() {
				s += i;
			}, i);
			
			$j(".hitv").show();
			//$j(".hitv").remove();
			
			$j(".hitv-minimize,.hitv-overlay").click(function(e) {
				// log
				if (!minimize_logged) {
					$j.ajax({
						type: "POST",
						url: "/server.php?action=log",
						data: {
							tracker: "hitv",
							type: "minimize",
							s: s
						}
					});
					minimize_logged = true;
				}
				
				var video = $j(".hitv-video iframe");
				$j(".hitv-header").hide();
				$j(".hitv-content").hide();
				$j(".hitv-overlay").hide();
				$j(".hitv").css({"height": "auto", "width": "auto"});
				$j(".hitv-body").css({"padding": "0"});
				video.attr("width", "300");
				video.attr("height", "170");
			 	$j(".hitv-video").addClass("hitv-modal-minimized");
			 	$j(".hitv-modal h2").appendTo(".hitv-video");
			 	$j(".hitv-header-minimized").show().prependTo(".hitv-video");
			});
			
			$j(".hitv-maximize").click(function(e) {
				var video = $j(".hitv-video iframe");
				video.attr("width", "620");
				video.attr("height", "350");
			 	$j(".hitv-video").removeClass("hitv-modal-minimized");
			 	$j(".hitv-video h2").prependTo(".hitv-content");
			 	$j(".hitv-video .hitv-header-minimized").hide();
				$j(".hitv-header").show();
				$j(".hitv-content").show();
				$j(".hitv-overlay").show();
				$j(".hitv").css({"height": "100%", "width": "100%"});
				$j(".hitv-body").css({"padding": "10px"});
			});
			
			$j(".hitv-close").click(function(e) {
				// log [DISABLED]
				if (!close_logged) {
					/* $j.ajax({
						type: "POST",
						url: "/server.php?action=log",
						data: {
							tracker: "hitv",
							type: "close",
							s: s
						}
					}); */
					close_logged = true;
				}
				clearInterval(t);
				
				$j(".hitv").remove();
			});
			
			// close button
			setTimeout(function() {
				$j(".hitv-close").show();
			}, 15000);
		}
		
	},
	
	checkCookie: function() {
	    var cookieEnabled = (navigator.cookieEnabled ? true : false);
	    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) { 
	        document.cookie = "test-cookie";
	        cookieEnabled = (document.cookie.indexOf("test-cookie") != -1 ? true : false);
	    }
	    return (cookieEnabled ? true : false);
	}
	
}

$j(document).ready(function() {
	
	if (Hitv.checkCookie()) {
		Hitv.init();
	} else {
		$j(".hitv").remove();
	}
	
});