function focus(e,t,n,o){function l(e){n[a]&&(n[a].className=""),i[a]&&(i[a].className=""),a=e,n[a]&&(n[a].className="on"),i[a]&&(i[a].className="on")}function c(){var e=a+1;coll=setTimeout(function(){r=setTimeout(function(){e>=i.length&&(e=0),l(e),c()},o)},30)}function u(){r&&clearTimeout(r),r=null,coll&&clearTimeout(coll),coll=null}var n,a,r,t=t.split("/"),n=n.split("/"),e=document.querySelector(e),s=document.querySelector(t[0]),i=s.querySelectorAll(t[1]),m=document.querySelector(n[0]),o=o||5e3,d="";!function(){for(var t=0,o=i.length;o>t;t++)d+="<span idx='"+t+"'></span>";return 2>o?i[0].className="on":(m.innerHTML=d,n=m.querySelectorAll("span"),l(0),c(),Event.add(m,"click",function(e){var t=Event.target(e);"span"==t.nodeName.toLowerCase()&&l(1*t.getAttribute("idx"))}),Event.add(e,"mouseover",u),void Event.add(e,"mouseout",c))}()}