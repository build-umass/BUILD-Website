<?php

$firstname = $lastname = $email = $company = $message = "";


    if (empty($_POST["fname"])) {
        echo "First Name is required";
    }

    if (empty($_POST["lname"])) {
        echo "Last Name is required";
    }

    if (empty($_POST["email"])) {
        echo "Email is required";
    }

    $firstname = $_POST ['fname'];
    $lastname = $_POST ['lname'];
    $email = $_POST ['email'];
    $company = $_POST['company'];
    $message = $_POST ['message'];

    $to = "nilay18sadavarte@gmail.com";
    $subject = "New Message from your Website";

    mail ($to, $subject, $message, "From: " . $firstname . $lastname, "Their E-Mail: " . $email);

    echo "Your Message has been sent!";

?>