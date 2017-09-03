var search = window.location.href,
	string = document.getElementById("web-search-string"),
	iframe = document.getElementById("web-search"),
	n = search.indexOf('?');

if (n == -1)
	search = ''
else
	search = search.substring(n + 1)

string.value = search;
iframe.src = "https://duckduckgo.com/?q=site:samdd.me " + search + "&kp=-2&kh=1&ko=-2&k1=-1&kv=-1&kn=1&kac=-1&kaf=1";

function webSearch() {
    search = string.value;
    iframe.src = "https://duckduckgo.com/?q=site:samdd.me " + search + "&kp=-2&kh=1&ko=-2&k1=-1&kv=-1&kn=1&kac=-1&kaf=1";
}

document.getElementById('web-search-string').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if (charCode == '13') {
        webSearch();
        return false;
    }
}