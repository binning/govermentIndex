$(function () {
    mainMethods.init();
    //判断滚动条位置
    mainMethods.listerScroll();
    //登录
    mainMethods.login();
    //注册
    mainMethods.register();
    //点击隐藏弹窗
    mainMethods.hideModel();
    //发送验证码
    mainMethods.identifySend();
    // 随机改变背景颜色
    mainMethods.changeBgColor();
    // 随机改变背景颜色
    mainMethods.bottomHover();
});

var mainMethods = {
    init:function(){
        console.log(localStorage.getItem('phone'))
        var username = localStorage.getItem('phone');
        // if(username.length >0){
        //     $("#login").hide();
        //     $('#register').hide();
        // }
    },
    //监听滚动条
    listerScroll: function () {
        $(window).scroll(function () {
            var num = $(window).scrollTop();
            if (num > 80) {
                $(".header").addClass('nav-active');
            };
            if (num <= 80) {
                $(".header").removeClass('nav-active');
            };
        });
    },
    //点击登录
    login: function () {
        var _this = this;
        $('#login').on('click', () => {
            console.log('登录');
            $('.login-tit').addClass('active');
            $('.register-tit').removeClass('active');
            $(".modal-box").show();
            $('.login-type').show();
        });
        $('.login-tit').on('click', () => {
            $('.login-tit').addClass('active');
            $('.register-tit').removeClass('active');
            $('.register-type').hide();
            $('.login-type').show();
        });
        $('.register-tit').on('click', () => {
            $('.register-tit').addClass('active');
            $('.login-tit').removeClass('active');
            $('.register-type').show();
            $('.login-type').hide();
        });
        //点击忘记密码
        $('.forget-password').on('click', () => {
            $('.has-return').show();
            $('.no-return').hide();
            $('.form-body').hide();
            $('.password-type').show();
        });
        //点击返回
        $('.return-icon').on('click', () => {
            $('.has-return').hide();
            $('.no-return').show();
            $('.form-body').hide();
            $('.login-type').show();
        });
        //用户登录表单提交
        $.validator.setDefaults({
            submitHandler: function (index, param) {
                console.log(index, param.delegateTarget.id)
                //验证成功后，登录成功
                $(".modal-box").hide();
                $('.login-type').hide();
                $('.register-type').hide();
                _this.addCookie('phone',$('#firstPhone').val(),2);
            }
        });
        $("#signupForm").validate({
            rules: {
                firstPhone: "required",
                firstPassword: {
                    required: true,
                    minlength: 5
                },
            },
            messages: {
                firstPhone: "请输入您的手机号",
                firstPassword: {
                    required: "请输入密码",
                    minlength: "密码最少5位"
                },
            }
        });
        $("#registerForm").validate({
            rules: {
                secondPhone: "required",
                firstIdenty: "required",
                setPassword: {
                    required: true,
                    minlength: 5
                },
                confirmPassword: {
                    required: true,
                    minlength: 5,
                    equalTo: "#setPassword"
                },
            },
            messages: {
                secondPhone: "请输入您的手机号",
                firstIdenty: "请输入验证码",
                setPassword: {
                    required: "请输入密码",
                    minlength: "密码最少5位"
                },
                confirmPassword: {
                    required: "请再次输入密码",
                    minlength: "密码最少5位",
                    equalTo: "两次输入密码不一致"
                }
            }
        });
        // 输入用户密码，登录
        $('#login-submit').on('click', function () {
            //验证成功后，登录成功
            $(".modal-box").hide();
            $('.login-type').hide();
            $('.register-type').hide();
        })
    },
    addCookie: function (name, value, days) {
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+days);   //days为保存时间长度
        document.cookie = name+'='+value+';expires='+oDate;
        localStorage.setItem(name,value)
    },
    getCookieValue: function (name) { /**获取cookie的值，根据cookie的键获取值**/
        //用处理字符串的方式查找到key对应value
        var name = escape(name);
        //读cookie属性，这将返回文档的所有cookie
        var allcookies = document.cookie;
        //查找名为name的cookie的开始位置
        name += "=";
        var pos = allcookies.indexOf(name);
        //如果找到了具有该名字的cookie，那么提取并使用它的值
        if (pos != -1) { //如果pos值为-1则说明搜索"version="失败
            var start = pos + name.length; //cookie值开始的位置
            var end = allcookies.indexOf(";", start); //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
            if (end == -1) end = allcookies.length; //如果end值为-1说明cookie列表里只有一个cookie
            var value = allcookies.substring(start, end); //提取cookie的值
            return (value); //对它解码      
        } else { //搜索失败，返回空字符串
            return "";
        }

    },
    deleteCookie: function () {/**根据cookie的键，删除cookie，其实就是设置其失效**/
        var name = escape(name);
        var expires = new Date(0);
        path = path == "" ? "" : ";path=" + path;
        document.cookie = name + "=" + ";expires=" + expires.toUTCString() + pat
    },
    //点击注册
    register: function () {
        $('#register').on('click', () => {
            console.log('注册')
            $(".modal-box").show();
            $('.form-body').hide();
            $('.register-type').show();
            $('.login-tit').removeClass('active');
            $('.register-tit').addClass('active');
        });
        //表单验证
    },
    // 隐藏弹窗
    hideModel: function () {
        $('.layer').on('click', () => {
            $('.has-return').hide();
            $('.password-type').hide();
            $(".modal-box").hide();
            $('.login-type').hide();
            $('.register-type').hide();
            $('.no-return').show();
        });
        // 点击x隐藏弹窗
        $('.modal-box .default').on('click', () => {
            $('.has-return').hide();
            $('.password-type').hide();
            $(".modal-box").hide();
            $('.login-type').hide();
            $('.register-type').hide();
            $('.no-return').show();
        })
    },
    //验证码
    identifySend: function () {
        var _this = this;
        var delay = 60;
        $('.identify').one('click', function () {
            var tag = $(this);
            var myidentify = setInterval(function () {
                if (delay < 0) {
                    tag.attr('disabled', false);
                    tag.css({
                        'background-color': " #03DE6D",
                        "color": "#fff"
                    });
                    tag.val("получить доступ ");
                    delay = 60;
                    _this.identifySend();
                    clearInterval(myidentify);
                } else {
                    tag.attr('disabled', true);
                    tag.css({
                        'background-color': "#E8E8E8",
                        "color": "#5A5A5A"
                    });
                    tag.val("重新发送(" + delay + "s)");
                    delay--;
                }
            }, 1000)
        });
    },
    //改变背景颜色
    changeBgColor: function () {
        function kind() {
            function randomNum() {
                return parseInt(Math.random() * 10) + '';
            }
            return randomNum();
        }
        setInterval(function () {
            var changeColor = "#" + kind() + kind() + kind() + "d6f";
            $('.head-top').css('background-color', changeColor);
            $('.personal-tit').css('background-color', changeColor);

        }, 4000)
    },
    // 底部悬停
    bottomHover: function () {
        $('.foot-tips .tips-item').eq(0).on('mouseover', function () {
            $('.hover-box').css('opacity', '1');
        });
        $('.foot-tips .tips-item').eq(0).on('mouseout', function () {
            $('.hover-box').css('opacity', '0');
        });
        //  置顶
        $('#gotop').on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 600);

        })
    }
}