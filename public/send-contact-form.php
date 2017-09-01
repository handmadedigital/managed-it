<?php
    $to = "carlos@handmade-digital.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";
    $subject = "Hey Jim, you have a message sent from your website";
    $fields = array();
    $fields{"name"} = "name";
    $fields{"email"} = "email";
    $fields{"phone"} = "phone";
    $fields{"msg"} = "msg";
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }
    $send = mail($to, $subject, $body, $headers);
?>
