$(function () {
    //初始化
    indexMethods.init();
});
var indexMethods = {
    init: function () {
        new Vue({
            el: "#app",
            data: {
                items: [{
                        'name': 'Constantin Flatley',
                        'date': '2018/10/05',
                        'imgurl': 'static/img/blm041832.png',
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
                        'imgurl': 'static/img/is09aa6m4.png',
                        'num': '5000RUN',
                        'content': 'Сделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовойСделать данную страницу стар'
                    },
                    {
                        'name': 'Constantin Flatley',
                        'date': '2018/10/05',
                        'imgurl': 'static/img/is09ah8uy.png',
                        'num': '4500RUN',
                        'content': 'страницу стартовойСделать данную страницу старСделать данную страницу стартовойСделатьданную страницу стартовойСделать данную страницу стартовойСделать данную страницу стартовойСделатьданную страницу стар '
                    }
                ]
            },
            methods: {
                showMore(){                  
                    //向后台发送请求，获取数据
                    this.items.map((item) =>{
                        this.items.push(item);
                    });          
                },
                userLogin(){
                    console.log('login')
                } 
            }
        })
    }
};