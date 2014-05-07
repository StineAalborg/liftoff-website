<?php
// Sanitize input without database-connection (real_escape).
function cleanInput($input) {

  $search = array(
      '@<script[^>]*?>.*?</script>@si',   // Strip out javascript
      '@<[\/\!]*?[^<>]*?>@si',            // Strip out HTML tags
      '@<style[^>]*?>.*?</style>@siU',    // Strip style tags properly
      '@<![\s\S]*?--[ \t\n\r]*>@'         // Strip multi-line comments
  );

  $output = preg_replace($search, '', $input);
  return $output;
}

// Input
$name = cleanInput($_POST['name']);
$email = cleanInput($_POST['email']);
$phone = cleanInput($_POST['phone']);
$message = cleanInput($_POST['message']);

// Check if required fields are provided.
if(!empty($name) && !empty($email) && !empty($message)) {


  // Format body-message.
  $body = 'Navn: ' . $name . '<br/>';
  $body .= 'E-mail: ' . $email .'<br/>';
  if (!empty($phone)) {
    // Define phone.
    $body .= 'Telefon: ' . $phone . '<br/>';
  } else {
    $body .= 'Telefon: ikke angivet. <br/>';
  }

  $body .= '<br/><u>Besked:</u><br/>';
  $body .= $message;
  $body = wordwrap($body, 75, '<br/>');

  // Require PHPmailer
  require 'phpmailer/PHPMailerAutoload.php';
  // Create a new PHPMailer instance
  $mail = new PHPMailer();
  // Set who the message is to be sent from
  $mail->setFrom($email, $name);
  // Set who the message is to be sent to
  $mail->addAddress('andre@reload.dk', 'Liftoff Cph');
  // Set the subject line
  $mail->Subject = 'Liftoff Cph: ' .$name;
  // Message
  $mail->msgHTML($body);

  // Get the host-name to redirect
  $base_url = 'HTTP://'. $_SERVER['HTTP_HOST'];
  // Extends $base_url and adds URI (but leaves out index.php):
  $base_url .= str_replace( basename($_SERVER['SCRIPT_NAME']), '', $_SERVER['SCRIPT_NAME'] );
  // Trim the right side of '/' for safety.
  $base_url = rtrim($base_url, '/');

  // Send the message, and redirect.
  if (!$mail->send()) {
    // Error
    header('location: ' . $base_url . '#error');
  } else {
    // Send
    header('location: ' . $base_url . '#success');
  }
}
