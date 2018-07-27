$(function () {
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
    //监听滚动条
    listerScroll:function() {
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
    login: function(){
        $('#login').on('click', () => {
            console.log('登录');
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
        // 输入用户密码，登录
        $('#loain-submit').on('click', function () {
            //验证成功后，登录成功
            $(".modal-box").hide();
            $('.login-type').hide();
            $('.register-type').hide();
        })
    },
    //点击注册
    register: function(){
        $('#register').on('click', () => {
            console.log('注册')
            $(".modal-box").show();
            $('.form-body').hide();
            $('.register-type').show();
            $('.login-tit').removeClass('active');
            $('.register-tit').addClass('active');
        })
    },
    // 隐藏弹窗
    hideModel: function() {
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
                    tag.css({ 'background-color': " #03DE6D", "color": "#fff" });
                    tag.val("получить доступ ");
                    delay = 60;
                    _this.identifySend();
                    clearInterval(myidentify);
                }
                else {
                    tag.attr('disabled', true);
                    tag.css({ 'background-color': "#E8E8E8", "color": "#5A5A5A" });
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
            $('html,body').animate({scrollTop: 0},600);

        })
    }
}