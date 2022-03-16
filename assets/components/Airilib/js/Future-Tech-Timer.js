/*! Future-Tech Core(lite)- v1.1.0 - 11/14/2021
 *  http://kanodayo.com
 * Copyright (c) 2021 Future-Tech Corporation ; Licensed GPLv3 */
//------------------------------------------------------------------------------------------------------------------
// Timer function
//------------------------------------------------------------------------------------------------------------------
var percentageElement = document.getElementById("msg");
var percentage = 0;
function process() {
    percentage += parseInt(Math.random()*10);
    if(percentage > 100){
        percentage = 100;
        window.location.href = "../index.html";
    }
    showPercentage(+percentage+"%"+" 将自动跳转到登录页面");
    processInterval();
}
function processInterval() {
    setTimeout(process,Math.random()*(1000-500)+500)
}
processInterval();
function showPercentage(msg){
    $("#Msg").text(msg);
}