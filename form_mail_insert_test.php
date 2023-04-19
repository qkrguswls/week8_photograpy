<?

    // 1. 인가받을 준비
    $DB_SERVER = "localhost";
    $DB_USER_NAME = "qkrguswls309"; 
    $DB_USER_PW = "guswls309^^";
    $DB_NAME = "qkrguswls309";

    // 2. DB(mysql) 접속
    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME); //접속 함수
    mysqli_set_charset($conn, 'utf8'); //문자세팅

    // 3. DB(폼메일 테이블 - form_mail_table)에 데이터 insert into로 저장하기
    // 더미데이터
    $user_name = "이순신";
    $user_email = "abc@naver.com";
    $user_message = "축하드립니다. 승전을.";
    $user_date = "2023-04-09";

    // 4. SQL명령문(저장할때) - INSERT INTO 테이블명(필드1, 필드2,..) VALUES(값1, 값2..); - 값은 반드시 ''안에 적어주기
    $sql = "INSERT INTO form_mail_table(user_name, user_email, user_message, user_date) VALUES('$user_name', '$user_email', '$user_message', '$user_date')";
    // 실행
    $result = mysqli_query($conn, $sql); //권한정보인 $conn 필수

    // 5. 저장확인
    if ($result == true) {
        echo "데이터저장 성공! 축하합니다.";
    } else {
        echo "데이터저장 실패";
    }

    // qkrguswls309.dothome.co.kr/photograpy_8/form_mail_insert_test.php

?>