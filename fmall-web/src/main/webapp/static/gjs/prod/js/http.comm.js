function _comm(a){var t=this,u=request();t.url=a||"http://172.32.1.218:8097",t.jsonp=function(a){u.jsonp({url:t.url+a.api,data:a.data,success:a.fn})},t.ajax=function(a){u.ajax({url:t.url+a.api,type:"POST",data:a.data,success:a.fn})}}