if (self.CavalryLogger) { CavalryLogger.start_js(["cd5Vp"]); }

__d("VideoTipJarTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:VideoTipJarLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:VideoTipJarLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:VideoTipJarLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setGamesOrderID=function(a){this.$1.games_order_id=a;return this};a.prototype.setMatchingQuantity=function(a){this.$1.matching_quantity=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setPaymentID=function(a){this.$1.payment_id=a;return this};a.prototype.setProductID=function(a){this.$1.product_id=a;return this};a.prototype.setSparkQuantity=function(a){this.$1.spark_quantity=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setTipJarEvent=function(a){this.$1.tip_jar_event=a;return this};a.prototype.setTipPaymentID=function(a){this.$1.tip_payment_id=a;return this};a.prototype.setUsdAmount=function(a){this.$1.usd_amount=a;return this};a.prototype.setUserAmount=function(a){this.$1.user_amount=a;return this};a.prototype.setUserCurrency=function(a){this.$1.user_currency=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVideoID=function(a){this.$1.video_id=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={games_order_id:!0,matching_quantity:!0,name:!0,payment_id:!0,product_id:!0,spark_quantity:!0,time:!0,tip_jar_event:!0,tip_payment_id:!0,usd_amount:!0,user_amount:!0,user_currency:!0,vc:!0,video_id:!0,weight:!0};e.exports=a}),null);
__d("LiveVideoInteractiveAlertSidePaneView.react",["Arbiter","JSResource","Placeholder.react","React","ReactHooks_DEPRECATED","lazyLoadComponent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("ReactHooks_DEPRECATED").useEffect,h=b("ReactHooks_DEPRECATED").useState,i=b("lazyLoadComponent")(b("JSResource")("IdentityBadgeEarnedAlertView.react").__setRef("LiveVideoInteractiveAlertSidePaneView.react"));a=function(a){__p&&__p();var c=h(null),d=c[0],e=c[1];g(function(){var a=b("Arbiter").subscribe("LiveVideoInteractiveAlert/sidePaneAlertReceived",function(a,b){return e(b)});return function(){return a&&a.unsubscribe()}});if(d===null)return null;switch(d.type){case"IDENTITY_BADGE_EARNED":return b("React").createElement(b("Placeholder.react"),{fallback:b("React").createElement("span",null)},b("React").createElement(i,{badgeName:"Familiar Face",badgeType:"frequent_watcher",videoID:a.videoID,onDismiss:function(){return e(null)}}));default:return null}};e.exports=a}),null);
__d("VideoChainingToken",["Base64"],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";this.$1=a}g.encode=function(a){"use strict";return new g(b("Base64").encode(JSON.stringify(a)))};g.prototype.decode=function(){"use strict";return JSON.parse(b("Base64").decode(this.$1))};e.exports=g}),null);
__d("TahoeActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({SET_MC:null,EXIT:null,SET_UFI_INSTANCE_ID:null});e.exports=a}),null);
__d("TahoeCopyrightMessage.react",["ix","cx","fbt","Image.react","React","SubscriptionsHandler","XUICloseButton.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=babelHelpers.inherits(a,b("React").Component);j=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=j.constructor).call.apply(a,[this].concat(d)),this.state={hasCopyrightAction:this.props.videoController.isAudioBlocked()},this.$2=function(){this.setState({hasCopyrightAction:!1})}.bind(this),b}a.prototype.componentDidMount=function(){this.$1=new(b("SubscriptionsHandler"))(),this.$1.addSubscriptions(this.props.videoController.addListener("blockVideo",function(){this.setState({hasCopyrightAction:!1})}.bind(this)),this.props.videoController.addListener("blockAudio",function(){this.setState({hasCopyrightAction:!0})}.bind(this)),this.props.videoController.addListener("unblockAudio",function(){this.setState({hasCopyrightAction:!1})}.bind(this)))};a.prototype.componentWillUnmount=function(){this.$1.release()};a.prototype.render=function(){return!this.state.hasCopyrightAction?null:b("React").createElement("div",{className:"_6ukn"},b("React").createElement(b("Image.react"),{src:g("519615")}),b("React").createElement("div",{className:"_6uko"},this.props.videoController.isBroadcaster()?i._("Votre vid\u00e9o peut \u00eatre mise en sourdine dans certains pays pendant la lecture de cette chanson."):i._("L\u2019audio de cette vid\u00e9o est d\u00e9sactiv\u00e9 car il contient de la musique qui ne peut pas \u00eatre jou\u00e9e dans le pays o\u00f9 vous vous situez.")),b("React").createElement(b("XUICloseButton.react"),{className:"_6ujz",shade:"light",tooltip:"Close",onClick:this.$2}))};e.exports=a}),null);
__d("TahoeDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.dispatch=this.dispatch.bind(this)}e.exports=new a({strict:!0})}),null);
__d("TahoeMainPlayerViewportTracking",["csx","StreamViewportTracking","ViewportTracking"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=25;h=babelHelpers.inherits(k,b("StreamViewportTracking"));i=h&&h.prototype;k.prototype.getTimetrackingDataToLog=function(a){a=i.getTimetrackingDataToLog.call(this,a);a.ft.src=j;return a};function k(){h.apply(this,arguments)}e.exports={setup:function(a,c,d){c=new k(b("StreamViewportTracking").getBehavior(a,c,"._5-yb",d));c.init(a);return c}}}),null);
__d("TahoeUpNextUnitPlaceholder.react",["cx","React"],(function(a,b,c,d,e,f,g){"use strict";function a(){return b("React").createElement("div",null,b("React").createElement("div",{className:"_27do"}),b("React").createElement("div",{className:"_27dr"}),b("React").createElement("div",{className:"_27em"}),b("React").createElement("div",{className:"_27en"}))}e.exports=a}),null);
__d("TahoeSidePanePlaceholder.react",["cx","Layout.react","React","TahoeUpNextUnitPlaceholder.react","TahoeV2Config"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("Layout.react").Column,j=b("Layout.react").FillColumn;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("TahoeV2Config").showTahoe2UI?b("React").createElement("div",{className:"_wxj _6j4x"},b("React").createElement("div",{className:"_6j4y"},b("React").createElement("div",{className:"_6j4z _6j4-"}),b("React").createElement("div",{className:"_6j4z _6j4_"}),b("React").createElement("div",{className:"_6j4z _6j50"}),b("React").createElement("div",{className:"_6j4z _6j54"}),b("React").createElement("div",{className:"_6j55"},b("React").createElement(b("Layout.react"),null,b("React").createElement(i,{className:"_3-90"},b("React").createElement("div",{className:"_6j56"})),b("React").createElement(j,null,b("React").createElement("div",{className:"_6j57"})))))):b("React").createElement("div",{className:"_wxj _1-z7"},b("React").createElement("div",{className:"_1kna"}),b("React").createElement("div",{className:"_1knc"}),b("React").createElement("div",{className:"_1knd"}),b("React").createElement("div",{className:"_1kne"}),b("React").createElement("div",{className:"_1knf"}),b("React").createElement("div",{className:"_1kng"}),b("React").createElement(b("TahoeUpNextUnitPlaceholder.react"),null))};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("TahoeUpNextViewportTracking",["csx","StreamViewportTracking","ViewportTracking"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j="tahoe_up_next_videos";h=babelHelpers.inherits(k,b("StreamViewportTracking"));i=h&&h.prototype;k.prototype.getTimetrackingDataToLog=function(a){a=i.getTimetrackingDataToLog.call(this,a);a.ft.tracking_source=j;return a};function k(){h.apply(this,arguments)}e.exports={setup:function(a,c,d){c=new k(b("StreamViewportTracking").getBehavior(a,c,"._bne",d));c.init(a);return c}}}),null);
__d("TahoeVideoStore",["FluxMapStore","TahoeActionTypes","TahoeDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxMapStore"));g&&g.prototype;a.prototype.reduce=function(a,c){switch(c.type){case b("TahoeActionTypes").SET_MC:a=a.set("mediaController",c.mediaController);break;case b("TahoeActionTypes").SET_UFI_INSTANCE_ID:a=a.set("ufiInstanceID",c.ufiInstanceID);break;case b("TahoeActionTypes").EXIT:a=b("immutable").Map();break;default:break}return a};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("TahoeDispatcher"))}),null);
__d("VideoInfoBottomPaneShimmer.react",["cx","ImageBlock.react","InlineBlock.react","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",{className:"_2ve3 _2ve4"},b("React").createElement("div",null,b("React").createElement(b("LeftRight.react"),null,b("React").createElement(i,{width:320}),b("React").createElement("span",null,b("React").createElement(k,null),b("React").createElement(k,null),b("React").createElement(k,null))),b("React").createElement(i,{width:222}),b("React").createElement("div",{className:"_2vev"},b("React").createElement(b("ImageBlock.react"),null,b("React").createElement("span",{className:"_2vew"}),b("React").createElement(b("InlineBlock.react"),{alignv:"middle",height:36,fullWidth:!0},b("React").createElement(l,{width:90,height:16}))))),b("React").createElement("div",{className:"_2vex"},b("React").createElement(j,{width:132}),b("React").createElement(j,{width:780}),b("React").createElement(j,{width:460})))};function a(){"use strict";h.apply(this,arguments)}var i=function(a){return b("React").createElement(l,{width:a.width,height:16,className:"_2vey"})},j=function(a){return b("React").createElement(l,{className:"_2vez",height:8,width:a.width})},k=function(){return b("React").createElement(l,{width:60,height:16,display:"inline-block",className:"_2ve-"})},l=function(a){var c=b("joinClasses")(a.className,"_2ve_");return b("React").createElement("div",{className:c,style:{width:a.width,height:a.height,display:a.display}})};l.defaultProps={display:"block"};e.exports=a}),null);
__d("FalcoLogger",["Banzai"],(function(a,b,c,d,e,f){"use strict";var g="falco:";a={log:function(a,c,d){d===void 0&&(d=!1),b("Banzai").post(g+a,c,d?b("Banzai").VITAL:b("Banzai").BASIC)}};e.exports=a}),null);
__d("VodPncSeeAllReactionsClickFalcoEvent",["FalcoLogger"],(function(a,b,c,d,e,f){"use strict";a.log=function(a){b("FalcoLogger").log("vod_pnc_see_all_reactions_click",a())};function a(){}e.exports=a}),null);
__d("XTahoeAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/tahoe/async/{id}/",{id:{type:"FBID",required:!0},externallogid:{type:"String"},sponsoreddata:{type:"String"},originalmediaid:{type:"String"},preload:{type:"Bool",defaultValue:!1},playerorigin:{type:"Enum",enumType:1},playersuborigin:{type:"String"},reactionvideochanneltype:{type:"Enum",enumType:1},reactionvideochannelsubtype:{type:"String"},ispermalink:{type:"Bool",defaultValue:!1},feedtracking:{type:"StringVector",defaultValue:[]},storyidentifier:{type:"String"},numcopyrightmatchedvideoplayedconsecutively:{type:"Int"},comment_id:{type:"Int"},reply_comment_id:{type:"Int"},payloadtype:{type:"Enum",enumType:1},tahoeviewhasrendered:{type:"Bool",defaultValue:!1}})}),null);
__d("XTahoeAsyncControllerPayloadType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALL:"all",PRIMARY:"primary",SECONDARY:"secondary"})}),null);
__d("XTahoeUpNextAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/tahoe/upnext/async/{media_id}/",{channel_id:{type:"String"},media_id:{type:"FBID",required:!0},viewed_videos:{type:"FBIDSet"},caller:{type:"Enum",enumType:1},chainingindex:{type:"Int"},cursor:{type:"String"},search_keywords:{type:"String"}})}),null);
__d("TahoeVideoView",["csx","cx","Arbiter","AsyncRequest","Bootloader","CSS","CurrentUser","DOM","DOMQuery","Event","EventProfiler","HTML","Keys","LiveVideoInteractiveAlertSidePaneView.react","React","ReactDOM","ReactRenderer","SubscriptionsHandler","TabBar","Tahoe","TahoeConstants","TahoeCopyrightMessage.react","TahoeLoggerEvent","TahoeMainPlayerViewportTracking","TahoeSidePanePlaceholder.react","TahoeUpNextViewportTracking","TahoeV2Config","TahoeVideoStore","TimeSlice","UFICentralUpdates","UFISharedDispatcher","UFIStoryActionType","URI","VideoInfoBottomPaneShimmer.react","VideoPermalinkURI","VideoPlayerStates","VideoTipJarTypedLogger","VodPncSeeAllReactionsClickFalcoEvent","XTahoeAsyncController","XTahoeAsyncControllerPayloadType","XTahoeUpNextAsyncController","ge","gkx","upNextVideoStateStore","uuid"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=4,j=b("TahoeV2Config").maximizeEndScreenVideoCount?16:9,k=/^[1-9]\d*$/,l=15,m="tahoe-preloaded-video",n=7,o="video-up-next-",p="video-up-next-wp-",q=4,r=97;function s(a,c,d,e){"use strict";__p&&__p();this.$9=null;this.$22=!1;this.$38=function(){b("CSS").hide(this.$20),this.$8.setFullWidth(!0)}.bind(this);this.$39=function(){b("CSS").show(this.$20),this.$8.setFullWidth(!1)}.bind(this);this.$70=function(){this.$12!=null&&b("CSS").hide(this.$12)}.bind(this);this.$8=a;this.$10=!1;this.$16=this.$8.getID();this.$32=c;this.$33=d;this.$34=new Set([this.$16]);this.$4=b("uuid")();this.$29=!1;this.$30=[];this.$28=null;this.$8.addEvent(b("Event").listen(document,"keydown",this.$36.bind(this)));this.$25=b("CSS").setClass(b("DOM").create("div"),"_1e8c _2b-0");this.$20=b("CSS").setClass(b("DOM").create("div"),"_5-lm _3aw0 _6j1g _6j1h");this.$6=b("CSS").setClass(b("DOM").create("div"),"_17am");this.$13=b("CSS").setClass(b("DOM").create("div"),"_76-1");this.$17=b("CSS").setClass(b("DOM").create("div"),"hidden_elem");this.$18=b("TahoeConstants").DEFAULT_BROWSER_TITLE;this.$23=b("DOM").create("div");b("ReactDOM").render(b("React").createElement(b("TahoeSidePanePlaceholder.react"),null),this.$20);b("gkx")("732464")&&b("ReactDOM").render(b("React").createElement(b("LiveVideoInteractiveAlertSidePaneView.react"),{videoID:a.getID()}),this.$13);b("TahoeV2Config").showTahoe2UI&&(this.$26=b("CSS").setClass(b("DOM").create("div"),"_437j"),b("CSS").hide(this.$25),b("DOM").appendContent(this.$8.getContent(),this.$26),b("ReactDOM").render([b("React").createElement(b("VideoInfoBottomPaneShimmer.react"),{key:"shimmer"}),b("React").createElement("div",{className:"_3l-q",key:"inner"})],this.$26));this.$25&&b("DOM").appendContent(this.$8.getContent(),this.$25);b("DOM").appendContent(this.$8.getSideContent(),this.$20);b("DOM").appendContent(this.$20,this.$6);b("DOM").appendContent(this.$20,this.$13);b("DOM").appendContent(this.$8.getContent(),this.$17);b("DOM").appendContent(this.$8.getContent(),this.$23);c=this.$8.getChannelID();d=this.$8.getCaller();this.$8.getMediaController()?(this.$37(this.$8.getID(),!1,c,d,null,e),this.setUpEndScreen(),this.setUpUFI(),this.setCopyrightMessage()):this.updateView(this.$8.getID(),c,d,null,e);this.$1=new(b("SubscriptionsHandler"))();this.$1.addSubscriptions(b("Arbiter").subscribe("UFIAddComment/focus",function(a,c){a=b("TahoeVideoStore").getState().toObject();a=a.ufiInstanceID;a===c.instanceid&&this.selectCommentTab()}.bind(this)),b("Arbiter").subscribe("quiet-mode-on",this.$38),b("Arbiter").subscribe("quiet-mode-off",this.$39),b("Arbiter").subscribe("quick-comments-visible-changed",function(a,b){return this.$40(b)}.bind(this)),b("UFICentralUpdates").subscribe("actor-changed",function(a,c){return this.$41(c.actorID===b("CurrentUser").getAccountID())}.bind(this)));b("UFISharedDispatcher").register(function(a){a.type===b("UFIStoryActionType").SHOW_COMMENTS&&this.selectCommentTab()}.bind(this))}s.prototype.$40=function(a){"use strict";var c=this.$42();if(c==null)return;a?b("CSS").addClass(c,"_4j8y"):b("CSS").removeClass(c,"_4j8y")};s.prototype.setUpUFI=function(){"use strict";var a=this.$8.getMediaController();a&&(this.$8.addEvent(a.addListener("commercialBreak/hideUFI",function(){return this.$43(!0)}.bind(this))),this.$8.addEvent(a.addListener("commercialBreak/showUFI",function(){return this.$43(!1)}.bind(this))))};s.prototype.$43=function(a){"use strict";b("gkx")("678266")||b("CSS").conditionClass(this.$6,"_17an",a),this.$25&&b("CSS").conditionClass(this.$25,"_3qt9",a)};s.prototype.setCopyrightMessage=function(){"use strict";__p&&__p();if(this.$9)return;var a=this.$8.getMediaController();a=a;if(!a)return;var c=b("DOM").create("div",{className:"_6ukq"});this.$9=c;b("DOM").appendContent(this.$8.getMediaContent(),c);b("ReactDOM").render(b("React").createElement(b("TahoeCopyrightMessage.react"),{videoController:a}),c)};s.prototype.$44=function(){"use strict";this.$9&&(b("ReactDOM").unmountComponentAtNode(this.$9),this.$9=null)};s.prototype.setUpEndScreen=function(){"use strict";__p&&__p();this.$22=!1;var a=this.$8.getMediaController();this.$8.addEvent(a.addListener("stateChange",this.$45.bind(this)));if(a.isLiveVideo())return;this.$8.addEvent(a.addListener("toggleFullscreen",this.$45.bind(this)));var c=a;if(!c)return;c.addListener("updateStatus",function(a){__p&&__p();var d=c.getPlaybackDuration();a=d-a.position;if(a>i){this.$28&&this.$46();return}a=c.getState();if(this.$28||a===b("VideoPlayerStates").PAUSED)return;this.$47(!1,!0,d>l,n)}.bind(this))};s.prototype.$47=function(a,c,d,e){"use strict";__p&&__p();if(this.$28)return;var f=this.$8.getMediaController(),g=f;if(!g)return;var h=b("DOM").create("div",{className:"_4n-p"});f=b("upNextVideoStateStore").getState().upNextVideoBuffer;var i=this.$48(f);b("Bootloader").loadModules(["TahoeUpNextOverlayAndEndScreen.react"],function(f){b("ReactRenderer").constructAndRenderComponent(f,{videoIDs:b("TahoeV2Config").showMoreUpNext?i:this.$30.slice(0,j),shouldShowUpNextOverlay:d&&!this.$22,countdownTimeoutSec:e,vpc:g,logEvent:function(a){this.$8.logEvent(a)}.bind(this),tahoeController:this.$8,hasCustomBackgroundForUpNextOverlay:a,isCurrentVideoReplayable:c,livingRoomID:this.$14},h,function(){this.$22=!0}.bind(this))}.bind(this),"TahoeVideoView");f=g.getRootNode();f=f&&f.firstChild;f&&(f.appendChild(h),this.$28=h)};s.prototype.$45=function(){"use strict";var a=this.$8.getMediaController();a=a;!a.isLiveVideo()?this.$25&&b("CSS").conditionClass(this.$25,"_65dt",a.isState(b("VideoPlayerStates").FINISHED)):a.isState(b("VideoPlayerStates").FINISHED)&&this.$47(!0,!1,!0,n)};s.prototype.$46=function(){"use strict";var a=this.$28;a&&(b("ReactDOM").unmountComponentAtNode(a),b("DOM").remove(a),this.$28=null)};s.prototype.$49=function(){"use strict";b("CSS").addClass(this.$8.getContent(),"_29du"),b("CSS").addClass(this.$20,"_4f4w"),this.$26&&b("CSS").addClass(this.$26,"_1udj"),this.$25&&b("DOM").empty(this.$25)};s.prototype.$50=function(){"use strict";__p&&__p();b("CSS").removeClass(this.$8.getContent(),"_29du");b("CSS").removeClass(this.$20,"_4f4w");this.$26&&b("CSS").removeClass(this.$26,"_1udj");var a=b("DOMQuery").find(this.$20,"._3dj6");if(b("gkx")("709572")){var c=this.$35;c&&(this.$31=b("TahoeUpNextViewportTracking").setup(c,a,r),this.$27=b("TahoeUpNextViewportTracking").setup(c,a,q))}if(this.$29){a=b("CSS").removeClass(a,"_3dj6");c=b("DOM").find(this.$17,"._3dj7");b("DOM").setContent(a,c);b("EventProfiler").informManualInteractionTimestamp(["Tahoe"],!0,"click");this.$29=!1;!this.$2&&c.childNodes&&c.childNodes[0]&&this.$51(c.childNodes[0],function(){b("TimeSlice").guard(this.$52.bind(this),"Tahoe preload next video",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()}.bind(this),function(){return this.selectCommentTab()}.bind(this))}b("TahoeV2Config").showTahoe2UI&&this.$8.resizeMedia()};s.prototype.$36=function(a){"use strict";a.keyCode===b("Keys").ESC&&!a.cancelBubble&&!a.defaultPrevented&&!this.$8.getIsPermalink()&&(this.$8.logEvent(b("TahoeLoggerEvent").EXIT_WITH_ESC),this.$8.onExit())};s.prototype.$53=function(a,c){"use strict";b("TahoeV2Config").showTahoe2UI&&(a&&this.$54(),c&&this.$55())};s.prototype.$56=function(a,c,d,e){"use strict";__p&&__p();if(!b("TahoeV2Config").showMoreUpNext){a=this.$57(a,d,e);a&&a.send()}d=b("DOMQuery").scry(this.$8.getContent(),"._1c_u");d[0]&&b("DOM").replace(d[0],b("DOMQuery").scry(c,"._5-yb")[0]);e=b("DOMQuery").scry(c,"._1w6j");a=b("DOMQuery").scry(c,"._3l-q");this.$53(e[0],a[0]);this.$25&&e[0]&&b("DOM").setContent(this.$25,e[0]);this.$26&&a[0]&&b("DOM").setContent(this.$26,a[0]);d=this.$42();d?b("DOM").replace(d,b("DOMQuery").find(c,"._1rgu")):b("DOM").appendContent(this.$20,b("DOMQuery").find(c,"._1rgu"));document.title=this.$18;s.registerPendingController(this.$19);this.$50();e=b("Tahoe").get();e&&e.emit("insertPreloadedElements")};s.prototype.$37=function(a,c,d,e,f,g){__p&&__p();g===void 0&&(g=null);this.$3=null;f=this.$58(a,c,f);g&&(g.commentID!=="0"&&f.setInt("comment_id",g.commentID),g.replyCommentID!=="0"&&f.setInt("reply_comment_id",g.replyCommentID));g=this.$8.getStoryIdentifier();g&&f.setString("storyidentifier",g);if(!b("gkx")("678924")){f.setEnum("payloadtype",c?b("XTahoeAsyncControllerPayloadType").ALL:b("XTahoeAsyncControllerPayloadType").SECONDARY);g=new(b("AsyncRequest"))(f.getURI()).setHandler(function(a){a=a.getPayload();var d=a.ufiTray,e=a.infoBottomPane,f=a.sidePane,g=a.video,h=a.autoplayAllowed;this.$53(d,e);c&&this.$59(b("HTML").replaceJSONWrapper(g&&g.markup),h);this.$60(b("HTML").replaceJSONWrapper(f&&f.markup),b("HTML").replaceJSONWrapper(e&&e.markup),b("HTML").replaceJSONWrapper(d&&d.markup),c);this.$61(a)}.bind(this));g.send()}else c&&this.$62(f.setEnum("payloadtype",b("XTahoeAsyncControllerPayloadType").PRIMARY).getURI()),this.$63(f.setEnum("payloadtype",b("XTahoeAsyncControllerPayloadType").SECONDARY).getURI(),c);if(!b("TahoeV2Config").showMoreUpNext){g=this.$57(a,d,e);g&&g.send()}this.$49()};s.prototype.$61=function(a){"use strict";__p&&__p();a.disablePreload&&(this.$11=!0);a.viewportTrackingConfig&&(this.$35=a.viewportTrackingConfig);this.$10=!!a.hasNearlyCompleteLicensedMusicTag;document.title=a.videoTitle||b("TahoeConstants").DEFAULT_BROWSER_TITLE;var c=this.$8.getContent(),d=this.$35;if(c&&d&&a.ftKey){var e=b("DOMQuery").scry(c,"._5-yb")[0];e&&(e.setAttribute("data-ft",a.ftKey),this.$15=b("TahoeMainPlayerViewportTracking").setup(d,c,r))}this.$50();b("EventProfiler").informManualInteractionTimestamp(["Tahoe"],!0,"click")};s.prototype.$59=function(a,c){"use strict";if(!a)return;var d=b("DOMQuery").scry(this.$8.getContent(),"._1c_u");d[0]&&b("DOM").replace(d[0],a);this.$8.setAutoplayAllowed(c)};s.prototype.$60=function(a,c,d,e){"use strict";__p&&__p();if(e){d&&b("DOM").setContent(this.$25,d);if(a){e=this.$42();e?b("DOM").replace(e,a):b("DOM").appendContent(this.$20,a)}}else d&&b("DOM").appendContent(this.$25,d),a&&b("DOM").appendContent(this.$20,a);c&&b("DOM").replace(this.$26.lastChild,c)};s.prototype.$42=function(){"use strict";return b("DOMQuery").scry(this.$20,"._1rgu")[0]};s.prototype.$58=function(a,c,d){"use strict";c=c?this.$64(a):[JSON.stringify(this.$8.getFeedTracking())];return b("XTahoeAsyncController").getURIBuilder().setFBID("id",a).setString("originalmediaid",this.$16).setEnum("playerorigin",this.$32).setString("playersuborigin",this.$33).setString("sponsoreddata",d).setString("externallogid",this.$8.getExternalLogID()).setEnum("reactionvideochanneltype",this.$8.getReactionVideoChannelType()).setString("reactionvideochannelsubtype",this.$8.getReactionVideoChannelSubtype()).setBool("ispermalink",this.$8.getIsPermalink()).setStringVector("feedtracking",c).setInt("numcopyrightmatchedvideoplayedconsecutively",this.$8.getNumCopyrightMatchedVideosPlayedConsecutively())};s.prototype.$54=function(){"use strict";b("CSS").show(this.$25),b("CSS").hide(this.$26),b("CSS").removeClass(this.$8.getContent(),"_-pb")};s.prototype.$55=function(){"use strict";b("CSS").show(this.$26),b("CSS").hide(this.$25),b("CSS").addClass(this.$8.getContent(),"_-pb")};s.prototype.$51=function(a,c,d){"use strict";a=b("DOMQuery").scry(a,"a")[0];a?(this.$3=a.getAttribute("href"),c&&c()):d&&d()};s.prototype.setUpNextChainingInfoFromReactElement=function(a){"use strict";this.$51(a,function(){b("TimeSlice").guard(this.$52.bind(this),"Tahoe preload next video",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()}.bind(this),function(){return this.selectCommentTab()}.bind(this))};s.prototype.$57=function(a,c,d){"use strict";__p&&__p();var e=b("ge")(o+a);if(e){var f=e.parentNode,g=Array.from(f.children);g.some(function(c){if(c.id!==o+a){b("DOM").remove(c);return!1}else return!0});b("DOM").remove(f.firstChild);b("DOM").appendContent(this.$17,f);if(f.children.length>=10){this.$65(Array.from(f.children));this.$29=!0;return null}}else!e&&a!==this.$16&&(this.$8.resetChannelData(),this.$5=null,c=null,d=null);g=b("XTahoeUpNextAsyncController").getURIBuilder().setFBID("media_id",a).setFBIDSet("viewed_videos",Array.from(this.$34)).setString("channel_id",c).setEnum("caller",d).setString("cursor",this.$5).setString("search_keywords",this.$8.getSearchKeywordsForVideoChaining());f=new(b("AsyncRequest"))(g.getURI()).setHandler(function(a){__p&&__p();a=a.getPayload();this.$5=a.chainingCursor;a.viewportTrackingConfig&&(this.$35=a.viewportTrackingConfig);a=b("HTML").replaceJSONWrapper(a.upNextUnit.markup);this.$29=!0;var c=b("DOMQuery").scry(this.$20,"._3dj6"),d=b("DOMQuery").scry(this.$17,"._3dj7");if(d[0]){b("DOM").appendContent(this.$17,a);d=b("DOMQuery").scry(this.$17,"._3dj7");var e=Array.from(d[1].children);e.forEach(function(a){b("DOM").appendContent(d[0],a)});b("DOM").remove(d[1]);a=d[0];var f={};Array.from(a.children).forEach(function(a){f[a.id]?b("DOM").remove(a):f[a.id]=!0});b("DOM").remove(d[0])}e=null;c[0]?(c=b("CSS").removeClass(c[0],"_3dj6"),b("DOM").setContent(c,a),this.$29=!1,e=c):(b("DOM").appendContent(this.$17,a),e=this.$17);b("gkx")("695515")&&(e=this.$20);d=b("DOMQuery").scry(e,"._3dj7");d[0]&&this.$65(Array.from(d[0].children));if(!b("gkx")("709572")){c=this.$35;c&&(this.$31=b("TahoeUpNextViewportTracking").setup(c,e,r),this.$27=b("TahoeUpNextViewportTracking").setup(c,e,q))}b("DOMQuery").scry(this.$20,"._3dj7");a=b("DOMQuery").scry(this.$20,"._bne");b("EventProfiler").informManualInteractionTimestamp(["Tahoe"],!0,"click");!this.$2&&a.childNodes&&a.childNodes[0]&&this.$51(a.childNodes[0],function(){b("TimeSlice").guard(this.$52.bind(this),"Tahoe preload next video",{propagationType:b("TimeSlice").PropagationType.ORPHAN})()}.bind(this),function(){return this.selectCommentTab()}.bind(this))}.bind(this));return f};s.prototype.$62=function(a){"use strict";new(b("AsyncRequest"))(a).setHandler(function(a){a=a.getPayload();var c=a.video;a=a.autoplayAllowed;this.$59(b("HTML").replaceJSONWrapper(c&&c.markup),a)}.bind(this)).send()};s.prototype.$63=function(a,c){"use strict";new(b("AsyncRequest"))(a).setHandler(function(a){a=a.getPayload();var d=a.ufiTray,e=a.infoBottomPane,f=a.sidePane;this.$53(d,e);this.$60(b("HTML").replaceJSONWrapper(f&&f.markup),b("HTML").replaceJSONWrapper(e&&e.markup),b("HTML").replaceJSONWrapper(d&&d.markup),c);this.$61(a)}.bind(this)).send()};s.prototype.$48=function(a){"use strict";return a.map(function(a){return a.id&&a.id.substring(o.length)}).filter(function(a){return this.$66(a)}.bind(this))};s.prototype.$67=function(a){"use strict";a=a.id&&a.id.substring(p.length);return this.$66(a)?a:null};s.prototype.$66=function(a){"use strict";return!a?!1:k.test(a)};s.prototype.$65=function(a){"use strict";this.$30=this.$48(a),this.$30.length<a.length&&(this.$14=this.$67(a[0]),this.$2=!0)};s.prototype.getCurrentVideoHasCopyrightMusicMatch=function(){"use strict";return this.$10};s.prototype.setUpNextVideoIDs=function(a){"use strict";this.$30=this.$48(a)};s.prototype.getUpNextVideoIDs=function(){"use strict";return this.$30};s.prototype.$52=function(){"use strict";__p&&__p();if(this.$11)return;var a=new(b("URI"))(this.$3),c=b("VideoPermalinkURI").parse(a);if(c===null)return;var d=c.video_id;if(!d)return;c=a.getQueryData().sp;a=this.$58(d,!0,c).setEnum("payloadtype",b("XTahoeAsyncControllerPayloadType").ALL).setBool("preload",!0);c=new(b("AsyncRequest"))(a.getURI()).setHandler(function(a){__p&&__p();a=a.getPayload();var c=b("DOM").create("div",{id:"preload-"+d,"class":m});b("DOM").appendContent(c,b("HTML").replaceJSONWrapper(a.video.markup));a.ufiTray&&b("DOM").appendContent(c,b("HTML").replaceJSONWrapper(a.ufiTray.markup));a.infoBottomPane&&b("DOM").appendContent(c,b("HTML").replaceJSONWrapper(a.infoBottomPane.markup));b("DOM").appendContent(c,b("HTML").replaceJSONWrapper(a.sidePane.markup));b("DOM").appendContent(this.$17,c);c=typeof a.autoplayAllowed==="boolean"?a.autoplayAllowed:!0;this.$18=a.videoTitle||b("TahoeConstants").DEFAULT_BROWSER_TITLE;this.$8.setAutoplayAllowed(c);this.$10=!!a.hasNearlyCompleteLicensedMusicTag}.bind(this));c.send()};s.prototype.$64=function(a){"use strict";var c=null;a=b("ge")(o+a);a&&a.getAttribute("data-ft")&&(c=['{"ft":'+a.getAttribute("data-ft")+"}"]);return c};s.prototype.selectAddComment=function(){"use strict";var a=b("DOMQuery").scry(this.$20,".UFIAddCommentInput");a[0]&&a[0].click();this.selectCommentTab()};s.prototype.selectCommentTab=function(){"use strict";var a=this.$42();a&&(b("CSS").addClass(a,"_601h"),b("CSS").removeClass(a,"_601i"),b("CSS").removeClass(a,"_6yny"),b("Arbiter").inform("TahoeView/selectCommentTab"))};s.prototype.selectUpNextTab=function(){"use strict";var a=this.$42();a&&(b("CSS").addClass(a,"_601i"),b("CSS").removeClass(a,"_601h"),b("CSS").removeClass(a,"_6yny"))};s.prototype.selectFriendPresenceTab=function(){"use strict";var a=this.$42();a&&(b("CSS").addClass(a,"_6yny"),b("CSS").removeClass(a,"_601i"))};s.prototype.setCommentOverlayActive=function(a){"use strict";var c=this.$42();if(!c)return;a?b("CSS").addClass(c,"_2l-1"):b("CSS").removeClass(c,"_2l-1")};s.prototype.updateView=function(a,c,d,e,f){e===void 0&&(e=null);f===void 0&&(f=null);this.$46();this.$34.add(a);var g=b("DOMQuery").scry(this.$17,"#preload-"+a);g[0]&&this.$19?(this.$56(a,g[0],c,d),this.$68()):(this.$68(),this.$31&&this.$31.cleanup(),this.$27&&this.$27.cleanup(),this.$15&&this.$15.cleanup(),this.$37(a,!0,c,d,e,f));this.$43(!1)};s.prototype.$68=function(){"use strict";this.$19=null;var a=b("DOMQuery").scry(this.$17,"."+m);Array.from(a).forEach(function(a){b("DOM").remove(a)})};s.prototype.toggleNativeSupportFlyout=function(){"use strict";var a=b("DOMQuery").scry(this.$20,".UFICommentSupportButton");a.length>0&&(a[0].dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),a[0].dispatchEvent(new MouseEvent("mouseup",{bubbles:!0})),a[0].click())};s.prototype.loadStickerGallery=function(){"use strict";b("Bootloader").loadModules(["TahoeStickerGallery"],function(a){a.loadStickerGallery(this.$23)}.bind(this),"TahoeVideoView")};s.prototype.$69=function(a,c){"use strict";this.$12==null?(this.$12=b("DOM").create("div"),b("DOM").prependContent(this.$20,this.$12),b("Bootloader").loadModules(["TahoeWoodhengeSignupViewRenderer"],function(b){b.render(a,c,this.$12,this.$70)}.bind(this),"TahoeVideoView")):this.$12!=null&&b("CSS").show(this.$12)};s.prototype.$41=function(a){"use strict";var c=this.$24;if(!c)return;a!==b("CSS").shown(c)&&b("CSS").toggle(c)};s.prototype.getBottomTrayHeight=function(){"use strict";return this.isRenderingBottomInfoPane()?this.$26&&this.$26.clientHeight:this.$25.clientHeight};s.prototype.isRenderingBottomInfoPane=function(){"use strict";return!b("CSS").shown(this.$25)};s.prototype.onExit=function(){"use strict";this.$1.release(),this.$46(),this.$44()};s.registerCommentLink=function(a){"use strict";var c=b("Tahoe").get();c&&c.addEvent(b("Event").listen(a,"click",function(){return c.getView().selectAddComment()}))};s.registerBecomeSupporterLink=function(a,c){"use strict";__p&&__p();var d=b("Tahoe").get();if(d==null)return;var e=d.getView();if(!(e instanceof s))return;var f=d.getMediaController().getMediaID();d.addEvent(b("Event").listen(a,"click",function(){e.$69(c,f)}))};s.registerPendingController=function(a){"use strict";var c=b("Tahoe").get();c&&a&&(c.updateMedia(a),c.emit("TahoeController/mediaControllerRegistered"))};s.registerPreloadController=function(a){"use strict";var c=b("Tahoe").get();c&&(c.getView().$19=a)};s.registerSidepaneTabbar=function(a){"use strict";__p&&__p();var c=b("Tahoe").get();if(c!=null){var d=c.getView();d instanceof s&&a.subscribe(b("TabBar").TAB_CLICK,function(a,b){switch(b){case"up-next":d.selectUpNextTab();break;case"comments":d.selectCommentTab()}})}};s.registerSupportLink=function(a){"use strict";__p&&__p();var c=b("Tahoe").get();if(c==null)return;var d=c.getView();if(!(d instanceof s))return;d.$24=a;c.addEvent(b("Event").listen(a,"click",function(){d.toggleNativeSupportFlyout(),new(b("VideoTipJarTypedLogger"))().setTipJarEvent("support_button_clicked").setVideoID(c.getMediaController().getMediaID()).log()}))};s.registerShowCommentsTabLink=function(a){"use strict";var c=b("Tahoe").get(),d=c&&c.getView();c&&d&&c.addEvent(b("Event").listen(a,"click",function(){return d.selectCommentTab()}))};s.registerShowMainTabLink=function(a){"use strict";var c=b("Tahoe").get(),d=c&&c.getView();c&&d&&c.addEvent(b("Event").listen(a,"click",function(){return d.selectUpNextTab()}))};s.registerShowFriendPresenceTabLink=function(a,c,d,e,f,g){"use strict";var h=b("Tahoe").get(),i=h&&h.getView(),j=function(){i&&i.selectFriendPresenceTab(),b("VodPncSeeAllReactionsClickFalcoEvent").log(function(){return{video_id:c,number_of_friends:d,friend_presence_type_first:e,friend_presence_type_second:f,friend_presence_type_third:g}})};h&&i&&h.addEvent(b("Event").listen(a,"click",j))};s.loadView=function(a,b,c,d){"use strict";return new s(a,b,c,d)};e.exports=s}),null);