<?

    // 1. 인가받을 준비
    $DB_SERVER = "localhost";
    $DB_USER_NAME = "qkrguswls309"; 
    $DB_USER_PW = "guswls309^^";
    $DB_NAME = "qkrguswls309";

    // 2. DB(mysql) 접속
    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME); //접속 함수
    mysqli_set_charset($conn, 'utf8'); //문자세팅

    if ($conn == true) { //자바스크립트 말고는 ==두개써야함
        echo "DB 접속을 축하합니다.";
    } else {
        echo ("DB 접속에 실패했습니다."); //괄호써도되고 안써도됨
    }

    // qkrguswls309.dothome.co.kr/photograpy_8/form_mail_test.php

?>