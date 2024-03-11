<?php
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);

$to = "liza.gold.omsk@gmail.com";

$subject = "Запись на прием"; 
$message = "<p> Имя: ".$name."<br>Номер телефона: ".$phone."</p>";
 
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= "From: <noreply@mail.com>\r\n";
	
	if(mail($to, $subject, $message, $headers)) {
		 echo 'Форма успешно отправлена';
	} else {
		 echo 'Произошла ошибка при отправке формы';
}