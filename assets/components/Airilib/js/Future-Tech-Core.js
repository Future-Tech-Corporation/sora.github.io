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

//------------------------------------------------------------------------------------------------------------------
// Login function
//------------------------------------------------------------------------------------------------------------------
function inputCheck(form) {
    var userID = $("#loginID"),password = $("#loginPass");
    var userID = userID.val(),password = password.val();
    if(!userID || userID == ""){
        showMsg("<--账号不能为空-->");
        document.getElementById("errorMsg").style.color = "#ff3c22";
        form.userID.focus ();
        return false;
    }
    if(!password || password == ""){
        showMsg("<--密码不能为空-->");
        document.getElementById("errorMsg").style.color = "#ff3c22";
        form.password.focus ();
        return false;
    }

        $.ajax({
            url : "Login?method=doLogin",
            data :{"logID":$("#loginID").val(),"logPASS":$("#loginPass").val()},
            type : "post",
            dataType: "json",
            success : function(data) {
                    if (data == true) {
                        $.ajax({
                            url: "Login?method=doSwitch",
                            data: {"logID":$("#loginID").val(),"logPASS":$("#loginPass").val()},
                            type: "post",
                            async:false,
                            dataType: "json",
                            success:function (data) {
                                if (data == "1"){
                                    setTimeout(function () {
                                        showMsg("<--Loading-->");
                                        document.getElementById("errorMsg").style.color = "#00ff72";
                                        console.log(data);
                                        window.location.href = "welcome.jsp";
                                    }, 100)
                                }else if(data == "2"){
                                    setTimeout(function () {
                                        showMsg("<--Loading-->");
                                        document.getElementById("errorMsg").style.color = "#00ff72";
                                        console.log(data);
                                        window.location.href = "welcome.jsp";
                                    }, 100)
                                }else if(data == "3"){
                                    setTimeout(function () {
                                        showMsg("<--Loading-->");
                                        document.getElementById("errorMsg").style.color = "#00ff72";
                                        console.log(data);
                                        window.location.href = "welcome.jsp";
                                    }, 100)
                                }else if (data == "4"){
                                    setTimeout(function () {
                                        showMsg("<--Loading-->");
                                        document.getElementById("errorMsg").style.color = "#00ff72";
                                        console.log(data);
                                        window.location.href = "welcome.jsp";
                                    }, 100)
                                }else {
                                    showMsg("<--账号不存在-->");//
                                    document.getElementById("errorMsg").style.color = "#d5690a";
                                }
                            }
                        })
                    }
                    else {
                        showMsg("<--账号或密码错误-->");
                        document.getElementById("errorMsg").style.color = "#ff3c22";
                        return false;
                    }
            },
            error : function(data){
                showMsg("<--账号不存在-->");//
                document.getElementById("errorMsg").style.color = "#d5690a";
            }
        })
}

//------------------------------------------------------------------------------------------------------------------
// Registry function
//------------------------------------------------------------------------------------------------------------------
function registryCheck(from) {
    var flag = new Boolean(false);
    //邮箱验证
    var regexp = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");//正则表达式
    var cemail = $("#emailID");
    var cemail = cemail.val();
    if (!cemail || cemail=="") {
        showMsg("<--邮箱不能为空-->");
        document.getElementById("errorMsg").style.color = "#ff3c22";
        return false;
    } else if (!regexp.test(cemail)) { //正则验证不通过，格式不对
        showMsg("<--邮箱格式有误-->");
        document.getElementById("errorMsg").style.color = "#ff3c22";
        return false;
    }else{
        $.ajax({
            url: "../Registry?method=doCheckEmail",
            data: {"eID": $("#emailID").val()},
            type: "post",
            async: false,
            dataType: "json",
            success: function (data) {
                if (data == false) {
                    showMsg("<--Loading-->");
                    document.getElementById("errorMsg").style.color = "#ff3c22";
                    console.log(data)
                    //密码验证
                    var cpasswd = $("#userPass");
                    var cpasswd = cpasswd.val();
                    if (!cpasswd || cpasswd == "") {
                        showMsg("<--密码不能为空-->");
                        document.getElementById("errorMsg").style.color = "#ff3c22";
                        return false;
                    }
                    //姓名验证
                    var cname = $("#userName");
                    var cname = cname.val();
                    if(!cname || cname==""){
                        showMsg("<--姓名不能为空-->");
                        document.getElementById("errorMsg").style.color = "#ff3c22";
                        return false;
                    }
                    //电话号码验证
                    var ctele = $("#userTele");
                    var reg = new RegExp("^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$");
                    var ctele = ctele.val();
                    if(!ctele || ctele==""){
                        showMsg("<--电话号码不能为空-->");
                        document.getElementById("errorMsg").style.color = "#ff3c22";
                        return false;
                    }else if(!reg.test(ctele)){
                        showMsg("<--电话号码格式错误-->");
                        document.getElementById("errorMsg").style.color = "#ff3c22";
                        return false;
                    }
                    var cauth = $("#userAuth");
                    var ctitle = $("#userTitle");
                    var cauth = cauth.val();
                    var ctitle = ctitle.val();
                    if(!cauth || cauth == ""){
                        showMsg("<--授权码不能为空-->");
                        document.getElementById("errorMsg").style.color = "#ff3c22";
                        return false;
                    }else if (ctitle == "Teacher" || ctitle == "Worker" || ctitle == "Administrator") {
                        $.ajax({
                            url: "../Registry?method=doCheckCode",
                            data: {"uAuth": $("#userAuth").val(), "uTitle": $("#userTitle").val()},
                            type: "post",
                            async: false,
                            dataType: "json",
                            success: function (data) {
                                if (data == true) {
                                    showMsg("<--Loading-->");
                                    document.getElementById("errorMsg").style.color = "#22ff2d";
                                    console.log(data);
                                    $.ajax({
                                        url:"../Registry?method=doRegistry",
                                        data:{"uAuth":$("#userAuth").val(),"uTitle": $("#userTitle").val(),"eID": $("#emailID").val(),"uName":$("#userName").val(),"uPass":$("#userPass").val(),"filter":$("#select2 option:selected").val(),"uTele":$("#userTele").val()},
                                        type:"post",
                                        dataType: "json",
                                        success:function (data) {
                                            if(data==true){
                                                setTimeout(function () {
                                                    showMsg("<--Loading-->");
                                                    document.getElementById("errorMsg").style.color = "#00ff72";
                                                    console.log(data);
                                                    window.location.href = "account.jsp";
                                                }, 1000)
                                            }else {
                                                showMsg("<--注册失败-->");//
                                                document.getElementById("errorMsg").style.color = "#d5690a";
                                                return false;
                                            }
                                        },
                                        error: function (data) {
                                            showMsg("<--系统错误-->");//
                                            document.getElementById("errorMsg").style.color = "#d5690a";
                                            return false;
                                        }
                                    })
                                } else {
                                    showMsg("<--授权码或用户类型错误-->");
                                    document.getElementById("errorMsg").style.color = "#ff3c22";
                                    return false;
                                }
                            },
                            error: function (data) {
                                showMsg("<--系统错误-->");//
                                document.getElementById("errorMsg").style.color = "#d5690a";
                                return false;
                            }
                        })
                    }else if(ctitle=="Student"){
                        $.ajax({
                            url : "../Registry?method=doUserReg",
                            data :{"uAuth":$("#userAuth").val(),"uTitle": $("#userTitle").val(),"eID": $("#emailID").val(),"uName":$("#userName").val(),"uPass":$("#userPass").val(),"filter":$("#select2 option:selected").val(),"uTele":$("#userTele").val()},
                            type : "post",
                            dataType: "json",
                            async: false,
                            success : function(data) {
                                if (data == true) {
                                    setTimeout(function () {
                                        showMsg("<--Loading-->");
                                        document.getElementById("errorMsg").style.color = "#00ff72";
                                        console.log(data);
                                        return false;
                                        window.location.href = "account.jsp";
                                    }, 1000)
                                }
                            },
                            error : function(data){
                                showMsg("<--注册失败-->");//
                                document.getElementById("errorMsg").style.color = "#d5690a";
                                return false;
                            }
                        })
                    }else {
                        showMsg("<--注册失败,请检查信息是否正确-->");//
                        document.getElementById("errorMsg").style.color = "#d5690a";
                        return false;
                    }
                } else {
                    showMsg("<--邮箱已注册-->");
                    document.getElementById("errorMsg").style.color = "#ff0000";
                    console.log(data)
                    return false;
                }
            },
            error: function (data) {
                showMsg("<--系统错误-->");//
                document.getElementById("errorMsg").style.color = "#d5690a";
                return false;
            }
        })
        return false;
    }
}

//------------------------------------------------------------------------------------------------------------------
// Retrieve function
//------------------------------------------------------------------------------------------------------------------
function retrievePasswd(form){
    var userID = $("#userID"),tele = $("#userTele");
    var userID = userID.val(),tele = tele.val();
    if(!userID || userID == ""){
        showMsg("<--邮箱不能为空-->");
        document.getElementById("errorMsg").style.color = "#ff3c22";
        form.userID.focus ();
        return false;
    }
    if(!tele || tele == ""){
        showMsg("<--手机号不能为空-->");
        document.getElementById("errorMsg").style.color = "#ff3c22";
        form.password.focus ();
        return false;
    }
    $.ajax({
        url : "../Retrieve?method=doRetrieve",
        data :{"uID":$("#userID").val(),"uTele":$("#userTele").val()},
        type : "post",
        async: false,
        dataType: "json",
        success : function(data) {
            if (data == true) {
                setTimeout(function () {
                    showMsg("<--Loading-->");
                    document.getElementById("errorMsg").style.color = "#00ff72";
                    console.log(data);
                    window.location.href = "successret.jsp";
                }, 100)
            } else {
                showMsg("<--账号或手机号错误-->");
                document.getElementById("errorMsg").style.color = "#ff3c22";
                return false;
            }
        },
        error : function(data){
            showMsg("<--账号不存在-->");//
            document.getElementById("errorMsg").style.color = "#ff0000";
        }
    })

}
//底部错误信息提醒
function showMsg(msg){
    $("#errorMsg").text(msg);
}
//监听回车键提交
$(function(){
    document.onkeydown=keyDownSearch;
    function keyDownSearch(e) {
        var theEvent = e || window.event;
        var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
        if (code == 13) {
            $('#submit').click();
        }
    }
});



