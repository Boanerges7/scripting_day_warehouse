$j = jQuery.noConflict();

var results = [];


$j(document).ready(function() {
	
	if ($j(".bloc_quiz").size() > 0) {
		
		$j(".bloc_quiz").each(function(i, val) {
			var quiz_id = $j(this).attr("data-id");
			var new_id = $j(".bloc_quiz").data("new-id");
			var new_type = $j(".bloc_quiz").data("new-type") || "new";
			
			$j(this).removeAttr("title");
			
			$j(this).load("/server.php?action=display_quiz&id="+quiz_id+"&new="+new_id+"&type="+new_type, function(data) {
				$j(this).show();
			});
		});
		
		$j("body").on("click", ".next-question", function(e) {
			
			var $this = $j(this).parents(".bloc_quiz");
			var $that = $j(this);
			var quiz_id = $this.attr("data-id");
			var new_id = $this.data("new-id");
			var new_type = $this.data("new-type") || "new";
			
			var question_wrapper = $that.parent();
			var qid = question_wrapper.data("question-id");
			var count = question_wrapper.data("question-count");
			var next_question_wrapper = ($this.find(".question[data-question-count='"+(count+1)+"']").size() > 0 ? $this.find(".question[data-question-count='"+(count+1)+"']") : "end");
			
			var answers = [];
			question_wrapper.find("input:checked").each(function() {
				answers.push($j(this).data("answer-id"));
			});
			
			results.push({question: qid, answers: answers});
			
			if ("end" != next_question_wrapper) {
				question_wrapper.hide("slide", {direction: "left"}, "fast", function() {
					next_question_wrapper.show("slide", {direction: "right"}, "fast");
				});
			} else {
				$that.html("Traitement des réponses...");
				$j.ajax({
					url: "/server.php?action=solve_quiz",
					data: {quiz: quiz_id, results: results, new_id: new_id, new_type: new_type},
					type: "POST",
					success: function(response) {
						template = $j.parseJSON(response) || response;
						$this.find(".quiz-end").html(template);
						$this.find(".quiz h3").hide();
						question_wrapper.hide("slide", {direction: "left"}, "fast", function() {
							$this.find(".quiz-end").show("slide", {direction: "right"}, "fast");
						});
						
						if ($this.find(".quiz .quiz-email").size() > 0) {
							$this.find(".quiz").on("click", ".submit-email", function(e) {
								var email = $this.find(".input-email").val();
								var id = $this.find(".input-email").data("id");
								var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
								if (re.test(email)) {
									$j.ajax({
										type: "POST",
										url: "/server.php?action=quiz_signup",
										data: {email: email, id: id}
									}).done(function(data) {
										$this.find(".quiz-email").html("<p>Merci d'avoir participé !</p>");
									});
								} else {
									 $this.find(".input-email").css("border", "1px solid red");
								}
							});
						}
						results = [];
					}
				});
			}
			
		});
		
		$j("body").on("click", ".answer input", function(e) {
			
			$j(".answer input").each(function() {
				if ($j(this).is(":checked")) {
					$j(this).parent().addClass("selected");
				} else {
					$j(this).parent().removeClass("selected");
				}
			});
							
		});
		
		
		
		$j("body").on("click", ".share", function(e) {
			
			e.preventDefault();
			window.fbAsyncInit = function() {
				FB.init({
					appId: '207644642737881',
					xfbml: true,
					version: 'v2.0'
				});
			};
				
			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/fr_FR/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
			
			var description = $j(this).data("description");
			var title = $j(this).data("title");
			var image = $j(this).data("image");
			var url = $j(this).data("url");
			var result_id = $j(this).data("result-id");
			
			FB.ui({
			  method: 'feed', 
			  link: url, 
			  name: title, 
			  description: description, 
			  picture: image
			}, function(response) {
				$j.ajax({
					url: "/server.php?action=share_quiz", 
					data: {result: result_id, share_data: response},
					type: "POST",
					success: function(response) {
						// console.log(response);
					}
				});
			});
			
			/*url = "https://www.facebook.com/dialog/share?app_id=207644642737881" + 
				"&href=" + encodeURIComponent(url)+ 
				"&name=" + encodeURIComponent(title) + 
				// "&caption=" + encodeURIComponent('Shared from MY_PAGE') + 
				"&description=" + encodeURIComponent(description) + 
				"&picture=" + encodeURIComponent(image) +
				"&redirect_uri=https://www.facebook.com";
			window.open(url);*/
			
			return false;
			
		});
		
		
		
		
		
	}
	
});