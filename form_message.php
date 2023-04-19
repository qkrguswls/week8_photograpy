<?
    // - 아파치서버로 데이터 보내는 방법
    // (아파치서버 깔려있으니까) c드라이브->autoset10->public_html에 폴더 전체를 복붙하고
    // 0304_브란도_포토그라피_CONTACT_FOOT_자바스크립트_제이쿼리 (이거 복붙)
    // => localhost/0304_브란도_포토그라피_CONTACT_FOOT_자바스크립트_제이쿼리 (이렇게 쳐서 form태그 전송해보기)
    // ctrl shift r => 서버사이드는 f5로는 정보가 남아있는 경우가 있음
    // php는 서버사이드 스크립트 언어!

    $user_name = $_POST['이름']; //폼데이터에 있는 네임을 가져옴(ajax)
    $user_email = $_POST['이메일'];
    $user_message = $_POST['메시지'];

    // echo "<h1>".$user_name."</h1>"; //+대신 php는 .으로 연결해줌
    // echo "<h1>".$user_email."</h1>";
    // echo "<h1>".$user_message."</h1>";

    // 폼데이터를 데이터베이스(DB)에 저장하기
    // 0. 테스트 서버파일 생성 - form_mail_test.php
    // 1. DB 사용권한 인증(인가)
    // 2. DB 접속(Connection) -> 접속 확인(알드라이브로!) - qkrguswls309.dothome.co.kr/photograpy_8/form_mail_test.php
    // 3. 더미데이터(가상 데이터, 임의 데이터, 의미없는)를 DB에 저장하기 -> 테스트
    // 4. 폼전송해서 AJAX구현 -> DB에 저장

    // 응답 Response
    echo $user_name."님 안녕하세요.";
?>