$(function () {
    //tab切换
    personalMethods.tabChange();
    //移入出现弹窗
    personalMethods.showModal();
   
});
var personalMethods = {
    //tab切换
    tabChange: function(){
        $('.tab-box a').on('click', function () {
            var myId = $(this).attr('myAttr');
            $('.tab-box a span').removeClass('active');
            $(this).find('span').addClass('active');
            $('.person-item').hide();
            $(myId).show();
        });
    },
    //移入出现弹窗
    showModal: function(){
        $('.show-detail').on('mouseover', function (e) {
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0;
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0;
            console.log('123', xx, yy)
            var infoModal = '';
            infoModal += '<div class="detail-modal"><ul><li><span>逾期单日补偿</span><span>80RUB</span></li>';
            infoModal += '<li><span>逾期时间</span><span>5天</span></li>';
            infoModal += '<li><span>共</span><span class="overstriking">400RUB</span></li></ul></div>';
            $(this).parents('.recod-list').append(infoModal);
            $(this).addClass('active');
        });
        //移除弹窗消失
        $('.show-detail').on('mouseout', function () {
            $('div.detail-modal').remove();
            $(this).removeClass('active');
        })
    },
  
}