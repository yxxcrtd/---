function data(t,e,o){function a(e){A=0,v.requestPayload({url:location.protocol+"//"+t.st().options.url.xhr,data:p.data,success:function(t){t.o&&(A=1,s(t,e))}})}function n(){u&&clearTimeout(u),u=null,p.release(),p.stockList(c,l,d,m),A&&a(1),u=setTimeout(n,5e3)}function r(t,e,o,n){c=t||c,l=e||l,d=o||d,m=n||m,p.release(),p.stockList(c,l,d,m),a()}function i(t){f=t}function s(t,e){for(var o,a=t.o,n=a.length;n--;)o="data"+a[n].act,200==a[n].h&&g[o]&&g[o](a[n],e)}var u,c,l,d,m,f,v=request(),g={},p=requestAPI(),h={cool:{dom:e,str:e.querySelector("script").innerHTML},move:{dom:o,str:o.querySelector("script").innerHTML}},A=1;g.data155=function(e){h.cool.dom.innerHTML=rentmpl(h.cool.str,{data:e.o,code:f}),h.move.dom.innerHTML=rentmpl(h.move.str,{data:e.o,code:f}),t.load()},g.data161=function(t){t&&(MAP=JSON.stringify(t.o),localStorage.setItem("stockMap",MAP),localStorage.setItem("ver",totime(1*new Date,"ymd")))},!function(t){"construct";var e=totime(1*new Date,"ymd"),o=localStorage.getItem("ver");c=0,l=100,d=70,m=10,p.stockList(c,l,d,m),a(),e!=o&&p.map()&&a(),e==o&&(MAP=localStorage.getItem("stockMap")),t.returnFn(r,l,i),n()}.apply(window,arguments)}function listEvent(t,e,o){function a(){l=0}function n(){d=document.querySelector("#coolTmp").querySelectorAll("ul"),m=document.querySelector("#moveList").querySelectorAll("ul")}function r(){return t.chart1.stockChart}function i(t,e,o){g=t,A=e,T=o}var s,u,c,l,d,m,f,v,g,p,h,A,T,y=1;return!function(){f=o.querySelector("span"),v=o.querySelector("ul"),p=10,h=document.querySelector("#list"),Event.add(h,"click",function(t){var o=Event.target(t),a=o.getAttribute("act");return"changeRank"==a?(p==o.getAttribute("data-val")?(p=o.getAttribute("data-val2"),o.setAttribute("data-val2",o.getAttribute("data-val")),o.setAttribute("data-val",p)):(p=o.getAttribute("data-val"),o.setAttribute("data-val",o.getAttribute("data-val2")),o.setAttribute("data-val2",p)),A=100,e.scrollTop=0,g&&g(null,A,null,p),void(p=o.getAttribute("data-val"))):void 0}),Event.add(e,"click",function(e){var o,n,r=Event.target(e),i=tarFather(r,"ul");if(i&&"ul"==i.nodeName.toLowerCase()&&i.getAttribute("code")){if(o=i.parentNode.getElementsByTagName("ul"),!y&&o[u.getAttribute("idx")].getAttribute("code")!=u.getAttribute("code"))for(var f=0,v=o.length;v>f;f++)if(o[f].getAttribute("code")==s){u=o[f];break}c&&clearTimeout(c),i!=u?(u&&(n=u.getAttribute("idx"),dom.hasClass(d[n],"on")&&dom.removeClass(d[n],"on"),dom.hasClass(m[n],"on")&&dom.removeClass(m[n],"on")),u=i,n=u.getAttribute("idx"),!dom.hasClass(d[n],"on")&&dom.addClass(d[n],"on"),!dom.hasClass(m[n],"on")&&dom.addClass(m[n],"on")):(l&&(window.location.href="stock.html?id="+i.getAttribute("code")+"&ex="+i.getAttribute("ex")),!dom.hasClass(u,"on")&&dom.addClass(u,"on")),t.chart1.toStock(i.getAttribute("code"),i.getAttribute("ex")),t.chart2.toStock(indcode[i.getAttribute("ex")],i.getAttribute("ex")),l=1,c=setTimeout(a,300),T(s=i.getAttribute("code")),y=0}}),Event.add(o,"click",function(t){var o=Event.target(t),a=o.getAttribute("data-val");"span"==o.nodeName.toLowerCase()?dom.hasClass(v,"on")?dom.removeClass(v,"on"):dom.addClass(v,"on"):(A=100,e.scrollTop=0,g&&g(null,A,a),f.innerHTML=o.innerHTML,dom.hasClass(v,"on")?dom.removeClass(v,"on"):dom.addClass(v,"on"))}),Event.add(e,"scroll",function(){var t=30*A;e.offsetHeight+e.scrollTop+300>t&&(A+=100,g(null,A))})}(),{load:n,st:r,returnFn:i}}function requestAPI(t){function e(){return r=[]}function o(e,o,a,n){var n=n||500,i=t.options.cycMap[o||"1day"];return r.push({act:"/api/gjshq/candle/queryHistory",prodCode:encodeURIComponent(e+"."+a),cycle:i,number:n}),r}function a(t,e){return r.push({act:"/api/gjshq/snapshot/getMultiDaySnapshot",prodCode:encodeURIComponent(t+"."+e),type:1}),r}function n(){return r}var r=[],i={};return i.macd=function(t,e,o,a){r.push({act:"query_macd",code:e,exchange_short_name:o,limit:a})},i.rsi=function(t,e,o,a){r.push({act:"query_rsi",code:e,exchange_short_name:o,limit:a})},i.kdj=function(t,e,o,a){r.push({act:"query_kdj",code:e,exchange_short_name:o,limit:a})},{data:n,release:e,queryHistory:o,timeShare:a}}function fireData(t){function e(e){for(var o=e.length;o--;)e[o]={high:1*e[o].highPx.toFixed(2),low:1*e[o].lowPx.toFixed(2),open:1*e[o].openPx.toFixed(2),cur:1*e[o].closePx.toFixed(2),vol:1*e[o].businessAmount.toFixed(),date:new Date(e[o].minTime.slice(0,4),e[o].minTime.slice(4,6)-1,e[o].minTime.slice(6,8),e[o].minTime.slice(8,10),e[o].minTime.slice(10,12),e[o].minTime.slice(12,14)),rate:e[o].pxChangeRate};e.reverse(),t.options.data.DATA=e,u(e),c(e)}function o(e){if(e){e=e[0]||[];for(var o=e.length;o--;)e[o]={avg:1*e[o].averagePx,preClosePx:1*e[o].preClosePx,pri:1*e[o].closePx,vol:1*e[o].businessAmount.toFixed(),datetime:new Date(e[o].minTime.slice(0,4),e[o].minTime.slice(4,6)-1,e[o].minTime.slice(6,8),e[o].minTime.slice(8,10),e[o].minTime.slice(10,12),e[o].minTime.slice(12,14))};e.reverse(),t.options.data.DATAT={formatData:[],data:e}}}function a(e){e&&(t.options.data.IND.MACD=e)}function n(e){e&&(t.options.data.IND.KDJ=e)}function r(e){e&&(t.options.data.IND.RSI=e)}function s(t,e,o,a){var n=0;if(a-1>e)return 0/0;for(var r=0;a>r;r++)n+=1*o[e-r][t];return n/a}function u(e){function o(t,o){n[t]["MA"+o]=o>t?0:s("cur",t,e,o)}var a=[5,10,20,30,60],n=[];if(e){for(var r=0,i=e.length;i>r;r++){n[r]={};for(var u=0;u<a.length;u++)o(r,a[u])}t.options.data.IND.KMA=n}}function c(e){function o(t,o){n[t]["MA"+o]=o>t?0:s("vol",t,e,o)}var a=[5,20],n=[];if(e){for(var r=0,i=e.length;i>r;r++){n[r]={};for(var u=0;u<a.length;u++)o(r,a[u])}t.options.data.IND.VMA=n}}function l(e,o,a){function n(){var t=m+d;return m=t-~~t,~~t}for(var r=t.options.data.DATAT.data,i=1,s=0,u=[],c=~~(e/o),l=e%o,d=l/o,m=0,f=0;o>f;f++)s=n(),i+=c+s,r[f]&&u.push({x:i-c+1*a,data:[r[f]],drawData:r[f]});return u}function d(e,o,a){function n(){var t=l+c,e=[];l=t-~~t;for(var o=0;~~t>o;o++)s[o+d]&&e.push(s[o+d]);return d+=~~t,e.length?e:[null]}var r,s=t.options.data.DATAT.data,u=[],c=o/e,l=0,d=0;for(i=1;e>=i;i++)r=n(),r[0]&&u.push({x:i+1*a,data:r,drawData:r[0]});return u}var m=t;return t.formatTimeData=function(e,o){var a=m.options.user.timesLens;t.options.data.DATAT.formatData=e>a?l(e,a,o):d(e,a,o)},{queryHistory:e,query_macd:a,query_kdj:n,query_rsi:r,getMultiDaySnapshot:o}}