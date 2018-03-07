<?php
  if(isset($_POST['username'])) {
    function sendEmail($to, $from, $fromName, $fromPlace, $body) {    
      $subjet = 'Hi Vikas';
      $headers = "From:".$from."" . "\r\n" .
                 "Reply-To:".$from"" . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();
      return mail($to, $subjet, $body, $headers);
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

    if(sendEmail('vikasfreelancer1913@gmail.com', $email, $name, $place, $emailBody)) {
      echo "Mail Send";
    }else {
      echo "Mail failed";
    }
  }    
?>