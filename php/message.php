<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $subject = "Circle Marketing: Form";
    $message = $_POST['message'];

    $message .= "\n\n";
    $message .= "Name: " . $name . "\n";
    $message .= "Phone: " . $phone . "\n";
    $message .= "Email: " . $email;

    $to = 'circlewichita@circlemarketingwichita.com';

    $headers = "From: $name <$email>". "\r\n";
    $headers .= "Reply-To: $name <$email>". "\r\n";
    $headers .= 'MIME-Version: 1.0'. "\r\n";
    $headers .= "Content-Type: text/plain". "\r\n";
    $headers .= "Content-Transfer-Encoding: 7bit". "\r\n";
//, $headers
    if (mail($to, $subject, $message, $headers)) {
        //header("Location: http://circlemarketingwichita.com/contact.html");
        echo 1;
    } else {
        echo 0;
    }

?>
