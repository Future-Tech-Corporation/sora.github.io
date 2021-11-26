/*! Airilib(lite)- v14.3 - 05/14/2021
 *  http://kanodayo.com
 * Copyright (c) 2021 Future-Tech Corporation */
var airilib = {};

airilib.titleChange = function() {
        var origin = document.title;
        var titleTime;
        document.addEventListener("visibilitychange", function() {
            if (document.hidden) {
                document.title = "(つェ⊂)我藏好了哦~ " + origin;
                clearTimeout(titleTime);
            } else {
                document.title = "(*´∇｀*) 被你发现啦~ " + origin;
                titleTime = setTimeout(function() {
                    document.title = origin;
                }, 2000);
            }
        });
};
airilib.buildFooterTime = function() {
    var now = new Date();
    let dateEle = document.getElementById("timeDate");
    let timeEle = document.getElementById("times");
    if (!dateEle && !timeEle) return;
    function createtime() {
        var grt = new Date(origamiConfig.footerTime);
        now.setTime(now.getTime() + 250);
        days = (now - grt) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt) / 1000 / 60 / 60 - 24 * dnum;
        hnum = Math.floor(hours);
        if (String(hnum).length == 1) {
            hnum = "0" + hnum;
        }
        minutes = (now - grt) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum;
        mnum = Math.floor(minutes);
        if (String(mnum).length == 1) {
            mnum = "0" + mnum;
        }
        seconds =
            (now - grt) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum;
        snum = Math.round(seconds);
        if (String(snum).length == 1) {
            snum = "0" + snum;
        }
        if (dateEle) {
            dateEle.innerHTML = "" + dnum + "天";
        }
        if (timeEle) {
            timeEle.innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";
        }
    }
    setInterval(createtime, 250);
};