(($, window, document)=>{
    class Photography {
        init(){
            this.header();
            this.paralax();
            this.modal();
            this.section15();
        }
        header(){
            let sec1ScrTop = $('#section1').offset().top;
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

            let scrNew = 0;
            let scrOld = scrNew;

            $(window).scroll(function(){
                // 헤더 스크롤
                scrNew = $(window).scrollTop();

                if ($(window).scrollTop() === 0) { 
                    $('#header').removeClass('up');
                    $('#header').removeClass('down');
                } else {
                    if ((scrNew - scrOld) > 0) {
                        $('#header').addClass('down');
                        $('#header').removeClass('up');
                    }
                    if ((scrNew - scrOld) < 0) {
                        $('#header').removeClass('down');
                        $('#header').addClass('up');
                    }
                }

                scrOld = scrNew;
            });
        }
        paralax(){
            let sec1ScrTop = $('#section1').offset().top;
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

            $(window).scroll(function(){
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

                if ($(window).scrollTop() >= sec2ScrTop - 500) { 
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
        }
        madal(){
            
            let cnt = 13;
            let imgSrc = '';

            $('#section8 .img-box').on({
                click(e){
                    e.preventDefault();

                    imgSrc = $('#galleryModal').find('img').attr('src');

                    $('.gallery-modal-img').attr('src', imgSrc);
                    $('html').addClass('on');

                    cnt = $(this).find('img').data('num');
                }
            });

            function modalImage(){
                imgSrc = `./img/photography-img${cnt}.jpg`;

                $('.gallery-modal-img').stop().fadeOut(0).fadeIn(600).attr('src', imgSrc);
            }

        }
        section15(){
            $('.send-btn').on({
                click(e){
                    e.preventDefault();
                    const name = $('#userName').val();
                    const email = $('#userEmail').val();
                    const message = $('#userMessage').val();
                    const toDay = `${new Date().getFullYear()+1}-${new Date().getMonth()}-${new Date().getDate()}`;
                    const formData = {
                        이름: name,
                        이메일: email,
                        메시지: message,
                        날짜: toDay
                    };
                    $.ajax({
                        url: './form_mail_ajax_insert.php',
                        type: 'POST',
                        data: formData,
                        success(result){
                            console.log(`AJAX성공 ${result}`);
                        },
                        error(error){
                            console.log(`AJAX실패 ${error}`);
                        }
                    }); 
                }
            });
        }
    }
    const newPhotography = new Photography();
    newPhotography.init();
})(jQuery, window, document);