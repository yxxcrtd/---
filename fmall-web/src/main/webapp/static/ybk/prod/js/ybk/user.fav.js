function fav(){function e(e,t){for(var i,s=JSON.parse(cookies.get("favlist")),a=0,n=s.length;n>a;a++)s[a][1]==e&&s[a][0]==t&&(i=1);!i&&s.push([t,e])&&cookies.set({name:"favlist",value:JSON.stringify(s),path:"/",time:31536e4})}function t(e,t){for(var i,s=JSON.parse(cookies.get("favlist")),a=0,n=s.length;n>a;a++)s[a][1]==e&&s[a][0]==t&&(i=1);return i}function i(e,t){for(var i=JSON.parse(cookies.get("favlist")),s=null,a=0,n=i.length;n>a;a++)if(i[a][1]==e&&i[a][0]==t){s=a;break}null!==s&&(i.splice(s,1),cookies.set({name:"favlist",value:JSON.stringify(i),path:"/",time:31536e4}))}function s(e){for(var t=JSON.parse(cookies.get("favlist")),i={},n=t.length;n--;)i[t[n][0]]?i[t[n][0]].push(t[n][1]):i[t[n][0]]=[t[n][1]];a.ajax({type:"GET",url:"/api/ybk/get_collection_infos",data:{condition:JSON.stringify(i)},success:function(t){t.success&&e&&e(t.data)}}),setTimeout(function(){s(e)},6e4)}var a=request();return function(){cookies.get("favlist")||cookies.set({name:"favlist",value:"[]",path:"/",time:31536e4})}(),{add:e,del:i,list:s,isfav:t}}