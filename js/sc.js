!function(e,t,i){"use strict";"function"==typeof define&&define.amd?define(i):"undefined"!=typeof module&&module.exports?module.exports=i():t.exports?t.exports=i():t[e]=i()}("Fingerprint2",this,function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);var i={swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",detectScreenOrientation:!0,sortPluginsFor:[/palemoon/i],userDefinedFonts:[]};this.options=this.extend(t,i),this.nativeForEach=Array.prototype.forEach,this.nativeMap=Array.prototype.map};return e.prototype={extend:function(e,t){if(null==e)return t;for(var i in e)null!=e[i]&&t[i]!==e[i]&&(t[i]=e[i]);return t},get:function(e){var t=[];t=this.userAgentKey(t),t=this.languageKey(t),t=this.colorDepthKey(t),t=this.pixelRatioKey(t),t=this.hardwareConcurrencyKey(t),t=this.screenResolutionKey(t),t=this.availableScreenResolutionKey(t),t=this.timezoneOffsetKey(t),t=this.sessionStorageKey(t),t=this.localStorageKey(t),t=this.indexedDbKey(t),t=this.addBehaviorKey(t),t=this.openDatabaseKey(t),t=this.cpuClassKey(t),t=this.platformKey(t),t=this.doNotTrackKey(t),t=this.pluginsKey(t),t=this.canvasKey(t),t=this.webglKey(t),t=this.adBlockKey(t),t=this.hasLiedLanguagesKey(t),t=this.hasLiedResolutionKey(t),t=this.hasLiedOsKey(t),t=this.hasLiedBrowserKey(t),t=this.touchSupportKey(t),t=this.customEntropyFunction(t);var i=this;this.fontsKey(t,function(t){var a=[];i.each(t,function(e){var t=e.value;"undefined"!=typeof e.value.join&&(t=e.value.join(";")),a.push(t)});var r=i.x64hash128(a.join("~~~"),31);return e(r,t)})},customEntropyFunction:function(e){return"function"==typeof this.options.customFunction&&e.push({key:"custom",value:this.options.customFunction()}),e},userAgentKey:function(e){return this.options.excludeUserAgent||e.push({key:"user_agent",value:this.getUserAgent()}),e},getUserAgent:function(){return navigator.userAgent},languageKey:function(e){return this.options.excludeLanguage||e.push({key:"language",value:navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||""}),e},colorDepthKey:function(e){return this.options.excludeColorDepth||e.push({key:"color_depth",value:screen.colorDepth||-1}),e},pixelRatioKey:function(e){return this.options.excludePixelRatio||e.push({key:"pixel_ratio",value:this.getPixelRatio()}),e},getPixelRatio:function(){return window.devicePixelRatio||""},screenResolutionKey:function(e){return this.options.excludeScreenResolution?e:this.getScreenResolution(e)},getScreenResolution:function(e){var t;return t=this.options.detectScreenOrientation&&screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height],"undefined"!=typeof t&&e.push({key:"resolution",value:t}),e},availableScreenResolutionKey:function(e){return this.options.excludeAvailableScreenResolution?e:this.getAvailableScreenResolution(e)},getAvailableScreenResolution:function(e){var t;return screen.availWidth&&screen.availHeight&&(t=this.options.detectScreenOrientation?screen.availHeight>screen.availWidth?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight]:[screen.availHeight,screen.availWidth]),"undefined"!=typeof t&&e.push({key:"available_resolution",value:t}),e},timezoneOffsetKey:function(e){return this.options.excludeTimezoneOffset||e.push({key:"timezone_offset",value:(new Date).getTimezoneOffset()}),e},sessionStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasSessionStorage()&&e.push({key:"session_storage",value:1}),e},localStorageKey:function(e){return!this.options.excludeSessionStorage&&this.hasLocalStorage()&&e.push({key:"local_storage",value:1}),e},indexedDbKey:function(e){return!this.options.excludeIndexedDB&&this.hasIndexedDB()&&e.push({key:"indexed_db",value:1}),e},addBehaviorKey:function(e){return document.body&&!this.options.excludeAddBehavior&&document.body.addBehavior&&e.push({key:"add_behavior",value:1}),e},openDatabaseKey:function(e){return!this.options.excludeOpenDatabase&&window.openDatabase&&e.push({key:"open_database",value:1}),e},cpuClassKey:function(e){return this.options.excludeCpuClass||e.push({key:"cpu_class",value:this.getNavigatorCpuClass()}),e},platformKey:function(e){return this.options.excludePlatform||e.push({key:"navigator_platform",value:this.getNavigatorPlatform()}),e},doNotTrackKey:function(e){return this.options.excludeDoNotTrack||e.push({key:"do_not_track",value:this.getDoNotTrack()}),e},canvasKey:function(e){return!this.options.excludeCanvas&&this.isCanvasSupported()&&e.push({key:"canvas",value:this.getCanvasFp()}),e},webglKey:function(e){return this.options.excludeWebGL?e:this.isWebGlSupported()?(e.push({key:"webgl",value:this.getWebglFp()}),e):e},adBlockKey:function(e){return this.options.excludeAdBlock||e.push({key:"adblock",value:this.getAdBlock()}),e},hasLiedLanguagesKey:function(e){return this.options.excludeHasLiedLanguages||e.push({key:"has_lied_languages",value:this.getHasLiedLanguages()}),e},hasLiedResolutionKey:function(e){return this.options.excludeHasLiedResolution||e.push({key:"has_lied_resolution",value:this.getHasLiedResolution()}),e},hasLiedOsKey:function(e){return this.options.excludeHasLiedOs||e.push({key:"has_lied_os",value:this.getHasLiedOs()}),e},hasLiedBrowserKey:function(e){return this.options.excludeHasLiedBrowser||e.push({key:"has_lied_browser",value:this.getHasLiedBrowser()}),e},fontsKey:function(e,t){return this.options.excludeJsFonts?this.flashFontsKey(e,t):this.jsFontsKey(e,t)},flashFontsKey:function(e,t){return this.options.excludeFlashFonts?t(e):this.hasSwfObjectLoaded()&&this.hasMinFlashInstalled()?"undefined"==typeof this.options.swfPath?t(e):void this.loadSwfAndDetectFonts(function(i){e.push({key:"swf_fonts",value:i.join(";")}),t(e)}):t(e)},jsFontsKey:function(e,t){var i=this;return setTimeout(function(){var a=["monospace","sans-serif","serif"],r=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Garamond","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"],n=["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"];i.options.extendedJsFonts&&(r=r.concat(n)),r=r.concat(i.options.userDefinedFonts);var o="mmmmmmmmmmlli",s="72px",l=document.getElementsByTagName("body")[0],h=document.createElement("div"),u=document.createElement("div"),c={},d={},g=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize=s,e.style.lineHeight="normal",e.innerHTML=o,e},p=function(e,t){var i=g();return i.style.fontFamily="'"+e+"',"+t,i},f=function(){for(var e=[],t=0,i=a.length;t<i;t++){var r=g();r.style.fontFamily=a[t],h.appendChild(r),e.push(r)}return e},m=function(){for(var e={},t=0,i=r.length;t<i;t++){for(var n=[],o=0,s=a.length;o<s;o++){var l=p(r[t],a[o]);u.appendChild(l),n.push(l)}e[r[t]]=n}return e},T=function(e){for(var t=!1,i=0;i<a.length;i++)if(t=e[i].offsetWidth!==c[a[i]]||e[i].offsetHeight!==d[a[i]])return t;return t},S=f();l.appendChild(h);for(var x=0,v=a.length;x<v;x++)c[a[x]]=S[x].offsetWidth,d[a[x]]=S[x].offsetHeight;var E=m();l.appendChild(u);for(var M=[],A=0,y=r.length;A<y;A++)T(E[r[A]])&&M.push(r[A]);l.removeChild(u),l.removeChild(h),e.push({key:"js_fonts",value:M}),t(e)},1)},pluginsKey:function(e){return this.options.excludePlugins||(this.isIE()?this.options.excludeIEPlugins||e.push({key:"ie_plugins",value:this.getIEPlugins()}):e.push({key:"regular_plugins",value:this.getRegularPlugins()})),e},getRegularPlugins:function(){for(var e=[],t=0,i=navigator.plugins.length;t<i;t++)e.push(navigator.plugins[t]);return this.pluginsShouldBeSorted()&&(e=e.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),this.map(e,function(e){var t=this.map(e,function(e){return[e.type,e.suffixes].join("~")}).join(",");return[e.name,e.description,t].join("::")},this)},getIEPlugins:function(){var e=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var t=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];e=this.map(t,function(e){try{return new ActiveXObject(e),e}catch(t){return null}})}return navigator.plugins&&(e=e.concat(this.getRegularPlugins())),e},pluginsShouldBeSorted:function(){for(var e=!1,t=0,i=this.options.sortPluginsFor.length;t<i;t++){var a=this.options.sortPluginsFor[t];if(navigator.userAgent.match(a)){e=!0;break}}return e},touchSupportKey:function(e){return this.options.excludeTouchSupport||e.push({key:"touch_support",value:this.getTouchSupport()}),e},hardwareConcurrencyKey:function(e){return this.options.excludeHardwareConcurrency||e.push({key:"hardware_concurrency",value:this.getHardwareConcurrency()}),e},hasSessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},hasLocalStorage:function(){try{return!!window.localStorage}catch(e){return!0}},hasIndexedDB:function(){try{return!!window.indexedDB}catch(e){return!0}},getHardwareConcurrency:function(){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:"unknown"},getNavigatorCpuClass:function(){return navigator.cpuClass?navigator.cpuClass:"unknown"},getNavigatorPlatform:function(){return navigator.platform?navigator.platform:"unknown"},getDoNotTrack:function(){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:"unknown"},getTouchSupport:function(){var e=0,t=!1;"undefined"!=typeof navigator.maxTouchPoints?e=navigator.maxTouchPoints:"undefined"!=typeof navigator.msMaxTouchPoints&&(e=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(i){}var a="ontouchstart"in window;return[e,t,a]},getCanvasFp:function(){var e=[],t=document.createElement("canvas");t.width=2e3,t.height=200,t.style.display="inline";var i=t.getContext("2d");return i.rect(0,0,10,10),i.rect(2,2,6,6),e.push("canvas winding:"+(i.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",this.options.dontUseFakeFontInCanvas?i.font="11pt Arial":i.font="11pt no-real-font-123",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",2,15),i.fillStyle="rgba(102, 204, 0, 0.2)",i.font="18pt Arial",i.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03",4,45),i.globalCompositeOperation="multiply",i.fillStyle="rgb(255,0,255)",i.beginPath(),i.arc(50,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(0,255,255)",i.beginPath(),i.arc(100,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,255,0)",i.beginPath(),i.arc(75,100,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,0,255)",i.arc(75,75,75,0,2*Math.PI,!0),i.arc(75,75,25,0,2*Math.PI,!0),i.fill("evenodd"),e.push("canvas fp:"+t.toDataURL()),e.join("~")},getWebglFp:function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"},i=function(e){var t,i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return i?(t=e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null};if(e=this.getWebglCanvas(),!e)return null;var a=[],r="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",n="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o);var s=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),o.itemSize=3,o.numItems=3;var l=e.createProgram(),h=e.createShader(e.VERTEX_SHADER);e.shaderSource(h,r),e.compileShader(h);var u=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(u,n),e.compileShader(u),e.attachShader(l,h),e.attachShader(l,u),e.linkProgram(l),e.useProgram(l),l.vertexPosAttrib=e.getAttribLocation(l,"attrVertex"),l.offsetUniform=e.getUniformLocation(l,"uniformOffset"),e.enableVertexAttribArray(l.vertexPosArray),e.vertexAttribPointer(l.vertexPosAttrib,o.itemSize,e.FLOAT,!1,0,0),e.uniform2f(l.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,o.numItems),null!=e.canvas&&a.push(e.canvas.toDataURL()),a.push("extensions:"+e.getSupportedExtensions().join(";")),a.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),a.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),a.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),a.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),a.push("webgl max anisotropy:"+i(e)),a.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+e.getParameter(e.RED_BITS)),a.push("webgl renderer:"+e.getParameter(e.RENDERER)),a.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),a.push("webgl vendor:"+e.getParameter(e.VENDOR)),a.push("webgl version:"+e.getParameter(e.VERSION));try{var c=e.getExtension("WEBGL_debug_renderer_info");c&&(a.push("webgl unmasked vendor:"+e.getParameter(c.UNMASKED_VENDOR_WEBGL)),a.push("webgl unmasked renderer:"+e.getParameter(c.UNMASKED_RENDERER_WEBGL)))}catch(d){}return e.getShaderPrecisionFormat?(a.push("webgl vertex shader high float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision),a.push("webgl vertex shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl vertex shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl vertex shader medium float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl vertex shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl vertex shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl vertex shader low float precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).precision),a.push("webgl vertex shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl vertex shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl fragment shader high float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision),a.push("webgl fragment shader high float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMin),a.push("webgl fragment shader high float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).rangeMax),a.push("webgl fragment shader medium float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision),a.push("webgl fragment shader medium float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMin),a.push("webgl fragment shader medium float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).rangeMax),a.push("webgl fragment shader low float precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).precision),a.push("webgl fragment shader low float precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMin),a.push("webgl fragment shader low float precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_FLOAT).rangeMax),a.push("webgl vertex shader high int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).precision),a.push("webgl vertex shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMin),a.push("webgl vertex shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_INT).rangeMax),a.push("webgl vertex shader medium int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).precision),a.push("webgl vertex shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl vertex shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl vertex shader low int precision:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).precision),a.push("webgl vertex shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMin),a.push("webgl vertex shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.LOW_INT).rangeMax),a.push("webgl fragment shader high int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).precision),a.push("webgl fragment shader high int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMin),a.push("webgl fragment shader high int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_INT).rangeMax),a.push("webgl fragment shader medium int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).precision),a.push("webgl fragment shader medium int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMin),a.push("webgl fragment shader medium int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_INT).rangeMax),a.push("webgl fragment shader low int precision:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).precision),a.push("webgl fragment shader low int precision rangeMin:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMin),a.push("webgl fragment shader low int precision rangeMax:"+e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.LOW_INT).rangeMax),a.join("~")):a.join("~")},getAdBlock:function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(i){t=!1}return t},getHasLiedLanguages:function(){if("undefined"!=typeof navigator.languages)try{var e=navigator.languages[0].substr(0,2);if(e!==navigator.language.substr(0,2))return!0}catch(t){return!0}return!1},getHasLiedResolution:function(){return screen.width<screen.availWidth||screen.height<screen.availHeight},getHasLiedOs:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.oscpu,a=navigator.platform.toLowerCase();e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other";var r;if(r="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,r&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if("undefined"!=typeof i){if(i=i.toLowerCase(),i.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(i.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(i.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if(0===i.indexOf("win")&&0===i.indexOf("linux")&&i.indexOf("mac")>=0&&"other"!==e)return!0}return a.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||((a.indexOf("linux")>=0||a.indexOf("android")>=0||a.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||((a.indexOf("mac")>=0||a.indexOf("ipad")>=0||a.indexOf("ipod")>=0||a.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||(0===a.indexOf("win")&&0===a.indexOf("linux")&&a.indexOf("mac")>=0&&"other"!==e||"undefined"==typeof navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e)))},getHasLiedBrowser:function(){var e,t=navigator.userAgent.toLowerCase(),i=navigator.productSub;if(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other",("Chrome"===e||"Safari"===e||"Opera"===e)&&"20030107"!==i)return!0;var a=eval.toString().length;if(37===a&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===a&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===a&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;var r;try{throw"a"}catch(n){try{n.toSource(),r=!0}catch(o){r=!1}}return!(!r||"Firefox"===e||"Other"===e)},isCanvasSupported:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},isWebGlSupported:function(){if(!this.isCanvasSupported())return!1;var e,t=document.createElement("canvas");try{e=t.getContext&&(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch(i){e=!1}return!!window.WebGLRenderingContext&&!!e},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},hasSwfObjectLoaded:function(){return"undefined"!=typeof window.swfobject},hasMinFlashInstalled:function(){return swfobject.hasFlashPlayerVersion("9.0.0")},addFlashDivNode:function(){var e=document.createElement("div");e.setAttribute("id",this.options.swfContainerId),document.body.appendChild(e)},loadSwfAndDetectFonts:function(e){var t="___fp_swf_loaded";window[t]=function(t){e(t)};var i=this.options.swfContainerId;this.addFlashDivNode();var a={onReady:t},r={allowScriptAccess:"always",menu:"false"};swfobject.embedSWF(this.options.swfPath,i,"1","1","9.0.0",!1,a,r,{})},getWebglCanvas:function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(i){}return t||(t=null),t},each:function(e,t,i){if(null!==e)if(this.nativeForEach&&e.forEach===this.nativeForEach)e.forEach(t,i);else if(e.length===+e.length){for(var a=0,r=e.length;a<r;a++)if(t.call(i,e[a],a,e)==={})return}else for(var n in e)if(e.hasOwnProperty(n)&&t.call(i,e[n],n,e)==={})return},map:function(e,t,i){var a=[];return null==e?a:this.nativeMap&&e.map===this.nativeMap?e.map(t,i):(this.each(e,function(e,r,n){a[a.length]=t.call(i,e,r,n)}),a)},x64Add:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]+t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]+t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]+t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]+t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Multiply:function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var i=[0,0,0,0];return i[3]+=e[3]*t[3],i[2]+=i[3]>>>16,i[3]&=65535,i[2]+=e[2]*t[3],i[1]+=i[2]>>>16,i[2]&=65535,i[2]+=e[3]*t[2],i[1]+=i[2]>>>16,i[2]&=65535,i[1]+=e[1]*t[3],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[2]*t[2],i[0]+=i[1]>>>16,i[1]&=65535,i[1]+=e[3]*t[1],i[0]+=i[1]>>>16,i[1]&=65535,i[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],i[0]&=65535,[i[0]<<16|i[1],i[2]<<16|i[3]]},x64Rotl:function(e,t){return t%=64,32===t?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},x64LeftShift:function(e,t){return t%=64,0===t?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},x64Xor:function(e,t){return[e[0]^t[0],e[1]^t[1]]},x64Fmix:function(e){return e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[4283543511,3981806797]),e=this.x64Xor(e,[0,e[0]>>>1]),e=this.x64Multiply(e,[3301882366,444984403]),e=this.x64Xor(e,[0,e[0]>>>1])},x64hash128:function(e,t){e=e||"",t=t||0;for(var i=e.length%16,a=e.length-i,r=[0,t],n=[0,t],o=[0,0],s=[0,0],l=[2277735313,289559509],h=[1291169091,658871167],u=0;u<a;u+=16)o=[255&e.charCodeAt(u+4)|(255&e.charCodeAt(u+5))<<8|(255&e.charCodeAt(u+6))<<16|(255&e.charCodeAt(u+7))<<24,255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24],
s=[255&e.charCodeAt(u+12)|(255&e.charCodeAt(u+13))<<8|(255&e.charCodeAt(u+14))<<16|(255&e.charCodeAt(u+15))<<24,255&e.charCodeAt(u+8)|(255&e.charCodeAt(u+9))<<8|(255&e.charCodeAt(u+10))<<16|(255&e.charCodeAt(u+11))<<24],o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o),r=this.x64Rotl(r,27),r=this.x64Add(r,n),r=this.x64Add(this.x64Multiply(r,[0,5]),[0,1390208809]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s),n=this.x64Rotl(n,31),n=this.x64Add(n,r),n=this.x64Add(this.x64Multiply(n,[0,5]),[0,944331445]);switch(o=[0,0],s=[0,0],i){case 15:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+14)],48));case 14:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+13)],40));case 13:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+12)],32));case 12:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+11)],24));case 11:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+10)],16));case 10:s=this.x64Xor(s,this.x64LeftShift([0,e.charCodeAt(u+9)],8));case 9:s=this.x64Xor(s,[0,e.charCodeAt(u+8)]),s=this.x64Multiply(s,h),s=this.x64Rotl(s,33),s=this.x64Multiply(s,l),n=this.x64Xor(n,s);case 8:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+7)],56));case 7:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+6)],48));case 6:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+5)],40));case 5:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+4)],32));case 4:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+3)],24));case 3:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+2)],16));case 2:o=this.x64Xor(o,this.x64LeftShift([0,e.charCodeAt(u+1)],8));case 1:o=this.x64Xor(o,[0,e.charCodeAt(u)]),o=this.x64Multiply(o,l),o=this.x64Rotl(o,31),o=this.x64Multiply(o,h),r=this.x64Xor(r,o)}return r=this.x64Xor(r,[0,e.length]),n=this.x64Xor(n,[0,e.length]),r=this.x64Add(r,n),n=this.x64Add(n,r),r=this.x64Fmix(r),n=this.x64Fmix(n),r=this.x64Add(r,n),n=this.x64Add(n,r),("00000000"+(r[0]>>>0).toString(16)).slice(-8)+("00000000"+(r[1]>>>0).toString(16)).slice(-8)+("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)}},e.VERSION="1.5.1",e});

var sc_project=11396698,
	sc_invisible=0,
	sc_security="8dbb12c1",
	sc_text=2,
	_statcounter = _statcounter || [];

try {
	new Fingerprint2().get(function(result){
		_statcounter.push({"tags": {"fingerprint": result}});
	});
} catch(e) {
	console.error(e)
}

var sc_width = screen.width;
var sc_height = screen.height;
var sc_referer = "" + document.referrer;
try {
	sc_referer = "" + parent.document.referrer
} catch (ex) {
	sc_referer = "" + document.referrer
}
if (typeof sc_referer_scr08 !== "undefined") {
	sc_referer = sc_referer_scr08
}
var sc_unique = 0;
var sc_returning = 0;
var sc_returns = 0;
var sc_error = 0;
var sc_remove = 0;
var sc_cls = -1;
var sc_inv = 0;
var sc_os = "";
var sc_title = "";
var sc_url = "";
var sc_base_dir = "";
var sc_click_dir = "";
var sc_link_back_start = "";
var sc_link_back_end = "";
var sc_security_code = "";
var sc_http_url = "http";
var sc_host = "statcounter.com";
var sc_dc = "c";
var sc_alt_text = "StatCounter";
var sc_counter_size = "";
var sc_prerendering = 0;
var sc_uuid = "";
var sc_uuid_q = "&u1=za";
var sc_unique_returning = "";
var sc_sp = "cookie";
if (window.sc_client_storage) {
	sc_sp = window.sc_client_storage
}
if (typeof window.sc_first_party_cookie != "undefined" && sc_first_party_cookie == "0") {
	sc_sp = "disabled"
}

function _sc_strip_tags(_1, _2) {
	_2 = (((_2 || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
	var _3 = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
		_4 = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	return _1.replace(_4, "").replace(_3, function($0, $1) {
		return _2.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : ""
	})
}

function _sc_sanitiseTags(_7) {
	for (i = 0; i < _7.length; i++) {
		_7[i] = ("" + _7[i]).trim()
	}
	return _7
}

function _sc_validateTags(_8) {
	var _9 = 10;
	var _a = 1;
	var _b = 300;
	var _c = [];
	if (!(_8.length % 2 == 0)) {
		_c.push("Every tag must have a name and value.")
	} else {
		if (_8.length / 2 > _9) {
			_c.push("No more than " + _9 + " tags can be passed - " + _8.length / 2 + " passed.")
		}
		for (i = 0; i < _8.length; i++) {
			var _d = ("" + _8[i]).length;
			if (_d < _a || _d > _b) {
				_c.push("Tag names and values must be between " + _a + " and " + _b + " characters in length ('" + _8[i] + "' is " + _8[i].length + " characters long).")
			}
		}
		for (i = 0; i < _8.length; i++) {
			if (_sc_strip_tags("" + _8[i]) != "" + _8[i]) {
				_c.push("Tag names and values may not contain HTML tags.")
			}
		}
	}
	if (_c.length != 0) {
		for (i = 0; i < _c.length; i++) {}
		return false
	}
	return true
}

function getTagString(_e) {
	function _f(obj, _11) {
		var _12 = obj.__proto__ || obj.constructor.prototype;
		return (_11 in obj) && (!(_11 in _12) || _12[_11] !== obj[_11])
	}
	if (Object.prototype.hasOwnProperty) {
		var _f = function(obj, _14) {
			return obj.hasOwnProperty(_14)
		}
	}
	var _15 = "";
	if (_f(_e, "tags") && typeof _e.tags === "object") {
		var _16 = [];
		for (var tag in _e.tags) {
			_16[_16.length] = tag;
			_16[_16.length] = _e.tags[tag]
		}
		if (_sc_validateTags(_16)) {
			_16 = _sc_sanitiseTags(_16);
			for (i = 0; i < _16.length; i = i + 2) {
				_15 += "&sc_ev_" + encodeURIComponent(_16[i]) + "=" + encodeURIComponent(_16[i + 1])
			}
		}
	}
	return _15
}

function isValidEventName(_18) {
	if (_18 !== null && _18 != "") {
		return true
	}
	return false
}
var _statcounter_pending = _statcounter;
var _statcounter = {
	push: function(_19) {
		if (_19 !== null && typeof _19 === "object") {
			function hasOwnProperty(obj, _1b) {
				var _1c = obj.__proto__ || obj.constructor.prototype;
				return (_1b in obj) && (!(_1b in _1c) || _1c[_1b] !== obj[_1b])
			}
			if (Object.prototype.hasOwnProperty) {
				var _1d = function(obj, _1f) {
					return obj.hasOwnProperty(_1f)
				}
			}
			if (_1d(_19, "name") && isValidEventName(_19.name)) {
				var _20 = _19.name;
				if (_20 == "pageview") {
					_statcounter_pending.push(_19);
					return
				}
				var _21 = getTagString(_19);
				var _22 = 3;
				var _23 = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&m=" + _22 + "&u=" + sc_url + "&t=" + sc_title + "&en=" + _20 + "&sess=7a9eb4&rand=" + Math.random() + _21 + sc_uuid_q + sc_unique_returning;
				var _24 = new Image();
				_24.onload = sc_none;
				_24.src = _23;
				sc_delay()
			}
		}
	}
};
if (window.sc_invisible) {
	if (window.sc_invisible == 1) {
		sc_inv = 1
	}
}
if (window.sc_click_stat) {
	sc_cls = window.sc_click_stat
}
sc_doc_loc = "" + document.location;
myRE = new RegExp("^https", "i");
if (sc_doc_loc.match(myRE)) {
	sc_http_url = "https"
}
if (window.sc_local) {
	sc_base_dir = sc_local
} else {
	if (sc_cls == -1) {
		sc_cls = 1
	}
	sc_base_dir = sc_http_url + "://" + sc_dc + "." + sc_host + "/"
}
sc_click_dir = sc_base_dir;
if (window.sc_counter_target) {
	sc_base_dir += window.sc_counter_target + "?"
} else {
	if (window.sc_text) {
		sc_base_dir += "text.php?"
	} else {
		sc_base_dir += "t.php?"
	}
}
if (window.sc_project) {
	if (sc_project == "4135125" || sc_project == "6169619" || sc_project == "6222332" || sc_project == "5106510" || sc_project == "6311399" || sc_project == "6320092" || sc_project == "5291656" || sc_project == "7324465" || sc_project == "6640020" || sc_project == "4629288" || sc_project == "1480088" || sc_project == "2447031") {
		if (Math.floor(Math.random() * 6) != 1) {
			sc_remove = 1
		}
	}
	sc_base_dir += "sc_project=" + sc_project
} else {
	if (window.usr) {
		sc_base_dir += "usr=" + usr
	} else {
		sc_error = 1
	}
}
if (window.sc_remove_link) {
	sc_link_back_start = "";
	sc_link_back_end = ""
} else {
	sc_link_back_start = "<a class=\"statcounter\" href=\"http://www." + sc_host + "\" target=\"_blank\">";
	sc_link_back_end = "</a>"
}
sc_date = new Date();
sc_time = sc_date.getTime();
sc_time_difference = 3600000;
sc_title = "" + document.title;
sc_url = "" + document.location;
sc_title = sc_title.substring(0, 300);
sc_url = sc_url.substring(0, 300);
if (encodeURIComponent) {
	sc_title = encodeURIComponent(sc_title)
} else {
	sc_title = escape(sc_title)
}
sc_url = escape(sc_url);
if (window.sc_security) {
	sc_security_code = sc_security
}
if (sc_script_num) {
	sc_script_num++
} else {
	var sc_script_num = 1
}
if (typeof _sc_imgs == "undefined") {
	var _sc_imgs = {}
}
var sc_pageview_tag_string = "";
var _sc_project_int = parseInt(sc_project, 10);
var _sc_apply_mar_2017_fixes = _sc_project_int == 4124138 || _sc_project_int == 204609 || _sc_project_int > 11200000;
(function(_25, _26, _27, _28) {
	var _29 = "";
	var _2a = {
		"google": null,
		"bing": ["q"],
		"search.yahoo": null,
		"m.yahoo": null,
		"m2.yahoo": null,
		"baidu": ["wd", "word"],
		"yandex": ["text"],
		"ya.ru": ["text"],
		"haosou": ["q"],
		"so.com": ["q"],
		"360.cn": ["q"],
		"360sou": ["q"],
		"aol": ["query", "q"],
		"duckduckgo": null,
		"ask.com": ["q", "QUERYT"],
		"mail.ru": ["words"],
		"sogou": ["q", "query"]
	};
	var _2b = {
		"fb": ["facebook.com", "fb.me"],
		"pi": ["pinterest.com"],
		"tw": ["twitter.com", "t.co"],
		"ln": ["linkedin.com"],
		"gp": ["plus.google.com", "plus.url.google.com"]
	};

	function check_root_domains_match(a, b) {
		var _2e = a.split(".");
		var _2f = b.split(".");
		var _30 = Math.min(_2e.length, _2f.length);
		var _31 = 2;
		if (_2e.length > 1 && ((_2e[_2e.length - 2].length <= 3 && _2e[_2e.length - 1] in {
				"at": 1,
				"au": 1,
				"br": 1,
				"es": 1,
				"hu": 1,
				"il": 1,
				"nz": 1,
				"tr": 1,
				"uk": 1,
				"us": 1,
				"za": 1
			}) || _2e[_2e.length - 1] == "kr" || _2e[_2e.length - 1] == "ru" || (_2e[_2e.length - 1] == "au" && _2e[_2e.length - 2] in {
				"csiro": 1
			}) || (_2e[_2e.length - 1] == "at" && _2e[_2e.length - 2] in {
				"priv": 1
			}) || (_2e[_2e.length - 1] == "fr" && _2e[_2e.length - 2] in {
				"avocat": 1,
				"aeroport": 1,
				"veterinaire": 1
			}) || (_2e[_2e.length - 1] == "hu" && _2e[_2e.length - 2] in {
				"film": 1,
				"lakas": 1,
				"ingatlan": 1,
				"sport": 1,
				"hotel": 1
			}) || (_2e[_2e.length - 1] == "nz" && _2e[_2e.length - 2] in {
				"geek": 1,
				"kiwi": 1,
				"maori": 1,
				"school": 1,
				"govt": 1,
				"health": 1,
				"parliament": 1
			}) || (_2e[_2e.length - 1] == "il" && _2e[_2e.length - 2] in {
				"muni": 1
			}) || (_2e[_2e.length - 1] == "za" && _2e[_2e.length - 2] in {
				"school": 1
			}) || (_2e[_2e.length - 1] == "tr" && _2e[_2e.length - 2] in {
				"name": 1
			}) || (_2e[_2e.length - 1] == "uk" && _2e[_2e.length - 2] in {
				"police": 1
			}))) {
			_31 = 3
		}
		for (var i = 1; i <= _30; i++) {
			if (_2e[_2e.length - i] != _2f[_2f.length - i]) {
				return false
			}
			if (i >= _31) {
				return true
			}
		}
		return _2e.length == _2f.length
	}

	function classify_referrer(r) {
		if (r == "") {
			return "d"
		}
		var _34 = r.split("/")[2].replace(/^www\./, "");
		var _35 = document.location.host.replace(/^www\./, "");
		if (_sc_apply_mar_2017_fixes) {
			if (_35 == _34) {
				return "internal"
			}
			if (check_root_domains_match(_34, _35)) {
				return "internal"
			}
		}
		if (r.search(/\bgoogle\..*\?.*adurl=http/) !== -1) {
			return "p"
		}
		var _36 = ["utm_source=bing", "gclid=", "utm_medium=cpc", "utm_medium=paid-media", "utm_medium=ppc", "aclk?", "cid="];
		for (var i = 0; i < _36.length; i++) {
			if (document.location.search.indexOf(_36[i]) !== -1) {
				return "p"
			}
		}
		var _38 = ["utm_medium=email"];
		for (var i = 0; i < _38.length; i++) {
			if (document.location.search.indexOf(_38[i]) !== -1) {
				return "e"
			}
		}
		if (!_sc_apply_mar_2017_fixes) {
			if (_35 == _34) {
				return "internal"
			}
		}
		for (var _39 in _2a) {
			if (_34.replace(_39, "#").split(".").indexOf("#") !== -1) {
				if (_2a[_39] === null) {
					return _39
				}
				for (var i = 0; i < _2a[_39].length; i++) {
					var _3a = _2a[_39][i];
					if (r.indexOf("?" + _3a + "=") !== -1 || r.indexOf("&" + _3a + "=") !== -1) {
						return _39
					}
				}
			}
		}
		for (var _3b in _2b) {
			for (var i = 0; i < _2b[_3b].length; i++) {
				var _39 = _2b[_3b][i];
				if (_34.replace(_39, "#").split(".").indexOf("#") !== -1) {
					return _3b
				}
			}
		}
		return _34
	}

	function categorize_class(cls) {
		if (cls == "d" || cls == "p" || cls == "e" || cls == "internal") {
			return cls
		}
		if (cls in _2a) {
			return "o"
		}
		if (cls in _2b) {
			return "s"
		}
		return "r"
	}
	if (sc_remove != 1) {
		if (document.webkitVisibilityState != "prerender") {
			sc_prerendering = 0
		} else {
			sc_prerendering = 1;
			document.addEventListener("webkitvisibilitychange", function(evt) {
				if (sc_prerendering == 1) {
					sc_prerendering = 2;
					sc_send_data()
				} else {
					return
				}
			}, false)
		}
	}
	var _3e = parseInt(sc_project, 10);
	var _3f = _3e == 9560334 || _3e == 6709687 || _3e == 9879613 || _3e == 4124138 || _3e == 204609 || _3e == 10776808;
	try {
		var _40 = Math.pow(_26, _27),
			_41 = Math.pow(2, _28),
			_42 = _41 * 2,
			_43 = _26 - 1;
		var _44;
		var _45 = function(_46, _47) {
			var key = [];
			var _49 = mixkey(flatten(_47 ? [_46, tostring(_25)] : 0 in arguments ? _46 : autoseed(), 3), key);
			var _4a = new ARC4(key);
			mixkey(tostring(_4a.S), _25);
			_44 = function() {
				var n = _4a.g(_27),
					d = _40,
					x = 0;
				while (n < _41) {
					n = (n + x) * _26;
					d *= _26;
					x = _4a.g(1)
				}
				while (n >= _42) {
					n /= 2;
					d /= 2;
					x >>>= 1
				}
				return (n + x) / d
			};
			return _49
		};

		function ARC4(key) {
			var t, _50 = key.length,
				me = this,
				i = 0,
				j = me.i = me.j = 0,
				s = me.S = [];
			if (!_50) {
				key = [_50++]
			}
			while (i < _26) {
				s[i] = i++
			}
			for (i = 0; i < _26; i++) {
				s[i] = s[j = _43 & (j + key[i % _50] + (t = s[i]))];
				s[j] = t
			}(me.g = function(_55) {
				var t, r = 0,
					i = me.i,
					j = me.j,
					s = me.S;
				while (_55--) {
					t = s[i = _43 & (i + 1)];
					r = r * _26 + s[_43 & ((s[i] = s[j = _43 & (j + t)]) + (s[j] = t))]
				}
				me.i = i;
				me.j = j;
				return r
			})(_26)
		}

		function flatten(obj, _59) {
			var _5a = [],
				typ = (typeof obj)[0],
				_5c;
			if (_59 && typ == "o") {
				for (_5c in obj) {
					try {
						_5a.push(flatten(obj[_5c], _59 - 1))
					} catch (e) {}
				}
			}
			return (_5a.length ? _5a : typ == "s" ? obj : obj + "\x00")
		}

		function mixkey(_5d, key) {
			var _5f = _5d + "",
				_60, j = 0;
			while (j < _5f.length) {
				key[_43 & j] = _43 & ((_60 ^= key[_43 & j] * 19) + _5f.charCodeAt(j++))
			}
			return tostring(key)
		}

		function autoseed(_62) {
			try {
				window.crypto.getRandomValues(_62 = new Uint8Array(_26));
				return tostring(_62)
			} catch (e) {
				return [+new Date, window, window.navigator.plugins, window.screen, tostring(_25)]
			}
		}

		function tostring(a) {
			return String.fromCharCode.apply(0, a)
		}
		mixkey(Math.random(), _25);

		function _localStorageAvailable() {
			var _64 = false;
			if ("localStorage" in window) {
				try {
					_64 = window["localStorage"] !== null
				} catch (e) {
					if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
						if (!e.number || parseInt(e.number, 10) !== -2147024891) {
							throw e
						}
					}
				}
			}
			return _64
		}

		function _setLocalStorage(_65, _66, _67) {
			if (_localStorageAvailable()) {
				try {
					if (_65 === "is_visitor_unique") {
						localStorage.setItem("statcounter.com/localstorage/", _66)
					} else {
						localStorage.setItem("statcounter_" + _65, _66)
					}
				} catch (e) {
					if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
						if (!e.number || parseInt(e.number, 10) !== -2147024891) {
							throw e
						}
					}
					return false
				}
				return true
			}
			return false
		}

		function setLocal(_68, _69, _6a, _6b, _6c) {
			if (typeof _69 === "string") {
				_69 = [_69]
			}
			if (_6b === undefined) {
				_6b = ""
			}
			if (_6c === undefined) {
				_6c = 30
			}
			var _6d = false;
			if (sc_sp == "localStorage") {
				_6d = _setLocalStorage(_68, _6b + _69.join("-"), _6a);
				if (!_6d) {
					_6d = _writeCookie(_68, _6b + _69.join("-"), _6a)
				} else {
					if (_readCookie(_68) !== null) {
						_removeCookie(_68, _6a)
					}
				}
			} else {
				cookie_value = _69.slice(0, _6c).join("-");
				_6d = _writeCookie(_68, _6b + cookie_value, _6a);
				if (!_6d) {
					_6d = _setLocalStorage(_68, _6b + _69.join("-"), _6a)
				} else {
					if (_69.length > _6c) {
						_setLocalStorage(_68, "mx" + _69.slice(_6c).join("-"), _6a)
					} else {
						_removeLocalStorage(_68)
					}
				}
			}
			return _6d
		}

		function getLocal(_6e) {
			var val = null;
			if (_localStorageAvailable()) {
				if (_6e === "is_visitor_unique") {
					val = localStorage.getItem("statcounter.com/localstorage/")
				} else {
					val = localStorage.getItem("statcounter_" + _6e)
				}
			}
			if (sc_sp == "localStorage" && val !== null && val.substring(0, 2) == "rx") {
				return val
			}
			var _70 = _readCookie(_6e);
			if (val !== null) {
				if (_70 === null && val.substring(0, 2) == "rx") {
					return val
				} else {
					if (_70 !== null && val.substring(0, 2) == "mx") {
						_70 += "-" + val.substring(2)
					}
				}
			}
			return _70
		}

		function _removeLocalStorage(_71) {
			if (_localStorageAvailable()) {
				if (_71 === "is_visitor_unique") {
					localStorage.removeItem("statcounter.com/localstorage/")
				}
				localStorage.removeItem("statcounter_" + _71)
			}
		}

		function removeLocal(_72, _73) {
			_removeLocalStorage(_72);
			if (_readCookie(_72)) {
				_removeCookie(_72, _73)
			}
		}

		function _readCookie(_74) {
			var _75 = "sc_" + _74 + "=";
			if (document.cookie) {
				var ca = document.cookie.split(";");
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == " ") {
						c = c.substring(1, c.length)
					}
					if (c.indexOf(_75) == 0) {
						return c.substring(_75.length, c.length)
					}
				}
			}
			return null
		}

		function _writeCookie(_79, _7a, _7b, _7c) {
			if (_7c === undefined) {
				var _7d = 1000 * 60 * 60 * 24 * 365 * 2
			} else {
				var _7d = 1000 * _7c
			}
			expiration = new Date();
			expiration.setTime(expiration.getTime() + _7d);
			var _7e = 3050;
			if (_7a.length > _7e - 50 && _7a.substring(0, _7e).indexOf("-") !== -1) {
				_7a = _7a.substring(0, _7a.substring(0, _7e).lastIndexOf("-"))
			}
			document.cookie = "sc_" + _79 + "=" + _7a + "; expires=" + expiration.toGMTString() + "; domain=" + _7b + "; path=/";
			if (_readCookie(_79) !== null) {
				return true
			} else {
				return false
			}
		}

		function _removeCookie(_7f, _80) {
			document.cookie = "sc_" + _7f + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=" + _80 + "; path=/"
		}

		function detectBrowserFeatures() {
			var _81 = [];
			var i;
			var _83;
			var _84 = {
				pdf: "application/pdf",
				qt: "video/quicktime",
				realp: "audio/x-pn-realaudio-plugin",
				wma: "application/x-mplayer2",
				dir: "application/x-director",
				fla: "application/x-shockwave-flash",
				java: "application/x-java-vm",
				gears: "application/x-googlegears",
				ag: "application/x-silverlight"
			};
			var _85 = (new RegExp("Mac OS X.*Safari/")).test(navigator.userAgent) ? window.devicePixelRatio || 1 : 1;
			if (!((new RegExp("MSIE")).test(navigator.userAgent))) {
				if (navigator.mimeTypes && navigator.mimeTypes.length) {
					for (i in _84) {
						if (Object.prototype.hasOwnProperty.call(_84, i)) {
							_83 = navigator.mimeTypes[_84[i]];
							_81.push((_83 && _83.enabledPlugin) ? "1" : "0")
						}
					}
				}
				if (typeof navigator.javaEnabled !== "unknown" && typeof navigator.javaEnabled !== "undefined" && navigator.javaEnabled()) {
					_81.push("java")
				}
				if (typeof window.GearsFactory === "function") {
					_81.push("gears")
				}
			}
			_81.push(screen.width * _85 + "x" + screen.height * _85);
			return _81.join("")
		}

		function generate_uuid() {
			var now = new Date();
			var _87 = false;
			var _88 = 32;
			if (_87) {
				_88 = 36
			}
			var _89 = Math.round(now.getTime() / 1000) + now.getMilliseconds();
			var _8a = (navigator.userAgent || "") + (navigator.platform || "") + detectBrowserFeatures() + now.getTimezoneOffset() + window.innerWidth + window.innerHeight + window.screen.colorDepth + document.URL + _89;
			_45(_8a);
			var _8b = "0123456789ABCDEF".split(""),
				_8c = new Array(_88),
				rnd = 0,
				r;
			for (var i = 0; i < _88; i++) {
				if (_87 && (i == 8 || i == 13 || i == 18 || i == 23)) {
					_8c[i] = "-"
				} else {
					if ((i == 12 && !_87) || (i == 14 && _87)) {
						_8c[i] = "4"
					} else {
						if ((i == 13 && !_87) || (i == 15 && _87)) {
							_8c[i] = "F"
						} else {
							if (rnd <= 2) {
								rnd = 33554432 + (_44() * 16777216) | 0
							}
							r = rnd & 15;
							rnd = rnd >> 4;
							_8c[i] = _8b[(i == 19) ? (r & 3) | 8 : r]
						}
					}
				}
			}
			return _8c.join("")
		}
		if (!_sc_apply_mar_2017_fixes) {
			var _90 = classify_referrer(sc_referer);
			var _91 = categorize_class(_90);
			if (_90 != "internal") {
				_29 = "&rcat=" + _91 + "&rdom=" + _90
			}
		}
		var _92 = Math.round((new Date()).getTime() / 1000);
		if (sc_sp != "disabled") {
			if (_sc_apply_mar_2017_fixes) {
				var _90 = classify_referrer(sc_referer);
				var _91 = categorize_class(_90);
				if (_90 != "internal") {
					_29 = "&rcat=" + _91 + "&rdom=" + _90
				}
			}
			try {
				var _93 = JSON.parse(localStorage.getItem("sc_medium_source"));
				if (_93 == null) {
					_93 = {}
				}
				var _94 = null;
				var _95 = null;
				var _96 = null;
				var msl = 0;
				for (var k in _93) {
					if (_94 === null || _93[k] > _93[_94]) {
						_94 = k
					}
					var _99 = categorize_class(k);
					if (_91 == _99 && (_95 === null || _93[k] > _93[_95])) {
						_95 = k
					}
					if (_99 == "r" && (_96 === null || _93[k] < _93[_96])) {
						_96 = k
					}
					msl += 1
				}
				if (msl > 30 && _96 !== null) {
					delete _93[_96]
				}
				var _9a = "";
				if (sessionStorage.getItem("statcounter_bounce")) {
					sessionStorage.removeItem("statcounter_bounce");
					_9a = "&bb=0"
				}
				var _9b = 30;
				if (!_sc_apply_mar_2017_fixes) {
					_9b = 15
				}
				if (_90 == "d" && _94 !== null && _94 != "d" && (_92 - _93[_94]) < 60 * _9b) {
					_90 = "internal"
				}
				if (_sc_apply_mar_2017_fixes) {
					if (sessionStorage.getItem("statcounter_session") && (_92 - parseInt(sessionStorage.getItem("statcounter_session"), 10)) < 60 * 30) {
						_90 = "internal"
					}
					sessionStorage.setItem("statcounter_session", _92)
				}
				if (!_sc_apply_mar_2017_fixes) {
					if (_91 == "r" && sessionStorage.getItem("statcounter_exit_domain") == _90) {
						_90 = "internal"
					}
				}
				if (_90 == "internal") {
					if (_94 !== null) {
						_29 = "&rcat=" + categorize_class(_94) + "&rdomo=" + _94;
						_29 += "&rdomg=" + (_92 - _93[_94]);
						_93[_94] = _92
					}
				} else {
					var _9c = false;
					if (_90 in _93) {
						if (_90 == _94) {
							_29 = _29.replace("rdom=", "rdomo=")
						}
						_29 += "&rdomg=" + (_92 - _93[_90]);
						if (_92 - _93[_90] < 60 * 30) {
							_9c = true
						}
					} else {
						_29 += "&rdomg=new"
					}
					if (_9a == "" && !_9c) {
						sessionStorage.setItem("statcounter_bounce", "1");
						_9a = "&bb=1"
					}
					if (_95 !== null && (!(_90 in _93) || _90 != _95)) {
						_29 += "&rcatg=" + (_92 - _93[_95])
					}
					_93[_90] = _92
				}
				_29 += _9a;
				try {
					localStorage.setItem("sc_medium_source", JSON.stringify(_93))
				} catch (maybe_not_enough_space) {
					if (_sc_apply_mar_2017_fixes) {
						_29 = ""
					}
				}
			} catch (e) {
				if (_sc_apply_mar_2017_fixes) {
					_29 = ""
				}
			}
			if (_3e == 10227105) {
				try {
					var _9d = new Image();
					_9d.src = "http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(localStorage.getItem("statcounter.com/localstorage/") + ":::" + _readCookie("is_visitor_unique"))
				} catch (ignore) {}
			}
			var _9e = "1.1.1.1.1.1.1.1.1";
			if (typeof window.sc_cookie_domain == "undefined") {
				var _9f = window.location.host
			}
			if (_9f.substring(0, 1) != ".") {
				_9f = "." + _9f
			}
			var _a0 = "is_visitor_unique";
			try {
				var _a1 = getLocal(_a0)
			} catch (e) {
				var _a1 = false;
				sc_uuid = ".ex"
			}
			var _a2 = [];
			var _a3 = [];
			if (_a1 && _a1.substring(0, 2) == "rx") {
				removeLocal(_a0, _9f);
				var _a4 = _a1.substring(2);
				_a2 = _a4.split("-");
				var _a5 = false;
				var _a6 = false;
				for (var i = 0; i < _a2.length; i++) {
					var _a8 = _a2[i].split(".");
					if (_a8[0] == sc_project) {
						_a5 = true;
						var _a9 = parseInt(_a8[1], 10);
						var _aa = [30, 60, 120, 180, 360, 720, 1440, 2880, 10080];
						var _ab = [];
						var _ac = 2;
						if (_a8[2].length == 32) {
							sc_uuid = "." + _a8[2];
							_ac = 3
						} else {
							sc_uuid = _a6
						}
						for (var ir = 0; ir < _aa.length; ir++) {
							var _ae = parseInt(_a8[ir + _ac], 10);
							if (isNaN(_ae)) {
								_ae = 1
							}
							_ab.push(_ae)
						}
						sc_unique_returning += "&jg=" + (_92 - _a9);
						for (var ir = 0; ir < _aa.length; ir++) {
							if (_29.indexOf("rdom=") !== -1) {
								_ab[ir]++
							} else {
								if (_92 > (_a9 + 60 * _aa[ir])) {
									_ab[ir]++
								}
							}
						}
						sc_unique_returning += "&rr=" + _ab.join(".");
						_a3.push(sc_project + "." + _92 + sc_uuid + "." + _ab.join("."))
					} else {
						_a3.push(_a2[i]);
						if (i == 0 && _a8[2].length == 32 && sc_uuid == "") {
							sc_uuid = "." + _a8[2]
						}
					}
					if (i == 0) {
						_a6 = sc_uuid
					}
				}
				if (!_a5) {
					if (_a3.length == 0 && sc_uuid == "") {
						sc_uuid = "." + generate_uuid()
					}
					_a3.push(sc_project + "." + _92 + sc_uuid + "." + _9e);
					sc_unique_returning += "&jg=new&rr=" + _9e
				}
				_a3.sort(function(a, b) {
					return parseInt(b.split(".")[1], 10) - parseInt(a.split(".")[1], 10)
				});
				for (var iv = 1; iv < _a3.length; iv++) {
					_a3[iv] = _a3[iv].replace("." + _a3[0].split(".")[2] + ".", ".")
				}
				setLocal(_a0, _a3, _9f, "rx", 3)
			} else {
				if (sc_uuid != ".ex") {
					sc_uuid = "." + generate_uuid();
					_a3 = [sc_project + "." + _92 + sc_uuid + "." + _9e];
					var _b2 = setLocal(_a0, _a3, _9f, "rx", 3);
					if (_b2) {
						sc_unique_returning += "&jg=new&rr=" + _9e
					} else {
						sc_uuid = ".na"
					}
				}
			}
			if (sc_uuid != "") {
				sc_uuid_q = "&u1=" + sc_uuid.substring(1)
			}
		} else {}
	} catch (e) {
		if (_3f) {
			if (typeof encodeURIComponent != "function") {
				encodeURIComponent = function(s) {
					return escape(s)
				}
			}
			var _b4 = "";
			_b4 += "unique_returning: " + sc_unique_returning + "\n";
			_b4 += "uuid: " + sc_uuid + "\n";
			_b4 += "cookie_projects_in: rx" + _a2.join("-") + "\n";
			_b4 += "cookie_projects_out: rx" + _a3.join("-") + "\n";
			for (var _b5 in e) {
				_b4 += "property: " + _b5 + " value: [" + e[_b5] + "]\n"
			}
			_b4 += "toString(): " + " value: [" + e.toString() + "]\n";
			var _9d = new Image();
			_9d.src = "http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20" + encodeURIComponent(_b4)
		}
		sc_unique_returning = "";
		sc_uuid_q = "&u1=f2"
	}
	if (Object.prototype.toString.call(_statcounter_pending) === "[object Array]") {
		var _b6 = _statcounter_pending.length;
		if (_b6 >= 1) {
			sc_pageview_tag_string = getTagString(_statcounter_pending[0])
		}
	}
	sc_base_dir += "&java=1&security=" + sc_security_code + sc_uuid_q;
	var _b7 = sc_unique_returning + "&resolution=" + sc_width + "&h=" + sc_height + "&camefrom=" + escape(sc_referer.substring(0, 600)) + "&u=" + sc_url + "&t=" + sc_title + _29 + "&sc_snum=" + sc_script_num + sc_pageview_tag_string + "&sess=7a9eb4";
	if (window.sc_counter_width && window.sc_counter_height) {
		sc_counter_size = " width=\"" + sc_counter_width + "\" height=\"" + sc_counter_height + "\""
	}
	if (window.sc_remove_alt) {
		sc_alt_text = ""
	}
	if (sc_error == 1) {
		document.writeln("Code corrupted. Insert fresh copy.")
	} else {
		if (sc_remove == 1) {} else {
			sc_send_data()
		}
	}

	function sc_send_data() {
		if (sc_inv == 1 || sc_prerendering == 2) {
			_b7 += "&p=" + sc_prerendering + "&invisible=1";
			if (window.sc_call) {
				sc_call++
			} else {
				sc_call = 1
			}
			var _b8 = false;
			if (sc_uuid != "" && typeof JSON == "object" && JSON && typeof JSON.stringify == "function" && "sessionStorage" in window) {
				_b8 = true
			}
			var _b9 = false;
			if (_b8) {
				try {
					var _ba = sessionStorage.getItem("statcounter_pending");
					if (!_ba) {
						var _bb = {}
					} else {
						try {
							var _bb = JSON.parse(_ba)
						} catch (ignore) {
							var _bb = {}
						}
					}
					if (_bb[sc_project] === undefined) {
						_bb[sc_project] = {}
					}
					var now = new Date().getTime();
					_bb[sc_project][now] = _b7;
					while (true) {
						_ba = JSON.stringify(_bb);
						if (_ba == "{}") {
							sessionStorage.removeItem("statcounter_pending");
							break
						}
						var _bd = _ba.split(/:.{20}/).length - 1;
						if (_bd < 20) {
							var _be = true;
							try {
								sessionStorage.setItem("statcounter_pending", _ba)
							} catch (e) {
								if (!e.name || e.name.toLowerCase().replace(/_/g, "").substring(0, 16) !== "quotaexceedederr") {
									throw e
								}
								_be = false
							}
							if (_be) {
								break
							}
						}
						var _bf = false;
						var _c0 = false;
						var _c1 = false;
						for (var _c2 in _bb) {
							for (var _c3 in _bb[_c2]) {
								var _c4 = /jg=(\d+)/.exec(_bb[_c2][_c3]);
								if (_c4 !== null) {
									var _c5 = parseInt(_c4[1])
								} else {
									var _c5 = false
								}
								if (_bf === false || (_c5 !== false && _c5 < _bf)) {
									if (_c5 !== false) {
										_bf = _c5
									}
									_c0 = _c2;
									_c1 = _c3
								}
							}
						}
						if (_c1 === false) {
							break
						}
						delete _bb[_c0][_c1];
						if (JSON.stringify(_bb[_c0]) == "{}") {
							delete _bb[_c0]
						}
					}
					for (var ts in _bb[sc_project]) {
						(function(_c7, _c8) {
							var _c9 = _bb[_c8][_c7];
							_sc_imgs[sc_call + "." + _c7] = new Image();
							_sc_imgs[sc_call + "." + _c7].onload = function() {
								var _ca = JSON.parse(sessionStorage.getItem("statcounter_pending"));
								if (_ca[_c8] !== undefined) {
									delete _ca[_c8][_c7];
									if (JSON.stringify(_ca[_c8]) == "{}") {
										delete _ca[_c8]
									}
								}
								var _cb = JSON.stringify(_ca);
								if (_cb == "{}") {
									sessionStorage.removeItem("statcounter_pending")
								} else {
									sessionStorage.setItem("statcounter_pending", _cb)
								}
							};
							if (_c7 != now) {
								_c9 += "&pg=" + Math.round((now - _c7) / 1000)
							} else {
								_b9 = true
							}
							_sc_imgs[sc_call + "." + _c7].src = sc_base_dir + "&sc_random=" + Math.random() + _c9
						})(parseInt(ts, 10), sc_project)
					}
				} catch (e) {
					if (_3f) {
						if (typeof encodeURIComponent != "function") {
							encodeURIComponent = function(s) {
								return escape(s)
							}
						}
						var _cd = "";
						for (var _ce in e) {
							_cd += "e[" + _ce + "]: " + e[_ce] + "\n"
						}
						_cd += "unique_returning: " + sc_unique_returning + "\n";
						_cd += "uuid: " + sc_uuid + "\n";
						_cd += "toString(): " + " value: [" + e.toString() + "]\n";
						var _cf = new Image();
						_cf.src = "http://statcounter.com/feedback/?email=javascript@statcounter.com&page_url=" + encodeURIComponent(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search + document.location.hash) + "&name=Auto%20JS&feedback_username=statcounter&pid=" + sc_project + "&fake_post&user_company&feedback=pending%20exception:%20" + encodeURIComponent(_cd)
					}
				}
			}
			if (!_b8 || !_b9) {
				_sc_imgs[sc_call] = new Image();
				_sc_imgs[sc_call].src = sc_base_dir + "&sc_random=" + Math.random() + _b7
			}
		} else {
			var _d0 = sc_base_dir + "&sc_random=" + Math.random() + _b7 + "&p=" + sc_prerendering;
			_d0 = _d0.replace(/&/g, "&amp;");
			if (window.sc_text) {
				document.writeln("<scr" + "ipt" + " src=" + _d0 + "&amp;text=" + sc_text + "></scr" + "ipt>")
			} else {
				document.writeln("<span class=\"statcounter\">" + sc_link_back_start + "<img src=\"" + _d0 + "\" alt=\"" + sc_alt_text + "\" border=\"0\"" + sc_counter_size + ">" + sc_link_back_end + "</span>")
			}
		}
	}
})([], 256, 6, 52);
if (sc_cls > 0) {
	if (clickstat_done != 1) {
		var clickstat_done = 1;
		var clickstat_project = window.sc_project;
		var clickstat_security = window.sc_security_code;
		var dlext = "7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";
		if (typeof(window.sc_download_type) == "string") {
			dlext = window.sc_download_type
		}
		var ltype = "https?|ftp|telnet|ssh|ssl|mailto|spotify|tel";
		var second = "ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com";
		var dl = new RegExp("\\.(" + dlext + ")$", "i");
		var lnk = new RegExp("^(" + ltype + "):", "i");
		var domsec = new RegExp("^(" + second + ")$", "i");
		var host_name = location.host.replace(/^www\./i, "");
		var host_splitted = host_name.split(".");
		var domain = host_splitted.pop();
		var host_split = host_splitted.pop();
		if (domsec.test(host_split)) {
			domain = host_split + "." + domain;
			host_split = host_splitted.pop()
		}
		domain = host_split + "." + domain;
		var lnklocal_mask = "^https?://(.*)(" + domain + "|webcache.googleusercontent.com)";
		var lnklocal = new RegExp(lnklocal_mask, "i");
		if (document.getElementsByTagName) {
			var anchors = document.getElementsByTagName("a");
			for (var i = 0; i < anchors.length; i++) {
				var anchor = anchors[i];
				if (anchor.onmousedown) {
					var original_click = anchor.onmousedown;
					var s = original_click.toString().split("\n").join(" ");
					var bs = s.indexOf("{");
					var head = s.substr(0, bs);
					var ps = head.indexOf("(");
					var pe = head.indexOf(")");
					var params = head.substring(ps + 1, pe);
					var plist = params.split(",");
					var body = s.substr(bs + 1, s.length - bs - 2);
					var insert = "sc_clickstat_call(this,'" + sc_click_dir + "');";
					var final_body = insert + body;
					var ev_head = "new Function(";
					var ev_params = "";
					var ev_sep = "";
					for (var sc_i = 0; sc_i < plist.length; sc_i++) {
						ev_params = ev_sep + "'" + plist[sc_i] + "'";
						ev_sep = ","
					}
					if (ev_sep == ",") {
						ev_params += ","
					}
					var ev_foot = "final_body);";
					var ev_final = ev_head + ev_params + ev_foot;
					anchor.onmousedown = eval(ev_final)
				} else {
					anchor.onmousedown = new Function("event", "sc_clickstat_call(this,'" + sc_click_dir + "');return true;")
				}
			}
		}

		function sc_none() {
			return
		}

		function sc_delay() {
			if (window.sc_click_stat) {
				var d = window.sc_click_stat
			} else {
				var d = 0
			}
			var n = new Date();
			var t = n.getTime() + d;
			while (n.getTime() < t) {
				var n = new Date()
			}
		}

		function sc_clickstat_call(_d4, _d5) {
			if (_d4) {
				var _d6 = 0;
				if (lnk.test(_d4)) {
					if ((lnklocal.test(_d4))) {
						if (dl.test(_d4)) {
							_d6 = 1
						} else {
							if (window.sc_exit_link_detect && new RegExp(sc_exit_link_detect, "i").test(_d4)) {
								_d6 = 2
							} else {
								if (sc_cls == 2) {
									_d6 = 2
								}
							}
						}
					} else {
						_d6 = 2
					}
				}
				if (_d6 != 0) {
					var _d7 = escape(_d4);
					if (_d7.length > 0) {
						if (sc_unique_returning == "") {
							sc_unique_returning = "&jg=&rr="
						}
						if (!_sc_apply_mar_2017_fixes) {
							if (_d6 == 2 && sc_sp != "disabled") {
								try {
									sessionStorage.setItem("statcounter_exit_domain", _d7.split("/")[2].replace(/^www\./, ""))
								} catch (ignore) {}
							}
						}
						var _d8 = _d5 + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + _d7 + "&m=" + _d6 + "&u=" + sc_url + "&t=" + sc_title + "&sess=7a9eb4&rand=" + Math.random() + sc_uuid_q + sc_unique_returning;
						var _d9 = new Image();
						_d9.onload = sc_none;
						_d9.src = _d8;
						sc_delay()
					}
				}
			}
		}
		var sc_gsyn_pattern = "googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net";
		var sc_gsyn_pattern2 = "^aswift_[0-9]+$";
		var sc_px;
		var sc_py;

		function sc_adsense_click(_da) {
			if (_da.src.match(sc_gsyn_pattern)) {
				var _db = escape(_da.src)
			} else {
				var _db = escape("Google Adsense " + _da.width + "x" + _da.height)
			}
			var i = new Image();
			var _dd = sc_click_dir + "click.gif?sc_project=" + clickstat_project + "&security=" + clickstat_security + "&c=" + _db + "&m=2&u=" + sc_url + "&t=" + sc_title + "&sess=7a9eb4&rand=" + Math.random() + sc_uuid_q + sc_unique_returning;
			i.src = _dd;
			sc_delay()
		}

		function sc_adsense_init() {
			if (document.all && typeof window.opera == "undefined") {
				var el = document.getElementsByTagName("iframe");
				for (var i = 0; i < el.length; i++) {
					if (el[i].src.match(sc_gsyn_pattern) || el[i].id.match(sc_gsyn_pattern2)) {
						el[i].onfocus = function() {
							sc_adsense_click(this)
						}
					}
				}
			} else {
				if (typeof window.addEventListener != "undefined") {
					window.addEventListener("unload", sc_exitpage, false);
					window.addEventListener("mousemove", sc_getmouse, true)
				}
			}
		}
		if (typeof window.addEventListener != "undefined") {
			window.addEventListener("load", sc_adsense_init, false)
		} else {
			if (typeof document.addEventListener != "undefined") {
				document.addEventListener("load", sc_adsense_init, false)
			} else {
				if (typeof window.attachEvent != "undefined") {
					window.attachEvent("onload", sc_adsense_init)
				} else {
					if (typeof window.onload == "function") {
						var sc_existing = onload;
						window.onload = function() {
							sc_existing();
							sc_adsense_init()
						}
					} else {
						window.onload = sc_adsense_init
					}
				}
			}
		}

		function sc_getmouse(e) {
			if (typeof e.pageX == "number") {
				sc_px = e.pageX;
				sc_py = e.pageY
			} else {
				if (typeof e.clientX == "number") {
					sc_px = e.clientX;
					sc_py = e.clientY;
					if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
						sc_px += document.body.scrollLeft;
						sc_py += document.body.scrollTop
					} else {
						if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
							sc_px += document.documentElement.scrollLeft;
							sc_py += document.documentElement.scrollTop
						}
					}
				}
			}
		}

		function sc_findy(obj) {
			var y = 0;
			while (obj) {
				y += obj.offsetTop;
				obj = obj.offsetParent
			}
			return (y)
		}

		function sc_findx(obj) {
			var x = 0;
			while (obj) {
				x += obj.offsetLeft;
				obj = obj.offsetParent
			}
			return (x)
		}

		function sc_exitpage(e) {
			ad = document.getElementsByTagName("iframe");
			if (typeof sc_px == "undefined") {
				return
			}
			for (var i = 0; i < ad.length; i++) {
				var _e7 = sc_findx(ad[i]);
				var _e8 = sc_findy(ad[i]);
				var adW = parseInt(_e7, 10) + parseInt(ad[i].width, 10) + 15;
				var adH = parseInt(_e8, 10) + parseInt(ad[i].height, 10) + 10;
				var _eb = (sc_px > (_e7 - 10) && sc_px < adW);
				var _ec = (sc_py > (_e8 - 10) && sc_py < adH);
				if (_ec && _eb) {
					if (ad[i].src.match(sc_gsyn_pattern) || ad[i].id.match(sc_gsyn_pattern2)) {
						sc_adsense_click(ad[i])
					}
				}
			}
		}
	}
}