$(function () {
    //点击显示更多；
    indexMethods.showMore();
    
});
var indexMethods = {
    //点击显示更多
    showMore: function () {
        $('#show-more').on('click', function () {
            //向后台发请求数据渲染dom
            console.log('显示更多');
            indexMethods.templateModal()
        });
    },
    //测试模板js
    templateModal: function () {
        var data = {
            items: [{
                    'name': 'Constantin Flatley',
                    'date': '2018/10/05',
                    'imgurl': 'static/img/is09ah8uy.png',
                    'num': '4500RUN',
                    'content': 'Сделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовой'
                },
                {
                    'name': 'Peggie Goodwin',
                    'date': '2018/08/28',
                    'imgurl': 'static/img/is09at443.png',
                    'num': '5000RUN',
                    'content': 'Сделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стар'
                },
                {
                    'name': 'Peggie Goodwin',
                    'date': '2018/08/28',
                    'imgurl': 'static/img/is09at443.png',
                    'num': '5000RUN',
                    'content': 'Сделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стар'
                },
                {
                    'name': 'Constantin Flatley',
                    'date': '2018/10/05',
                    'imgurl': 'static/img/is09ah8uy.png',
                    'num': '4500RUN',
                    'content': 'Сделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовой'
                }
            ]
        }
        var html = template(document.getElementById('test').innerHTML, data);
        // document.getElementById('show-more').innerHTML = html;
        $('#user-box').append(html);

    }
};