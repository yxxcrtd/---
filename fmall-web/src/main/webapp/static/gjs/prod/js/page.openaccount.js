function step(){var e,t=["stepDom",document.querySelector("#step1"),document.querySelector("#step2"),document.querySelector("#step3"),document.querySelector("#step4"),document.querySelector("#step5"),document.querySelector("#njsFinish")],r=document.querySelector("#bank"),a=document.querySelector("#bankNo"),n=r.parentNode.querySelector("ul"),o=document.querySelector("#njs_code"),c=document.querySelector("#error_info"),l=document.querySelector("#bigBox"),i=location.search.replace("?","").split("&"),u=1*i[0]||1,s=actions(),d=localStorage.getItem("OAD")&&1!=u?JSON.parse(localStorage.getItem("OAD")):{exchange:"njs",cur:1};return 1==u&&localStorage.clear(),u==d.cur||i[1]?(d.exchange=i[1]?i[1]:d.exchange,STEP.cur=u,STEP.exchange=d.exchange,s.reDrawStep(d.exchange,r,a,n),5==u&&"sjs"==d.exchange&&(e=localStorage.getItem("metalFav"),localStorage.clear(),e&&localStorage.setItem("metalFav",e)),void(3==u&&"njs"==d.exchange?(t[6].querySelector("div").style.display="none",t[6].querySelector("div[suberr]").style.display="none",d.token=token,h.post(h.api.do_open_account_NJS(d,{callback:function(l){l.success?(window.step6&&window.step6(l.data),t[6].style.display="block",t[6].querySelector("div").style.display="block",o.innerHTML=l.data.result,e=localStorage.getItem("metalFav"),localStorage.clear(),e&&localStorage.setItem("metalFav",e)):(s.reDrawStep(d.exchange,r,a,n,"error"),t[6].querySelector("div[suberr]").style.display="block",t[6].style.display="block",c.innerHTML=l.msg)}}))):(t[u].style.display="block",window["step"+u]&&window["step"+u]()))):l.innerHTML="<div style='padding:100px 0;text-align:center;font-size:30px;'>参数异常</div>"}function actions(){function e(e){var t=e.getAttribute("data").split("|"),r=e.parentNode.parentNode.querySelectorAll("input");r[0].value=t[0],r[1].value=t[1]}function t(e,t){var r=e.parentNode.querySelector("span");r.className="error",r.innerHTML=r.getAttribute(t)}function r(e,r){Event.stop(r);for(var a,n,o,c=attFather(e,"stepBox")[0].querySelectorAll("input"),l=1,i=localStorage.getItem("OAD")?JSON.parse(localStorage.getItem("OAD")):{},u={},s=0,d=c.length;d>s;s++)n=c[s],i[n.name]=n.value,(o=n.getAttribute("comp"))&&(u[o]?u[o].push(n):u[o]=[n]),""==n.value&&n.getAttribute("require")&&(t(n,"empty"),l=0);if(l)for(var g in u)for(var s=0,d=u[g].length;d>s;s++)0==s&&(a=u[g][s].value),a!=u[g][s].value&&(t(u[g][s],"comp"),l=0);return[i,l]}function a(e,t){var a=r(e,t),n=a[0],o=a[1];n.exchange=STEP.exchange,o&&(n.cur=1*STEP.cur+1,localStorage.setItem("OAD",JSON.stringify(n)),window.location.href="?"+(1*STEP.cur+1))}function n(e,t){var a=r(e,t),n=a[0],o=a[1];n.exchange=STEP.exchange,o&&(n.cur=1*STEP.cur+1,localStorage.setItem("OAD",JSON.stringify(n)),window.location.href="?"+(1*STEP.cur+1)+"&"+n.exchange)}function o(e){var t=e.parentNode.querySelector("span");e.getAttribute("require")&&Event.add(e,"focus",function(){t.className="hidden"})}function c(e,t,r,a,n){var o={njs:'<em <%if(s == 1){%>class="on"<%}%>><i>1</i>填写账户信息</em><em <%if(s == 2){%>class="on"<%}%>><i>2</i>设置密码</em><em <%if(s == 3){%>class="on"<%}%>><i>3</i>开户成功</em>',njsError:'<em <%if(s == 1){%>class="on"<%}%>><i>1</i>填写账户信息</em><em <%if(s == 2){%>class="on"<%}%>><i>2</i>设置密码</em><em <%if(s == 3){%>class="on"<%}%>><i>3</i>开户失败</em>',sjs:'<em <%if(s == 1){%>class="on"<%}%>><i>1</i>填写账户信息</em><em <%if(s == 2){%>class="on"<%}%>><i>2</i>设置密码</em><em <%if(s == 3){%>class="on"<%}%>><i>3</i>调查问卷</em><em <%if(s == 4){%>class="on"<%}%>><i>4</i>短信验证</em><em <%if(s == 5){%>class="on"<%}%>><i>5</i>开户成功</em>'},c='<%for(var i = 0,l = data.length; i < l; i++){%><li act="fillBank" data="<%=data[i].bankName%>|<%=data[i].bankNo%>"><%=data[i].bankName%></li><%}%>',l=bankList[e];i.innerHTML=rentmpl(o[n?e+"Error":e],{s:STEP.cur}),STEP.exchange=e,t.value=l[0].bankName,r.value=l[0].bankNo,a.innerHTML=rentmpl(c,{data:l})}function l(e,t){Event.stop(t);for(var r,a=attFather(e,"stepBox")[0],n=a.querySelectorAll("input"),o=a.querySelectorAll("dl"),c=localStorage.getItem("OAD")?JSON.parse(localStorage.getItem("OAD")):{},l=0,i=0,u=o.length;u>i;i++){r=o[i].querySelectorAll("input");for(var s=0,d=r.length;d>s;s++)r[s].value=10-2*s}for(var i=0,d=n.length;d>i;i++)n[i].checked&&(l+=1*n[i].value);console.log(l),50>l?(e.parentNode.querySelector("p").className="error",setTimeout(function(){e.parentNode.querySelector("p").className=""},5e3)):(c.cur=1*STEP.cur+1,c.score=l,localStorage.setItem("OAD",JSON.stringify(c)),window.location.href="?"+(1*STEP.cur+1))}var i=document.querySelector("#stepShow");return{submit:n,fillBank:e,next:a,getScore:l,reDrawStep:c,hiddenNotice:o}}function step1(){for(var e,t=document.querySelector("#step1"),r=t.querySelectorAll("input"),a=t.querySelector("#bank"),n=t.querySelector("#bankNo"),o=t.querySelector("ul"),c=actions(),l={},i=0,u=r.length;u>i;i++)c.hiddenNotice(r[i]);Event.add(t,"change",function(e){var t=Event.target(e);"exchange"==t.name&&(l.exchange=t.value,c.reDrawStep(l.exchange,a,n,o))}),Event.add(a,"focus",function(){e&&clearTimeout(e),"sjs"!=STEP.exchange&&(o.style.display="block")}),Event.add(a,"blur",function(){e=setTimeout(function(){o.style.display="none"},200)}),Event.add(t,"click",function(e){var t=Event.target(e);t.getAttribute("stop")&&Event.stop(e),t.getAttribute("act")&&c[t.getAttribute("act")]&&c[t.getAttribute("act")](t,e)}),Event.add(document,"click",function(){o.style.display="none"})}function step2(){for(var e=document.querySelector("#step2"),t=e.querySelectorAll("input"),r=e.querySelector("a"),a=actions(),n=0,o=t.length;o>n;n++)a.hiddenNotice(t[n]);"njs"==STEP.exchange&&r.setAttribute("act","submit"),Event.add(e,"click",function(e){var t=Event.target(e);t.getAttribute("stop")&&Event.stop(e),t.getAttribute("act")&&a[t.getAttribute("act")]&&a[t.getAttribute("act")](t,e)})}function step3(){var e=document.querySelector("#step3"),t=actions();Event.add(e,"click",function(e){var r=Event.target(e);r.getAttribute("stop")&&Event.stop(e),r.getAttribute("act")&&t[r.getAttribute("act")]&&t[r.getAttribute("act")](r,e)})}function step4(){var e=document.querySelector("#step4"),t=actions();Event.add(e,"click",function(e){var r=Event.target(e);r.getAttribute("stop")&&Event.stop(e),r.getAttribute("act")&&t[r.getAttribute("act")]&&t[r.getAttribute("act")](r,e)})}function step5(){}var STEP={};