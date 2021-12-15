
function query() {
    let url = window.location.href
    if (url.indexOf('?') === -1) return null
    var arr1 = url.split("?");
    var params = arr1[1].split("&");
    var obj = {};
    for (var i = 0; i < params.length; i++) {
        var param = params[i].split("=");
        obj[param[0]] = decodeURIComponent(param[1]);
    }
    return obj;
}

export default query