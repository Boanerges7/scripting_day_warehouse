$j = jQuery.noConflict();

var Proofr = {};

Proofr = {

	init: function() {
		
		if ($j(".article").size() > 0) {
			 // $j(".article").bind("mouseup", Proofr.mouseup);
			$j(".proofr_toggle").click(function() {
			 	if ($j(".proofr_sentence").size() > 0) {
			 		// remove
			 		Proofr.destroy();
			 		$j(this).removeClass("fixed");
					$j(this).html("Signaler une erreur dans l'article");
			 	} else {
			 		// add
			 		$j(this).addClass("fixed");
			 		$j("html, body").animate({ scrollTop: $j(".article").offset().top - 140 }, 300, function() {
			 			$j(".proofr_helper").show();
			 		});
				 	Proofr.setSentences();
			 		$j(this).html("Terminer la correction");
				}
			});
		}
		
	}
}

Proofr.mouseup = function() {
	/*
	var st = Proofr.getText();
	var parent = $j(st.anchorNode.parentNode);
	var re = new RegExp("("+st.toString()+")", 'g');
	parent.html(parent.html().replace(re, '<span style="color:red;">$1</span>'));
	*/
	
	$j(".proofr_mark").contents().unwrap();
	$j(".proofr_mark").remove();
	// $this.removeEmptyResponses($this);
	var selection = Proofr.getText();
	var range = selection.getRangeAt(0);
	var cssclass = $j(selection.anchorNode.parentNode).attr("class");
	if (selection.toString().length > 2) {
		// get selected text as HTML
		var fragment = range.cloneContents();
		var span = document.createElement("span");
		span.appendChild(fragment.cloneNode(true));
		var content = span.innerHTML;
		console.log(content);
		var re = new RegExp('(<([^>]+)>)', 'ig');
		content = content.replace(re, "</span>$1<span class='proofr_mark'>");
		var newNode = document.createElement("span");
		newNode.className = "proofr_mark";
		newNode.innerHTML = content;
		range.deleteContents();
		range.insertNode(newNode);
		// range.surroundContents(newNode);
		$j(".proofr_mark").each(function() {
			if ("" == $j(this).html()) {
				$j(this).remove();
			}
		});
		console.log(newNode.innerHTML);
		// $j("proofr_mark").attr('title', ' ');
		// Proofr.clearHighlight();
	}
}

Proofr.setSentences = function() {

	var text = $j(".article").text();
	var result = text.match( /[^\.!\?]+[\.!\?]+/g );
	
	$j(".article > p,.article > h2").each(function() {
		if ($j(this).parents()) {
			$j(this).html($j(this).html().split(/([\.\?!])(?= )/).map(
				function(v) {
			        return '<span class="proofr_sentence">'+v+'</span>';
				}
			));
		}
	});
	
	$j(".proofr_sentence").click(function(e) {
		$this = $j(this);
		var mouseX;
		var mouseY;
		if (e.pageX || e.pageY) { 
			mouseX = e.pageX;
			mouseY = e.pageY;
		} else { 
			mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
			mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
		}
		
		var article_offset = $j(".article").offset();
		var article_size = {width: $j(".article").width(), height: $j(".article").height()};
		var size = {width: $j(this).width(), height: $j(this).height()};
		
		$j(".proofr_sentence").removeClass("proofr_mark");
		$j(this).addClass("proofr_mark");
		$j(".proofr_tooltip").remove();
		$j(".proofr_arrow").remove();
		
		var tooltip = $j("<div>");
		tooltip.addClass("proofr_tooltip");
		var correction = $j("<textarea>");
		correction.addClass("correction");
		var actions = $j("<div>");
		var confirm = $j("<div>");
		confirm.addClass("confirm").addClass("pointer").html("Envoyer");
		var cancel = $j("<div>");
		cancel.addClass("cancel").addClass("pointer").html("Annuler");
		actions.append(cancel).append(confirm);
		tooltip.append("<h3>Proposer une correction</h3>").append(correction).append(actions);
		tooltip.css({
			"top": (parseInt(mouseY) - 35)+"px", 
			"left" : (parseInt(article_offset.left) + article_size.width + 5)+"px"
		});
		
		var arrow = $j("<span>");
		arrow.addClass("proofr_arrow");
		arrow.css({
			"top": (parseInt(mouseY) - 10)+"px", 
			"left" : (parseInt(article_offset.left) + article_size.width - 15)+"px"
		});
		$j("body").append(arrow);
		
		$j("body").append(tooltip);
		correction.focus();
		
		cancel.click(function() {
			$j(".proofr_tooltip").remove();
			$j(".proofr_arrow").remove();
			$j(".proofr_sentence").removeClass("proofr_mark");
		});
		
		confirm.click(function() {
			if ("" != $this.html() && "" != correction.val()) {
				$j.ajax({
					type: "POST",
					url: "/server.php?action=send_correction",
					data: {
						s: $this.html(), 
						c: correction.val(), 
						id: $j(".proofr_toggle").data("id"), 
						type: $j(".proofr_toggle").data("type")
					},
					dataType: "html"
				}).done(function(response) {
					data = $j.parseJSON(response);
					if ("success" == data.status) {
						$j(".correction").attr("disabled", "disabled");
						$j(".proofr_tooltip h3").html("Merci !");
						setTimeout(function() {
							$j(".proofr_tooltip").fadeOut("500", function() {
								$j(".proofr_tooltip").remove();
								$j(".proofr_arrow").remove();
								$j(".proofr_sentence").removeClass("proofr_mark");
							});
						}, 1000);
					} else {
						$j(".correction").css("border-color", "red");
					}
				});
			} else {
				$j(".correction").css("border-color", "red");
			}
		});
		
		return false;
		
	});
	
	$j(".proofr_dismiss").click(function() {
		$j(".proofr_helper").fadeOut();
	});
	
}

Proofr.destroy = function() {
	$j(".proofr_tooltip").remove();
	$j(".proofr_arrow").remove();
	$j(".proofr_sentence").removeClass("proofr_mark");
	$j(".proofr_a").unbind("click");
	$j(".proofr_a").removeClass("proofr_a");
	$j(".proofr_sentence").contents().unwrap();
	$j(".proofr_sentence").each(function() {
		if ("" == $j(this).html()) {
			$j(this).remove();
		}
	});
}

Proofr.getText = function() {
	var text = "";
	if (window.getSelection) {
		text = window.getSelection();
	} else if (document.getSelection) {
		text = document.getSelection();
	} else if (document.selection) {
		text = document.selection.createRange().text;
	}
	return text;
}

Proofr.clearHighlight = function() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

$j(document).ready(function() {
	Proofr.init();
});