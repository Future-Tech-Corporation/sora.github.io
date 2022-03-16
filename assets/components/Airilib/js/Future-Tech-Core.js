/*! Future-Tech Core(lite)- v1.1.0 - 11/14/2021
 *  http://kanodayo.com
 * Copyright (c) 2021 Future-Tech Corporation ; Licensed GPLv3 */
function sys(){
    Function.prototype.getMultiLine = function () {
        var lines = new String(this);
        lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
        return lines;
    }
        var string = function () {
            /*
             ________          _________        ________          ___
            |\   __  \        |\___   ___\     |\   __  \        |\  \
            \ \  \|\  \       \|___ \  \_|     \ \  \|\  \       \ \  \
             \ \   __  \           \ \  \       \ \   _  _\       \ \  \
              \ \  \ \  \           \ \  \       \ \  \\  \|       \ \  \
               \ \__\ \__\           \ \__\       \ \__\\ _\        \ \__\
                \|__|\|__|            \|__|        \|__|\|__|        \|__|
            */
        }
    console.log('System start in progresss');
    console.log('Initialize ATRI');
    console.log('Initialize Airilib');
    window.console.log(string.getMultiLine());
    let date = new Date()
    let front = 'background: #4285f4; color: #fff; border-radius: 3px 0 0 3px;'
    let back = 'background: #3366CC; color: #fff; border-radius: 0 3px 3px 0;'
    console.log("\n %c 🎉 Airilib  | Version 14.3" +" | kano_dayo %c"+`Build Time : ${date} `, front, back)
}
sys();

function getTimeState(){
    // 获取当前时间
    let timeNow = new Date();
    // 获取当前小时
    let hours = timeNow.getHours();
	// 获取当前小时
	let minutes = timeNow.getMinutes();
    // 判断当前时间段
    if (hours >= 6 && hours <= 10) {
        var tmsg = "早上好，今天又是活力满满的一天呢 ~";
    } else if (hours > 10 && hours <= 14) {
        var tmsg = "中午好，小歇一会吧 ~";
    } else if (hours > 14 && hours <= 18) {
        var tmsg = "下午好，让我们一起渡过一个愉快的下午茶时间！";
    } else if (hours > 18 && hours <= 22) {
        var tmsg = "晚上好，该下班了！加班人";
    } else if (hours < 6 ) {
		var tmsg = "夜深了，祝好梦！";
	}
	$("#nowTime").text(timeNow);
    showInfo(tmsg);
};
setInterval("getTimeState()",1000);
function showInfo(message){
    $("#msg").text(message);
}

function showMsg(msg){
    $("#errorMsg").text(msg);
}



