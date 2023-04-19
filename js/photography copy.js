// $(function() {
//         // 개념정리
//     // 1. 제이쿼리 선언문
//     // jQuery => $로 간편히 사용
//     // jQuery(콜백함수); => $(콜백함수);
//     // 콜백함수 : 부르면 결과가 오는것 / 결과는 묶음(함수)으로 옴 / $(function(){});

//     $(function(){ // $사인이 외부로 노출될 가능성이 있음
//         // 제이쿼리 시작
//         console.log('$ : ' + $);
//     });
//     jQuery(function(){
//         console.log('jQeury : ' + jQuery); //템플릿리터럴 ES5 방식
//         console.log(`$ : ${$}`); //템플릿리터럴 ES6 방식
//     });

//     // $사인이 외부로 노출되면 충돌할수있음 -> so, $를 내부변수로 사용하여 피할수있음 / $를 아규먼트로 전달하여 매개변수로 받아서 내부변수로 사용하기
//     (function(매개변수){ // 매개변수는 전달인자를 받는 변수(Parameter)
//         // alert('즉시실행함수 ' + 매개변수);
//     })('아규먼트'); //()는 즉시실행함수표현식(IIFE) / 아규먼트는 전달인자

//     // 제이쿼리의 달러사인을 아규먼트로 전달하여 매개변수로 사용하기
//     // 즉시실행함수가 밑에있지만 콘솔에 가장위에 있는 이유는 즉시실행이니까!
//     (function($){
//         console.log(`즉시실행함수표현식 전달인자를 jQuery로 전달 => 달러사인 기호로 받는다 => ${$}`);
//     })(jQuery); 

//     (function(제이쿼리){
//         console.log('제이쿼리 : ' + 제이쿼리); //jQuery프로그램

//         console.log('제이쿼리2 : ' + 제이쿼리('#header')); //아이디가 헤더인 선택자

//         제이쿼리('#header').click(function(){ //아이디가 헤더인 선택자 클릭이벤트
//             // alert('#header 클릭');
//         });
//     })(jQuery); 


//     ///////////
//     // 즉시실행함수로 $을 내부변수로 사용하기
//     (function($, window, document){
//         $('#section1').click(function(){
//             // alert('#section1 클릭');
//         });
//     })(jQuery, window, document, '변수4'); //외부와 차단해서 충돌일어나지 않게하려고

//     (function(a, b, c, d, e){
//         // 매개변수는 선언없이 ()안에 바로 사용가능함
//         console.log('a, b, c, d, e : ' + a, b, c, d, e);
//         console.log('e는 정의된 아규먼트 즉, 전달인자값이 없다 : ' + e);
//     })('jQuery', 'window', 'document', '변수4'); 
// });


//// 시작

// 디폴트식 : 아규먼트를 매개변수로 받아서 내부변수로 제이쿼리사용, 외부와의 충돌을 피함

(function($, window){

    // 섹션별 scrollTop값 알아보기
    let sec1ScrTop = $('#section1').offset().top; //offset:간격, 섹션1의 위치
    let sec2ScrTop = $('#section2').offset().top; 
    let sec3ScrTop = $('#section3').offset().top; 
    let sec4ScrTop = $('#section4').offset().top; 
    let sec5ScrTop = $('#section5').offset().top; 
    let sec6ScrTop = $('#section6').offset().top; 
    let sec7ScrTop = $('#section7').offset().top; 
    let sec8ScrTop = $('#section8').offset().top; 
    let sec9ScrTop = $('#section9').offset().top; 
    let sec10ScrTop = $('#section10').offset().top; 
    let sec11ScrTop = $('#section11').offset().top; 
    let sec12ScrTop = $('#section12').offset().top; 
    let sec13ScrTop = $('#section13').offset().top; 
    let sec14ScrTop = $('#section14').offset().top; 
    let sec15ScrTop = $('#section15').offset().top; 
    let footerScrTop = $('#footer').offset().top; 

    // 1. header
    // 스크롤이벤트의 방향
    // 아래로 스크롤시 헤더영역부분이 부드럽게 위로 올라가서 보이지않도록
    // 위로 스크롤시 헤더영역부분이 부드럽게 다시 내려온다
    // 스크롤탑이 0이면 헤더영역 배경이 투명해짐

    let scrNew = 0;
    // 스크롤시 새로운 스크롤값을 저장하는 변수
    let scrOld = scrNew;
    // 이전 스크롤값을 저장
    // 간발의 차이

    $(window).scroll(function(){

        // 네비게이션 - ABOUT - 섹션5부터 섹션6 미만
        if ($(window).scrollTop() > sec5ScrTop - 100 && $(window).scrollTop() < sec6ScrTop - 100) {
            $('.nav-btn').eq(0).addClass('on');
        } else {
            $('.nav-btn').eq(0).removeClass('on');
        }
        // 네비게이션 - SERVICES - 섹션6부터 섹션7 미만
        if ($(window).scrollTop() >= sec6ScrTop - 100 && $(window).scrollTop() < sec8ScrTop - 100) {
            $('.nav-btn').eq(1).addClass('on');
        } else {
            $('.nav-btn').eq(1).removeClass('on');
        }
        // 네비게이션 - PORTFOLIO - 섹션8부터 섹션9 미만
        if ($(window).scrollTop() >= sec8ScrTop - 100 && $(window).scrollTop() < sec9ScrTop - 100) {
            $('.nav-btn').eq(2).addClass('on');
        } else {
            $('.nav-btn').eq(2).removeClass('on');
        }
        // 네비게이션 - AWORDS - 섹션9부터 섹션10 미만
        if ($(window).scrollTop() >= sec9ScrTop - 100 && $(window).scrollTop() < sec10ScrTop) {
            $('.nav-btn').eq(3).addClass('on');
        } else {
            $('.nav-btn').eq(3).removeClass('on');
        }
        // 네비게이션 - BLOG - 섹션10부터 섹션15 미만
        if ($(window).scrollTop() > sec10ScrTop - 100 && $(window).scrollTop() < sec15ScrTop - 200) {
            $('.nav-btn').eq(4).addClass('on');
        } else {
            $('.nav-btn').eq(4).removeClass('on');
        }
        // 네비게이션 - CONTACT - 섹션15
        if ($(window).scrollTop() >= sec15ScrTop - 160) {
            $('.nav-btn').eq(5).addClass('on');
        } else {
            $('.nav-btn').eq(5).removeClass('on');
        }

        // 헤더 스크롤
        scrNew = $(window).scrollTop(); //최초의 스크롤탑값 - 얘는 계속 바뀌고

        if ($(window).scrollTop() === 0) { 
            $('#header').removeClass('up');
            $('#header').removeClass('down');
        } else {
            // 1. 스크롤이벤트의 방향 결정
            console.log('scrNew - scrOld : ' + (scrNew - scrOld));
            if ((scrNew - scrOld) > 0) {
                // console.log('아래로!');
                // 2. 아래로 스크롤시 헤더영역부분이 부드럽게 위로 올라가서 보이지않도록
                $('#header').addClass('down');
                $('#header').removeClass('up');
            }
            if ((scrNew - scrOld) < 0) {
                // console.log('위로!');
                // 3. 위로 스크롤시 헤더영역부분이 부드럽게 다시 내려온다
                $('#header').removeClass('down');
                $('#header').addClass('up');
            }
        }

        scrOld = scrNew; //이전 스크롤탑값 - 얘는 처음값을 받고
    });


    // 2. section1 ~ section14
    // 스크롤이벤트 : 윈도우객체
    // scroll()메소드는 반드시 스크롤이 변경되면 발생
    $(window).scroll(function(){
        // console.log('현재 scrollTop값 : ' + $(window).scrollTop());
        // console.log('현재 scrollLeft값 : ' + $(window).scrollLeft()); 
        //scroll메소드는 두개만 있음

        // scrollTop값이 0이면 모두 초기화하기
        if ($(window).scrollTop() === 0) {
            $('#section2').removeClass('on');
            $('#section3').removeClass('on');
            $('#section4').removeClass('on');
            $('#section5').removeClass('on');
            $('#section6').removeClass('on');
            $('#section7').removeClass('on');
            $('#section8').removeClass('on');
            $('#section9').removeClass('on');
            $('#section10').removeClass('on');
            $('#section11').removeClass('on');
            $('#section12').removeClass('on');
            $('#section13').removeClass('on');
            $('#section14').removeClass('on');
        }

        // scrollTop값이 600픽셀 이동하면 console띄우기
        // console.log('현재 scrollTop값 ' + $(window).scrollTop());
        if ($(window).scrollTop() >= sec2ScrTop - 500) { //섹션보다 600픽셀이전에 실행!
            // console.log('#section2 패럴럭스 구현!');

            // #section2에 on클래스 추가
            $('#section2').addClass('on');
        }
        if ($(window).scrollTop() >= sec3ScrTop - 500) {
            $('#section3').addClass('on');
        }
        if ($(window).scrollTop() >= sec4ScrTop - 500) {
            $('#section4').addClass('on');
        }
        if ($(window).scrollTop() >= sec5ScrTop - 500) {
            $('#section5').addClass('on');
        }
        if ($(window).scrollTop() >= sec6ScrTop - 500) {
            $('#section6').addClass('on');
        }
        if ($(window).scrollTop() >= sec7ScrTop - 500) {
            $('#section7').addClass('on');
        }
        if ($(window).scrollTop() >= sec8ScrTop - 500) {
            $('#section8').addClass('on');
        }
        if ($(window).scrollTop() >= sec9ScrTop - 500) {
            $('#section9').addClass('on');
        }
        if ($(window).scrollTop() >= sec10ScrTop - 500) {
            $('#section10').addClass('on');
        }
        if ($(window).scrollTop() >= sec11ScrTop - 500) {
            $('#section11').addClass('on');
        }
        if ($(window).scrollTop() >= sec12ScrTop - 500) {
            $('#section12').addClass('on');
        }
        if ($(window).scrollTop() >= sec13ScrTop - 500) {
            $('#section13').addClass('on');
        }
        if ($(window).scrollTop() >= sec14ScrTop - 500) {
            $('#section14').addClass('on');
        }

    });

    // 3. section8
    // 갤러리버튼을 클릭하면 on을 추가
    // 버튼 클릭시 화면 새로고침이 발생함 - a링크 속성때매 - event로 막아주기
    const galleryBtn = $('#section8 .gallery-btn');
    let btnIndex = 0;
    /*
    galleryBtn.click(function(e){
        e.preventDefault();
        galleryBtn.removeClass('on');
        $(this).addClass('on');
    });
    */

    // 버튼 여러개를 배열처리해서 클릭이벤트
    // each() - 메서드
    /*
    galleryBtn.eq(0).click(function(){
        btn1Fn();
    });
    galleryBtn.eq(1).click(function(){
        btn2Fn();
    });
    galleryBtn.eq(2).click(function(){
        btn3Fn();
    });
    galleryBtn.eq(3).click(function(){
        btn4Fn();
    });
    galleryBtn.eq(4).click(function(){
        btn5Fn();
    });
    */
    galleryBtn.each(function(index){ //인덱스값을 반환
        // console.log('index : ' + index);
        $(this).click(function(event){
            event.preventDefault();

            btnIndex = index;
            responseGallery();

            galleryBtn.removeClass('on');
            $(this).addClass('on');
        });
    });

    // 반응형
    // 이미지1,2 너비:800 / 이미지1높이:797 / 이미지2높이:1200
    const imgWidth = 800; //원래 이미지값(이미지원본파일)
    const imgHeight1 = 797;
    const imgHeight2 = 1200;
    const heightRate1 = imgHeight1/imgWidth; //높이비율
    const heightRate2 = imgHeight2/imgWidth;
    const gallery = $('.gallery');

    // 반응형에 따라 줄수, 칸수, 이미지너비와 높이, 전체박스 높이가 바뀜
    let winW = $(window).innerWidth(); //창너비
    let galleryWidth = 1180;
    let rows = 4; //전체 줄 수
    let cols = 3; //전체 칸 수
    let imgW = $('.gallery img').innerWidth(); 
    let imgH1 = imgW*heightRate1; //이미지높이1 - 다음줄의 top값을 결정
    let imgH2 = imgW*heightRate2;
    let ulH = ((imgH1 * 2) + (imgH2 * 2)) - (40 * (rows - 1)); //ul박스(이미지 전체 박스) 높이 구하기

    /* 이미지높이1 = 높이1비율*이미지너비
    console.log('heightRate1', heightRate1*imgW); 
    console.log('heightRate2', heightRate2*imgW);
    */

    // 버튼별 셔플갤러리 포지션
    // ALL

    $(window).resize(function(){
        responseGallery();
    });
    
    function responseGallery() { //function이 달린함수는 위치상관없이 어디든 호출가능(위에다가 호출함)

        winW = $(window).innerWidth();

        // 화면너비가 1170 초과인경우 3칸
        // 600 초과인경우 2칸
        // 600 이하인경우 1칸
        if (winW > 1170) {
            cols = 3;
        } else if (winW > 600) {
            cols = 2;
        } else {
            cols = 1;
        }

        // 이미지너비 반응형
        if (winW <= 1170) {
            galleryWidth = winW + 40;
        } else {
            galleryWidth = 1180;
        }
        imgW = (galleryWidth / cols) - 40;
        
        imgH1 = imgW*heightRate1;
        imgH2 = imgW*heightRate2;
        


        // 이미지 너비
        $('.gallery img').css({width: imgW});
        $('.list').removeClass('on');
        if (btnIndex === 0) {

            // 줌 효과
            $('.list').removeClass('on');

            if (cols === 3) {
                $('.list1').stop().show().animate({top: (imgH1 + 40) * 0, left: 0}, 300); //ctrl shift h => 한번에 ,300넣기(replace all)
                $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                $('.list3').stop().show().animate({top: (imgH1 + 40) * 0, left: (imgW * 2) + (40 * 2)}, 300);

                $('.list4').stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list5').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                $('.list6').stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                $('.list7').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list8').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                $('.list9').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                $('.list10').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list11').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40 + imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40 + imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                rows = 4; 
                ulH = ((imgH1 * 2) + (imgH2 * 2)) + (40 * (rows - 1));
            } else if (cols === 2) {
                $('.list1').stop().show().animate({top: (imgH1 + 40) * 0, left: 0}, 300); 
                $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list3').stop().show().animate({top: (imgH1 + 40) * 1, left: (imgW * 0) + (40 * 0)}, 300);
                $('.list4').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list6').stop().show().animate({top: (imgH1 + 40) * 2, left: (imgW * 0) + (40 * 0)}, 300);
                $('.list5').stop().show().animate({top: (imgH2 + 40) * 2, left: (imgW * 1) + (40 * 1)}, 300);

                $('.list7').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list8').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list9').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list10').stop().show().animate({top: ((imgH2 + 40) * 3) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list12').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list11').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);

                rows = 6; 
                ulH = ((imgH1 * 2) + (imgH2 * 4)) + (40 * (rows - 1));
            } else {
                $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300); 
                $('.list2').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);             
                $('.list3').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: 0}, 300);
                $('.list4').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: 0}, 300);
                $('.list6').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 2), left: 0}, 300);
                $('.list5').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 3), left: 0}, 300);
                $('.list7').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);
                $('.list8').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 3), left: 0}, 300);               
                $('.list9').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 4), left: 0}, 300);
                $('.list10').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 4), left: 0}, 300);                
                $('.list12').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 5), left: 0}, 300);
                $('.list11').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 6), left: 0}, 300);

                rows = 12; 
                ulH = ((imgH1 * 6) + (imgH2 * 6)) + (40 * (rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height: ulH}, 300);

        } else if (btnIndex === 1) {
            // 줌 효과
            // 줌 효과
            $('.list').removeClass('on');


            $('.list1').hide(); //hide가 등장했기때문에 모든 버튼에 show를 해줘야함(btn1fn도)
            $('.list3').hide();
            $('.list7').hide();
        
            switch(cols) {
                case 3:
                    $('.list2').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list6').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                
                    $('.list5').stop().show().animate({top: (imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list8').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list9').stop().show().animate({top: (imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list10').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: (imgH2 + 40 + imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list12').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    rows = 3; 
                    ulH = (imgH1 * 1) +(imgH2 * 2) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list5').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 0) + (40 * 0)}, 300);           
                    $('.list6').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list8').stop().show().animate({top: ((imgH2 + 40) * 1) + ((imgH1 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list9').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list10').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list12').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 2), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 5; 
                    ulH = (imgH1 * 2) + (imgH2 * 3) + (40 * (rows - 1));
                    break;
                default:
                    $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: 0}, 300);
                    $('.list4').stop().show().animate({top: (imgH2 + 40) * 1, left: 0}, 300);                   
                    $('.list6').stop().show().animate({top: (imgH2 + 40) * 2, left: 0}, 300);           
                    $('.list5').stop().show().animate({top: (imgH2 + 40) * 3, left: 0}, 300);                    
                    $('.list8').stop().show().animate({top: ((imgH2 + 40) * 3) + ((imgH1 + 40) * 1), left: 0}, 300);
                    $('.list9').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 1), left: 0}, 300);                    
                    $('.list10').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 2), left: 0}, 300);
                    $('.list11').stop().show().animate({top: ((imgH2 + 40) * 5) + ((imgH1 + 40) * 2), left: 0}, 300);                 
                    $('.list12').stop().show().animate({top: ((imgH2 + 40) * 5) + ((imgH1 + 40) * 3), left: 0}, 300);

                    rows = 9; 
                    ulH = (imgH1 * 3) + (imgH2 * 6) + (40 * (rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height: ulH}, 300);

        } else if (btnIndex === 2) {
            // 줌 효과
            $('.list').removeClass('on');

            $('.list1').hide();
            $('.list4').hide();
            $('.list5').hide();
            $('.list10').hide();
            $('.list11').hide();

            switch(cols) {
                case 3:
                    $('.list2').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list6').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                    
                    $('.list8').stop().show().animate({top: (imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list7').stop().show().animate({top: (imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list9').stop().show().animate({top: (imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 3; 
                    ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list2').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list6').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 2), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list9').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);

                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 4; 
                    ulH = (imgH1 * 2) + (imgH2 * 2) + (40 * (rows - 1));
                    break;
                default:
                    $('.list2').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list6').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 2), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list9').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);

                    rows = 7; 
                    ulH = (imgH1 * 3) + (imgH2 * 4) + (40 * (rows - 1));
            }
        
            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height: ulH}, 300);
        } else if (btnIndex === 3) {
            // 줌 효과
            $('.list').removeClass('on');

            $('.list2').hide();
            $('.list4').hide();
            $('.list6').hide();
            $('.list7').hide();
            $('.list9').hide();
        
            switch(cols) {
                case 3:
                    $('.list1').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list5').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                    
                    $('.list8').stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list10').stop().show().animate({top: (imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list12').stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list11').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);

                    rows = 3; 
                    ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                   
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);     
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);

                    rows = 4; 
                    ulH = ((imgH1 * 3) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                default:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);       
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: 0}, 300);     
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 0), left: 0}, 300);                   
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: 0}, 300);
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 2), left: 0}, 300);                
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);

                    rows = 7; 
                    ulH = ((imgH1 * 4) + (imgH2 * 3)) + (40 * (rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height: ulH}, 300);
        } else if (btnIndex === 4) {
            // 줌 효과
            $('.list').removeClass('on');

            $('.list2').hide();
            $('.list3').hide();
            $('.list6').hide();
            $('.list9').hide();
        
            switch(cols) {
                case 3:
                    $('.list1') .stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4') .stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list5') .stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                    
                    $('.list7') .stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list10').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list8') .stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    rows = 3; 
                    ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 2), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 4; 
                    ulH = ((imgH1 * 2) + (imgH2 * 2)) + (40 * (rows - 1));
                    break;
                default:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300);
                    $('.list4').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);                   
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: 0}, 300);
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: 0}, 300);                 
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: 0}, 300);
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 2), left: 0}, 300);                
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 4), left: 0}, 300);

                    rows = 8; 
                    ulH = ((imgH1 * 4) + (imgH2 * 4)) + (40 * (rows - 1));
            }

            // 줌인 효과
            $('.list').addClass('on');
            // ul 높이 설정
            $('.gallery ul').stop().animate({height: ulH}, 300);
        }

    }
    responseGallery(); //초기실행

    // **
    // 반응형 셔플겔러리

    // 반응형 이벤트
    /*
    $(window).resize(function(){ //창크기가 1픽셀이라도 resize되면
        resizeGallery();
    });

    function resizeGallery() {
        let cols = 3; //갤러리 이미지 개수(처음에 섹션8 이미지가 3개임), 즉 칸수
        let winW = $(window).innerWidth(); //창 넓이
        let gallery = $('.gallery'); 
        let galBox = $('.gallery ul').innerWidth(); //겔러리박스 너비
        
        // 겔러리박스
        if (winW > 1180) {
            gallery.css({width: 1180});
        } else {
            gallery.css({width: winW}); //창너비로 변경 - max-width개념
        }

        if (winW >= 1180) {
            cols = 3;
        } else if (winW >= 600) {
            cols = 2;
        } else {
            cols = 1;
        }

        let imgW = galBox / cols - 40; //이미지너비 = 353.3333333333333
        let imgH1 = 0.996226415 * imgW; //이미지높이1 = 높이비율1*너비
        let imgH2 = 1.499954717 * imgW;

        // console.log('winW' + winW);
        // console.log('cols' + cols);
        // console.log('galBox ' + galBox);
        // console.log('이미지 너비 ' + galBox/3); // 393.33..
        // console.log('이미지 너비 - 여백 ' + ((galBox/3) - 40)); //353.33..
        console.log('cols ' + cols);
        console.log('imgW ' + imgW);
        console.log('imgH1 ' + imgH1);
        console.log('imgH2 ' + imgH2);
    }
    */

})(jQuery, window);