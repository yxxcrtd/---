function J(){var t=[].slice.apply(arguments);if(!(t.length<2))return t.shift().apply(t.shift(),t)}function copy(){var t,e=[].slice.apply(arguments);if(e.length){if(t=e.shift(),!e.length)return t;for(var n=0,o=e.length;o>n;n++)if(e[n])for(var r in e[n])t[r]=e[n][r];return t}}function $_GET(t){var e;if(!window.getSearchParameters){e=location.search.replace("?","").split("&"),window.getSearchParameters={};for(var n,o=0,r=e.length;r>o;o++)n=e[o].split("="),getSearchParameters[n[0]]=decodeURIComponent(n[1])}return getSearchParameters[t]}function toFormatStr(){var t=[].slice.apply(arguments);return t.length?t.shift().replace(/\{([^\}]+)\}/gi,function(e){return e=e.replace(/[\{\}]/g,"").split("||"),t[e[0].replace(/\s/g,"")]||(e[1]?e[1]:e[0]).replace(/(^\s+)|(\s+$)/g,"")}):""}function splitPoint(t,e){var n,t=1*t,o=scientific2float(t).toString().split(".");return o.length<2?o[1]=Math.pow(10,e).toString().substring(1,e+1):(n=scientific2float(o[1]).toString().length,o[1]=(scientific2float(scientific2float(o[1])/Math.pow(10,n)).toString()+"00000000000000").substring(2,e+2)),o}function cutFixed(t,e,n){return t=scientific2float(t),e?splitPoint(t,e,n).join("."):Math.floor(t)}function scientific2float(t){var e,n,o,r,a,i,s="string"==typeof t?t.toLowerCase().replace(/\s/g,""):t.toString().toLowerCase().replace(/\s/g,""),c="000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";return/e/.test(s)?(n=/\+/.test(s),o=s.split("e"),e=/\-/.test(o[0].toString())?"-0.":"0.",o[0]=o[0].replace("-",""),r=o[0].split(".")[1]?o[0].split(".")[1].length:0,a=o[1],i=a.split(n?"+":"-")[1],o=o[0].replace(".",""),n?o+c.substring(0,i-r):e+c.substring(0,i-1)+o):s}function accMul(t,e){var n=0,o=scientific2float(t),r=scientific2float(e);try{n+=o.split(".")[1].length}catch(a){}try{n+=r.split(".")[1].length}catch(a){}return scientific2float(o.replace(".",""))*scientific2float(r.replace(".",""))/scientific2float(Math.pow(10,n))}function accAdd(t,e){var n,o,r,a=scientific2float(t),i=scientific2float(e);try{n=a.toString().split(".")[1].length}catch(s){n=0}try{o=i.toString().split(".")[1].length}catch(s){o=0}return r=Math.pow(10,Math.max(n,o)),(accMul(a,r)+accMul(i,r))/r}function accSub(t,e){var n,o,r,a,i=scientific2float(t),s=scientific2float(e);try{n=i.toString().split(".")[1].length}catch(c){n=0}try{o=s.toString().split(".")[1].length}catch(c){o=0}return r=Math.pow(10,Math.max(n,o)),a=n>=o?n:o,((accMul(i,r)-accMul(s,r))/r).toFixed(a)}function accDiv(arg1,arg2){var r1,r2,t1=0,t2=0,s1=scientific2float(arg1),s2=scientific2float(arg2);try{t1=s1.toString().split(".")[1].length}catch(e){}try{t2=s2.toString().split(".")[1].length}catch(e){}with(Math)return r1=Number(s1.toString().replace(".","")),r2=Number(s2.toString().replace(".","")),r1/r2*pow(10,t2-t1)}function scientific2float(t){var e,n,o,r,a,i,s="string"==typeof t?t.toLowerCase().replace(/\s/g,""):t.toString().toLowerCase().replace(/\s/g,""),c="000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";return/e/.test(s)?(n=/\+/.test(s),o=s.split("e"),e=/\-/.test(o[0].toString())?"-0.":"0.",o[0]=o[0].replace("-",""),r=o[0].split(".")[1]?o[0].split(".")[1].length:0,a=o[1],i=a.split(n?"+":"-")[1],o=o[0].replace(".",""),n?o+c.substring(0,i-r):e+c.substring(0,i-1)+o):s}function shortNum(t,e,n){for(var o,r=n.length,a=[t,""];r--;)if(o=Math.pow(e,r+1),t/o>1){a=[t/o,n[r],1];break}return a}function shortIndex(t,e,n,o,r){var a={1e3:["K","M","B"],1e4:["万","亿","兆"]},e=e||0,n=n||1e4,o=o||a[n],i=shortNum(1*t,n,o);return i=r&&1*(i[0]+i[1])==1*i[0]?i[0]:cutFixed(i[0],e)+i[1]}function addZero(t){return t>9?t:"0"+t}function totime(t,e){var n=new Date(t<Math.pow(10,11)?1e3*t:t),o=n.getFullYear(),r=addZero(n.getMonth()+1),a=addZero(n.getDate()),i=addZero(n.getHours()),s=addZero(n.getMinutes()),c=addZero(n.getSeconds());return e?e.toLowerCase().replace("y",o).replace("m",r).replace("d",a).replace("h",i).replace("i",s).replace("s",c):o+"-"+r+"-"+a+" "+i+":"+s+":"+c}function request(){function XmlHttp(){var t;try{xmlhttp=new XMLHttpRequest}catch(e){try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){t=new ActiveXObject("Microsoft.XMLHTTP")}}return xmlhttp}function format(s){var f;try{f=eval("("+s+")")}catch(e){f=s}return f}function showLog(){}function connect(t){{var e=XmlHttp(),n=/[\?]/g.test(t.url)?"&":"?",o="";t.data?t.data.length:0}for(var r in t.data)o+=r+"="+t.data[r]+"&";o=o.replace(/\&$/g,""),"GET"==t.type.toUpperCase()?e.open(t.type,t.url+(""==o?"":n+o),t.async):e.open(t.type,t.url,t.async),e.setRequestHeader("Content-Type",t.contentType),t.myHeader&&e.setRequestHeader("method",t.myHeader),e.setRequestHeader("X-Requested-With","XMLHttpRequest"),e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status){if("function"==typeof t.success){var n="text"==t.dataType?format(e.responseText):e.responseXML;t.success(n,t.dataType)}e=null}else"function"==typeof t.error&&t.error("Server Status: "+e.status,e.responseText)},e.send("POST"==t.type.toUpperCase()?o:null)}function connect2(t){var e=XmlHttp();e.open(t.type,t.url),e.onreadystatechange=function(){if(showLog(e.readyState),4==e.readyState)if(200==e.status){if("function"==typeof t.success){var n="text"==t.dataType?format(e.responseText):e.responseXML;t.success(n,t.dataType)}e=null}else"function"==typeof t.error&&t.error("Server Status: "+e.status,e.responseText)},e.send("object"==typeof t.data?JSON.stringify(t.data):t.data)}function ajax(t){var e={type:"GET",dataType:"text",async:!0,contentType:"application/x-www-form-urlencoded;charset=utf-8",url:"about:blank",data:{},success:{},error:{}};if(!t)return void console.error("没有填写任何参数");if(!t.url)return void console.error("url地址是必填参数，请检查您的参数！");for(var n in t)e[n]=t[n];connect(e)}function requestPayload(t){var e={type:"POST",dataType:"text",url:"about:blank",data:{},success:{},error:{}};if(!t)return void console.error("没有填写任何参数");if(!t.url)return void console.error("url地址是必填参数，请检查您的参数！");for(var n in t)e[n]=t[n];connect2(e)}function getARandom(){return Math.ceil(1+1e3*Math.random())*Math.ceil(1+1e3*Math.random())*Math.ceil(1+1e3*Math.random())}function jsonp(t){var e={type:"JSONP",jsonpName:"",dataType:"text",avatar:null,url:"about:blank",success:{},data:{}};if(!t)return void console.error("please fill in any parameters first!");if(!t.url)return void console.error("url is required parameters, please check your parameters!");for(var n in t)e[n]=t[n];_callbackfn=e.jsonpName||"jsonpCallbackFunctionNo"+(new Date).getTime()+getARandom(),window[_callbackfn]=e.success,create(e)}function create(t){var e=document.createElement("script"),n=/[\?]/g.test(t.url)?"&":"?",o=head?head:head=document.getElementsByTagName("head")[0];for(var r in t.data)n+=r+"="+t.data[r]+"&";n=n+"callback="+_callbackfn,e.async=!0,e.src=t.url+("?"==n?"":n),o.appendChild(e)}var states=["正在初始化……","正在发送请求……","正在接收数据……","正在解析数据……","完成！"],head=document.querySelector("head");return{requestPayload:requestPayload,ajax:ajax,jsonp:jsonp}}function filterEvent(t,e){function n(t,e,n){return t&&t[e]?t[e](n):void 0}function o(t,e){var o=t.target||window.event.srcElement,r=o.value,a=o.getAttribute("restrict"),i=t.keyCode||window.event.keyCode,s=filterNumber(/[\d]+[\*]+[\d]+/g.test(r)?"":r,1*a);return r&&r!=s&&8!=i?(o.value=s,void n(e,i,o)):n(e,i,o)}function r(t){Event.add(t,"keydown",function(t){o(t,e)}),Event.add(t,"keyup",function(t){o(t,e)})}for(var a=t.querySelectorAll("input[restrict]"),i=a.length;i--;)r(a[i])}function filterNumber(t,e){var t=t.replace(/[^\d\.]/g,""),n=t.split("."),o=n.length;return e?t?/\.$/.test(t)&&o>2?t.substring(0,t.length-1):o>2?n[0]+"."+n[1]:2==o&&n[1].length>e?cutFixed(1*t,e):t:"":n[0]}function tarFather(t,e){return t&&e&&t.parentNode?t.nodeName.toLowerCase()==e.toLowerCase()?t:tarFather(t.parentNode,e):t}function attFather(t,e){return t&&e&&t.parentNode?t.getAttribute(e)?[t,t.getAttribute(e)]:attFather(t.parentNode,e):null}function dataDiff(t,e,n,o){for(var r,a,i,s,c=t.length,l=e.length,u=[],d=[],f=[],h=0;l>h;h++){r=!1;for(var p=0;c>p;p++)t[p][o]==e[h][o]&&(r=!0);r||u.push({diff_uni_key:e[h][o],data:e[h],rank:h})}for(var h=0;c>h;h++){r=!1;for(var p=0;l>p;p++)if(a=e[p],i=t[h],a[o]==i[o]){r=!0;for(key in n)a[key]!=i[k]&&(s=!0);s&&(f.push({diff_uni_key:t[h][o],data:t[h],rank:h}),s=!1)}r||d.push({diff_uni_key:t[h][o],data:t[h],rank:h})}return{add:d,edit:f,del:u}}function besideTip(){function t(t){return g&&c(),v.bottom=0,v.top=1,y.top=t||0,this}function e(t){return g&&c(),v.left=0,v.right=1,y.right=t||0,this}function n(t){return g&&c(),v.top=0,v.bottom=1,y.bottom=t||0,this}function o(t){return g&&c(),v.right=0,v.left=1,y.left=t||0,this}function r(){var t,e,n,o,r=dom.getPosition(f),a={w:f.offsetWidth,h:f.offsetHeight},i={w:document.documentElement.scrollWidth||document.body.scrollWidth,sw:document.documentElement.clientWidth||document.body.clientWidth,h:document.documentElement.scrollHeight||document.body.scrollHeight,sh:document.documentElement.clientHeight||document.body.clientHeight};p.box.style.lineHeight=h||a.h+"px",o={w:p.cont.offsetWidth,h:p.cont.offsetHeight},n=o.w*o.h,(v.left||v.right)&&(v.top||v.bottom)?dom.addClass(p.box,"besidePathWidthHeight"):v.left||v.right?dom.addClass(p.box,"besidePathWidth"):dom.addClass(p.box,"besidePathHeight"),v.left&&(v.top||v.bottom||(p.box.style.top=r.y+y.top+"px"),e=i.sh-r.y+y.top,t=i.sw-r.x+y.left,p.box.style.right=i.sw-r.x+y.left+"px"),v.right&&(v.top||v.bottom||(p.box.style.top=r.y+y.top+"px"),e=i.sh-r.y+y.top,t=i.w-r.x-a.w-y.right,p.box.style.left=r.x+a.w+y.right+"px"),v.top&&(v.left||v.right||(p.box.style.left=r.x+y.left+"px"),e=i.sh-r.y+y.top,p.box.style.bottom=i.sh-r.y+y.top+"px"),!v.bottom&&(v.top||v.bottom||v.left||v.right)||(v.left||v.right||(t=i.w-r.x-y.left,p.box.style.left=r.x+y.left-1+"px"),e=i.h-r.y-a.h-y.bottom,p.box.style.top=r.y+a.h+y.bottom+"px"),p.box.style.width=Math.max(a.w,o.w)-2+"px",p.box.style.height=h||Math.max(a.h,o.h)-2+"px"}function a(t){return h=t,this}function i(t,e,n){var o;g=1,m&&clearTimeout(m),m=null,p.box.style.cssText="",dom.addClass(p.box,"beside-"+(n||"notice")),p.cont.innerHTML=t,o=r(),e&&(m=setTimeout(l,e))}function s(){r()}function c(){v={left:0,top:0,right:0,bottom:0}}function l(){p.box.className="besidetipbox",p.box.style.width=0,p.box.style.height=0,g=0,h=null,c()}function u(t){return c(),t||f?t?(f="string"==typeof t?document.querySelector(t):t,this):this:null}function d(t,e){var n=t.createElement(e?"link":"style"),o=t.querySelector("body"),a="0.4",i=document.createElement("div");i.className="besidetipbox",e?(n.href=e,n.rel="stylesheet",head.appendChild(n),i.innerHTML="<dl><dt class='text'></dt><dd class='button'></dd></dl>"):i.innerHTML="<br/><style>.besidetipbox{width:0;height:0;position:absolute;overflow:hidden;z-index:4;}.besidePathWidth{-moz-transition:width "+a+"s ease;-webkit-transition:width "+a+"s ease;-ms-transition:width "+a+"s ease;transition:width "+a+"s ease;}.besidePathHeight{-moz-transition:height "+a+"s ease;-webkit-transition:height "+a+"s ease;-ms-transition:height "+a+"s ease;transition:height "+a+"s ease;}.besidePathWidthHeight{-moz-transition:height "+a+"s ease,width "+a+"s ease;-webkit-transition:height "+a+"s ease,width "+a+"s ease;-ms-transition:height "+a+"s ease,width "+a+"s ease;transition:height "+a+"s ease,width "+a+"s ease;}.besidetipbox dl{position:absolute;left:0;top:0;width:500px;height:500px;}.besidetipbox dt{display:inline-block;padding:0 10px}.beside-notice{border:1px solid #9fd5e9;color:#1b7ca1;background:#d0f2ff;}.beside-success{border:1px solid #b0d38d;color:#519114;background:#e7ffd0;}.beside-warning{border:1px solid #edd8b1;color:#da4d00;background:#fffcd4;}.beside-error{border:1px solid #f0b8b8;color:#d13939;background:#ffebeb;}</style><dl><dt class='text'></dt><dd class='button'></dd></dl>",o.appendChild(i),Event.add(window,"resize",function(){g&&r()}),p={box:i,inbox:i.querySelector("dl"),cont:i.querySelector("dt"),btn:i.querySelector("dd")}}var f,h,p,m,g,y={left:0,top:0,right:0,bottom:0},v={left:0,top:0,right:0,bottom:0};return window.newBeside?newBeside:(window.newBeside={changeObj:u,left:o,top:t,right:e,bottom:n,close:l,notice:i,confirm:s,setHeight:a},!function(t,e){"construct";d(t,e)}.apply(this,[document].concat([].slice.apply(arguments))),newBeside)}function helpTips(){function t(t,e,n,r,i){var s;t&&(!a&&l.appendChild(c)&&o(),a=1,c.innerHTML=t,s=[c.offsetWidth,c.offsetHeight],c.style.cssText="top:"+(n-s[1]-10)+"px;left:"+(e-s[0]+1*(i||r)-12)+"px;")}function e(t){a&&(c.innerHTML=t,c.style.cssText="")}function n(n){n.binded||(Event.add(n,"mouseover",function(){s&&clearTimeout(s),s=null,s=setTimeout(function(){var e=n.getAttribute("data-tip-info"),o=n.getAttribute("data-offset-left"),r=n.getAttribute("data-right"),a=dom.getPosition(n);r?!dom.hasClass(c,"help_tip_box_right")&&dom.addClass(c,"help_tip_box_right"):dom.hasClass(c,"help_tip_box_right")&&dom.removeClass(c,"help_tip_box_right"),i&&clearTimeout(i),i=null,t(e,a.x,a.y,n.w||(n.w=n.offsetWidth),o)},200)}),Event.add(n,"mouseout",function(){s&&clearTimeout(s),s=null,i=setTimeout(e,300)}),n.binded=1)}function o(){Event.add(c,"mouseover",function(){i&&clearTimeout(i),i=null}),Event.add(c,"mouseout",function(){s&&clearTimeout(s),s=null,i=setTimeout(e,300)})}function r(t,e){if(t)for(var o=t.querySelectorAll(e),r=o.length;r--;)n(o[r])}var a,i,s,c=document.createElement("div"),l=document.getElementsByTagName("body")[0];return c.className="futures_tip_box help_tip_box help_tip_box_0",{bind:r,show:t,hide:e,div:c}}function focus(t,e,n,o){function r(t){n[s]&&(n[s].className=""),u[s]&&(u[s].className=""),s=t,n[s]&&(n[s].className="on"),u[s]&&(u[s].className="on")}function a(){var t=s+1;coll=setTimeout(function(){c=setTimeout(function(){t>=u.length&&(t=0),r(t),a()},o)},30)}function i(){c&&clearTimeout(c),c=null,coll&&clearTimeout(coll),coll=null}var n,s,c,e=e.split("/"),n=n.split("/"),t=document.querySelector(t),l=document.querySelector(e[0]),u=l.querySelectorAll(e[1]),d=document.querySelector(n[0]),o=o||5e3,f="";!function(){for(var e=0,o=u.length;o>e;e++)f+="<span idx='"+e+"'></span>";return 2>o?u[0].className="on":(d.innerHTML=f,n=d.querySelectorAll("span"),r(0),a(),Event.add(d,"click",function(t){var e=Event.target(t);"span"==e.nodeName.toLowerCase()&&r(1*e.getAttribute("idx"))}),Event.add(t,"mouseover",i),void Event.add(t,"mouseout",a))}()}!function(){var t={};this.rentmpl=function(e,n){var o=/\W/.test(e)?new Function("obj","var p=[];with(obj){p.push('"+e.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[e]=t[e]||rentmpl(document.getElementById(e).innerHTML);return n?o(n):o}}(),function(){function t(t){var e=!1,n=!0,o=window,r=o.document,a=r.documentElement,i=r.addEventListener?"addEventListener":"attachEvent",s=r.addEventListener?"removeEventListener":"detachEvent",c=r.addEventListener?"":"on",l=function(n){("readystatechange"!=n.type||"complete"==r.readyState)&&(("load"==n.type?o:r)[s](c+n.type,l,!1),!e&&(e=!0)&&t.call(o,n.type||n))},u=function(){try{a.doScroll("left")}catch(t){return void setTimeout(u,50)}l("poll")};if("complete"==r.readyState)t.call(o,"lazy");else{if(r.createEventObject&&a.doScroll){try{n=!o.frameElement}catch(d){}n&&u()}r[i](c+"DOMContentLoaded",l,!1),r[i](c+"readystatechange",l,!1),o[i](c+"load",l,!1)}}function e(){var t=0,e=o.length;if(e)for(;o[t];t++)o[t]()}var n=!1,o=[];t(function(){n=!0,e()}),window.domready=function(t){return n?void(t&&t()):void o.push(t)}}();var Event={add:document.addEventListener?function(t,e,n){t.addEventListener(e,n,!1)}:function(t,e,n){t.attachEvent("on"+e,n)},remove:document.removeEventListener?function(t,e,n){t.removeEventListener(e,n,!1)}:function(t,e,n){t.detachEvent("on"+e,n)},target:function(t){return t.target?t.target:window.event.srcElement},delta:function(t){var e=t||window.event,n=e.wheelDelta/-120||e.detail/3;return n},stop:function(t){t&&t.stopPropagation?(t.stopPropagation(),t.preventDefault()):(window.event.cancelBubble=!0,window.event.returnValue=!1)},mouse:function(t){return{x:t.pageX||t.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft),y:t.pageY||t.clientY+(document.documentElement.scrollTop||document.body.scrollTop)}}},dom=function(){var t=document.documentElement.classList,e={hasClass:function(e,n){return t?e.classList.contains(n):new RegExp("(^|\\s)"+n+"(\\s|$)").test(e.className)},addClass:function(n,o){t?n.classList.add(o):e.hasClass(n,o)||(n.className=n.className+" "+o)},removeClass:function(n,o){t?n.classList.remove(o):e.hasClass(n,o)&&(n.className=n.className.replace(new RegExp("(^|\\s)*"+o+"(\\s|$)*","g"),""))},getPosition:function(t,e){var n,o,r,a=t,i=0,s=0;if(t.nodeName){for(;a&&("body"==a.nodeName.toLowerCase()&&(o=1),r=a.currentStyle?a.currentStyle:document.defaultView.getComputedStyle(a),i+=a.offsetLeft+(parseInt(r.borderLeftWidth)?parseInt(r.borderLeftWidth):0)-(o?0:a.scrollLeft),s+=a.offsetTop+(parseInt(r.borderTopWidth)?parseInt(r.borderTopWidth):0)-(o?0:a.scrollTop),n=a.offsetParent?a.offsetParent:a,a=a.offsetParent,!(e&e===a)););return{x:i,y:s,element:a,forefather:e||n}}}};return e}(),cookies={get:function(t){var e=document.cookie.match("(?:^|;)\\s*"+t+"=([^;]*)");return e?decodeURIComponent(e[1]):null},set:function(t){var e=t.name+"="+encodeURIComponent(t.value);if(t.domain&&(e+="; domain="+t.domain),t.path&&(e+="; path="+t.path),t.time){var n=new Date;n.setTime(n.getTime()+1e3*t.time),e+="; expires="+n.toGMTString()}document.cookie=e},del:function(t){var e=this.read(t);this.write({name:t,value:e,day:-1})}},md5=function(){function t(t){return c(i(d(t)))}function e(t){return l(i(d(t)))}function n(t,e){return u(i(d(t)),e)}function o(t,e){return c(s(d(t),d(e)))}function r(t,e){return l(s(d(t),d(e)))}function a(t,e,n){return u(s(d(t),d(e)),n)}function i(t){return h(p(f(t),8*t.length))}function s(t,e){var n=f(t);n.length>16&&(n=p(n,8*t.length));for(var o=Array(16),r=Array(16),a=0;16>a;a++)o[a]=909522486^n[a],r[a]=1549556828^n[a];var i=p(o.concat(f(e)),512+8*e.length);return h(p(r.concat(i),640))}function c(t){try{}catch(e){S=0}for(var n,o=S?"0123456789ABCDEF":"0123456789abcdef",r="",a=0;a<t.length;a++)n=t.charCodeAt(a),r+=o.charAt(n>>>4&15)+o.charAt(15&n);return r}function l(t){try{}catch(e){T=""}for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o="",r=t.length,a=0;r>a;a+=3)for(var i=t.charCodeAt(a)<<16|(r>a+1?t.charCodeAt(a+1)<<8:0)|(r>a+2?t.charCodeAt(a+2):0),s=0;4>s;s++)o+=8*a+6*s>8*t.length?T:n.charAt(i>>>6*(3-s)&63);return o}function u(t,e){var n,o,r,a,i,s=e.length,c=Array(Math.ceil(t.length/2));for(n=0;n<c.length;n++)c[n]=t.charCodeAt(2*n)<<8|t.charCodeAt(2*n+1);var l=Math.ceil(8*t.length/(Math.log(e.length)/Math.log(2))),u=Array(l);for(o=0;l>o;o++){for(i=Array(),a=0,n=0;n<c.length;n++)a=(a<<16)+c[n],r=Math.floor(a/s),a-=r*s,(i.length>0||r>0)&&(i[i.length]=r);u[o]=a,c=i}var d="";for(n=u.length-1;n>=0;n--)d+=e.charAt(u[n]);return d}function d(t){for(var e,n,o="",r=-1;++r<t.length;)e=t.charCodeAt(r),n=r+1<t.length?t.charCodeAt(r+1):0,e>=55296&&56319>=e&&n>=56320&&57343>=n&&(e=65536+((1023&e)<<10)+(1023&n),r++),127>=e?o+=String.fromCharCode(e):2047>=e?o+=String.fromCharCode(192|e>>>6&31,128|63&e):65535>=e?o+=String.fromCharCode(224|e>>>12&15,128|e>>>6&63,128|63&e):2097151>=e&&(o+=String.fromCharCode(240|e>>>18&7,128|e>>>12&63,128|e>>>6&63,128|63&e));return o}function f(t){for(var e=Array(t.length>>2),n=0;n<e.length;n++)e[n]=0;for(var n=0;n<8*t.length;n+=8)e[n>>5]|=(255&t.charCodeAt(n/8))<<n%32;return e}function h(t){for(var e="",n=0;n<32*t.length;n+=8)e+=String.fromCharCode(t[n>>5]>>>n%32&255);return e}function p(t,e){t[e>>5]|=128<<e%32,t[(e+64>>>9<<4)+14]=e;for(var n=1732584193,o=-271733879,r=-1732584194,a=271733878,i=0;i<t.length;i+=16){var s=n,c=o,l=r,u=a;n=g(n,o,r,a,t[i+0],7,-680876936),a=g(a,n,o,r,t[i+1],12,-389564586),r=g(r,a,n,o,t[i+2],17,606105819),o=g(o,r,a,n,t[i+3],22,-1044525330),n=g(n,o,r,a,t[i+4],7,-176418897),a=g(a,n,o,r,t[i+5],12,1200080426),r=g(r,a,n,o,t[i+6],17,-1473231341),o=g(o,r,a,n,t[i+7],22,-45705983),n=g(n,o,r,a,t[i+8],7,1770035416),a=g(a,n,o,r,t[i+9],12,-1958414417),r=g(r,a,n,o,t[i+10],17,-42063),o=g(o,r,a,n,t[i+11],22,-1990404162),n=g(n,o,r,a,t[i+12],7,1804603682),a=g(a,n,o,r,t[i+13],12,-40341101),r=g(r,a,n,o,t[i+14],17,-1502002290),o=g(o,r,a,n,t[i+15],22,1236535329),n=y(n,o,r,a,t[i+1],5,-165796510),a=y(a,n,o,r,t[i+6],9,-1069501632),r=y(r,a,n,o,t[i+11],14,643717713),o=y(o,r,a,n,t[i+0],20,-373897302),n=y(n,o,r,a,t[i+5],5,-701558691),a=y(a,n,o,r,t[i+10],9,38016083),r=y(r,a,n,o,t[i+15],14,-660478335),o=y(o,r,a,n,t[i+4],20,-405537848),n=y(n,o,r,a,t[i+9],5,568446438),a=y(a,n,o,r,t[i+14],9,-1019803690),r=y(r,a,n,o,t[i+3],14,-187363961),o=y(o,r,a,n,t[i+8],20,1163531501),n=y(n,o,r,a,t[i+13],5,-1444681467),a=y(a,n,o,r,t[i+2],9,-51403784),r=y(r,a,n,o,t[i+7],14,1735328473),o=y(o,r,a,n,t[i+12],20,-1926607734),n=v(n,o,r,a,t[i+5],4,-378558),a=v(a,n,o,r,t[i+8],11,-2022574463),r=v(r,a,n,o,t[i+11],16,1839030562),o=v(o,r,a,n,t[i+14],23,-35309556),n=v(n,o,r,a,t[i+1],4,-1530992060),a=v(a,n,o,r,t[i+4],11,1272893353),r=v(r,a,n,o,t[i+7],16,-155497632),o=v(o,r,a,n,t[i+10],23,-1094730640),n=v(n,o,r,a,t[i+13],4,681279174),a=v(a,n,o,r,t[i+0],11,-358537222),r=v(r,a,n,o,t[i+3],16,-722521979),o=v(o,r,a,n,t[i+6],23,76029189),n=v(n,o,r,a,t[i+9],4,-640364487),a=v(a,n,o,r,t[i+12],11,-421815835),r=v(r,a,n,o,t[i+15],16,530742520),o=v(o,r,a,n,t[i+2],23,-995338651),n=b(n,o,r,a,t[i+0],6,-198630844),a=b(a,n,o,r,t[i+7],10,1126891415),r=b(r,a,n,o,t[i+14],15,-1416354905),o=b(o,r,a,n,t[i+5],21,-57434055),n=b(n,o,r,a,t[i+12],6,1700485571),a=b(a,n,o,r,t[i+3],10,-1894986606),r=b(r,a,n,o,t[i+10],15,-1051523),o=b(o,r,a,n,t[i+1],21,-2054922799),n=b(n,o,r,a,t[i+8],6,1873313359),a=b(a,n,o,r,t[i+15],10,-30611744),r=b(r,a,n,o,t[i+6],15,-1560198380),o=b(o,r,a,n,t[i+13],21,1309151649),n=b(n,o,r,a,t[i+4],6,-145523070),a=b(a,n,o,r,t[i+11],10,-1120210379),r=b(r,a,n,o,t[i+2],15,718787259),o=b(o,r,a,n,t[i+9],21,-343485551),n=x(n,s),o=x(o,c),r=x(r,l),a=x(a,u)}return Array(n,o,r,a)}function m(t,e,n,o,r,a){return x(w(x(x(e,t),x(o,a)),r),n)}function g(t,e,n,o,r,a,i){return m(e&n|~e&o,t,e,r,a,i)}function y(t,e,n,o,r,a,i){return m(e&o|n&~o,t,e,r,a,i)}function v(t,e,n,o,r,a,i){return m(e^n^o,t,e,r,a,i)}function b(t,e,n,o,r,a,i){return m(n^(e|~o),t,e,r,a,i)}function x(t,e){var n=(65535&t)+(65535&e),o=(t>>16)+(e>>16)+(n>>16);return o<<16|65535&n}function w(t,e){return t<<e|t>>>32-e}function e(t){return l(i(d(t)))}function n(t,e){return u(i(d(t)),e)}function o(t,e){return c(s(d(t),d(e)))}function r(t,e){return l(s(d(t),d(e)))}function a(t,e,n){return u(s(d(t),d(e)),n)}var S=0,T="";return t.b64=e,t.any=n,t.md5_hmac=o,t.b64_hmac=r,t.any_hmac=a,t}();!function(){function t(){e(),o(),a()}function e(){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.src="/eastmoney_hq",t.async=!0,t.readyState?t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&(n(),t.onreadystatechange=null)}:t.onload=function(){n(),t.onload=null},s.appendChild(t)}function n(){var t=[];t.push(quote_hs.quotation[0]),t.push(quote_hs.quotation[1]),t.push(quote_hk.quotation[0]),t.push(quote_america.quotation[0]),t.push(quote_america.quotation[2]),l.stock.innerHTML=rentmpl(u.stock,{data:t}),setTimeout(e,d)}function o(){c.jsonp({url:"/api/gjshq/snapshot/query",data:{prodCode:encodeURIComponent("AG.NJS,Ag(T+D).SJS,mAu(T+D).SJS")},success:r})}function r(t){t.success&&(l.gjs.innerHTML=rentmpl(u.gjs,{data:t.data})),setTimeout(o,d)}function a(){c.jsonp({url:"/api/ybk/query_composite_index",success:i})}function i(t){var e=[],n={njwjs:1,zgyjs:1,znwjs:1};if(t.success){for(var o=0,r=t.data.length;r>o;o++)n[t.data[o].shortName]&&e.push(t.data[o]);l.ybk.innerHTML=rentmpl(u.ybk,{data:e})}setTimeout(a,d)}var s,c=request(),l={},u={},d=5e3;domready(function(){s=document.querySelector("head"),l.stock=document.querySelector("#stockIndex"),u.stock=l.stock.querySelector("script").innerHTML,l.gjs=document.querySelector("#gjsIndexBox"),u.gjs=l.gjs.querySelector("script").innerHTML,l.ybk=document.querySelector("#ybkIndexBox"),u.ybk=l.ybk.querySelector("script").innerHTML,t()})}();