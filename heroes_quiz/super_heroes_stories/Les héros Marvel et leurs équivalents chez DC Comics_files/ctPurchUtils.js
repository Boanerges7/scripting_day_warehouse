/* |!|  Uglify  |!| : Date  11-12-2018 */
!function(){var a={};a.commondDelegation=function(b){var c=b.eventAction||"",d=b.eventLabel||"";a.tracking(c,d)},a.encode=function(a){var b,c,d,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k=0,l=0,m="",n=[];if(!a)return a;do b=a.charCodeAt(k++),c=a.charCodeAt(k++),d=a.charCodeAt(k++),i=b<<16|c<<8|d,e=i>>18&63,f=i>>12&63,g=i>>6&63,h=63&i,n[l++]=j.charAt(e)+j.charAt(f)+j.charAt(g)+j.charAt(h);while(k<a.length);m=n.join("");var o=a.length%3;return(o?m.slice(0,o-3):m)+"===".slice(o||3)},a.getFormatImage=function(a,b,c,d){var e=("https:"===document.location.protocol?"https:":"http:")+"//assets.purch.com",f=e+"/creative-templates/misc/no_img_2000.jpg";if(d=d||"1",c=c||"1",!a||null==a.match(/\.(jpg|png|jpeg|gif)$/i))return this.getFormatImage(f,"rc",c,d);b=b?b:"rc";var g=a.match(/\.(jpg|png|jpeg|gif)$/i)[1],h=this.encode(a),i=e+"/ext/"+h;return"w"===b||"h"===b?i+"/"+b+"_"+c+"."+g:i+"/"+b+"_"+c+"x"+d+"."+g},a.getResizableImg=function(){for(var a=document.getElementsByTagName("img"),b=0;b<a.length;b++){var c=a[b].getAttribute("class");if(null!==c&&c.indexOf("bomRz")>=0){var d=a[b].getAttribute("data-src")||"",e=a[b].getAttribute("data-method")||"rc",f=a[b].getAttribute("data-w")||"75",g=a[b].getAttribute("data-h")||"35";a[b].src=this.getFormatImage(d,e,f,g)}}},a.protocol=function(a,b){var c="https:"===a.location.protocol;return(c?b.indexOf("https")>=0?"":"https://":b.indexOf("http")>=0?"":"http://")+b},a.addStyle=function(a,b,c){var d=a.createElement("link");d.type="text/css",d.rel="stylesheet",d.href=this.protocol(a,b),d.className="ctCss";var e=a.getElementsByTagName("head")[0];return d.onload=function(){try{c&&c()}catch(a){console.error(a)}},e.appendChild(d),d},a.addScript=function(a,b,c){var d=a.createElement("script");d.type="text/javascript",d.src=this.protocol(a,b),d.className="ctScript";var e=a.getElementsByTagName("head")[0];return d.onload=function(){try{c&&c()}catch(a){console.error(a)}},e.appendChild(d),d},a.addImage=function(a,b,c){var d=a.createElement("img");return d.style.width=c+"px",d.style.height=c+"px",d.style.display="none",d.className="ctImg",d.src=this.protocol(a,b),a.body.appendChild(d),d},a.Templating=new function(){var a={};this.init=function(a,b){this.cache={}},this.render=function(b,c){var d=/\W/.test(b)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+b.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'").replace(/data-href/gm,"href")+"');};return p.join('');"):a[b]=a[b]||this.render(document.getElementById(b).innerHTML);return c?d(c):d}},a.canUse=function(a,b){return b in a.body.style},a.canTransform=function(a){return this.canUse(a,"transform")},a.event=function(a,b,c){window.top.addEventListener?a.addEventListener(b,c,!1):window.top.attachEvent&&a.attachEvent("on"+b,c)},a.getPartnerName=function(a){return(a.match(/([^.]+)\.\w{1,3}(?:\.\w{2})?$/)||[])[1]||(a.match(/([^.]+)\.\w{2,4}(?:\.\w{2})?$/)||[])[1]},a.topOfElementIsInWindow=function(b){var c=a.getElementY(b),d=a.getWindowHeight(),e=a.getWindowY();return e>=c-d},a.getElementY=function(b){return a.getOffsetTop(b)},a.getOffsetTop=function(a){var b=0;do isNaN(a.offsetTop)||(b+=a.offsetTop);while(a=a.offsetParent);return b},a.getWindowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},a.getWindowY=function(){return window.pageYOffset||document.documentElement.scrollTop},a.tracking=function(a,b){try{var c=window.top.dataLayer||window.top.gtmDataLayer||[];c===[]&&window.top.ga&&window.top.ga("send","event",{eventCategory:"High Impact Ad Impression",eventAction:a,eventLabel:b}),a&&b&&c.push({event:"purch.highImpactAdImp","purch.highImpactAdImp.datas":{eventAction:a,eventLabel:b}})}catch(d){console.error(d)}},window.Purch=window.Purch||{},window.Purch.Utils=a}();