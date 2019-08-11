
/* placementID:2071 */
tmntag.account('/10518929/Hitek_FR/Editorial');


tmntag.placements=["2071"];

tmntag.adunit({account:'/10518929/Hitek_FR/Editorial/a1-p1-s0',div:'oop_ad',targeting:{'_p':'1','adunit':['oop_ad'],'_a':'1','pos':['ATF']}});
tmntag.adunit({account:'/10518929/Hitek_FR/Editorial/a1-p1-s81',div:'header_ad',sizeMapping:[[[1000, 200], [[1, 1], [728, 90], [970, 90], [970, 200], [970, 250], [990, 90], [990, 200], [990, 250], [1000, 90], [1000, 200], [1000, 250]]], [[728, 200], [[1, 1], [728, 90]]], [[480, 200], [[1, 1], [300, 50], [320, 50], [360, 60], [480, 80]]], [[360, 200], [[1, 1], [300, 50], [320, 50], [360, 60]]], [[320, 200], [[1, 1], [300, 50], [320, 50]]], [[216, 200], [[1, 1], [120, 20], [168, 28], [216, 36]]], [[0, 0], [[1, 1]]]],sizes:[[1,1],[728,90],[970,90],[970,200],[970,250],[990,90],[990,200],[990,250],[1000,90],[1000,200],[1000,250]],targeting:{'_p':'1','adunit':['header_ad'],'_a':'1','pos':['ATF']}});
tmntag.adunit({account:'/10518929/Hitek_FR/Editorial/a1-p1-s81',div:'side_ad',sizeMapping:[[[768, 200], [[1, 1], [250, 250], [300, 250], [300, 600], [300, 1050]]], [[0, 0], [1, 1]]],sizes:[[1,1],[250,250],[300,250],[300,600],[300,1050]],targeting:{'_p':'1','adunit':['side_ad'],'_a':'1','pos':['ATF']}});
tmntag.adunit({account:'/10518929/Hitek_FR/Editorial/a0-p1-s81',div:'side_ad2',sizeMapping:[[[768, 200], [[1, 1], [250, 250], [300, 250], [300, 600], [300, 1050]]], [[0, 0], [1, 1]]],sizes:[[1,1],[250,250],[300,250],[300,600],[300,1050]],targeting:{'_p':'1','adunit':['side_ad2'],'_a':'0','pos':['BTF']}});
tmntag.adunit({account:'/10518929/Hitek_FR/Editorial/a0-p1-s0',div:'incontent_ad',sizeMapping:[[[451, 200], [1, 2]], [[300, 200], [[1, 2], [250, 250], [300, 250]]], [[0, 0], [1, 1]]],sizes:[[1,2]],adunitRule:function(divid){ try {var callback=/* jshint unused:false, -W074, -W106 */
/* globals tmntag */
/*
 ** 4 Parameters : CSS selectors, position of the divID, number of repetition for desktop, number of repetition for mobile
 ** CSS selector like in jQuery : #ID .Class
 ** Positions : beforebegin, beforeend, afterbegin, afterend
 ** Default position : afterend
 ** Default number of repetition : number of items given by the css selector
 **
 ** Example :PurchMultipleInContent("in_article", {'selectors':'#container .content','position':'beforeend','repetitionDesk': 5, 'repetitionMob': 2});
 */

function PurchMultipleInContent(divId, params) {
  /* PurchMultipleInContent */
  var selectors = params && params.selectors;
  var position = params && params.position || 'afterend';
  var t = 0;

  if(window.Purch && window.Purch.Ramp){
    window.Purch.Ramp.dynPlaceholders = window.Purch.Ramp.dynPlaceholders || {};
    window.Purch.Ramp.dynPlaceholders[divId] = selectors;
  }

  this.insertAdjacentHTML = function insertAdjacentHTML(position, newNode, referenceNode) {
    if (t === 0) {
      var parent = newNode.parentNode;
      if (parent) {
        parent.removeChild(newNode);
      }
      t = 1;
    }
    referenceNode.insertAdjacentHTML(position, newNode.outerHTML);
  };
  // Place target divs (source + clones), and return rule validation
  if (!divId || !selectors || !position) {
    return false;
  }
  var aTarget = document.querySelectorAll(selectors);
  var device = 'Computer';
  var repetitionType = device === 'Mobile' ? 'repetitionMob' : 'repetitionDesk';

  var repetition = params && params[repetitionType] || aTarget.length;

  if (repetition > aTarget.length) {
    repetition = aTarget.length;
  }
  // place div source if not already done
  if (aTarget && aTarget.length) {
    // For loop for clones
    for (var i = 0; i < repetition; i++) {
      if (i === 0) {
        var newDiv = document.getElementById(divId);
        if (!newDiv) {
          newDiv = document.createElement('div');
        }
        newDiv.id = divId;
        this.insertAdjacentHTML(position, newDiv, aTarget[i]);
      } else {
        var newId = divId + '-' + i + new Date().getTime();
        var newDivC = document.createElement('div');
        newDivC.id = newId;
        newDivC.className = 'purchrtb-dynamic';

        var adParams = tmntag.getAdParameters(divId);
  		if (adParams && adParams.adunit_style) {
          newDivC.setAttribute('style', adParams.adunit_style);
        }

        this.insertAdjacentHTML(position, newDivC, aTarget[i]);
      }
    }
  }
  return document.querySelectorAll(selectors).length > 0;
};return callback(divid,{'position':'','selectors':'.content-articles .article > p:nth-of-type(3),  #fiche .separator-grande:first-child > *:last-child, .content-articles .test-content-article > p:nth-of-type(3), .content-basics .separator:first-child > *:last-child'});}catch(exception) {console && console.error && console.error(exception);}},targeting:{'_p':'1','adunit':['incontent_ad'],'_a':'0','pos':['MTF']}});

if (typeof tmntag==='undefined') tmntag={};
tmntag.pubtargets = [];
tmntag.pubtargets.push(['TUUID', '9d7a4dde621f4e00972e5ef625834f7c']);
tmntag.pubtargets.push(['tag', ['superheros','dc_comics','marvel','mangas','cat_generique']]);
tmntag.pubtargets.push(['_rid', '2142738929448787329']);
tmntag.pubtargets.push(['_rid', '2142738929448787329']);
tmntag.pubtargets.push(['_c', '1']);
tmntag.pubtargets.push(['_pgid', 'bf30975c']);
tmntag.pubtargets.push(['mcat', ['p6']]);
tmntag.pubtargets.push(['scat', ['i1', 'i2', 'i163', 'i174', 'i211']]);
tmntag.pubtargets.push(['urlhash', 'GqgGYJ0Imsc']);
tmntag.pubtargets.push(['fr', 'false']);
tmntag.pubtargets.push(['adt', 'veryLow']);
tmntag.pubtargets.push(['alc', 'veryLow']);
tmntag.pubtargets.push(['dlm', 'veryLow']);
tmntag.pubtargets.push(['drg', 'veryLow']);
tmntag.pubtargets.push(['hat', 'medium']);
tmntag.pubtargets.push(['off', 'low']);
tmntag.pubtargets.push(['vio', 'low']);
tmntag.pubtargets.push(['_chnl', 'WEB']);
tmntag.markups=tmntag.markups||[];
tmntag.markupsInfo=tmntag.markupsInfo||[];
tmntag.adtargets=[];
tmntag.adtargets['incontent_ad']=[];
tmntag.adtargets['incontent_ad'].push(['_wb', '5']);
tmntag.adtargets['incontent_ad'].push(['adunit', 'incontent_ad']);
tmntag.adtargets['incontent_ad'].push(['_p', '1']);
tmntag.adtargets['incontent_ad'].push(['adunit', 'incontent_ad']);
tmntag.adtargets['incontent_ad'].push(['_a', '0']);
tmntag.adtargets['incontent_ad'].push(['pos', 'MTF']);
tmntag.adtargets['oop_ad']=[];
tmntag.adtargets['oop_ad'].push(['_wb', '1']);
tmntag.adtargets['oop_ad'].push(['adunit', 'oop_ad']);
tmntag.adtargets['oop_ad'].push(['_p', '1']);
tmntag.adtargets['oop_ad'].push(['adunit', 'oop_ad']);
tmntag.adtargets['oop_ad'].push(['_a', '1']);
tmntag.adtargets['oop_ad'].push(['pos', 'ATF']);
tmntag.adtargets['side_ad']=[];
tmntag.adtargets['side_ad'].push(['_wb', '3']);
tmntag.adtargets['side_ad'].push(['adunit', 'side_ad']);
tmntag.adtargets['side_ad'].push(['_p', '1']);
tmntag.adtargets['side_ad'].push(['adunit', 'side_ad']);
tmntag.adtargets['side_ad'].push(['_a', '1']);
tmntag.adtargets['side_ad'].push(['pos', 'ATF']);
tmntag.adtargets['side_ad2']=[];
tmntag.adtargets['side_ad2'].push(['_wb', '4']);
tmntag.adtargets['side_ad2'].push(['adunit', 'side_ad2']);
tmntag.adtargets['side_ad2'].push(['_p', '1']);
tmntag.adtargets['side_ad2'].push(['adunit', 'side_ad2']);
tmntag.adtargets['side_ad2'].push(['_a', '0']);
tmntag.adtargets['side_ad2'].push(['pos', 'BTF']);
tmntag.adtargets['header_ad']=[];
tmntag.markups['header_ad']='<span class=\"PubAPIAd\"  id=\"B6FF5E49-B638-465E-A4A4-653E574F8FC3\"><script type=\'text\/javascript\' src=\'https:\/\/lyr.pubmatic.com\/AdServer\/layer?pubid=156007&nwid=156007&ts=1546694098&cid=23041&pimprid=46_115_zrY2ftAYlF&uimprid=B6FF5E49-B638-465E-A4A4-653E574F8FC3&mid=OpenRTBIntegration22040&plen=1916&a=0.54&ucrid=13119523993278248984&t=RMXZW09R1FXTVE9PT0maWQ9MjMwNDEmY2lkPTIzMDQxJmNmPTEmZnA9MC41MDgzMjYmcHA9MC41NCZ0cD0wJnBlPTAuMDAwMDAwJnB1YmlkPTE1NjAwNyZlZHNwPTEmY3A9MC41MDgyMjQmc3Rwcj0wLjAwMDAwMCZzdHBlPTAuMDUwMDAwJnN0cGNhcD01MC4wMDAwMDAmcDI9MzowLjAwMDAwMCZjbGVuPTEyNTcmY3I9JTNDaWZyYW1lJTIwc3JjJTNEJTIyaHR0cHMlM0ElMkYlMkZhbXMuY3JlYXRpdmVjZG4uY29tJTJGaW1wLWRlbGl2ZXJ5JTNGaWQlM0QyMDE5MDEwNV9SRzg0a3Q5RmdRa2xVTUJObjdYYiUyNmFtcCUzQmN1cmwlM0RodHRwcyUyNTNBJTI1MkYlMjUyRmFtcy5jcmVhdGl2ZWNkbi5jb20lMjUyRmNsaWNrcyUyNTNGaWQlMjUzRDIwMTkwMTA1X1JHODRrdDlGZ1FrbFVNQk5uN1hiJTI1MjZ0JTI1M0QxNTQ2Njk0MDk4MjI4JTI1MjZzJTI1M0RwdWJtYXRpYyUyNTI2cCUyNTNEcnE4Tmh4ckJZaDYyR1dJZW1kMFMlMjUyNmMlMjUzRDNqRUY4ZE9MUE1XRFF4NUJzWVNDJTI1MjZ0ZGMlMjUzRGFtcyUyNTI2JTI1N0JFWFRSQV9DTElDS19QQVJBTVMlMjU3RCUyNmFtcCUzQmx1cmwlM0QlMjU3QlJFVEFSR0VUSU5HX09GRkVSX1VSTCUyNTdEJTI1MjZ1dG1fY2FtcGFpZ24lMjUzRHJ0YmhvdXNlJTI1M0FyZXR1cm5pbmclMjZhbXAlM0J0JTNEMTU0NjY5NDA5ODIyOCUyNmFtcCUzQnMlM0RwdWJtYXRpYyUyNmFtcCUzQnAlM0RycThOaHhyQlloNjJHV0llbWQwUyUyNmFtcCUzQmMlM0QzakVGOGRPTFBNV0RReDVCc1lTQyUyNmFtcCUzQmNyJTNEWWJhdzJ4NXhSMHAwd0QydktCaGglMjZhbXAlM0J0ZGMlM0RhbXMlMjIlMjB3aWR0aCUzRCUyMjk3MCUyMiUyMGhlaWdodCUzRCUyMjI1MCUyMiUyMHNjcm9sbGluZyUzRCUyMm5vJTIyJTIwZnJhbWVCb3JkZXIlM0QlMjIwJTIyJTNFJTNDJTJGaWZyYW1lJTNFJTNDaW1nJTIwc3JjJTNEJTIyaHR0cHMlM0ElMkYlMkZhbXMuY3JlYXRpdmVjZG4uY29tJTJGd2luLW5vdGlmeSUzRmlkJTNEMjAxOTAxMDVfUkc4NGt0OUZnUWtsVU1CTm43WGIlMjZhbXAlM0J0JTNEMTU0NjY5NDA5ODIyOCUyNmFtcCUzQnMlM0RwdWJtYXRpYyUyNmFtcCUzQnAlM0RycThOaHhyQlloNjJHV0llbWQwUyUyNmFtcCUzQmMlM0QzakVGOGRPTFBNV0RReDVCc1lTQyUyNmFtcCUzQnRkYyUzRGFtcyUyNmFtcCUzQndwJTNEJTdCUFNQTSU3RCUyMiUyMHdpZHRoJTNEJTIyMSUyMiUyMGhlaWdodCUzRCUyMjElMjIlMjBzdHlsZSUzRCUyMnBvc2l0aW9uJTNBZml4ZWQlM0IlMjIlM0UlMEElM0NzY3JpcHQlMjB0eXBlJTNEJTIydGV4dCUyRmphdmFzY3JpcHQlMjIlMjBzcmMlM0QlMjJodHRwcyUzQSUyRiUyRmMuYmV0cmFkLmNvbSUyRnN1cmx5LmpzJTNGJTNCYWRfdyUzRDk3MCUzQmFkX2glM0QyNTAlM0Jjb2lkJTNEMzQ4JTNCbmlkJTNENzg3NSUzQmVjYWlkJTNEMTU2MDA3JTNCJTIyJTNFJTNDJTJGc2NyaXB0JTNF=\'><\/script><iframe width=\"0\" scrolling=\"no\" height=\"0\" frameborder=\"0\" src=\"https:\/\/ads.pubmatic.com\/AdServer\/js\/showad.js#PIX&ptask=DSP&SPug=1&fp=1&mpc=10&u=7A7CA6A6-D432-460D-A4C5-3596D90A1CB7&p=156007&s=283008&d=3&cp=0&sc=1&rs=0&os=0\" style=\"position:absolute;top:-15000px;left:-15000px\" vspace=\"0\" hspace=\"0\" marginwidth=\"0\" marginheight=\"0\" allowtransparency=\"true\" name=\"synciframe\"><\/iframe><\/span> <!-- PubMatic Ad Ends --><iframe width=\"0\" scrolling=\"no\" height=\"0\" frameborder=\"0\" src=\"https:\/\/lyr.pubmatic.com\/AdServer\/layer?pubid=156007&nwid=156007&ts=1546694098&cid=23041&pimprid=46_115_zrY2ftAYlF&uimprid=B6FF5E49-B638-465E-A4A4-653E574F8FC3&mid=OpenRTBIntegration22040&plen=1640&a=0.54&ucrid=13119523993278248984&t=WFIZW09SVFJTVE9PT0maWQ9MjMwNDEmY2lkPTIzMDQxJmNmPTEmZnA9MC41MDgzMjYmcHA9MC41NCZ0cD0xJnBlPTAuMDAwMDAwJnB1YmlkPTE1NjAwNyZlZHNwPTEmY3A9MC41MDgyMjQmc3Rwcj0wLjAwMDAwMCZzdHBlPTAuMDUwMDAwJnN0cGNhcD01MC4wMDAwMDAmcDI9MzowLjAwMDAwMCZjbGVuPTEwNTAmY3I9aHR0cHMlM0ElMkYlMkZha3RyYWNrLnB1Ym1hdGljLmNvbSUyRkFkU2VydmVyJTJGQWREaXNwbGF5VHJhY2tlclNlcnZsZXQlM0ZvcGVySWQlM0QxJTI2cHViSWQlM0QxNTYwMDclMjZzaXRlSWQlM0QyODMwMDglMjZhZElkJTNEMTM2ODQ4NiUyNmFkVHlwZSUzRDEwJTI2YWRTZXJ2ZXJJZCUzRDI0MyUyNmtlZmFjdCUzRCU3QlBTUE0lN0QlMjZrYXhlZmFjdCUzRCU3QlBTUE0lN0QlMjZrYWROZXRGcmVxdWVjeSUzRDAlMjZrYWR3aWR0aCUzRDk3MCUyNmthZGhlaWdodCUzRDI1MCUyNmthZHNpemVpZCUzRDMyJTI2a2x0c3RhbXAlM0QxNTQ2Njk0MDk4JTI2aW5kaXJlY3RBZElkJTNEMCUyNmFkU2VydmVyT3B0aW1pemVySWQlM0QyJTI2cmFucmVxJTNEMC4xJTI2a3BibXRwZmFjdCUzRCU3QlBTUE0lN0QlMjZ0bGRJZCUzRDQxMTQzMzUzJTI2cGFzc2JhY2slM0QwJTI2ZWtlZmFjdCUzRCU3QlBTUE0lN0QlMjZla2F4ZWZhY3QlM0QlN0JQU1BNJTdEJTI2ZWtwYm10cGZhY3QlM0QlN0JQU1BNJTdEJTI2c3ZyJTNEQklEMjI0MDhVJTI2ZmJzJTNEMSUyNmNySUQlM0RZYmF3Mng1eFIwcDB3RDJ2S0JoaCUyNmxwdSUzRGp1bWlhLmNpJTI2dWNyaWQlM0QxMzExOTUyMzk5MzI3ODI0ODk4NCUyNmNhbXBhaWduSWQlM0QyMzA0MSUyNmNyZWF0aXZlSWQlM0QwJTI2cGN0ciUzRDAuMDAwMDAwJTI2d0RTUEJ5cklkJTNEMCUyNndEc3BJZCUzRDYzMiUyNndiSWQlM0QxMSUyNndySWQlM0QwJTI2d0FkdklEJTNEMTAwNzU5JTI2aXNSVEIlM0QxJTI2cnRiSWQlM0Q4NDc4MUVCNS1GMTBCLTRDREQtQkUzNi00MTE0NTlGNkJBQzMlMjZpbXBySWQlM0RCNkZGNUU0OS1CNjM4LTQ2NUUtQTRBNC02NTNFNTc0RjhGQzMlMjZvaWQlM0RCNkZGNUU0OS1CNjM4LTQ2NUUtQTRBNC02NTNFNTc0RjhGQzMlMjZjb3VudHJ5JTNEQ0klMjZjbnRyeUlkJTNENDYlMjZkb21haW4lM0RoaXRlay5mciUyNnBhZ2VVUkwlM0RodHRwcyUyNTNBJTI1MkYlMjUyRmhpdGVrLmZyJTI1MkZhY3R1YWxpdGUlMjUyRm1hcnZlbC1kYy1zdXBlcmhlcm9zLWVxdWl2YWxlbnRzXzg1NTQlMjZzZWMlM0Qx=\" style=\"position:absolute;top:-15000px;left:-15000px\" vspace=\"0\" hspace=\"0\" marginwidth=\"0\" marginheight=\"0\" allowtransparency=\"true\" name=\"pbeacon\"><\/iframe>\n<script> !(function() { var params = { id: \'2142738929448787329\', pdid: \'\', bid: \'80\', cp: \'0.54\', pl: \'0.54\', z: \'970x250\', bdrid: \'46\', crid: \'\', ad: \'jumia.ci\', puids: \'1\', e: \'|4|48|104|107|\', l: \'https%3A%2F%2Fhitek.fr%2Factualite%2Fmarvel-dc-superheros-equivalents_8554\', ts: \'1546694098184\', chnl: \'WEB\', dt: \'false\'}; try { var i = 0; var w = window.self; while (w != window.top && !(w.tmntag_triggerEvent || w.pbjs) && i < 10) { w = window.self.parent; i++; } if (typeof w.tmntag_triggerEvent === \'function\') { w.tmntag_triggerEvent(\'CP\', params); } else if (typeof w.pbjs != \'undefined\' && typeof w.pbjs.purchs2s != \'undefined\' && typeof w.pbjs.purchs2s.triggerEvent === \'function\') { w.pbjs.purchs2s.triggerEvent(\'CP\', params); } else if (typeof w.purchs2s != \'undefined\' && w.purchs2s && typeof w.purchs2s.triggerEvent === \'function\') { w.purchs2s.triggerEvent(\'CP\', params); } else { console.error(\'- RAMP - Missing function tmntag_triggerEvent for CP record \', params); } } catch (e) { var qs = \'\'; if (params) for (var k in params) { if (qs != \'\') qs += \'&\'; if (params[k].indexOf(\'$\') == -1) { qs += k + \'=\' + params[k]; } } var tm_alt = 0; if (params && params[\'ts\'] && params[\'ts\'].indexOf(\'$\') == -1) { tm_alt = Date.now() - params[\'ts\']; } var r = Math.floor(Math.random() * 11000); qs = \'t=CP&r=\' + r + \'&tm_alt=\' + tm_alt + \'&\' + qs; var e = document.createElement(\'script\'); e.src = \'\/\/ads2.servebom.com\/event.js?\' + qs; var scripts = document.getElementsByTagName(\'script\')[0]; scripts.parentNode.insertBefore(e, scripts); } })(); <\/script>';
tmntag.markupsInfo['header_ad']={};
tmntag.markupsInfo['header_ad']['width']=970;
tmntag.markupsInfo['header_ad']['height']=250;
tmntag.markupsInfo['header_ad']['biddername']='Pubmatic-EMEA';
tmntag.markupsInfo['header_ad']['bidderid'] = '46';
tmntag.adtargets['header_ad'].push(['_bd', 'bid']);
tmntag.adtargets['header_ad'].push(['_cp', '0.54']);
tmntag.adtargets['header_ad'].push(['_pl', '0.54']);
tmntag.adtargets['header_ad'].push(['_br', '60822169']);
tmntag.adtargets['header_ad'].push(['_ll', 0]);
tmntag.adtargets['header_ad'].push(['_wb', '80']);
tmntag.adtargets['header_ad'].push(['adunit', 'header_ad']);
tmntag.adtargets['header_ad'].push(['_sz', '76']);
tmntag.adtargets['header_ad'].push(['_p', '1']);
tmntag.adtargets['header_ad'].push(['adunit', 'header_ad']);
tmntag.adtargets['header_ad'].push(['_a', '1']);
tmntag.adtargets['header_ad'].push(['pos', 'ATF']);
tmntag.adtargets['side_ad']=tmntag.adtargets['side_ad']||[];
tmntag.adtargets['side_ad2']=tmntag.adtargets['side_ad2']||[];
tmntag.adtargets['incontent_ad']=tmntag.adtargets['incontent_ad']||[];
tmntag.adtargets['header_ad']=tmntag.adtargets['header_ad']||[];
tmntag.adtargets['side_ad'].push(['id', 'e6807d51-10eb-11e9-96aa-382c4ac6318d']);
tmntag.adtargets['side_ad'].push(['vw', ['40', '50']]);
tmntag.adtargets['side_ad'].push(['grm', ['40', '50']]);
tmntag.adtargets['side_ad'].push(['pub', ['40']]);
tmntag.adtargets['side_ad2'].push(['id', 'e6807d56-10eb-11e9-96aa-382c4ac6318d']);
tmntag.adtargets['incontent_ad'].push(['id', 'e6807d57-10eb-11e9-96aa-382c4ac6318d']);
tmntag.adtargets['incontent_ad'].push(['vw', ['40', '50', '60', '70']]);
tmntag.adtargets['incontent_ad'].push(['grm', ['40', '50', '60', '70', '80']]);
tmntag.adtargets['incontent_ad'].push(['pub', ['40', '50', '60', '70']]);
tmntag.adtargets['header_ad'].push(['id', 'e6807d4c-10eb-11e9-96aa-382c4ac6318d']);
tmntag.adtargets['header_ad'].push(['vw', ['40', '50']]);
tmntag.adtargets['header_ad'].push(['grm', ['40', '50']]);
tmntag.adtargets['header_ad'].push(['pub', ['40']]);
tmntag.adparams=tmntag.adparams||{};
tmntag.pubtargets.push(['_sw1440', '1']);
tmntag.pubtargets.push(['_sh640', '1']);
tmntag.pubtargets.push(['_ex', '|4|48|104|107|']);
tmntag.pubtargets.push(['_plc', ['2071']]);
if(typeof window.context=="undefined"||!window.context)top.window.requestid="2142738929448787329";if(typeof window.context=="undefined"||!window.context)top.window.experiments="|4|48|104|107|";tmntag.processTmntagResponse();try {
(function(){var a,c,b;c=false;a=document.createElement("script");a.type="text/javascript";a.src="https://cdn.digitru.st/prod/1/digitrust.min.js";a.onload=a.onreadystatechange=function(){if(!c&&(!this.readyState||this.readyState==="complete")){c=true;var a="${PAGE_DOMAIN:DIGITRUST_MEMBER_ID}",b="${PAGE_DOMAIN:DIGITRUST_SITE_ID}";if(a.indexOf("$")===0)a="v46nlNRxd9";if(b.indexOf("$")===0)b="qjWen4BfnB";DigiTrust.initialize({member:a,site:b},function(a){})}};b=document.getElementsByTagName("script")[0];
b.parentNode.insertBefore(a,b)})();
} catch (e) {
console.error(e);
}
try {
window.CONFIANT_WRAPPER_ID=window.CONFIANT_WRAPPER_ID||"EV--s71bP55vR4HASx1ThUkciXM";
window.confiantWrapWithCallback=function(e,a,t,g,u){function l(b){return(m(b)||"")[n]("/","_")[n]("+","-")}function v(b,c,a){b=w+p(b)+"&d="+c;c="err__"+1*new Date;d[c]=a;a="<"+f+" on"+x+'="void('+c+'())" '+y+'="'+b+'" type="text/java'+f+'" ></'+f+">";e[q](a)}function z(){var b=l(g+"/"+k.k.hb_bidder[0]+":"+k.k.hb_size[0]),c={wh:b,wd:h.parse(h[r](k)),wr:0};v(b,l(h[r](c)),function(){e[q](a.ad)});var f={prebid:{adId:a.adId,cpm:a.cpm}},c={d:c,t:a.ad,cb:u,id:f};d[g]={},d[g][b]=c}var A=a.bidder,B=a.size,
d=e.parentWindow||e.defaultView,h=d.JSON,m=d.btoa,p=d.encodeURIComponent;if(!h||!m)return!1;var C="t",D="i",f="script",y="src",n="replace",x="error",r="stringify",q="wr"+D+C+"e",w="https://"+t+"/?wrapper="+p(g)+"&tpid=",k={k:{hb_bidder:[A],hb_size:[B]}};return z(),e.close(),!0};
} catch (e) {
console.error(e);
}
try {
try{(function(){var a=document.createElement("script");a.id="ean-native-embed-tag";a.src="//cdn.elasticad.net/native/serve/js/nativeEmbed.gz.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()}catch(a){console.log(a)};
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

!function(b,e,c){function g(b){var d=a[c]||{};a[c]=d,d[b]||(d[b]=function(){a._queue[c].push({method:b,args:Array.prototype.slice.apply(arguments)})})}var a=b.scimhtiraidem||{},f="init call config push pushDefault addProperties addProperty onFinish onStart _reset".split(" ");a._queue=a._queue||{},a._names=a._names||[],a._names.push(c),a._queue[c]=a._queue[c]||[],a._startTime=(new Date).getTime(),a._snippetVersion="2.0";for(var d=0;d<f.length;d++)g(f[d]);b.scimhtiraidem=a,b[c]=a[c];b=e.createElement("script");
b.setAttribute("type","text/javascript"),b.setAttribute("src","//static.mediarithmics.com/tag/1/tag.min.js"),b.setAttribute("async","true"),e.getElementsByTagName("script")[0].parentNode.appendChild(b)}(window,document,"mics");

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

function sendMediarithmicsEvents(){var a="hitek";if(a!==""&&a.indexOf("$")!==0){mics.init(a);var a=tmntag.pubtargets.reduce(function(a,d){if(["mcat","scat","ctype","kw","tag"].indexOf(d[0])!==-1)a[d[0]]=d[1];return a},{}),b={nature:"page_view",page_type:a.ctype,main_cat:a.mcat,sub_cat:a.scat,keywords:a.kw||a.tag};mics.push("page_view",b);mics.push("$set_user_profile_properties",{locale:Intl.DateTimeFormat().resolvedOptions().locale,time_zone:Intl.DateTimeFormat().resolvedOptions().timeZone});
a=".button-shopping";if(window.Purch&&Purch.obfCssMap&&Purch.obfCssMap["button-shopping"])a+=",."+Purch.obfCssMap["button-shopping"];document.querySelectorAll(a).forEach(function(a){a.addEventListener("click",function(){var a,e;if(this.dataset.omnitureTracking)try{var c=JSON.parse(this.dataset.omnitureTracking);e=c.evars&&c.evars.eVar34;a=c.evars&&c.evars.productName}catch(f){}b.nature="click_shopping";b.click_shopping={product_name:a,vendor:e};mics.push("click_shopping",b)})})}}
tmntag.executeWithGDPRConsent(35,sendMediarithmicsEvents);

});
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

function ucFunnelPixel(){try{var b=Math.floor(Math.random()*11E3),c=document.location.protocol==="https:"?"https":"http",a=new Image(0,0);a.src="//sync.aralego.com/idSync/?ucf_nid=par-2EE948B3EA8B6A90994284DE3BE42B&ucf_user_id=9d7a4dde621f4e00972e5ef625834f7c&redirect="+c+"%3A%2F%2Fpixel.servebom.com%2Fpartner%3Fcd%3D"+b+"%26svc%3Dus%26id%3D31%26uid%3DUCFUID";document.body.appendChild(a)}catch(d){console.error(d)}}
if(window.tmntag&&typeof tmntag.executeWithGDPRConsent==="function")tmntag.executeWithGDPRConsent(undefined,ucFunnelPixel);else if(typeof window.purchs2s_executeWithGDPRConsent==="function")window.purchs2s_executeWithGDPRConsent(ucFunnelPixel);else ucFunnelPixel();

});
} catch (e) {
console.error(e);
}
try {
if(typeof tmntag!=="undefined"&&tmntag&&typeof purch_history_onNewPage=="function"){tmntag.pvLoggingDisabled=false;tmntag.adunitServedEvent=true;purch_history_onNewPage(window.location.pathname)}if(typeof purchs2s!=="undefined"&&purchs2s&&typeof purch_history_onNewPage=="function"){purchs2s.pvLoggingDisabled=false;purchs2s.adunitServedEvent=true;purch_history_onNewPage(window.location.pathname)};
} catch (e) {
console.error(e);
}
try {
window.Purch=window.Purch||{};Purch.AdTech=Purch.AdTech||{};
Purch.AdTech.showGDPRBanner=function(){function e(){b.style.display="none"}function f(c){if(!b.contains(c.target)){{e();Purch.AdTech.consentAll()}document.removeEventListener("click",f,{capture:true,passive:true})}}function g(){var c=window,a=c.tmntag,b=c.purchs2s;return c.gdprMode==="PIITrackingWithConsent"||a&&a.getPersonalizedAdsMode&&a.getPersonalizedAdsMode()==="managed"||b&&b.getPersonalizedAdsMode&&b.getPersonalizedAdsMode()==="managed"}var b=document.createElement("div");if(g()){if(document.getElementById("purch-gdpr-banner")!==
null)return;b.id="purch-gdpr-banner";var a="${PAGE_DOMAIN:GDPR_BANNER_LABEL}";if(a===""||a.indexOf("$")===0)a="En poursuivant votre navigation sur ce site, vous acceptez l&apos;utilisation de cookies permettant de vous proposer des publicit&eacute;s adapt&eacute;es &agrave; vos centres d&apos;int&eacute;r&ecirc;ts. {showDetails}En savoir plus{/showDetails}.";a=window.gdprBannerLabel||a;a=a.replace(/{showDetails}(.*){\/showDetails}/,'<a href="#" id="purch-gdpr-banner__show-details">$1</a>');b.innerHTML=
"<p>"+a+'</p><span id="purch-gdpr-banner__close">&#215;</span>';a=document.createElement("style");a.type="text/css";var d="#purch-gdpr-banner { position: fixed; bottom: 0; width: 100%; z-index: 99999; border-top: 3px solid rgb(100, 100, 100); background-color: rgba(100, 100, 100, .8); color: white; } ",d=d+"#purch-gdpr-banner p { text-align: center; padding: .5em 0; margin: 0; } ",d=d+"#purch-gdpr-banner__close { position: absolute; top: 0px; right: 5px; font-size: 33px; line-height: 33px; cursor: pointer; } #purch-gdpr-banner__close:hover { color: black; } ";
a.innerText=d;b.appendChild(a);b.addEventListener("click",function(a){switch(a.target.id){case "purch-gdpr-banner__show-details":{a=a;a.preventDefault();a.stopPropagation();e();Purch.AdTech.showCMPModal();a=false}return a;case "purch-gdpr-banner__close":{e();Purch.AdTech.consentAll();a=void 0}return a}});document.body.appendChild(b);document.addEventListener("click",f,{capture:true,passive:true})}};
} catch (e) {
console.error(e);
}
try {
tmntag_ready(function() {

(function(){function d(a){e(function(){__cmp("addEventListener","cmpReady",a)})}function f(){if(Purch.AdTech.cmpQueue.length>0)for(;Purch.AdTech.cmpQueue.length>0;){var a=Purch.AdTech.cmpQueue.shift();if(typeof a==="function")a();else switch(a){case "consentAll":Purch.AdTech.consentAll()}}Purch.AdTech.cmpQueue.push=function(a){Array.prototype.push.call(Purch.AdTech.cmpQueue,a);f()}}function g(a){var c=document.createElement("iframe");c.src="https://ads.servebom.com/add_cookies?key=euconsent&value="+
a;c.style.display="none";document.body.appendChild(c)}function h(a,c){if(k)return;k=true;a=a||{};c=c||{};a=a.vendorListVersion;var b=c.created,d=c.vendorListVersion;if((!b||a&&d!==a)&&Purch.AdTech.showGDPRBanner)Purch.AdTech.showGDPRBanner();else if(b)g(c.metadata)}function l(){var a=window,c=a.tmntag,b=a.purchs2s;return a.gdprMode==="PIITrackingWithConsent"||c&&c.getPersonalizedAdsMode&&c.getPersonalizedAdsMode()==="managed"||b&&b.getPersonalizedAdsMode&&b.getPersonalizedAdsMode()==="managed"}window.Purch=
window.Purch||{};Purch.AdTech=Purch.AdTech||{};Purch.AdTech.cmpQueue=Purch.AdTech.cmpQueue||[];var e=window.tmntag_waitForCMP||purchs2sutils._waitForCMP;Purch.AdTech.showCMPModal=function(){d(function(){__cmp("showConsentTool",1)})};Purch.AdTech.consentAll=function(){d(function(){__cmp("consentAll")})};Purch.AdTech.onConsent=function(a){e(function(){__cmp("addEventListener","onSubmit",a)})};Purch.AdTech.onClose=function(a){e(function(){__cmp("addEventListener","onClose",a)})};var k=false,b="false";
if(b===""||b.indexOf("$")===0)b=true;else b=b!=="false";if(l()){window.__cmp=window.__cmp||{};window.__cmp.config={globalVendorListLocation:"https://purch.mgr.consensu.org/vendorlist.json",globalConsentLocation:"https://purch.mgr.consensu.org/portal.html",customPurposeListLocation:"https://purch.mgr.consensu.org/purposes.json",storePublisherData:false,storeConsentGlobally:b};b=document.createElement("script");b.async=true;b.addEventListener("load",function(){e(function(){window.__cmp("addEventListener",
"onSubmit",function(){__cmp("getConsentData",null,function(a){g(a.consentData)})})});d(function(){__cmp("getVendorList",null,function(a){var b=window.setTimeout(function(){h(a)},100);__cmp("getVendorConsents",null,function(c){window.clearTimeout(b);h(a,c)})})});d(f)});b.src="https://purch.mgr.consensu.org/cmp.bundle.js";document.body.appendChild(b)}})();

});
} catch (e) {
console.error(e);
}
try {
(function(){var a="23830";if(a==""||a.indexOf("$")==0)a="20915";window.bk_async=function(){var c="9d7a4dde621f4e00972e5ef625834f7c";if(c!=""&&c.indexOf("$")!=0)bk_addPageCtx("pid","9d7a4dde621f4e00972e5ef625834f7c");BKTAG.doTag(a,4)};(function(){var a=encodeURIComponent(document.referrer?document.referrer:""),d=document.getElementsByTagName("script")[0],b=document.createElement("script");b.async=true;b.src="//tags.bkrtx.com/js/bk-coretag.js?referer="+a;d.parentNode.insertBefore(b,d)})()})();
} catch (e) {
console.error(e);
}
try {
if(typeof tmntag!=="undefined"&&tmntag&&tmntag.video)tmntag.video.triggerErrorEventEnabled=true;
} catch (e) {
console.error(e);
}
