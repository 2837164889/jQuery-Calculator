//JS获取时间
var doc = window.document.getElementById("sj");

function showtime() {
	var v = new Date();
	var ss = v.getTime();
	var times = v.toLocaleString(ss);
	doc.innerHTML = times;
}
showtime();
var id = window.setInterval("showtime()", 1000);