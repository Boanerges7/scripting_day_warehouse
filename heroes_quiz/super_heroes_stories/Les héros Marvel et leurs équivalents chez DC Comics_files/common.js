$j = jQuery.noConflict();

var HK = {};

HK.commons = {

	ayads_fixed: false,

	init: function() {
		
		// Add box
/*
		var box = '<h2 style="margin-top: 50px;">Retrouvez la Deadbox 2nd édition au mois d\'août !!</h2><p>Pour moins de 40€, retrouvez des produits pour une valeur marchande d\'environ 80€ et la livraison est GRATUITE ! Pour plus d\'informations, <a href="https://box.hitek.fr/thematique?utm_source=hitek&utm_medium=end_post&utm_campaign=hitek_endpost_deadbox2" rel="nofollow" target="_blank">rendez-vous ici</a>.</p><p><a href="https://box.hitek.fr/thematique?utm_source=hitek&utm_medium=end_post&utm_campaign=hitek_endpost_deadbox2" rel="nofollow" target="_blank"><img src="/img/deadbox-post.jpg" alt="Zelda Box 3ème édition"/></a></p>';
		//$j('.proofr_helper').before(box);
		$j('#content-body').after(box);
*/

		// var habillage = {"path":"home_hitek_6SEC.jpg","link_left":"http:\/\/tracking.ecookie.fr\/?id=1373","link_right":"http:\/\/tracking.ecookie.fr\/?id=1373","color":"#00e1fc","top":120,"restrict":"6secondpeople"};
		// HK.commons.set_skin(habillage);
		// make skin the same height as document
		$j('.habillages').height($j('#wrap').height());

		//
		//	STICKY STUFF
		$j(document).scroll(function() {
			// header
			if ($j(this).scrollTop() >= 122) {
				if("none" == $j("#header-container2").css("display")) {
					$j("#header-container2").show();
				}
			} else {
				$j("#header-container2").hide();
			}

			// article social bar
			if ($j(".sticker-like").size() > 0 && $j(window).width() > 640) {
				var h = ($j(".header-promo").size() > 0 ? parseInt($j(".header-content ul").height()) : parseInt($j(".header-container2").height()));
				if ($j(this).scrollTop() > ($j(".sticker-hidden").offset().top - h)) {
					$j(".sticker-like").css({position: "fixed", top: h+"px", width: "685px"});
					$j(".sticker-hidden").height($j(".sticker-like").height() + 16);
				} else if ($j(this).scrollTop() <= ($j(".sticker-hidden").offset().top)) {
					$j(".sticker-like").css({position: "static", top: "auto"});
					$j(".sticker-hidden").height(0);
				}
			}
			// last articles
			if ($j("#nuovo_articles").size() > 0) {
				if ($j(this).scrollTop() > ($j(".nuovo_hidden").offset().top - 50)) {
					if (($j(".nuovo_hidden").offset().top + $j("#nuovo_articles").height()) < ($j(".content-left").offset().top + $j(".content-left").height())) {
						$j("#nuovo_articles").css({position: "fixed", top: "50px", width: "301px"});
						$j(".nuovo_hidden").height($j("#nuovo_articles").height());
					}
				} else {
					$j("#nuovo_articles").css({position: "static", top: "auto"});
					$j(".nuovo_hidden").height(0);
				}
			}
			// z42 ad
			if ($j("#ad2").size() > 0) {
				if ($j(this).scrollTop() > ($j(".ad2_hidden").offset().top - 50)) {
					$j("#ad2").css({position: "fixed", top: "50px"});
					$j(".ad2_hidden").height($j("#ad2").height());
				} else {
					$j("#ad2").css({position: "static", top: "auto"});
					$j(".ad2_hidden").height(0);
				}
			}
			// product social bar
			if ($j(".sticker-like-test").size() > 0) {
				if ($j(this).scrollTop() > ($j(".sticker-hidden").offset().top - 50)) {
					$j(".sticker-like-test").css({position: "fixed", top: "50px", width: "685px"});
					$j(".sticker-hidden").height($j(".sticker-like-test").height() + 20);
				} else {
					$j(".sticker-like-test").css({position: "static", top: "auto"});
					$j(".sticker-hidden").height(0);
				}
			}
		});
		//
		//	PLACEHOLDER CHECKER
		if (!Modernizr.input.placeholder) {
			$j('[placeholder]').focus(function() {
				var input = $j(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
					input.removeClass('placeholder');
				}
			}).blur(function() {
				var input = $j(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
			$j('[placeholder]').parents('form').submit(function() {
				$j(this).find('[placeholder]').each(function() {
					var input = $j(this);
					if (input.val() == input.attr('placeholder')) {
						input.val('');
					}
				})
			});
		}
		//
		// KCODE
		$j(function() {
			var kKeys = [];
			function Kpress(e){
				kKeys.push(e.keyCode);
				if (kKeys.toString().indexOf("38,38,40,40,37,39,37,39,66,65") >= 0) {
					jQuery(this).unbind("keydown", Kpress);
					kExec();
				}
			}
			$j(document).keydown(Kpress);
		});

		function kExec() {
			// var dennis_nedry = '<a href="http://www.youtube.com/embed/KTG5genOiNs?autoplay=1" id="fancykcode"></a>';
			var dennis_nedry = '<a href="https://static.hitek.fr/img/hitek-soutien.jpg" id="fancykcode"></a>';
			if ($j("#kcode").size() > 0) {
				$j("#kcode").append(dennis_nedry);
				$j("#fancykcode").fancybox({
				"width" : 768,
				"height" : 432,
				"transitionIn" : "none",
				"transitionOut" : "none",
				"type" : "image"
				});
				$j("#fancykcode").click();
			}
		}
		//
		// FANCY CLICK
		if ($j(".article img").size() > 0) {
			/*
			$j('.article img').each(function() {
				var src		 = $j(this).attr('data-original') ||  $j(this).attr('src');
				var $that 	 = $j(this);

				if (src.match(/w_/)) {
					data = {filename: src};

					// verifier si il y a une version de l'image sans prefix (taille reele)
					$j.post('/server.php?action=get-real-image-filename', data, function(response){
						response = $j.parseJSON(response);
						if (response !== false) {
							$that.wrap('<a class="fancybox" rel="group" href="' + response + '" target="_blank"></a>');
						}
					});
				}
			});
			*/

			if ($j("img[data-real_size]").size() > 0) {

				var margin_size = (($j(window).width() > 640) ? 90 : 5);

				$j("img[data-real_size]").each(function() {
					$j(this).addClass("pointer")
					$j(this).attr("href", $j(this).data("real_size"))
				});

				$j("img[data-real_size]").fancybox({
					'centerOnScroll': true,
					'cyclic': true,
					'titlePosition': 'over',
					'margin': margin_size,
					'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
						return '<p style="text-align:center;">\
										<span id="fancybox-title-over"><a href="' + this.href + '" class="fancybox-link" target="_blank">Voir l\'image en taille réelle</a></span>\
									</p>';
					},
					'onComplete': function() {
						if ($j(".fancy-nopub").size() == 0) {
							var content = '<center><iframe src="https://hitek.fr/banner/720x90_dfp.php" scrolling="no" style="width:720px;left:50%;margin-left:-360px;height:90px;padding:0;background:white;overflow:hidden;position: absolute;"></iframe></center>';
							$j('#fancybox-wrap').append(content);
						}
					}
				});

			}

			$j(".article img").click(function() {
				$j(".article").focusin();
			});
		}
		//
		// LAZY LOAD
		if ($j("img.lazy").size() > 0) {
			$j(".article img.lazy").show().lazyload();
		}
		//
		// DISPLAY INTEGRATION
		if ("undefined" != typeof habillage) {
			HK.commons.clear_skin();
			HK.commons.set_skin(habillage);
		}
		//
		// DISPLAY EXPAND FOOTER
		if (footer_expand) {
			HK.commons.set_expand(footer_expand);
		}
		//
		// TRIGGER FIX AYADS
		// HK.commons.fix_ayads();
		//
		// TRIGGER FIX ADIKTEEV
		HK.commons.fix_adikteev();
	},
	//
	// SET INTEGRATION
	set_skin: function(habillage) {
		var go = false;
		if ("tag" == habillage.restrict_type) {
			go = ($j(".tag[rel='"+habillage.restrict+"']").size() > 0);
		} else if ("url" == habillage.restrict_type) {
			var href = window.location.pathname;
			var url = href.substr(href.lastIndexOf('/') + 1);
			var p = new RegExp(url);
			go = p.test(habillage.restrict);
		}

		if (!habillage.restrict || go) {
			$j("#wrap").unbind("click");
			$j(".habillages").css("background-image", "url('https://static.hitek.fr/img/1/"+habillage.path+"')");
			if ("transparent" != habillage.color) {
				$j("body").css("background-image", "none");
				$j("body").css("background-color", habillage.color);
			}
			$j(".habillages").show();
			$j("#wrap").css("padding-top", habillage.top+"px");
			$j("#wrap").click(function(e) {
				if (e.pageX != 0 && "undefined" != typeof(e.pageX)) {	// fix safari bug
					if (e.pageX < (($j(window).width()/2) - ($j(".content-container").width()/2))) {
						// gauche
						window.open(habillage.link_left, "_blank");
					} else if (e.pageX > (($j(window).width()/2) + ($j(".content-container").width()/2))) {
						// droite
						window.open(habillage.link_right, "_blank");
					} else if (e.pageX < ($j(window).width() / 2) && e.pageY > $j("#header-container").height() && e.pageY < ($j("#header-container").height() + habillage.top)) {
						// gauche haut
						window.open(habillage.link_left, "_blank");
					} else if (e.pageX > ($j(window).width() / 2) && e.pageY > $j("#header-container").height() && e.pageY < ($j("#header-container").height() + habillage.top)) {
						// droite haut
						window.open(habillage.link_right, "_blank");
					}
					if (habillage.cookie) {
						HK.createCookie(habillage.cookie, 1, 7);
					}
				}
			});
			$j("#wrap").css("cursor", "pointer");
			$j(".content-container").css("cursor", "default");
		}
	},
	//
	// CLEAR INTEGRATION
	clear_skin: function() {
		$j("#wrap").unbind("click");
		$j(".habillages").css("background-image", "none");
		$j("body").css("background-image", "url('https://static.hitek.fr/img/tiles.png')");
		$j("body").css("background-color", "#F2F2F2");
		$j(".habillages").hide();
		$j("#wrap").css("margin-top", "0px");
	},
	//
	// SET EXPAND FOOTER
	set_expand: function(footer_expand) {
		adTab = footer_expand;
		jQuery.getScript('https://hitek.fr/scripts/extend-footer-js.js');
	},
	//
	// FIX AYADS
	fix_ayads: function () {
		// wait for asynchronous script to load
		$j("#ayads-style").waitUntilExists(function() {
			if (!HK.commons.ayads_fixed) {
				// if video format is present, adjust style
				if ($j("#ayads-video-container").size() > 0) {
					$j("#ayads-style").append(
					 	"body{padding-top:347px!important;}#header-container{position:absolute;top:0;width:100%;}"
					);
				} else {
					$j("#ayads-style").append(
					 	"body{background-position:center 120px!important;}#wrap{padding-top:230px!important;}"
					);
					$j("#ayads-html style").remove();
				}

				// catch click event and pass it to ayads script
				$j("#wrap").click(function(e) {
					if (e.pageX != 0) {	// fix safari bug
						if (e.pageX < (($j(window).width()/2) - ($j(".content-container").width()/2))) {
							// gauche
							e.target = document.body.parentNode;
							document.documentElement.onclick(e);
							e.stopPropagation();
						} else if (e.pageX > (($j(window).width()/2) + ($j(".content-container").width()/2))) {
							// droite
							e.target = document.body.parentNode;
							document.documentElement.onclick(e);
							e.stopPropagation();
						} else if (e.pageX < ($j(window).width() / 2) && e.pageY > $j("#header-container").height() && e.pageY < ($j("#header-container").height() + 230)) {
							// gauche haut
							e.target = document.body.parentNode;
							document.documentElement.onclick(e);
							e.stopPropagation();
						} else if (e.pageX > ($j(window).width() / 2) && e.pageY > $j("#header-container").height() && e.pageY < ($j("#header-container").height() + 230)) {
							// droite haut
							e.target = document.body.parentNode;
							document.documentElement.onclick(e);
							e.stopPropagation();
						}
					}
				});

				$j("#wrap").css("cursor", "pointer");
				$j(".content-container").css("cursor", "default");

			}
			// don't do this twice !
			HK.commons.ayads_fixed = true;
		});
	},

	fix_adikteev: function() {
		$j(".ak-floating-format").waitUntilExists(function() {
			var ak_floating = $j(".ak-floating-format");
			$j(".ak-anchor").css({height: (ak_floating.height() + 20) + "px"});
			$j(".ak-anchor").append(ak_floating);
			$j(".ak-anchor").append("<style>.ak-gallery.ak-floating-format {position:static!important;top:0!important;}</style>");
		});
	}
	//
};

HK.article = {

	init: function() {

		/* if ($j(".article").size() > 0) {
			// enable only for youtube videos and on desktop version
			if ($j(".article").find("iframe[src^='http://www.youtube.com/embed/']").size() && $j(window).width() > 688) {

				$j.getScript("/resources/swfobject-master/swfobject/swfobject.js", function(data, textStatus, jqxhr) {
					$j.getScript("/resources/jwplayer/jwplayer.js", function(data, textStatus, jqxhr) {

						jwplayer.key = "UKnpvalnTTiWrCNlDdcPOl0JYGUziayEHxIbeKk7Mh0=";
						var i = 1;

						$j(".article").find("iframe[src^='http://www.youtube.com/embed/']").each(function(i, elm) {

							var container_id = "container"+i;
							var src = $j(this).attr("src");
							var reg = /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=))([\w-]{10,12})/g;
							var id = reg.exec(src)[1];
							$j(this).attr("id", container_id);
							// $j(this).after($j("<div/>", {id: container_id}));

							jwplayer(container_id).setup({
								primary: "flash",
								stretching : 'fill',
								file: "/advideum/intro.mp4",
								id: container_id, //id de la div où va être placée la vidéo+pub
								height: 410,
								width: 688,
								image: "http://i.ytimg.com/vi/"+id+"/sddefault.jpg", // url de l’image de preview
								autostart: "false",
								allowScriptAccess: "always",
								allowFullScreen: "false",
								wmode: "transparent",
								base: "/resources/jwplayer/",
								plugins: {
									'http://cdn-static.liverail.com/js/LiveRail.AdManager.JWPlayer-6.4.0.plugin.js': {
										'LR_PUBLISHER_ID': '30233',
										'LR_TAGS': '',
										// 'LR_ADMAP': 'in::0;in::100%', //pour ôter le postroll, mettre uniquement in::0
										'LR_ADMAP': 'in::0', //pour ôter le postroll, mettre uniquement in::0
										'LR_LAYOUT_SKIN_MESSAGE':'Publicité, fin dans {COUNTDOWN} secondes',
										'LR_SKIP_MESSAGE':'X',
										'LR_SKIP_COUNTDOWN':'Passer dans {COUNTDOWN} s',
										'LR_LAYOUT_SKIN_ID':'1',
										'LR_VERTICALS':'hitek_fr',
										'LR_PARTNERS':'',
										'LR_AUTOPLAY':'0',
										'LR_CONTENT':'6',
										'LR_CATEGORIES':'2000',
										'LR_TITLE':'hitekfr_title',
										'LR_VIDEO_ID':'hitekfr_videoID'
									}
								}
							});

							$j("#"+container_id).parent().css("background", "#D2D2D2");

							jwplayer(container_id).onComplete(function() {
								$j("#"+container_id).parent().html('<iframe width="688" height="410" src="'+src+'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
							});

							i ++;

						});

					});
				});

			}
		} */

		$j(".article").on("click", ".toggle-autoplay", function() {
			$this = $j(this);
			$this.find("span").html("En cours &hellip;");
			$j.ajax({
				type: "POST",
				url: "/server.php?action=toggle_autoplay",
				data: {}
			}).done(function(response) {
				var data = $j.parseJSON(response) || response;
				if ("success" == data.status) {
					$this.find("span").html(data.text);
				} else {
					$this.find("span").html(data.error);
				}
			});
		});

	}

};

HK.home = {
	init: function () {
		//
		// NEW NEWS
		function close(idOne, idTwo) {
			if ($j(idOne).size() > 0) {
				$j(idOne).click(function() {
					if("block" == $j(idTwo).css("display")) {
						$j(idTwo).hide("slide", {
							direction: "up",
							easing: "easeInQuad"
						}, 1000);
					}
				});
			}
		}
		//
		close("#close-news", ".news-message");
		close("#close-switch", "#changemsg");
		//
		// LOAD NEWS
		$j(".load-articles").click(function() {
			t = $j(this);
			$j.ajax({
				type: "POST",
				url: "/server.php?action=load_articles",
				data: {
					page: t.attr("data-page")
				},
				dataType: "html",
				beforeSend: function(xhr) {
					t.html('<img src="https://static.hitek.fr/img/loading.gif">');
				}
			}).done(function(data) {

				var message = "";
				var messages = ["Charger encore plus d'articles", "Charger encore plus d'articles", "Charger encore plus d'articles", "Charger encore plus d'articles !", "Charger encore plus d'articles!!1!", "Plus. D'articles.", "Ces articles ont presque deux semaines. Continuer ?", "En route, Marty !", "Encore ?", "Encore, vraiment ?", "Encore&hellip; une page&hellip;", "Cliquer sur ce bouton ne vous rendra ni plus beau ni plus intelligent", "&hellip;mais ça vaut le coup d'essayer, apparemment", "Waouh, bravo, vous avez fini Hitek.fr ! Il n'y plus rien après ça.", "Bon OK j'ai menti. Mais on n'est plus très loin de la fin.", "&hellip;", "Ça fait quoi, cinq ou six heures que tu cliques bêtement ? Je pense qu'on peut commencer à se tutoyer ?", "&hellip;", "Je retourne jouer aux jeux vidéo. Préviens-moi quand il se passe quelque chose d'intéressant par ici.", "&hellip;", "&hellip;", "Toujours là ?", "Tu sais, depuis le temps que tu cliques, il y a sûrement eu du nouveau en haut de page", "Non, tu préfères t'enfoncer dans le passé d'Hitek ?", "Soit. N'oublie pas d'éteindre en partant."];

				var page = parseInt(t.attr("data-page")) + 1;

				$j("html, body").animate({ scrollTop: $j(".load-articles").offset().top - 200}, 300);
				$j(".news-bloc").last().after(data);
				t.attr("data-page", page);

				if (messages[page]) {
					message = messages[page];
				} else {
					message = "Plus d'articles";
				}

				t.html(message);
			});
		});
		//
		$j("a[href^='https://www.smartadserver.com/diff/']").css("position", "absolute");
		//
		// menu
		$j(".menu li").click(function() {
			var rel = $j(this).attr("rel");
			$j(".menu li").removeClass("active");
			$j(this).addClass("active");
			$j(".submenu").addClass("none");
			$j(".submenu[rel='"+rel+"']").removeClass("none");
			$j(".submenu").not(".none").find("li").first().css("margin-left", "0");

			// load products
			$j.ajax({
					type: "POST",
				url: "/server.php?action=switch_products",
				data: {
					scope: rel
				},
				dataType: "html",
				beforeSend: function(xhr) {
					$j(".switch-products").removeClass("active");
					$j(".products-preview").html('<div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div>');
				}
			}).done(function(data) {
				$j(".products-preview").html(data);
			});

		});
		//
		// product types scroll
		$j(".menu-scroll").removeClass("hidden");
		$j(".menu-scroll").hover(
			function() {
				var menu = $j(".submenu").not(".none");
				if ("left" == $j(this).attr("rel")) {
					t = setInterval(function() {
						var margin = parseInt(menu.find("li").first().css("margin-left").replace("px"));
						var last = menu.find("li").last();
						if ((menu.offset().left + menu.width()) < (last.offset().left + last.width() - 20)) {
							menu.find("li").first().css("margin-left", (margin-5)+"px");
						}
					}, 50);
				} else {
					t = setInterval(function() {
						var margin = parseInt(menu.find("li").first().css("margin-left").replace("px"));
						var first = menu.find("li").first();
						if (menu.offset().left > (first.offset().left - 40)) {
							menu.find("li").first().css("margin-left", (margin+5)+"px");
						}
					}, 50);
				}
			}, function() {
				clearInterval(t);
			}
		);
		$j(".menu-scroll").click(function() {
			var menu = $j(".submenu").not(".none");
			if ("left" == $j(this).attr("rel")) {
				var margin = parseInt(menu.find("li").first().css("margin-left").replace("px"));
				var last = menu.find("li").last();
				if ((menu.offset().left + menu.width()) < (last.offset().left + last.width() - 120)) {
					menu.find("li").first().animate({"margin-left" :(margin-100)+"px"}, 200);
				}
			} else {
				var margin = parseInt(menu.find("li").first().css("margin-left").replace("px"));
				var first = menu.find("li").first();
				if (menu.offset().left > (first.offset().left - 140)) {
					menu.find("li").first().animate({"margin-left": (margin+100)+"px"}, 200);
				}
			}
		});
		//
		// submenu
		$j(".switch-products").click(function(e) {
			var rel = $j(this).attr("rel");
			var $this = $j(this);

			e.preventDefault();

			$j.ajax({
					type: "POST",
				url: "/server.php?action=switch_products",
				data: {
					scope: $this.attr("rel"),
					search: $this.attr("data-search")
				},
				dataType: "html",
				beforeSend: function(xhr) {
					$j(".switch-products").removeClass("active");
					$this.addClass("active");
					$j(".products-preview").html('<div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div><div class="poster inline-block"></div>');
				}
			}).done(function(data) {
				$j(".products-preview").html(data);
			});

			return false;
		});
		$j(".menu li").first().click();

		// UNREAD ARTICLES
		var cookie = HK.readCookie("viewed_articles");
		if (cookie) {
			var cookies = $j.parseJSON(atob(cookie.replace(/%3D/g, "=")));
			$j.each(cookies, function(i, val) {
				if ($j("a[href$="+i+"]").size() > 0) {
					$j("a[href$="+i+"]").parent().removeClass("noread-red");
				}
			});
		}

	}
}

HK.carousel = {
	init: function () {
		//
		// MAIN SLIDER
		if ($j("#featured").size() > 0) {
			$j("#featured").orbit({
				advanceSpeed: 2000,
				pauseOnHover: true,
				startClockOnMouseOut: true,
				startClockOnMouseOutAfter: 300,
				directionalNav: false,
				bullets: true
			});
		}
		//
	}
};


HK.touchSlider = {

	init: function() {
		// home touch scroll slider
		$j(document).ready(function() {
			if ($j(".mobile-carousel").size() > 0) {
				$j(".mobile-carousel").carouFredSel({
					auto: true,
					/*swipe: {
						onTouch: true,
						fx: 'cover'
					},*/
					items: {
						visible: 1,
						width: '100%'
					},
					scroll: {
						fx: 'cover'
					},
					onCreate: function() {
						$j('.mobile-carousel').show();
						$j('#hot-title').show();
						$j('.image_carousel .slide').css('width', $j(window).width());
						$j(".mobile-carousel").trigger('updateSizes');
					}
				});
			}
		});
	}
};

HK.youtube = {

	init: function() {
		//
		// FANCYBOX YOUTUBE
		if ($j(".fancyvideo").size() > 0) {
			$j("a[rel=fancybox]").fancybox();
			$j(".fancyvideo").fancybox({
			"width" : 768,
			"height" : 432,
			"transitionIn" : "none",
			"transitionOut" : "none",
			"type" : "iframe"
			});
		}
		//
		// YOUTUBE "SLIDER" AND HIS FRIENDS
		function slidePaginYt(condition, selector, divOne, divTwo) {
			if ($j(condition).size() > 0) {
				$j(selector).click(function() {
					if ("none" == $j(divTwo).css("display")) {
						$j(divOne).fadeOut(function(){
							$j(divTwo).fadeIn();
						});

					} else {
						$j(divTwo).fadeOut(function(){
							$j(divOne).fadeIn();
						});
					}
				});
			}
		}
		slidePaginYt(".content_youtube", ".y_next-prev", ".y_div_1", ".y_div_2");
		slidePaginYt("#popular_articles", ".p_next-prev", ".p_div_1", ".p_div_2");
		slidePaginYt(".last_products", ".lp_next-prev", ".lp_div_1", ".lp_div_2");
		//
	}
};

HK.comments = {

	init: function () {
		//
		// COMMENTS REPLY
		$j("#gocomment").click(function() {
			$j("html, body").animate({ scrollTop: $j("#comments").offset().top - 135 }, 300);
		});

		if ($j(".comment-reply").size() > 0) {

			var parent, author, reply;

			$j(document).on("click", ".comment-reply", function() {
				parent = $j(this).attr("data-comment");
				author = $j(this).attr("data-author");
				$j("#repondre").html("Répondre à <a class=\"pointer\">"+author+"</a>");
				$j("#cancel-reply").html("<a class=\"pointer\">Annuler la réponse</a>");
				$j("#parent_ref").val(parent.replace("comment-", ""));
				$j("html, body").animate({ scrollTop: $j("#repondre").offset().top - 140 }, 300);
			});

			$j(document).on("click", ".reply-size", function() {
				reply = $j(this).attr("data-reply");
				$j("html, body").animate({ scrollTop: $j("#"+reply).offset().top - 140 }, 300);
			});

			$j("#repondre").click(function() {
				$j("html, body").animate({ scrollTop: $j("#"+parent).offset().top - 140 }, 300);
			});

			$j("#cancel-reply").click(function() {
				$j("html, body").animate({ scrollTop: $j("#"+parent).offset().top - 140 }, 300);
				$j("#repondre").html("Laisser un commentaire");
				$j("#cancel-reply").html("");
				$j("#parent_ref").val(0);
			});

		}
		//
		// VERIF FORM
		if ($j(".forms").size() > 0) {
			$j("#forms").submit(function() {

				var bReturn = true;

				if ($j("#comments-success-message").html() != "" && $j("#comments-error-message").html() == "") {
					$j("#comments-success-message").css("display", "none");
					// bReturn = false;
				}

				$j("#name").css({borderLeft: "1px solid #e9e9e9"});
				$j("#comments-error-message").html('');

				if ($j.trim($j("#name").val()).length == 0) {
					$j("#name").css({borderLeft: "4px solid #a22728"});
					$j("#comments-error-message").html('<p>Vous n’avez pas renseigné de nom. Veuillez réessayer.</p>');
					bReturn = false;
				}

				$j("#mail").css({borderLeft: "1px solid #e9e9e9"});

				var email = $j("#mail").val();
				var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

				if (!reg.test(email)) {
					$j("#mail").css({borderLeft: "4px solid #a22728"});
					$j("#comments-error-message").html('<p>Votre email n’est pas renseigné ou n’est pas valide. Veuillez réessayer.</p>');
					bReturn = false;
				}

				$j("#website").css({borderLeft: "1px solid #e9e9e9"});

				if ($j("#website").val().length > 0) {
					if (!isUrl($j.trim($j("#website").val()))) {
						$j("#website").css({borderLeft: "4px solid #a22728"});
						$j("#comments-error-message").html('<p>Attention, l\'adresse de votre site web n\'est pas conforme, verifiez son format. (http://www.site.fr)</p>');
						bReturn = false;
					}
				}

				$j("#message").css({borderLeft: "1px solid #e9e9e9"});

				if ($j.trim($j("#message").val()).length == 0) {
					$j("#message").css({borderLeft: "4px solid #a22728"});
					$j("#comments-error-message").html('<p>Vous n’avez pas renseigné de commentaire. Veuillez réessayer.</p>');
					bReturn = false;
				}

				return bReturn;

			});

		}
		//
		function isUrl(s) {
			var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
			return regexp.test(s);
		}
		// like event binding
		//
		$j(document).on("click", ".like", function(e) {

			var button = $j(this);
			var id = 	$j(this).data("id");
			var item_type = $j(this).data("type") || "comment";
			currVal = 	$j(this).attr("value");


			if (!button.is(".activated")) {
				if (!button.parent().find(".dislike").is(".activated")) {
					button.addClass("activated");
				}

				// ajax request to script which +1 commentaire likes count
				data = {
					id:			id,
					curval:		currVal,
					method:		"ajax",
					post_type:	item_type,
					vote_type:	"up"
				};

				$j.post("/server.php?action=vote", data, function(response) {
					// update DOM with retreived data
					response = $j.parseJSON(response);
					if ("success" == response.status) {
						$j("#like_count_"+id).html(response.c);
					}
				});
			}

		});

		$j(document).on("click", ".dislike", function(e){

			var button = $j(this);
			var id = button.data("id");
			var item_type = button.data("type") || "comment";
			currVal = $j(this).attr("value");

			if (!button.is(".activated")) {
				if (!button.parent().find(".like").is(".activated")) {
					button.addClass("activated");
				}

				// ajax request to script which +1 commentaire likes count
				data = {
					id:			id,
					currval:	currVal,
					method:		"ajax",
					post_type:	item_type,
					vote_type:	"down"
				};

				$j.post("/server.php?action=vote",data,function(response) {
					// update DOM with retreived data
					response = $j.parseJSON(response);
					if ("success" == response.status) {
						$j("#dislike_count_"+id).html(response.c);
					}
				});
			}

		});
		// load more comments
		//
		if ($j(".load-comments").size() > 0) {

			$j(".load-comments").click(function() {
				t = $j(this);
				$j.ajax({
					type: "POST",
					url: "/server.php?action=load_comments",
					data: {
						ref: t.attr("data-ref"),
						type: t.attr("data-type"),
						page: t.attr("data-page"),
					},
					dataType: "html",
					beforeSend: function(xhr) {
						t.html('<img src="https://static.hitek.fr/img/loading.gif">');
					}
				}).done(function(data) {
					var page = parseInt(t.attr("data-page")) + 1;
					var count = parseInt(t.attr("data-count"));
					var iter = parseInt(t.attr("data-iter"));
					$j("#comments .content-comments").last().after(data);
					t.attr("data-page", page);
					if ((page * iter) <= count) {
						t.html('Voir plus de commentaires');
					} else {
						t.parents(".content-footer").remove();
					}
				});
			});

		}

		if ($j(".smiley").size() > 0) {
			$j(".smiley").click(function() {
				var txtarea = $j(".input-area")[0];
				var text = " :"+$j(this).data("insert")+": ";
			    var scrollPos = txtarea.scrollTop;
			    var strPos = 0;
			    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
			        "ff" : (document.selection ? "ie" : false ) );
			    if (br == "ie") {
			        txtarea.focus();
			        var range = document.selection.createRange();
			        range.moveStart ('character', -txtarea.value.length);
			        strPos = range.text.length;
			    }
			    else if (br == "ff") strPos = txtarea.selectionStart;

			    var front = (txtarea.value).substring(0, strPos);
			    var back = (txtarea.value).substring(strPos, txtarea.value.length);
			    txtarea.value=front+text+back;
			    strPos = strPos + text.length;
			    if (br == "ie") {
			        txtarea.focus();
			        var range = document.selection.createRange();
			        range.moveStart ('character', -txtarea.value.length);
			        range.moveStart ('character', strPos);
			        range.moveEnd ('character', 0);
			        range.select();
			    }
			    else if (br == "ff") {
			        txtarea.selectionStart = strPos;
			        txtarea.selectionEnd = strPos;
			        txtarea.focus();
			    }
			    txtarea.scrollTop = scrollPos;
			});

			$j(".input-text").change(function() {
				var email = $j(this).val();
				$j.ajax({
					type: "POST",
					url: "/server.php?action=check_premium",
					data: {
						email: email
					},
					dataType: "html"
				}).done(function(data) {
					if ("true" == data) {
						$j(".premium-ui").show();
					}
				});
			});
		}
	}
}

HK.vote = {

	init: function() {
		// top/flop event binding
		//
		if ($j(".topflop").size() > 0) {

			$j(".top-button,.flop-button").click(function(e) {
				var $this = $j(this);
				var id = $this.data("id");
				var post_type = $this.data("type");
				var vote_type = $this.data("vote");
				var current_value = $this.data("count");

				data = {
					id:			id,
					curval:		current_value,
					method:		"ajax",
					post_type:	post_type,
					vote_type:	vote_type
				};

				$j.post("/server.php?action=vote", data, function(response) {
					// update DOM with retreived data
					response = $j.parseJSON(response);
					// console.log(response);
					if ("success" == response.status) {
						$this.find(".count").html(response.c);
					} else {
						var opacity = $this.css("opacity");
						$this.animate({opacity: 0.5}, 200).animate({opacity: opacity}, 200);
					}
				});
			});

		}
		//
	}

}

HK.mobile = {

	init: function() {
		//
		// STICKY HEADER
		if ($j("#sticker").size() > 0) {
			$j(document).scroll(function() {
				if($j(this).scrollTop() >= 80) {
					$j('#sticker').css("position", "fixed");
					$j('#sticker').css("top", "0");
				} else {
					$j('#sticker').css("position", "static");
				}
			});
			$j("#simple-menu").click(function(){
				if ("block" == $j("#sidr").css("display")) {
					$j('#sticker').css("left", "0px");
				} else if ("none" == $j("#sidr").css("display")) {
					$j('#sticker').css("left", "230px");
				}
			});
		}
		//
		// SWIPE MENU
		if ($j("#simple-menu").size() > 0) {
			$j('#simple-menu').sidr({
				speed: 0,
				side: 'left'
			});
		}
		//
		// HOVER -> CLICK
		if (Modernizr.touch) {
			if ($j(".touchme").size() > 0) {
				$j(".touchme").click(function(e){
					if ($j(".revealtouch").css("display") == "none") {
						$j(".revealtouch").show();
					} else {
						$j(".revealtouch").hide();
					}
				});
			}
		}
		//
		// PAGINATE ON CHANGE
		if ($j("#select-paginate").size() > 0) {
			$j("#select-paginate").change(function() {
				location = this.options[this.selectedIndex].value;
			});
		}
		//
		// MOBILE APP POPUP
		if ($j("#mobile_popup").size() > 0) {
			var images = ["app-popup-stark.gif", "app-popup-white.gif", "app-popup-vader.gif"];
			var i = 1;

			$j.each(images, function(key, value) {
				var img = document.createElement("img");
				img.src = "https://static.hitek.fr/img/"+value;
				// img.onload = function () {};
			});

			setInterval(function() {
				$j("#reviews").fadeOut("fast", function () {
					$j(this).attr("src", "https://static.hitek.fr/img/"+images[i]).fadeIn("fast");
					i = (i >= (images.length-1) ? 0 : (i+1));
			    });
			}, 3000)
		}
		//
	}
}

HK.products = {

	init: function() {

		// set size comparisons
		HK.products.product1 = {
				height: parseFloat($j("#product1").data('product1_height')),
				width: parseFloat($j("#product1").data('product1_width'))
		};
		if ($j("#product2").size() > 0) {
			HK.products.product2 = {
					height: parseFloat($j("#product2").data('product2_height')),
					width: parseFloat($j("#product2").data('product2_width'))
			};
			HK.products.resize_visa(HK.products.product1, HK.products.product2);
		} else {
			HK.products.resize_visa(HK.products.product1);
		}

		if ($j(".tab-switcher").size() > 0) {

			// default tab is resume
			var tab = window.location.hash.replace("#", "") || "resume";
			var $this = $j(".tab-switcher[rel='"+tab+"']")

			if ($j(".article."+tab).size() > 0) {
				HK.products.display_tab(tab, $this, false);
				if ($j("#menu-test-mobile").size() > 0) {
					$j("#menu-test-mobile option[rel='"+tab+"']").prop("selected", true);
				}
			}

			$j(".tab-switcher").click(function(e) {
				var $this = $j(this);
				var tab = $this.attr("rel");

				if ($j(".article."+tab).size() > 0) {
					HK.products.display_tab(tab, $this, true);
					e.preventDefault();
					return false;
				}
			});

		}

		if ($j("#menu-test-mobile").size() > 0) {
			$j("#menu-test-mobile").change(function() {
				var tab = $j("#menu-test-mobile option:selected").attr("rel");
				if ($j(".article."+tab).size() > 0) {
					HK.products.display_tab(tab, false, true);
					$j("#menu-test-mobile option[rel='"+tab+"']").prop("selected", true);
				} else {
					window.location = $j("#menu-test-mobile").val();
				}
			});
		}

		if ($j("#special-switcher").size() > 0) {
			$j("#special-switcher").click(function(e) {
				var tab_value = $j("#menu-test-mobile").find('option[rel="test"]').val();
				$j("#menu-test-mobile").val(tab_value).change();
				$j("#menu-test-mobile").val(tab_value).prop("selected", true);
			});
		}

		if ($j("#newsletter_price_block").size() > 0) {
			HK.products.product_suscribe();
		}

		if ($j(".product-search-input").size() > 0) {

			$j(".overlay").hide();

			$j(".product-search-input").keyup(function() {
				HK.products.updateSearch();
			});

			// update filters
			$j(".search-criteria").change(function() {
				var val = $j(this).val();
				var option = $j(this).find("option:selected");
				if (!option.hasClass("default") && 0 == $j(".item[data-value='"+val+"'][data-spec='"+$j(this).attr("data-spec")+"']").size()) {
					var item = $j("<div>");
					var text = option.text();
					if ($j(this).attr("data-suffix")) {
						text += " "+$j(this).attr("data-suffix")
					}
					if ($j(this).attr("data-prefix")) {
						text = $j(this).attr("data-prefix")+" "+text;
					}
					item.addClass("item");
					item.attr("data-value", val);
					item.attr("data-spec", $j(this).attr("data-spec"));
					item.html(text+"<span class='close pointer'>&times;</span></div>");
					if ("yes" == $j(this).attr("data-multi")) {
						// $j(".item[data-spec='"+$j(this).attr("data-spec")+"']").remove();
					} else {
						$j(".item[data-spec='"+$j(this).attr("data-spec")+"']").remove();
					}
					$j(".filters .search-label").after(item);
				}
				HK.products.updateSearch();
			});

			// handle input search
			$j(".search-criteria-input").change(function() {
				var text = $j(this).val().replace(/[^A-Za-z0-9- ]/g, "");
				var item = $j("<div>");
				if ($j(this).attr("data-suffix")) {
					text += " "+$j(this).attr("data-suffix");
				}
				if ($j(this).attr("data-prefix")) {
					text = $j(this).attr("data-prefix")+" "+text;
				}
				item.addClass("item");
				item.attr("data-value", $j(this).val());
				item.attr("data-spec", $j(this).attr("data-spec"));
				item.html(text+"<span class='close pointer'>&times;</span></div>");
				if ("yes" == $j(this).attr("data-multi")) {
					// $j(".item[data-spec='"+$j(this).attr("data-spec")+"']").remove();
				} else {
					$j(".item[data-spec='"+$j(this).attr("data-spec")+"']").remove();
				}
				if ("" != $j(this).val()) {
					$j(".filters .search-label").after(item);
				}

				HK.products.updateSearch();
			});

			// remove item from filters
			$j(".filters").on("click", ".close", function() {
				var spec = $j(this).parent().attr("data-spec");
				$j(this).parent().remove();
				$j(".search-criteria[data-spec='"+spec+"']").find("option.default").prop("selected", true);
				if ($j(".switch [data-spec='"+spec+"']").size() > 0) {
					$j(".switch [data-spec='"+spec+"']").click();
				} else if ($j(".search-criteria-input[data-spec='"+spec+"']").size() > 0) {
					$j(".search-criteria-input[data-spec='"+spec+"']").val("");
					HK.products.updateSearch();
				} else {
					HK.products.updateSearch();
				}
			});

			// trigger order
			$j(".search-order").change(function() {
				HK.products.updateSearch();
			});

			// handle switch
			$j(".switch").click(function() {

				var on = $j(this).find(".on");
				var off = $j(this).find(".off");
				var spec = $j(this).find("input").attr("data-spec");
				var text = $j(this).prev("td.label").text().replace(/\s+:/, "");

				if ("yes" == $j(this).find("input").attr("data-value")) {
					on.removeClass("active");
					off.addClass("active");
					$j(this).find("input").attr("data-value", "no");
					$j(".item[data-spec='"+spec+"']").remove();
				} else {
					off.removeClass("active");
					on.addClass("active");
					$j(this).find("input").attr("data-value", "yes");

					var val = "yes";
					if (0 == $j(".filters .item[data-value='"+val+"'][data-spec='"+spec+"']").size()) {
						var item = $j("<div>");
						item.addClass("item");
						item.attr("data-value", val);
						item.attr("data-spec", spec);
						item.html(text+"<span class='close pointer'>&times;</span></div>");
						$j(".item[data-spec='"+spec+"']").remove();
						$j(".filters .search-label").after(item);
					}

				}
				HK.products.updateSearch();

			});

			// price
			var min = parseInt($j(".search-price").attr("data-min"));
			var max = parseInt($j(".search-price").attr("data-max"));
			$j(".search-price").slider({
				range: true,
				min: min,
				max: max,
				values: [min,max],
				slide: function(event, ui) {
					$j(".amount-min[rel='price']").text(ui.values[0] + " €");
					$j(".amount-min[rel='price']").attr("data-value", ui.values[0]);
					$j(".amount-max[rel='price']").text(ui.values[1] + " €");
					$j(".amount-max[rel='price']").attr("data-value", ui.values[1]);
				},
				change: function(event, ui) {
					HK.products.updateSearch();
				},
				create: function( event, ui ) {
					$j(".search-price span.wait-message").remove();
				}
			});

			// sliders
			$j(".slider").each(function(i) {
				var min = parseInt($j(this).attr("data-min"));
				var max = parseInt($j(this).attr("data-max")) + 1;
				var rel = $j(this).attr("data-rel");
				var unit = ($j(this).attr("data-unit") ? " "+$j(this).attr("data-unit") : "");
				$j(this).slider({
					range: true,
					min: min,
					max: max,
					values: [min,max],
					slide: function(event, ui) {
						$j(".amount-min[rel='"+rel+"']").text(ui.values[0] + unit);
						$j(".amount-min[rel='"+rel+"']").attr("data-value", ui.values[0]);
						$j(".amount-max[rel='"+rel+"']").text(ui.values[1] + unit);
						$j(".amount-max[rel='"+rel+"']").attr("data-value", ui.values[1]);
					},
					change: function(event, ui) {
						var item = $j("<div>");
						var text = ui.values[0]+" à "+ui.values[1];
						if ($j(this).attr("data-suffix")) {
							text += " "+$j(this).attr("data-suffix")
						}
						item.addClass("item");
						item.attr("data-value", ui.values[0]+"-"+ui.values[1]);
						item.attr("data-spec", rel);
						item.html(text+"<span class='close pointer'>&times;</span></div>");
						$j(".item[data-spec='"+rel+"']").remove();
						$j(".filters .search-label").after(item);
						HK.products.updateSearch();
					},
					create: function( event, ui ) {
						$j(".search-price span.wait-message").remove();
					}
				});
			});

			$j(".products-list").on("click", ".load-search", function() {
				$j(".product-search-input").attr("data-page", parseInt($j(".product-search-input").attr("data-page")) + 1);
				HK.products.updateSearch(true);
			});

		}

		if ($j(".product-menu").size() > 0) {
			$j(".types-dropdown").css("visibility", "visible");
			$j(".select-type").change(function() {
				if ("" != $j(this).val()) {
					window.location = "/produits/"+$j(this).val();
				}
			});
		}

	},

	updateSearch: function(next_page) {

		$this = $j(".product-search-input");

		if (true !== next_page) {
			$this.attr("data-page", "1")
		}

		var min_price = $j(".search-price").data("min");
		var max_price = $j(".search-price").data("max");

		var filters = {};
		$j(".item").each(function(i) {
			var spec = $j(this).attr("data-spec");
			var value = $j(this).attr("data-value");
			/* if ("[object Array]" == Object.prototype.toString.call(filters[spec])) {
				filters[spec].push(value);
			} else {
				filters[spec] = [value];
			} */
			filters[spec] = value;
		});

		var params = {
			type: $this.attr("data-type"),
			page: $this.attr("data-page"),
			filters: filters,
			available: $j("[data-spec='availability']").attr("data-value"),
			price: {
				min: $j(".amount-min[rel='price']").attr("data-value") || 0,
				max: $j(".amount-max[rel='price']").attr("data-value") || 0
			},
			order: $j(".search-order").val()
		};

		$j.ajax({
			type: "POST",
			url: "/server.php?action=search_products",
			data: {
				search: $this.val(),
				params: params
			},
			dataType: "html",
			beforeSend: function(xhr) {
				// prevent spamming
				t = setTimeout(function() {
					$j(".overlay").width($j(".product-search").width()).height($j(".product-search").height()).show();
				}, 300);
			}
		}).done(function(data) {
			var data = $j.parseJSON(data) || data;

			if ("success" == data.status) {

				if (true === next_page) {
					$j(".load-search").remove();
					$j(".products-list").append(data.template);
				} else {
					if ($j(".tests-content").size() > 0) {
						$j(".tests-content").remove();
					}
					$j(".products-list").html(data.template);
				}

				if ($j(".product-count").size() > 0) {
					$j(".product-count").html(data.count+" produit"+(data.count > 1 ? "s" : "")+" trouvé"+(data.count > 1 ? "s" : ""));
				} else {
					$j(".products-list").prepend("<div class='product-count'>"+data.count+" produit"+(data.count > 1 ? "s" : "")+" trouvé"+(data.count > 1 ? "s" : "")+"</div>");
				}

				$j(".item").removeClass("ignored");
				if (false !== data.retry && "undefined" != typeof data.retry) {
					$j.each(data.retry, function(i, val) {
						$j(".item[data-spec='"+val+"']").addClass("ignored");
					});
					$j(".product-count").append(" (des critères on été ignorés)");
				}
				clearTimeout(t);
				$j(".overlay").hide();

			} else {

			}
		});

	},

	resize_visa: function(product1, product2) {

		var cb_mmheight = 84;
		var cb_mmwidth = 54;

		if (typeof product2 !== "undefined") {
			var highest_height = Math.max(product1.height, product2.height, cb_mmheight);
		} else {
			var highest_height = Math.max(product1.height, cb_mmheight);
		}

		if (typeof product2 !== "undefined") {
			var highest_width = Math.max(product1.width, product2.width, cb_mmwidth);
		} else {
			var highest_width = Math.max(product1.width, cb_mmwidth);
		}

		if (highest_width / highest_height >= 155 / 266) {
			var ratio = 155 / highest_width;
		} else {
			var ratio = 266 / highest_height;
		}

		var cb_pxheight = Math.ceil(cb_mmheight*ratio);
		var cb_pxwidth = Math.ceil(cb_mmwidth*ratio);

		if (highest_width / highest_height >= 155 / 266) {

			var product_pxwidth1 = Math.ceil(product1.width*ratio);
			if (typeof product2 !== "undefined") {
				var product_pxwidth2 = Math.ceil(product2.width*ratio);
			}

			$j("img#cb").css("width", cb_pxwidth+"px");
			$j("img#product1").css("width", product_pxwidth1+"px");
			$j("img#cb").show();
			$j("img#product1").show();

			if (typeof product2 !== "undefined") {
				$j("img#product2").css("width", product_pxwidth2+"px");
				$j("img#product2").show();
			}

		} else {

			var product_pxheight1 = Math.ceil(product1.height*ratio);
			if (typeof product2 !== "undefined") {
				var product_pxheight2 = Math.ceil(product2.height*ratio);
			}

			$j("img#cb").css("height", cb_pxheight+"px");
			$j("img#product1").css("height", product_pxheight1+"px");
			$j("img#cb").show();
			$j("img#cb").parents(".specs-ruler-container").css("height", ($j("img#product1").height()+10)+"px");
			$j("img#product1").show();
			$j("img#product1").parents(".specs-ruler-container").css("height", ($j("img#product1").height()+10)+"px");
			if (typeof product2 !== "undefined") {
				$j("img#product2").css("height", product_pxheight2+"px");
				$j("img#product2").show();
			}

		}

		$j(".specs-ruler-container").css("height", (Math.max($j("img#product1").height(), $j("img#product2").height(), $j("img#cb").height())+10)+"px");

	},

	display_tab: function(tab_id, tab, scroll) {

		$j(".article").stop().hide();
		$j(".article."+tab_id).show(0, function() {
			if (scroll) {
				$j("html, body").animate({ scrollTop: $j(".breadcrumb").offset().top - 25 }, 300);
			}
			if ("resume" == tab_id) {
				var loc = window.location;
				if ("pushState" in history) {
					history.pushState("", document.title, loc.pathname + loc.search);
				} else {
					window.location.hash = "";
				}
			} else {
				window.location.hash = "#"+tab_id;
			}
		});

		if (tab) {
			$j(".tab-switcher").parent().removeClass("current");
			$j(".tab-switcher").removeClass("current");
			tab.parent().addClass("current");
			tab.addClass("current");
			tab = $j("a.current").attr("rel");
		}

		if ($j(".test-carousel").size() > 0) {
			$j(".test-carousel").trigger("destroy");
			$j(".test-carousel").carouFredSel({
				auto: true,
				mousewheel: true,
				scroll: {
					pauseOnHover: true
				},
				onCreate: function() {
					$j(".test-carousel").show();
					$j(".test-carousel").trigger("updateSizes");
				}
			});
		}

	},

	load_products_page: function() {
		//
		// LOAD PRODUCTS
		if ($j(".load-products").size() > 0) {
			$j(".load-products").click(function(e) {
				e.preventDefault();
				lp = $j(this);
				$j.ajax({
					type: "POST",
					url: "/server.php?action=load_products",
					data: {
						page: lp.attr("data-page"),
						flag: lp.attr("data-flag"),
						type: lp.attr("data-type"),
						category: lp.attr("data-category"),
						scope: lp.attr("data-scope"),
						term: lp.attr("data-term")
					},
					dataType: "html",
					beforeSend: function(xhr) {
						lp.html('<center><img src="https://static.hitek.fr/img/loading.gif"></center>');
					}
				}).done(function(data) {
					var data = $j.parseJSON(data) || data;
					var page = parseInt(lp.attr("data-page")) + 1;
					$j(".tests-content").last().after(data.template);
					if (1 == data.next) {
						lp.attr("data-page", page);
						lp.html('Plus de produits');
					} else {
						lp.remove();
					}
				});
			});
		}
		//
	},

	product_suscribe: function() {
		$j(".price-popup-submit").click(function() {
			$j(this).removeClass("price-popup-submit");
			var email = $j(".price-popup-email").val();
			var product_id = $j(".price-popup-hidden").val();
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (re.test(email)) {
				$j.ajax({
					type: "POST",
					url: "/server.php?action=prices_signup",
					data: {
						email: email,
						product_id : product_id,
						type: "prices"
					}
				}).done(function(data) {
					$j(".price-text").html("<p class='success_message'>Inscription réussie !<br>Votre adresse "+$j(".price-popup-email").val()+" a bien été enregistrée et nous vous communiquerons prochainement les derniers prix pour ce produit.</p>");
					$j(".price-popup-email").remove();
					$j(".price-popup-submit").remove();
					// setTimeout(function() {HK.popup.close_social_popup("#social_popup")}, 2500);
				});
			} else {
				$j(".price-text").html("<p class='error_message'>Une erreur est survenue, vérifiez que votre email est bien valide.</p>");
				$j(".price-popup-email").css("border", "2px solid red");
			}
		});
	}

}

HK.opinions = {

	init: function() {

		if ($j(".div-note").size() > 0) {

			$j(".note-star").mouseover(function() {
				$j(this).addClass("active");
				$j(this).prevAll(".note-star").addClass("active");
				$j(this).nextAll(".note-star").not(".locked").removeClass("active");
			});

			$j(".div-note td").mouseleave(function() {
				$j(this).find(".note-star").not(".locked").removeClass("active");
			});

			$j(".note-star").click(function() {
				$j(this).addClass("active").addClass("locked");
				$j(this).prevAll(".note-star").addClass("active").addClass("locked");
				$j(this).nextAll(".note-star").removeClass("active").removeClass("locked");
				$j(".note-rating[rel='"+$j(this).attr("rel")+"']").val($j(this).attr("data-note"));
			});

			$j(".toggle-details").show();
			$j(".opinions-main-list").on("click", ".toggle-details", function() {
				var rel = $j(this).attr("rel");
				$j(".note-details[rel='"+rel+"']").toggle();
			});

		}

		if ($j(".load-opinions").size() > 0) {

			$j(".load-opinions").click(function() {
				t = $j(this);
				$j.ajax({
					type: "POST",
					url: "/server.php?action=load_opinions",
					data: {
						ref: t.attr("data-ref"),
						page: t.attr("data-page")
					},
					dataType: "html",
					beforeSend: function(xhr) {
						t.html('<img src="https://static.hitek.fr/img/loading.gif">');
					}
				}).done(function(data) {
					var page = parseInt(t.attr("data-page")) + 1;
					var count = parseInt(t.attr("data-count"));
					var iter = parseInt(t.attr("data-iter"));
					$j(".opinions-main-list .content-opinions").last().after(data);
					t.attr("data-page", page);
					if ((page * iter) <= count) {
						t.html("Voir plus d'avis");
					} else {
						t.parents(".content-footer").remove();
					}
				});
			});

		}

	}

}

// read cookie
HK.readCookie = function(name, c, C, i) {
    if(HK.cookies){ return HK.cookies[name]; }
    c = document.cookie.split('; ');
    HK.cookies = {};
    for (i=c.length-1; i>=0; i--){
       C = c[i].split('=');
       HK.cookies[C[0]] = C[1];
    }
    return HK.cookies[name];
}

// create cookie
HK.createCookie = function(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else {
		var expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

$j(document).ready(function() {

	HK.commons.init();
	HK.article.init();
	HK.home.init();
	HK.carousel.init();
	HK.youtube.init();
	HK.comments.init();
	HK.vote.init();
	HK.mobile.init();
	HK.touchSlider.init();
	HK.products.init();
	HK.products.load_products_page();
	HK.opinions.init();

});
