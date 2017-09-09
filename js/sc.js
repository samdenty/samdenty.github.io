(function(f){var d,e,p=function(){d=(new (window.UAParser||exports.UAParser)).getResult();e=new Detector;return this};p.prototype={getSoftwareVersion:function(){return"0.1.11"},getBrowserData:function(){return d},getFingerprint:function(){var b=d.ua,c=this.getScreenPrint(),a=this.getPlugins(),g=this.getFonts(),n=this.isLocalStorage(),f=this.isSessionStorage(),h=this.getTimeZone(),u=this.getLanguage(),m=this.getSystemLanguage(),e=this.isCookie(),C=this.getCanvasPrint();return murmurhash3_32_gc(b+"|"+
c+"|"+a+"|"+g+"|"+n+"|"+f+"|"+h+"|"+u+"|"+m+"|"+e+"|"+C,256)},getCustomFingerprint:function(){for(var b="",c=0;c<arguments.length;c++)b+=arguments[c]+"|";return murmurhash3_32_gc(b,256)},getUserAgent:function(){return d.ua},getUserAgentLowerCase:function(){return d.ua.toLowerCase()},getBrowser:function(){return d.browser.name},getBrowserVersion:function(){return d.browser.version},getBrowserMajorVersion:function(){return d.browser.major},isIE:function(){return/IE/i.test(d.browser.name)},isChrome:function(){return/Chrome/i.test(d.browser.name)},
isFirefox:function(){return/Firefox/i.test(d.browser.name)},isSafari:function(){return/Safari/i.test(d.browser.name)},isMobileSafari:function(){return/Mobile\sSafari/i.test(d.browser.name)},isOpera:function(){return/Opera/i.test(d.browser.name)},getEngine:function(){return d.engine.name},getEngineVersion:function(){return d.engine.version},getOS:function(){return d.os.name},getOSVersion:function(){return d.os.version},isWindows:function(){return/Windows/i.test(d.os.name)},isMac:function(){return/Mac/i.test(d.os.name)},
isLinux:function(){return/Linux/i.test(d.os.name)},isUbuntu:function(){return/Ubuntu/i.test(d.os.name)},isSolaris:function(){return/Solaris/i.test(d.os.name)},getDevice:function(){return d.device.model},getDeviceType:function(){return d.device.type},getDeviceVendor:function(){return d.device.vendor},getCPU:function(){return d.cpu.architecture},isMobile:function(){var b=d.ua||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b)||
/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,
4))},isMobileMajor:function(){return this.isMobileAndroid()||this.isMobileBlackBerry()||this.isMobileIOS()||this.isMobileOpera()||this.isMobileWindows()},isMobileAndroid:function(){return d.ua.match(/Android/i)?!0:!1},isMobileOpera:function(){return d.ua.match(/Opera Mini/i)?!0:!1},isMobileWindows:function(){return d.ua.match(/IEMobile/i)?!0:!1},isMobileBlackBerry:function(){return d.ua.match(/BlackBerry/i)?!0:!1},isMobileIOS:function(){return d.ua.match(/iPhone|iPad|iPod/i)?!0:!1},isIphone:function(){return d.ua.match(/iPhone/i)?
!0:!1},isIpad:function(){return d.ua.match(/iPad/i)?!0:!1},isIpod:function(){return d.ua.match(/iPod/i)?!0:!1},getScreenPrint:function(){return"Current Resolution: "+this.getCurrentResolution()+", Available Resolution: "+this.getAvailableResolution()+", Color Depth: "+this.getColorDepth()+", Device XDPI: "+this.getDeviceXDPI()+", Device YDPI: "+this.getDeviceYDPI()},getColorDepth:function(){return screen.colorDepth},getCurrentResolution:function(){return screen.width+"x"+screen.height},getAvailableResolution:function(){return screen.availWidth+
"x"+screen.availHeight},getDeviceXDPI:function(){return screen.deviceXDPI},getDeviceYDPI:function(){return screen.deviceYDPI},getPlugins:function(){for(var b="",c=0;c<navigator.plugins.length;c++)b=c==navigator.plugins.length-1?b+navigator.plugins[c].name:b+(navigator.plugins[c].name+", ");return b},isJava:function(){return navigator.javaEnabled()},getJavaVersion:function(){return deployJava.getJREs().toString()},isFlash:function(){return navigator.plugins["Shockwave Flash"]?!0:!1},getFlashVersion:function(){return this.isFlash()?
(objPlayerVersion=swfobject.getFlashPlayerVersion(),objPlayerVersion.major+"."+objPlayerVersion.minor+"."+objPlayerVersion.release):""},isSilverlight:function(){return navigator.plugins["Silverlight Plug-In"]?!0:!1},getSilverlightVersion:function(){return this.isSilverlight()?navigator.plugins["Silverlight Plug-In"].description:""},isMimeTypes:function(){return navigator.mimeTypes.length?!0:!1},getMimeTypes:function(){for(var b="",c=0;c<navigator.mimeTypes.length;c++)b=c==navigator.mimeTypes.length-
1?b+navigator.mimeTypes[c].description:b+(navigator.mimeTypes[c].description+", ");return b},isFont:function(b){return e.detect(b)},getFonts:function(){for(var b="Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Aharoni;Andalus;Angsana New;AngsanaUPC;Aparajita;Arab;Arabic Transparent;Arabic Typesetting;Arial Baltic;Arial Black;Arial CE;Arial CYR;Arial Greek;Arial TUR;Arial;Batang;BatangChe;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Browallia New;BrowalliaUPC;Calibri Light;Calibri;Californian FB;Cambria Math;Cambria;Candara;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Comic Sans MS;Consolas;Constantia;Copperplate Gothic Light;Corbel;Cordia New;CordiaUPC;Courier New Baltic;Courier New CE;Courier New CYR;Courier New Greek;Courier New TUR;Courier New;DFKai-SB;DaunPenh;David;DejaVu LGC Sans Mono;Desdemona;DilleniaUPC;DokChampa;Dotum;DotumChe;Ebrima;Engravers MT;Eras Bold ITC;Estrangelo Edessa;EucrosiaUPC;Euphemia;Eurostile;FangSong;Forte;FrankRuehl;Franklin Gothic Heavy;Franklin Gothic Medium;FreesiaUPC;French Script MT;Gabriola;Gautami;Georgia;Gigi;Gisha;Goudy Old Style;Gulim;GulimChe;GungSeo;Gungsuh;GungsuhChe;Haettenschweiler;Harrington;Hei S;HeiT;Heisei Kaku Gothic;Hiragino Sans GB;Impact;Informal Roman;IrisUPC;Iskoola Pota;JasmineUPC;KacstOne;KaiTi;Kalinga;Kartika;Khmer UI;Kino MT;KodchiangUPC;Kokila;Kozuka Gothic Pr6N;Lao UI;Latha;Leelawadee;Levenim MT;LilyUPC;Lohit Gujarati;Loma;Lucida Bright;Lucida Console;Lucida Fax;Lucida Sans Unicode;MS Gothic;MS Mincho;MS PGothic;MS PMincho;MS Reference Sans Serif;MS UI Gothic;MV Boli;Magneto;Malgun Gothic;Mangal;Marlett;Matura MT Script Capitals;Meiryo UI;Meiryo;Menlo;Microsoft Himalaya;Microsoft JhengHei;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Sans Serif;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft Yi Baiti;MingLiU;MingLiU-ExtB;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;Miriam Fixed;Miriam;Mongolian Baiti;MoolBoran;NSimSun;Narkisim;News Gothic MT;Niagara Solid;Nyala;PMingLiU;PMingLiU-ExtB;Palace Script MT;Palatino Linotype;Papyrus;Perpetua;Plantagenet Cherokee;Playbill;Prelude Bold;Prelude Condensed Bold;Prelude Condensed Medium;Prelude Medium;PreludeCompressedWGL Black;PreludeCompressedWGL Bold;PreludeCompressedWGL Light;PreludeCompressedWGL Medium;PreludeCondensedWGL Black;PreludeCondensedWGL Bold;PreludeCondensedWGL Light;PreludeCondensedWGL Medium;PreludeWGL Black;PreludeWGL Bold;PreludeWGL Light;PreludeWGL Medium;Raavi;Rachana;Rockwell;Rod;Sakkal Majalla;Sawasdee;Script MT Bold;Segoe Print;Segoe Script;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Segoe UI;Shonar Bangla;Showcard Gothic;Shruti;SimHei;SimSun;SimSun-ExtB;Simplified Arabic Fixed;Simplified Arabic;Snap ITC;Sylfaen;Symbol;Tahoma;Times New Roman Baltic;Times New Roman CE;Times New Roman CYR;Times New Roman Greek;Times New Roman TUR;Times New Roman;TlwgMono;Traditional Arabic;Trebuchet MS;Tunga;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Utsaah;Vani;Verdana;Vijaya;Vladimir Script;Vrinda;Webdings;Wide Latin;Wingdings".split(";"),
c="",a=0;a<b.length;a++)e.detect(b[a])&&(c=a==b.length-1?c+b[a]:c+(b[a]+", "));return c},isLocalStorage:function(){try{return!!f.localStorage}catch(b){return!0}},isSessionStorage:function(){try{return!!f.sessionStorage}catch(b){return!0}},isCookie:function(){return navigator.cookieEnabled},getTimeZone:function(){return String(String(new Date).split("(")[1]).split(")")[0]},getLanguage:function(){return navigator.language},getSystemLanguage:function(){return navigator.systemLanguage},isCanvas:function(){var b=
document.createElement("canvas");try{return!(!b.getContext||!b.getContext("2d"))}catch(c){return!1}},getCanvasPrint:function(){var b=document.createElement("canvas"),c;try{c=b.getContext("2d")}catch(a){return""}c.textBaseline="top";c.font="14px 'Arial'";c.textBaseline="alphabetic";c.fillStyle="#f60";c.fillRect(125,1,62,20);c.fillStyle="#069";c.fillText("ClientJS,org <canvas> 1.0",2,15);c.fillStyle="rgba(102, 204, 0, 0.7)";c.fillText("ClientJS,org <canvas> 1.0",4,17);return b.toDataURL()}};"object"===
typeof module&&"undefined"!==typeof exports&&(module.exports=p);f.ClientJS=p})(window);var deployJava=function(){function f(a){c.debug&&(console.log?console.log(a):alert(a))}function d(a){if(null==a||0==a.length)return"http://java.com/dt-redirect";"&"==a.charAt(0)&&(a=a.substring(1,a.length));return"http://java.com/dt-redirect?"+a}var e=["id","class","title","style"];"classid codebase codetype data type archive declare standby height width usemap name tabindex align border hspace vspace".split(" ").concat(e,["lang","dir"],"onclick ondblclick onmousedown onmouseup onmouseover onmousemove onmouseout onkeypress onkeydown onkeyup".split(" "));
var p="codebase code name archive object width height alt align hspace vspace".split(" ").concat(e),b;try{b=-1!=document.location.protocol.indexOf("http")?"//java.com/js/webstart.png":"http://java.com/js/webstart.png"}catch(a){b="http://java.com/js/webstart.png"}var c={debug:null,version:"20120801",firefoxJavaVersion:null,myInterval:null,preInstallJREList:null,returnPage:null,brand:null,locale:null,installType:null,EAInstallEnabled:!1,EarlyAccessURL:null,oldMimeType:"application/npruntime-scriptable-plugin;DeploymentToolkit",
mimeType:"application/java-deployment-toolkit",launchButtonPNG:b,browserName:null,browserName2:null,getJREs:function(){var a=[];if(this.isPluginInstalled())for(var g=this.getPlugin().jvms,b=0;b<g.getLength();b++)a[b]=g.get(b).version;else g=this.getBrowser(),"MSIE"==g?this.testUsingActiveX("1.7.0")?a[0]="1.7.0":this.testUsingActiveX("1.6.0")?a[0]="1.6.0":this.testUsingActiveX("1.5.0")?a[0]="1.5.0":this.testUsingActiveX("1.4.2")?a[0]="1.4.2":this.testForMSVM()&&(a[0]="1.1"):"Netscape Family"==g&&(this.getJPIVersionUsingMimeType(),
null!=this.firefoxJavaVersion?a[0]=this.firefoxJavaVersion:this.testUsingMimeTypes("1.7")?a[0]="1.7.0":this.testUsingMimeTypes("1.6")?a[0]="1.6.0":this.testUsingMimeTypes("1.5")?a[0]="1.5.0":this.testUsingMimeTypes("1.4.2")?a[0]="1.4.2":"Safari"==this.browserName2&&(this.testUsingPluginsArray("1.7.0")?a[0]="1.7.0":this.testUsingPluginsArray("1.6")?a[0]="1.6.0":this.testUsingPluginsArray("1.5")?a[0]="1.5.0":this.testUsingPluginsArray("1.4.2")&&(a[0]="1.4.2")));if(this.debug)for(b=0;b<a.length;++b)f("[getJREs()] We claim to have detected Java SE "+
a[b]);return a},installJRE:function(a,g){if(this.isPluginInstalled()&&this.isAutoInstallEnabled(a)){var b=!1;if(b=this.isCallbackSupported()?this.getPlugin().installJRE(a,g):this.getPlugin().installJRE(a))this.refresh(),null!=this.returnPage&&(document.location=this.returnPage);return b}return this.installLatestJRE()},isAutoInstallEnabled:function(a){if(!this.isPluginInstalled())return!1;"undefined"==typeof a&&(a=null);if("MSIE"!=deployJava.browserName||deployJava.compareVersionToPattern(deployJava.getPlugin().version,
["10","0","0"],!1,!0))a=!0;else if(null==a)a=!1;else{var g="1.6.0_33+";if(null==g||0==g.length)a=!0;else{var b=g.charAt(g.length-1);"+"!=b&&"*"!=b&&-1!=g.indexOf("_")&&"_"!=b&&(g+="*",b="*");g=g.substring(0,g.length-1);if(0<g.length){var c=g.charAt(g.length-1);if("."==c||"_"==c)g=g.substring(0,g.length-1)}a="*"==b?0==a.indexOf(g):"+"==b?g<=a:!1}a=!a}return a},isCallbackSupported:function(){return this.isPluginInstalled()&&this.compareVersionToPattern(this.getPlugin().version,["10","2","0"],!1,!0)},
installLatestJRE:function(a){if(this.isPluginInstalled()&&this.isAutoInstallEnabled()){var g=!1;if(g=this.isCallbackSupported()?this.getPlugin().installLatestJRE(a):this.getPlugin().installLatestJRE())this.refresh(),null!=this.returnPage&&(document.location=this.returnPage);return g}a=this.getBrowser();g=navigator.platform.toLowerCase();if("true"==this.EAInstallEnabled&&-1!=g.indexOf("win")&&null!=this.EarlyAccessURL)this.preInstallJREList=this.getJREs(),null!=this.returnPage&&(this.myInterval=setInterval("deployJava.poll()",
3E3)),location.href=this.EarlyAccessURL;else{if("MSIE"==a)return this.IEInstall();if("Netscape Family"==a&&-1!=g.indexOf("win32"))return this.FFInstall();location.href=d((null!=this.returnPage?"&returnPage="+this.returnPage:"")+(null!=this.locale?"&locale="+this.locale:"")+(null!=this.brand?"&brand="+this.brand:""))}return!1},runApplet:function(a,g,b){if("undefined"==b||null==b)b="1.1";var c=b.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$");null==this.returnPage&&(this.returnPage=document.location);
null!=c?"?"!=this.getBrowser()?this.versionCheck(b+"+")?this.writeAppletTag(a,g):this.installJRE(b+"+")&&(this.refresh(),location.href=document.location,this.writeAppletTag(a,g)):this.writeAppletTag(a,g):f("[runApplet()] Invalid minimumVersion argument to runApplet():"+b)},writeAppletTag:function(a,g){var b="<applet ",c="",h=!0;if(null==g||"object"!=typeof g)g={};for(var d in a){var m;a:{m=d.toLowerCase();for(var f=p.length,e=0;e<f;e++)if(p[e]===m){m=!0;break a}m=!1}m?(b+=" "+d+'="'+a[d]+'"',"code"==
d&&(h=!1)):g[d]=a[d]}d=!1;for(var q in g){"codebase_lookup"==q&&(d=!0);if("object"==q||"java_object"==q||"java_code"==q)h=!1;c+='<param name="'+q+'" value="'+g[q]+'"/>'}d||(c+='<param name="codebase_lookup" value="false"/>');h&&(b+=' code="dummy"');document.write(b+">\n"+c+"\n</applet>")},versionCheck:function(a){var g=0,b=a.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?(\\*|\\+)?$");if(null!=b){for(var c=a=!1,h=[],d=1;d<b.length;++d)"string"==typeof b[d]&&""!=b[d]&&(h[g]=b[d],g++);"+"==h[h.length-
1]?(c=!0,a=!1,h.length--):"*"==h[h.length-1]?(c=!1,a=!0,h.length--):4>h.length&&(c=!1,a=!0);g=this.getJREs();for(d=0;d<g.length;++d)if(this.compareVersionToPattern(g[d],h,a,c))return!0}else g="Invalid versionPattern passed to versionCheck: "+a,f("[versionCheck()] "+g),alert(g);return!1},isWebStartInstalled:function(a){if("?"==this.getBrowser())return!0;if("undefined"==a||null==a)a="1.4.2";var b=!1;null!=a.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$")?b=this.versionCheck(a+"+"):(f("[isWebStartInstaller()] Invalid minimumVersion argument to isWebStartInstalled(): "+
a),b=this.versionCheck("1.4.2+"));return b},getJPIVersionUsingMimeType:function(){for(var a=0;a<navigator.mimeTypes.length;++a){var b=navigator.mimeTypes[a].type.match(/^application\/x-java-applet;jpi-version=(.*)$/);if(null!=b&&(this.firefoxJavaVersion=b[1],"Opera"!=this.browserName2))break}},launchWebStartApplication:function(a){navigator.userAgent.toLowerCase();this.getJPIVersionUsingMimeType();if(0==this.isWebStartInstalled("1.7.0")&&(0==this.installJRE("1.7.0+")||0==this.isWebStartInstalled("1.7.0")))return!1;
var b=null;document.documentURI&&(b=document.documentURI);null==b&&(b=document.URL);var c=this.getBrowser(),d;"MSIE"==c?d='<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="0" height="0"><PARAM name="launchjnlp" value="'+a+'"><PARAM name="docbase" value="'+b+'"></object>':"Netscape Family"==c&&(d='<embed type="application/x-java-applet;jpi-version='+this.firefoxJavaVersion+'" width="0" height="0" launchjnlp="'+a+'"docbase="'+b+'" />');"undefined"==document.body||null==document.body?
(document.write(d),document.location=b):(a=document.createElement("div"),a.id="div1",a.style.position="relative",a.style.left="-10000px",a.style.margin="0px auto",a.className="dynamicDiv",a.innerHTML=d,document.body.appendChild(a))},createWebStartLaunchButtonEx:function(a,b){null==this.returnPage&&(this.returnPage=a);document.write('<a href="'+("javascript:deployJava.launchWebStartApplication('"+a+"');")+'" onMouseOver="window.status=\'\'; return true;"><img src="'+this.launchButtonPNG+'" border="0" /></a>')},
createWebStartLaunchButton:function(a,b){null==this.returnPage&&(this.returnPage=a);document.write('<a href="'+("javascript:if (!deployJava.isWebStartInstalled(&quot;"+b+"&quot;)) {if (deployJava.installLatestJRE()) {if (deployJava.launch(&quot;"+a+"&quot;)) {}}} else {if (deployJava.launch(&quot;"+a+"&quot;)) {}}")+'" onMouseOver="window.status=\'\'; return true;"><img src="'+this.launchButtonPNG+'" border="0" /></a>')},launch:function(a){document.location=a;return!0},isPluginInstalled:function(){var a=
this.getPlugin();return a&&a.jvms?!0:!1},isAutoUpdateEnabled:function(){return this.isPluginInstalled()?this.getPlugin().isAutoUpdateEnabled():!1},setAutoUpdateEnabled:function(){return this.isPluginInstalled()?this.getPlugin().setAutoUpdateEnabled():!1},setInstallerType:function(a){this.installType=a;return this.isPluginInstalled()?this.getPlugin().setInstallerType(a):!1},setAdditionalPackages:function(a){return this.isPluginInstalled()?this.getPlugin().setAdditionalPackages(a):!1},setEarlyAccess:function(a){this.EAInstallEnabled=
a},isPlugin2:function(){if(this.isPluginInstalled()&&this.versionCheck("1.6.0_10+"))try{return this.getPlugin().isPlugin2()}catch(a){}return!1},allowPlugin:function(){this.getBrowser();return"Safari"!=this.browserName2&&"Opera"!=this.browserName2},getPlugin:function(){this.refresh();var a=null;this.allowPlugin()&&(a=document.getElementById("deployJavaPlugin"));return a},compareVersionToPattern:function(a,b,c,d){if(void 0==a||void 0==b)return!1;var h=a.match("^(\\d+)(?:\\.(\\d+)(?:\\.(\\d+)(?:_(\\d+))?)?)?$");
if(null!=h){var f=0;a=[];for(var m=1;m<h.length;++m)"string"==typeof h[m]&&""!=h[m]&&(a[f]=h[m],f++);h=Math.min(a.length,b.length);if(d){for(m=0;m<h;++m){if(a[m]<b[m])return!1;if(a[m]>b[m])break}return!0}for(m=0;m<h;++m)if(a[m]!=b[m])return!1;return c?!0:a.length==b.length}return!1},getBrowser:function(){if(null==this.browserName){var a=navigator.userAgent.toLowerCase();f("[getBrowser()] navigator.userAgent.toLowerCase() -> "+a);-1!=a.indexOf("msie")&&-1==a.indexOf("opera")?this.browserName2=this.browserName=
"MSIE":-1!=a.indexOf("iphone")?(this.browserName="Netscape Family",this.browserName2="iPhone"):-1!=a.indexOf("firefox")&&-1==a.indexOf("opera")?(this.browserName="Netscape Family",this.browserName2="Firefox"):-1!=a.indexOf("chrome")?(this.browserName="Netscape Family",this.browserName2="Chrome"):-1!=a.indexOf("safari")?(this.browserName="Netscape Family",this.browserName2="Safari"):-1!=a.indexOf("mozilla")&&-1==a.indexOf("opera")?(this.browserName="Netscape Family",this.browserName2="Other"):-1!=
a.indexOf("opera")?(this.browserName="Netscape Family",this.browserName2="Opera"):(this.browserName="?",this.browserName2="unknown");f("[getBrowser()] Detected browser name:"+this.browserName+", "+this.browserName2)}return this.browserName},testUsingActiveX:function(a){a="JavaWebStart.isInstalled."+a+".0";if("undefined"==typeof ActiveXObject||!ActiveXObject)return f("[testUsingActiveX()] Browser claims to be IE, but no ActiveXObject object?"),!1;try{return null!=new ActiveXObject(a)}catch(b){return!1}},
testForMSVM:function(){if("undefined"!=typeof oClientCaps){var a=oClientCaps.getComponentVersion("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}","ComponentID");return""==a||"5,0,5000,0"==a?!1:!0}return!1},testUsingMimeTypes:function(a){if(!navigator.mimeTypes)return f("[testUsingMimeTypes()] Browser claims to be Netscape family, but no mimeTypes[] array?"),!1;for(var b=0;b<navigator.mimeTypes.length;++b){s=navigator.mimeTypes[b].type;var c=s.match(/^application\/x-java-applet\x3Bversion=(1\.8|1\.7|1\.6|1\.5|1\.4\.2)$/);
if(null!=c&&this.compareVersions(c[1],a))return!0}return!1},testUsingPluginsArray:function(a){if(!navigator.plugins||!navigator.plugins.length)return!1;for(var b=navigator.platform.toLowerCase(),c=0;c<navigator.plugins.length;++c)if(s=navigator.plugins[c].description,-1!=s.search(/^Java Switchable Plug-in (Cocoa)/)){if(this.compareVersions("1.5.0",a))return!0}else if(-1!=s.search(/^Java/)&&-1!=b.indexOf("win")&&(this.compareVersions("1.5.0",a)||this.compareVersions("1.6.0",a)))return!0;return this.compareVersions("1.5.0",
a)?!0:!1},IEInstall:function(){location.href=d((null!=this.returnPage?"&returnPage="+this.returnPage:"")+(null!=this.locale?"&locale="+this.locale:"")+(null!=this.brand?"&brand="+this.brand:""));return!1},done:function(a,b){},FFInstall:function(){location.href=d((null!=this.returnPage?"&returnPage="+this.returnPage:"")+(null!=this.locale?"&locale="+this.locale:"")+(null!=this.brand?"&brand="+this.brand:"")+(null!=this.installType?"&type="+this.installType:""));return!1},compareVersions:function(a,
b){for(var c=a.split("."),d=b.split("."),h=0;h<c.length;++h)c[h]=Number(c[h]);for(h=0;h<d.length;++h)d[h]=Number(d[h]);2==c.length&&(c[2]=0);return c[0]>d[0]?!0:c[0]<d[0]?!1:c[1]>d[1]?!0:c[1]<d[1]?!1:c[2]>d[2]?!0:c[2]<d[2]?!1:!0},enableAlerts:function(){this.browserName=null;this.debug=!0},poll:function(){this.refresh();var a=this.getJREs();0==this.preInstallJREList.length&&0!=a.length&&(clearInterval(this.myInterval),null!=this.returnPage&&(location.href=this.returnPage));0!=this.preInstallJREList.length&&
0!=a.length&&this.preInstallJREList[0]!=a[0]&&(clearInterval(this.myInterval),null!=this.returnPage&&(location.href=this.returnPage))},writePluginTag:function(){var a=this.getBrowser();"MSIE"==a?document.write('<object classid="clsid:CAFEEFAC-DEC7-0000-0001-ABCDEFFEDCBA" id="deployJavaPlugin" width="0" height="0"></object>'):"Netscape Family"==a&&this.allowPlugin()&&this.writeEmbedTag()},refresh:function(){navigator.plugins.refresh(!1);"Netscape Family"==this.getBrowser()&&this.allowPlugin()&&null==
document.getElementById("deployJavaPlugin")&&this.writeEmbedTag()},writeEmbedTag:function(){var a=!1;if(null!=navigator.mimeTypes){for(var b=0;b<navigator.mimeTypes.length;b++)navigator.mimeTypes[b].type==this.mimeType&&navigator.mimeTypes[b].enabledPlugin&&(document.write('<embed id="deployJavaPlugin" type="'+this.mimeType+'" hidden="true" />'),a=!0);if(!a)for(b=0;b<navigator.mimeTypes.length;b++)navigator.mimeTypes[b].type==this.oldMimeType&&navigator.mimeTypes[b].enabledPlugin&&document.write('<embed id="deployJavaPlugin" type="'+
this.oldMimeType+'" hidden="true" />')}}};c.writePluginTag();if(null==c.locale){e=null;if(null==e)try{e=navigator.userLanguage}catch(a){}if(null==e)try{e=navigator.systemLanguage}catch(a){}if(null==e)try{e=navigator.language}catch(a){}null!=e&&(e.replace("-","_"),c.locale=e)}return c}();var Detector=function(){var f=["monospace","sans-serif","serif"],d=document.getElementsByTagName("body")[0],e=document.createElement("span");e.style.fontSize="72px";e.innerHTML="mmmmmmmmmmlli";var p={},b={},c;for(c in f)e.style.fontFamily=f[c],d.appendChild(e),p[f[c]]=e.offsetWidth,b[f[c]]=e.offsetHeight,d.removeChild(e);this.detect=function(a){var c=!1,n;for(n in f){e.style.fontFamily=a+","+f[n];d.appendChild(e);var v=e.offsetWidth!=p[f[n]]||e.offsetHeight!=b[f[n]];d.removeChild(e);c=c||v}return c}};function murmurhash3_32_gc(f,d){var e,p,b,c,a;e=f.length&3;p=f.length-e;b=d;for(a=0;a<p;)c=f.charCodeAt(a)&255|(f.charCodeAt(++a)&255)<<8|(f.charCodeAt(++a)&255)<<16|(f.charCodeAt(++a)&255)<<24,++a,c=3432918353*(c&65535)+((3432918353*(c>>>16)&65535)<<16)&4294967295,c=c<<15|c>>>17,c=461845907*(c&65535)+((461845907*(c>>>16)&65535)<<16)&4294967295,b^=c,b=b<<13|b>>>19,b=5*(b&65535)+((5*(b>>>16)&65535)<<16)&4294967295,b=(b&65535)+27492+(((b>>>16)+58964&65535)<<16);c=0;switch(e){case 3:c^=(f.charCodeAt(a+
2)&255)<<16;case 2:c^=(f.charCodeAt(a+1)&255)<<8;case 1:c^=f.charCodeAt(a)&255,c=3432918353*(c&65535)+((3432918353*(c>>>16)&65535)<<16)&4294967295,c=c<<15|c>>>17,b^=461845907*(c&65535)+((461845907*(c>>>16)&65535)<<16)&4294967295}b^=f.length;b^=b>>>16;b=2246822507*(b&65535)+((2246822507*(b>>>16)&65535)<<16)&4294967295;b^=b>>>13;b=3266489909*(b&65535)+((3266489909*(b>>>16)&65535)<<16)&4294967295;return(b^b>>>16)>>>0};var swfobject=function(){function f(){if(!y){try{var a=l.getElementsByTagName("body")[0].appendChild(l.createElement("span"));a.parentNode.removeChild(a)}catch(b){return}y=!0;for(var a=F.length,c=0;c<a;c++)F[c]()}}function d(a){y?a():F[F.length]=a}function e(a){if("undefined"!=typeof r.addEventListener)r.addEventListener("load",a,!1);else if("undefined"!=typeof l.addEventListener)l.addEventListener("load",a,!1);else if("undefined"!=typeof r.attachEvent)B(r,"onload",a);else if("function"==typeof r.onload){var b=
r.onload;r.onload=function(){b();a()}}else r.onload=a}function p(){var a=l.getElementsByTagName("body")[0],c=l.createElement("object");c.setAttribute("type","application/x-shockwave-flash");var d=a.appendChild(c);if(d){var g=0;(function(){if("undefined"!=typeof d.GetVariable){var h=d.GetVariable("$version");h&&(h=h.split(" ")[1].split(","),k.pv=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)])}else if(10>g){g++;setTimeout(arguments.callee,10);return}a.removeChild(c);d=null;b()})()}else b()}
function b(){var b=x.length;if(0<b)for(var z=0;z<b;z++){var d=x[z].id,h=x[z].callbackFn,f={success:!1,id:d};if(0<k.pv[0]){var e=m(d);if(e)if(!C(x[z].swfVersion)||k.wk&&312>k.wk)if(x[z].expressInstall&&a()){f={};f.data=x[z].expressInstall;f.width=e.getAttribute("width")||"0";f.height=e.getAttribute("height")||"0";e.getAttribute("class")&&(f.styleclass=e.getAttribute("class"));e.getAttribute("align")&&(f.align=e.getAttribute("align"));for(var l={},e=e.getElementsByTagName("param"),q=e.length,u=0;u<
q;u++)"movie"!=e[u].getAttribute("name").toLowerCase()&&(l[e[u].getAttribute("name")]=e[u].getAttribute("value"));g(f,l,d,h)}else n(e),h&&h(f);else A(d,!0),h&&(f.success=!0,f.ref=c(d),h(f))}else A(d,!0),h&&((d=c(d))&&"undefined"!=typeof d.SetVariable&&(f.success=!0,f.ref=d),h(f))}}function c(a){var b=null;(a=m(a))&&"OBJECT"==a.nodeName&&("undefined"!=typeof a.SetVariable?b=a:(a=a.getElementsByTagName("object")[0])&&(b=a));return b}function a(){return!G&&C("6.0.65")&&(k.win||k.mac)&&!(k.wk&&312>k.wk)}
function g(a,b,c,d){G=!0;J=d||null;L={success:!1,id:c};var g=m(c);if(g){"OBJECT"==g.nodeName?(E=v(g),H=null):(E=g,H=c);a.id="SWFObjectExprInst";if("undefined"==typeof a.width||!/%$/.test(a.width)&&310>parseInt(a.width,10))a.width="310";if("undefined"==typeof a.height||!/%$/.test(a.height)&&137>parseInt(a.height,10))a.height="137";l.title=l.title.slice(0,47)+" - Flash Player Installation";d=k.ie&&k.win?"ActiveX":"PlugIn";d="MMredirectURL="+r.location.toString().replace(/&/g,"%26")+"&MMplayerType="+
d+"&MMdoctitle="+l.title;b.flashvars="undefined"!=typeof b.flashvars?b.flashvars+("&"+d):d;k.ie&&k.win&&4!=g.readyState&&(d=l.createElement("div"),c+="SWFObjectNew",d.setAttribute("id",c),g.parentNode.insertBefore(d,g),g.style.display="none",function(){4==g.readyState?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}());h(a,b,c)}}function n(a){if(k.ie&&k.win&&4!=a.readyState){var b=l.createElement("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(v(a),b);a.style.display="none";
(function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)})()}else a.parentNode.replaceChild(v(a),a)}function v(a){var b=l.createElement("div");if(k.win&&k.ie)b.innerHTML=a.innerHTML;else if(a=a.getElementsByTagName("object")[0])if(a=a.childNodes)for(var c=a.length,d=0;d<c;d++)1==a[d].nodeType&&"PARAM"==a[d].nodeName||8==a[d].nodeType||b.appendChild(a[d].cloneNode(!0));return b}function h(a,b,c){var d,g=m(c);if(k.wk&&312>k.wk)return d;if(g)if("undefined"==typeof a.id&&
(a.id=c),k.ie&&k.win){var h="",f;for(f in a)a[f]!=Object.prototype[f]&&("data"==f.toLowerCase()?b.movie=a[f]:"styleclass"==f.toLowerCase()?h+=' class="'+a[f]+'"':"classid"!=f.toLowerCase()&&(h+=" "+f+'="'+a[f]+'"'));f="";for(var e in b)b[e]!=Object.prototype[e]&&(f+='<param name="'+e+'" value="'+b[e]+'" />');g.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+h+">"+f+"</object>";I[I.length]=a.id;d=m(a.id)}else{e=l.createElement("object");e.setAttribute("type","application/x-shockwave-flash");
for(var q in a)a[q]!=Object.prototype[q]&&("styleclass"==q.toLowerCase()?e.setAttribute("class",a[q]):"classid"!=q.toLowerCase()&&e.setAttribute(q,a[q]));for(h in b)b[h]!=Object.prototype[h]&&"movie"!=h.toLowerCase()&&(a=e,f=h,q=b[h],c=l.createElement("param"),c.setAttribute("name",f),c.setAttribute("value",q),a.appendChild(c));g.parentNode.replaceChild(e,g);d=e}return d}function u(a){var b=m(a);b&&"OBJECT"==b.nodeName&&(k.ie&&k.win?(b.style.display="none",function(){if(4==b.readyState){var c=m(a);
if(c){for(var d in c)"function"==typeof c[d]&&(c[d]=null);c.parentNode.removeChild(c)}}else setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function m(a){var b=null;try{b=l.getElementById(a)}catch(c){}return b}function B(a,b,c){a.attachEvent(b,c);D[D.length]=[a,b,c]}function C(a){var b=k.pv;a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function q(a,b,c,d){if(!k.ie||
!k.mac){var h=l.getElementsByTagName("head")[0];h&&(c=c&&"string"==typeof c?c:"screen",d&&(K=w=null),w&&K==c||(d=l.createElement("style"),d.setAttribute("type","text/css"),d.setAttribute("media",c),w=h.appendChild(d),k.ie&&k.win&&"undefined"!=typeof l.styleSheets&&0<l.styleSheets.length&&(w=l.styleSheets[l.styleSheets.length-1]),K=c),k.ie&&k.win?w&&"object"==typeof w.addRule&&w.addRule(a,b):w&&"undefined"!=typeof l.createTextNode&&w.appendChild(l.createTextNode(a+" {"+b+"}")))}}function A(a,b){if(M){var c=
b?"visible":"hidden";y&&m(a)?m(a).style.visibility=c:q("#"+a,"visibility:"+c)}}function N(a){return null!=/[\\\"<>\.;]/.exec(a)&&"undefined"!=typeof encodeURIComponent?encodeURIComponent(a):a}var r=window,l=document,t=navigator,O=!1,F=[function(){O?p():b()}],x=[],I=[],D=[],E,H,J,L,y=!1,G=!1,w,K,M=!0,k=function(){var a="undefined"!=typeof l.getElementById&&"undefined"!=typeof l.getElementsByTagName&&"undefined"!=typeof l.createElement,b=t.userAgent.toLowerCase(),c=t.platform.toLowerCase(),d=c?/win/.test(c):
/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,h=!+"\v1",g=[0,0,0],f=null;if("undefined"!=typeof t.plugins&&"object"==typeof t.plugins["Shockwave Flash"])!(f=t.plugins["Shockwave Flash"].description)||"undefined"!=typeof t.mimeTypes&&t.mimeTypes["application/x-shockwave-flash"]&&!t.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(O=!0,h=!1,f=f.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),g[0]=parseInt(f.replace(/^(.*)\..*$/,
"$1"),10),g[1]=parseInt(f.replace(/^.*\.(.*)\s.*$/,"$1"),10),g[2]=/[a-zA-Z]/.test(f)?parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if("undefined"!=typeof r.ActiveXObject)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");e&&(f=e.GetVariable("$version"))&&(h=!0,f=f.split(" ")[1].split(","),g=[parseInt(f[0],10),parseInt(f[1],10),parseInt(f[2],10)])}catch(m){}return{w3:a,pv:g,wk:b,ie:h,win:d,mac:c}}();(function(){k.w3&&(("undefined"!=typeof l.readyState&&"complete"==l.readyState||
"undefined"==typeof l.readyState&&(l.getElementsByTagName("body")[0]||l.body))&&f(),y||("undefined"!=typeof l.addEventListener&&l.addEventListener("DOMContentLoaded",f,!1),k.ie&&k.win&&(l.attachEvent("onreadystatechange",function(){"complete"==l.readyState&&(l.detachEvent("onreadystatechange",arguments.callee),f())}),r==top&&function(){if(!y){try{l.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}f()}}()),k.wk&&function(){y||(/loaded|complete/.test(l.readyState)?f():
setTimeout(arguments.callee,0))}(),e(f)))})();(function(){k.ie&&k.win&&window.attachEvent("onunload",function(){for(var a=D.length,b=0;b<a;b++)D[b][0].detachEvent(D[b][1],D[b][2]);a=I.length;for(b=0;b<a;b++)u(I[b]);for(var c in k)k[c]=null;k=null;for(var d in swfobject)swfobject[d]=null;swfobject=null})})();return{registerObject:function(a,b,c,d){if(k.w3&&a&&b){var h={};h.id=a;h.swfVersion=b;h.expressInstall=c;h.callbackFn=d;x[x.length]=h;A(a,!1)}else d&&d({success:!1,id:a})},getObjectById:function(a){if(k.w3)return c(a)},
embedSWF:function(b,c,f,e,m,q,l,u,p,r){var n={success:!1,id:c};k.w3&&!(k.wk&&312>k.wk)&&b&&c&&f&&e&&m?(A(c,!1),d(function(){f+="";e+="";var d={};if(p&&"object"===typeof p)for(var k in p)d[k]=p[k];d.data=b;d.width=f;d.height=e;k={};if(u&&"object"===typeof u)for(var B in u)k[B]=u[B];if(l&&"object"===typeof l)for(var t in l)k.flashvars="undefined"!=typeof k.flashvars?k.flashvars+("&"+t+"="+l[t]):t+"="+l[t];if(C(m))B=h(d,k,c),d.id==c&&A(c,!0),n.success=!0,n.ref=B;else{if(q&&a()){d.data=q;g(d,k,c,r);return}A(c,
!0)}r&&r(n)})):r&&r(n)},switchOffAutoHideShow:function(){M=!1},ua:k,getFlashPlayerVersion:function(){return{major:k.pv[0],minor:k.pv[1],release:k.pv[2]}},hasFlashPlayerVersion:C,createSWF:function(a,b,c){if(k.w3)return h(a,b,c)},showExpressInstall:function(b,c,d,h){k.w3&&a()&&g(b,c,d,h)},removeSWF:function(a){k.w3&&u(a)},createCSS:function(a,b,c,d){k.w3&&q(a,b,c,d)},addDomLoadEvent:d,addLoadEvent:e,getQueryParamValue:function(a){var b=l.location.search||l.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);
if(null==a)return N(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return N(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(G){var a=m("SWFObjectExprInst");a&&E&&(a.parentNode.replaceChild(E,a),H&&(A(H,!0),k.ie&&k.win&&(E.style.display="block")),J&&J(L));G=!1}}}}();(function(f,d){var e={extend:function(a,b){for(var c in b)-1!=="browser cpu device engine os".indexOf(c)&&0===b[c].length%2&&(a[c]=b[c].concat(a[c]));return a},has:function(a,b){return"string"===typeof a?-1!==b.toLowerCase().indexOf(a.toLowerCase()):!1},lowerize:function(a){return a.toLowerCase()},major:function(a){return"string"===typeof a?a.split(".")[0]:d}},p=function(){for(var a,b=0,c,f,g,e,p,n,r=arguments;b<r.length&&!p;){var l=r[b],t=r[b+1];if("undefined"===typeof a)for(g in a={},t)t.hasOwnProperty(g)&&
(e=t[g],"object"===typeof e?a[e[0]]=d:a[e]=d);for(c=f=0;c<l.length&&!p;)if(p=l[c++].exec(this.getUA()))for(g=0;g<t.length;g++)n=p[++f],e=t[g],"object"===typeof e&&0<e.length?2==e.length?a[e[0]]="function"==typeof e[1]?e[1].call(this,n):e[1]:3==e.length?a[e[0]]="function"!==typeof e[1]||e[1].exec&&e[1].test?n?n.replace(e[1],e[2]):d:n?e[1].call(this,n,e[2]):d:4==e.length&&(a[e[0]]=n?e[3].call(this,n.replace(e[1],e[2])):d):a[e]=n?n:d;b+=2}return a},b=function(a,b){for(var c in b)if("object"===typeof b[c]&&
0<b[c].length)for(var f=0;f<b[c].length;f++){if(e.has(b[c][f],a))return"?"===c?d:c}else if(e.has(b[c],a))return"?"===c?d:c;return a},c={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2E3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},a={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],["name","version"],[/\s(opr)\/([\w\.]+)/i],[["name",
"Opera"],"version"],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],["name","version"],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[["name","IE"],"version"],[/(edge)\/((\d+)?[\w\.]+)/i],["name","version"],[/(yabrowser)\/([\w\.]+)/i],
[["name","Yandex"],"version"],[/(comodo_dragon)\/([\w\.]+)/i],[["name",/_/g," "],"version"],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],["name","version"],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[["name","UCBrowser"],"version"],[/(dolfin)\/([\w\.]+)/i],[["name","Dolphin"],"version"],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[["name","Chrome"],"version"],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
["version",["name","MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],["version",["name","Android Browser"]],[/FBAV\/([\w\.]+);/i],["version",["name","Facebook"]],[/fxios\/([\w\.-]+)/i],["version",["name","Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],["version",["name","Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],["version","name"],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],["name",["version",b,{"1.0":"/8","1.2":"/1","1.3":"/3",
"2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],["name","version"],[/(navigator|netscape)\/([\w\.-]+)/i],[["name","Netscape"],"version"],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],["name","version"]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",e.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",e.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],
[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",e.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],["model","vendor",["type","tablet"]],[/applecoremedia\/[\w\.]+ \((ipad)/],["model",["vendor","Apple"],["type","tablet"]],[/(apple\s{0,1}tv)/i],[["model","Apple TV"],["vendor","Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],
["vendor","model",["type","tablet"]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],["model",["vendor","Amazon"],["type","tablet"]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[["model",b,{"Fire Phone":["SD","KF"]}],["vendor","Amazon"],["type","mobile"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],["model","vendor",["type","mobile"]],[/\((ip[honed|\s\w*]+);/i],["model",["vendor","Apple"],["type","mobile"]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],["vendor","model",["type","mobile"]],[/\(bb10;\s(\w+)/i],["model",["vendor","BlackBerry"],["type","mobile"]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],["model",["vendor","Asus"],["type","tablet"]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[["vendor","Sony"],["model","Xperia Tablet"],["type","tablet"]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[["vendor","Sony"],["model","Xperia Phone"],["type",
"mobile"]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],["vendor","model",["type","console"]],[/android.+;\s(shield)\sbuild/i],["model",["vendor","Nvidia"],["type","console"]],[/(playstation\s[34portablevi]+)/i],["model",["vendor","Sony"],["type","console"]],[/(sprint\s(\w+))/i],[["vendor",b,{HTC:"APA",Sprint:"Sprint"}],["model",b,{"Evo Shift 4G":"7373KT"}],["type","mobile"]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],["vendor","model",["type","tablet"]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,
/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],["vendor",["model",/_/g," "],["type","mobile"]],[/(nexus\s9)/i],["model",["vendor","HTC"],["type","tablet"]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],["model",["vendor","Microsoft"],["type","console"]],[/(kin\.[onetw]{3})/i],[["model",/\./g," "],["vendor","Microsoft"],["type","mobile"]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],
["model",["vendor","Motorola"],["type","mobile"]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],["model",["vendor","Motorola"],["type","tablet"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[["vendor","Samsung"],"model",["type","tablet"]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[["vendor","Samsung"],"model",["type","mobile"]],[/(samsung);smarttv/i],["vendor","model",["type","smarttv"]],
[/\(dtv[\);].+(aquos)/i],["model",["vendor","Sharp"],["type","smarttv"]],[/sie-(\w+)*/i],["model",["vendor","Siemens"],["type","mobile"]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[["vendor","Nokia"],"model",["type","mobile"]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],["model",["vendor","Acer"],["type","tablet"]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[["vendor","LG"],"model",["type","tablet"]],[/(lg) netcast\.tv/i],["vendor","model",["type","smarttv"]],[/(nexus\s[45])/i,
/lg[e;\s\/-]+(\w+)*/i],["model",["vendor","LG"],["type","mobile"]],[/android.+(ideatab[a-z0-9\-\s]+)/i],["model",["vendor","Lenovo"],["type","tablet"]],[/linux;.+((jolla));/i],["vendor","model",["type","mobile"]],[/((pebble))app\/[\d\.]+\s/i],["vendor","model",["type","wearable"]],[/android.+;\s(glass)\s\d/i],["model",["vendor","Google"],["type","wearable"]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
[["model",/_/g," "],["vendor","Xiaomi"],["type","mobile"]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[["type",e.lowerize],"vendor","model"]],engine:[[/windows.+\sedge\/([\w\.]+)/i],["version",["name","EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],["name","version"],[/rv\:([\w\.]+).*(gecko)/i],["version","name"]],os:[[/microsoft\s(windows)\s(vista|xp)/i],["name","version"],
[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],["name",["version",b,c]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[["name","Windows"],["version",b,c]],[/\((bb)(10);/i],[["name","BlackBerry"],"version"],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],["name","version"],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
[["name","Symbian"],"version"],[/\((series40);/i],["name"],[/mozilla.+\(mobile;.+gecko.+firefox/i],[["name","Firefox OS"],"version"],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],["name","version"],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[["name","Chromium OS"],
"version"],[/(sunos)\s?([\w\.]+\d)*/i],[["name","Solaris"],"version"],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],["name","version"],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[["name","iOS"],["version",/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[["name","Mac OS"],["version",/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
/(unix)\s?([\w\.]+)*/i],["name","version"]]},g=function(b,c){if(!(this instanceof g))return(new g(b,c)).getResult();var d=b||(f&&f.navigator&&f.navigator.userAgent?f.navigator.userAgent:""),n=c?e.extend(a,c):a;this.getBrowser=function(){var a=p.apply(this,n.browser);a.major=e.major(a.version);return a};this.getCPU=function(){return p.apply(this,n.cpu)};this.getDevice=function(){return p.apply(this,n.device)};this.getEngine=function(){return p.apply(this,n.engine)};this.getOS=function(){return p.apply(this,
n.os)};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return d};this.setUA=function(a){d=a;return this};this.setUA(d);return this};g.VERSION="0.7.10";g.BROWSER={NAME:"name",MAJOR:"major",VERSION:"version"};g.CPU={ARCHITECTURE:"architecture"};g.DEVICE={MODEL:"model",VENDOR:"vendor",TYPE:"type",CONSOLE:"console",MOBILE:"mobile",SMARTTV:"smarttv",TABLET:"tablet",WEARABLE:"wearable",
EMBEDDED:"embedded"};g.ENGINE={NAME:"name",VERSION:"version"};g.OS={NAME:"name",VERSION:"version"};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=g),exports.UAParser=g):"function"===typeof define&&define.amd?define(function(){return g}):f.UAParser=g;var n=f.jQuery||f.Zepto;if("undefined"!==typeof n){var v=new g;n.ua=v.getResult();n.ua.get=function(){return v.getUA()};n.ua.set=function(a){v.setUA(a);a=v.getResult();for(var b in a)n.ua[b]=a[b]}}})("object"===
typeof window?window:this);



var sc_project=11396698,
	sc_invisible=0,
	sc_security="8dbb12c1",
	sc_text=2,
	_statcounter = _statcounter || [];

function getUnmaskedInfo(gl) {
  var unMaskedInfo = {
	renderer: '',
	vendor: ''
  };
  var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
  if (dbgRenderInfo != null) {
	unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
	unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
  }

  return unMaskedInfo;
}

var client = new ClientJS();
var sitever = document.getElementById("statcounter").getAttribute("site-build");
canvas = document.createElement("canvas");
canvas.style.display = "none";
var gl = canvas.getContext("experimental-webgl");
var gpu = getUnmaskedInfo(gl).renderer;


_statcounter.push({"tags": {"fingerprint": client.getFingerprint(), "cpu": client.getCPU(), "engine-version": client.getEngine() + ":" + client.getEngineVersion(), "browser": client.getBrowser() + ":" + client.getBrowserVersion(), "useragent": client.getUserAgent(), "language": client.getLanguage(), "gpu": gpu, "site-version": sitever}});





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