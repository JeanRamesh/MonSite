<?php
if($_POST){
  $name = $_POST['n'];
  $firstname = $_POST['fn'];
  $email = $_POST['m'];
  $message = $_POST['msg'];

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";

  $subject="Contacte moi";
  $destinataire="jean.petrus.ramesh@gmail.com";
  $body="$message";

  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'your mail is sent';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Something went wrong';
  }

  echo json_encode($response);
}
?>