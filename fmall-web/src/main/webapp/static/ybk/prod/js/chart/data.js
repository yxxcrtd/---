function data(t,e,o){function a(e){p=0,v.requestPayload({url:location.protocol+"//"+t.st().options.url.xhr,data:A.data,success:function(t){t.o&&(p=1,u(t,e))}})}function r(){c&&clearTimeout(c),c=null,A.release(),A.stockList(d,l,s,m),p&&a(1),c=setTimeout(r,5e3)}function n(t,e,o,r){d=t||d,l=e||l,s=o||s,m=r||m,A.release(),A.stockList(d,l,s,m),a()}function i(t){f=t}function u(t,e){for(var o,a=t.o,r=a.length;r--;)o="data"+a[r].act,200==a[r].h&&g[o]&&g[o](a[r],e)}var c,d,l,s,m,f,v=request(),g={},A=requestAPI(),h={cool:{dom:e,str:e.querySelector("script").innerHTML},move:{dom:o,str:o.querySelector("script").innerHTML}},p=1;g.data155=function(e){h.cool.dom.innerHTML=rentmpl(h.cool.str,{data:e.o,code:f}),h.move.dom.innerHTML=rentmpl(h.move.str,{data:e.o,code:f}),t.load()},g.data161=function(t){t&&(MAP=JSON.stringify(t.o),localStorage.setItem("stockMap",MAP),localStorage.setItem("ver",totime(1*new Date,"ymd")))},!function(t){"construct";var e=totime(1*new Date,"ymd"),o=localStorage.getItem("ver");d=0,l=100,s=70,m=10,A.stockList(d,l,s,m),a(),e!=o&&A.map()&&a(),e==o&&(MAP=localStorage.getItem("stockMap")),t.returnFn(n,l,i),r()}.apply(window,arguments)}function listEvent(t,e,o){function a(){l=0}function r(){s=document.querySelector("#coolTmp").querySelectorAll("ul"),m=document.querySelector("#moveList").querySelectorAll("ul")}function n(){return t.chart1.stockChart}function i(t,e,o){g=t,p=e,b=o}var u,c,d,l,s,m,f,v,g,A,h,p,b,y=1;return!function(){f=o.querySelector("span"),v=o.querySelector("ul"),A=10,h=document.querySelector("#list"),Event.add(h,"click",function(t){var o=Event.target(t),a=o.getAttribute("act");return"changeRank"==a?(A==o.getAttribute("data-val")?(A=o.getAttribute("data-val2"),o.setAttribute("data-val2",o.getAttribute("data-val")),o.setAttribute("data-val",A)):(A=o.getAttribute("data-val"),o.setAttribute("data-val",o.getAttribute("data-val2")),o.setAttribute("data-val2",A)),p=100,e.scrollTop=0,g&&g(null,p,null,A),void(A=o.getAttribute("data-val"))):void 0}),Event.add(e,"click",function(e){var o,r,n=Event.target(e),i=tarFather(n,"ul");if(i&&"ul"==i.nodeName.toLowerCase()&&i.getAttribute("code")){if(o=i.parentNode.getElementsByTagName("ul"),!y&&o[c.getAttribute("idx")].getAttribute("code")!=c.getAttribute("code"))for(var f=0,v=o.length;v>f;f++)if(o[f].getAttribute("code")==u){c=o[f];break}d&&clearTimeout(d),i!=c?(c&&(r=c.getAttribute("idx"),dom.hasClass(s[r],"on")&&dom.removeClass(s[r],"on"),dom.hasClass(m[r],"on")&&dom.removeClass(m[r],"on")),c=i,r=c.getAttribute("idx"),!dom.hasClass(s[r],"on")&&dom.addClass(s[r],"on"),!dom.hasClass(m[r],"on")&&dom.addClass(m[r],"on")):(l&&(window.location.href="stock.html?id="+i.getAttribute("code")+"&ex="+i.getAttribute("ex")),!dom.hasClass(c,"on")&&dom.addClass(c,"on")),t.chart1.toStock(i.getAttribute("code"),i.getAttribute("ex")),t.chart2.toStock(indcode[i.getAttribute("ex")],i.getAttribute("ex")),l=1,d=setTimeout(a,300),b(u=i.getAttribute("code")),y=0}}),Event.add(o,"click",function(t){var o=Event.target(t),a=o.getAttribute("data-val");"span"==o.nodeName.toLowerCase()?dom.hasClass(v,"on")?dom.removeClass(v,"on"):dom.addClass(v,"on"):(p=100,e.scrollTop=0,g&&g(null,p,a),f.innerHTML=o.innerHTML,dom.hasClass(v,"on")?dom.removeClass(v,"on"):dom.addClass(v,"on"))}),Event.add(e,"scroll",function(){var t=30*p;e.offsetHeight+e.scrollTop+300>t&&(p+=100,g(null,p))})}(),{load:r,st:n,returnFn:i}}function requestAPI(t){function e(){return n=[]}function o(e,o,a,r){var r=r||300,u=t.options.periodMap[o||"1day"];return n.push({act:"query_kline",code:e,period:u,exchange_short_name:a,limit:r}),t.options.hasInd[o]&&i[t.options.user.vIndicator.toLowerCase()](u,e,a,r),n}function a(t,e,o){var o=o||300;return n.push({act:"query_timeline",code:t,exchange_short_name:e,limit:o}),n}function r(){return n}var n=[],i={};return i.macd=function(t,e,o,a){n.push({act:"query_macd",code:e,exchange_short_name:o,limit:a})},i.rsi=function(t,e,o,a){n.push({act:"query_rsi",code:e,exchange_short_name:o,limit:a})},i.kdj=function(t,e,o,a){n.push({act:"query_kdj",code:e,exchange_short_name:o,limit:a})},{data:r,release:e,period:o,timeShare:a}}function fireData(t){function e(e){for(var o=e.length;o--;)e[o]={high:1*(e[o].highPrice/100).toFixed(2),low:1*(e[o].lowPrice/100).toFixed(2),open:1*(e[o].openPrice/100).toFixed(2),cur:1*(e[o].curPrice/100).toFixed(2),vol:1*(e[o].totalAmount/100).toFixed(),date:e[o].date,rate:e[o].currentGains};e.reverse(),t.options.data.DATA=e,c(e),d(e)}function o(e){if(e){e.reverse();for(var o=0,a=e.length;a>o;o++)e[o].pri=1*(e[o].curPrice/100).toFixed(2),e[o].vol=1*(e[o].totalAmount/100).toFixed(2),e[o].avg=1*e[o].totalAmount?1*(e[o].totalMoney/e[o].totalAmount).toFixed(2):null;t.options.data.DATAT={formatData:[],data:e}}}function a(e){e&&(t.options.data.IND.MACD=e)}function r(e){e&&(t.options.data.IND.KDJ=e)}function n(e){e&&(t.options.data.IND.RSI=e)}function u(t,e,o,a){var r=0;if(a-1>e)return 0/0;for(var n=0;a>n;n++)r+=1*o[e-n][t];return r/a}function c(e){function o(t,o){r[t]["MA"+o]=o>t?0:u("cur",t,e,o)}var a=[5,10,20,30,60],r=[];if(e){for(var n=0,i=e.length;i>n;n++){r[n]={};for(var c=0;c<a.length;c++)o(n,a[c])}t.options.data.IND.KMA=r}}function d(e){function o(t,o){r[t]["MA"+o]=o>t?0:u("vol",t,e,o)}var a=[5,20],r=[];if(e){for(var n=0,i=e.length;i>n;n++){r[n]={};for(var c=0;c<a.length;c++)o(n,a[c])}t.options.data.IND.VMA=r}}function l(e,o,a){function r(){var t=m+s;return m=t-~~t,~~t}for(var n=t.options.data.DATAT.data,i=1,u=0,c=[],d=~~(e/o),l=e%o,s=l/o,m=0,f=0;o>f;f++)u=r(),i+=d+u,n[f]&&c.push({x:i-d+1*a,data:[n[f]],drawData:n[f]});return c}function s(e,o,a){function r(){var t=l+d,e=[];l=t-~~t;for(var o=0;~~t>o;o++)u[o+s]&&e.push(u[o+s]);return s+=~~t,e.length?e:[null]}var n,u=t.options.data.DATAT.data,c=[],d=o/e,l=0,s=0;for(i=1;e>=i;i++)n=r(),n[0]&&c.push({x:i+1*a,data:n,drawData:n[0]});return c}return t.formatTimeData=function(e,o){var a=242;t.options.data.DATAT.formatData=e>a?l(e,a,o):s(e,a,o)},{query_kline:e,query_macd:a,query_kdj:r,query_rsi:n,query_timeline:o}}