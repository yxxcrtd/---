$(function() {
	function e() {
		var e = navigator.userAgent.toLowerCase();
		return "micromessenger" == e.match(/MicroMessenger/i) ? ($(".loadBtn").click(function(e) {
			e.preventDefault(), $(".mask").css("display", "block")
		}), !1) : true;
	}
	e();
	window["is_weixin"] = e;
});