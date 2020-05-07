/*
generates options for year-select since html select is limited to 20th Century
*/

var options = "";
for(var i = 1000; i <= new Date().getFullYear(); i++) {
    options += ("<option value=" + i + ">"+i+"</option>");
}

document.getElementById('year-select').innerHTML = options;