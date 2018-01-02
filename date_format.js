var fn = function() {
    var str = '';
    var data = new Date();
    var year = data.getFullYear();
    var month = data.getMonth() + 1;
    var dat = data.getDay();
    str = year + '-' + month + '-' + dat;
    return str;
}
console.log(fn());