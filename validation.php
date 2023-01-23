<?php
include_once 'sql_conn.php';

$fullname= $_POST['fullname'];
$email= $_POST['email'];
$phone_number=$_POST['number'];

$email_subject="Contact";
$msg= "hello";
$email_header = "you have an email from:".$name." with number:".$phone_number;
$email_to = "c.agoratzis@gmail.com";

mail($email_to,$email_subject,$msg);

$sql = "INSERT INTO person(fullname,email,phone_number) VALUES('$fullname','$email','$phone_number')";
$conn->query($sql);
header("Location: index.html?contact=success#Contact");
$conn->close();
?>