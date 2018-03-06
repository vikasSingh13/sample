<?php
  if(isset($_POST['username'])) {
    require 'phpmailer/PHPMailerAutoload.php';

    function sendEmail($to, $from, $fromName, $fromPlace, $body) {
      $mail = new PHPMailer();
      $mail->SMTPDebug = 4;                         
      $mail->isSMTP();                                     
      $mail->Host = "smtp.sendgrid.net";
      $mail->Port = 465; // or 587 
      $mail->SMTPAuth = true;                   
      $mail->Username   = "apikey"; 
      $mail->Password   = "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";
      $mail->SMTPSecure = 'ssl';                          
      $mail->setFrom($from, $fromName);
      $mail->To = $to;
      $mail->AddAddress($to);
      $mail->Subject = 'Hi Vikas';
      $mail->Body = $body;
      $mail->isHTML(true);

      return $mail->send();
    }

    $name = $_POST['username'];
    $email = $_POST['email'];
    $place = $_POST['place'];
    $body = $_POST['body'];

    $emailBody = "<table>
                      <tr><td>Name</td><td>".$name."</td></tr>
                      <tr><td>Email</td><td>".$email."</td></tr>
                      <tr><td>Place</td><td>".$place."</td></tr>
                      <tr><td>Message</td><td>".$body."</td></tr>
                    </table>";

    if(sendEmail('vicky13vikas@gmail.com', $email, $name, $place, $emailBody)) {
      echo "Mail Send";
    }else {
      echo "Mail failed";
    }
  }    
?>