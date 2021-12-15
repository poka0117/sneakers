// head
const headApp = new Vue({
    el: '#head',
    data: {
        logoImg: './images/logo.svg',
    }
});
// menu
$(document).ready(function(){
        let windowHeight = $(window).height();
        $('#menu').css('height',windowHeight+'px');
    $('.menuBer_open').on('click',function(){
        $('.menu_bg').css('height',windowHeight+'px');
        $('.menu_bg').fadeToggle();
        $('.topBar').toggleClass('topBar_2');
        $('.middleBar').toggleClass('middleBar_2');
        $('.bottomBar').toggleClass('bottomBar_2');
        $('#menu').toggleClass('menu_2');
    })
})
const menuApp = new Vue({
    el: '#menu',
    data: {
        menu_tops:[
            {
                link:'',
                text:'PICK UP',
            },
            {
                link:'',
                text:'FEATURE',
            },
            {
                link:'',
                text:'CONTACT',
            },
        ],
        menu_bottoms:[
            {
                link:'',
                text:'Twitter',
            },
            {
                link:'',
                text:'facebook',
            },
            {
                link:'',
                text:'instagram',
            },
        ]
    }
});
// top
const topApp = new Vue({
    el: '#top',
    data: {
        topVideo: './images/1585_640x360.mov',
    }
});
// pickUp
const pickUpApp = new Vue({
    el: '#pickUp',
    data: {
        title: 'PICK UP',
        pickUps: [
            './images/pickup1.jpg',
            './images/pickup2.jpg',
            './images/pickup3.jpg',
            './images/pickup4.jpg',
            './images/pickup5.jpg',
            './images/pickup6.jpg',
            './images/pickup7.jpg',
            './images/pickup8.jpg',
            './images/pickup9.jpg',
        ],
    }
});
$(document).ready(function(){
    let windowWidht = $(window).width();
    if(windowWidht >= 600){
        $('.slick01').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 3,
            arrow: false,
            centerMode: true,
        });
    }else{
        $('.slick01').slick({
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            arrow: false,
            centerMode: true,
        });
    }
})
// feature
const featureApp = new Vue({
    el: '#feature',
    data: {
        title: 'FEATURE',
        features:[
            {
                img:'./images/feature1.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature1',
            },
            {
                img:'./images/feature2.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature2',
            },
            {
                img:'./images/feature3.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature3',
            },
            {
                img:'./images/feature4.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature4',
            },
            {
                img:'./images/feature5.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature5',
            },
            {
                img:'./images/feature6.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature6',
            },
            {
                img:'./images/feature7.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature7',
            },
            {
                img:'./images/feature8.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature8',
            },
            {
                img:'./images/feature9.jpg',
                text1:'category',
                text2:'テキストテキストテキストテキストテキストテキストテキスト',
                text3:'xxxx.xx.xx',
                class:'feature9',
            },
        ]
    }
});
$(document).ready(function(){
    let windowHeight = $(window).height()/2;
    let featureheight1 = $('.feature1').offset().top - windowHeight;
    let featureheight2 = $('.feature2').offset().top - windowHeight;
    let featureheight3 = $('.feature3').offset().top - windowHeight;
    let featureheight4 = $('.feature4').offset().top - windowHeight;
    let featureheight5 = $('.feature5').offset().top - windowHeight;
    let featureheight6 = $('.feature6').offset().top - windowHeight;
    let featureheight7 = $('.feature7').offset().top - windowHeight;
    let featureheight8 = $('.feature8').offset().top - windowHeight;
    let featureheight9 = $('.feature9').offset().top - windowHeight;
    $(window).scroll(function(){
        let scrolltop = $(this).scrollTop();
        if(scrolltop > featureheight1){
            $('.feature1').addClass('featureOpen');
        }
        if(scrolltop > featureheight2){
            $('.feature2').addClass('featureOpen');
        }
        if(scrolltop > featureheight3){
            $('.feature3').addClass('featureOpen');
        }
        if(scrolltop > featureheight4){
            $('.feature4').addClass('featureOpen');
        }
        if(scrolltop > featureheight5){
            $('.feature5').addClass('featureOpen');
        }
        if(scrolltop > featureheight6){
            $('.feature6').addClass('featureOpen');
        }
        if(scrolltop > featureheight7){
            $('.feature7').addClass('featureOpen');
        }
        if(scrolltop > featureheight8){
            $('.feature8').addClass('featureOpen');
        }
        if(scrolltop > featureheight9){
            $('.feature9').addClass('featureOpen');
        }
    })
})
// contact
const contactApp = new Vue({
    el: '#contact',
    data: {
        title:'CONTACT',
        text1:'テキストテキストテキスト',
        text2:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        text3:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
        inputText1:'Name:',
        inputText2:'Mail:',
        inputText3:'Message:',
        copyWright:'© Sneakers',
    } 
})