function switchbtn(e,t,a){function n(e){var a=Event.target(e);a!=r&&a.nodeName.toLowerCase()==t.toLowerCase()&&(r.className="",r=a,r.className="on")}var o=document.querySelector(e),c=o.querySelectorAll(t),r=c[(a||1)-1];r.className="on",Event.add(o,"click",function(e){n(e)})}