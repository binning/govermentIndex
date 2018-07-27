$(function(){
    //初始化状态
    applyLoanMethods.initStatus();
    //储存选择的值
    applyLoanMethods.saveValue();
});

let applyLoanMethods = {
    //初始化状态
    initStatus:function(){
        this.sum = 4000.00;
        this.date = 7;
        this.dayInterest=1;
        this.interest = 210.00;
        this.repay = 4210.00;
    },
    //储存选择的值
    saveValue:function(){
        var _this = this;
        //选择金额
        $('.choose-info .money-list').on('click',function(){
            $('.choose-info .money-list').removeClass('active');
            $(this).addClass('active');
            _this.sum = $(this).find('span.change-num').text();
            _this.interest = _this.dayInterest *  _this.date * 30;
            _this.repay =  +_this.sum +  _this.interest ;
            _this.showHtml();
        });
        //选择天数
        $('.choose-info .date-list').on('click',function(){
            $('.choose-info .date-list').removeClass('active');
            $(this).addClass('active');
            _this.date = $(this).find('span').text();
            _this.interest = _this.dayInterest *  _this.date * 30;
            _this.repay =  +_this.sum +  _this.interest ;
            _this.showHtml();
        });
    },
    //渲染视图
    showHtml:function(){
        var _this = this ;
        $('.result-content li span.sum').text(_this.sum);
        $('.result-content li span.date').text(_this.date);
        $('.result-content li span.day-interest').text(_this.dayInterest);
        $('.result-content li span.interest').text(_this.interest.toFixed(2));
        $('.result-content li span.repay').text(_this.repay.toFixed(2));
    }
}