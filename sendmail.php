if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["name"];
        $email = $_POST["email"];

        $to = "blossom@cock.lu";
        $subject = "New Contact Form Submission";
        $body = "Email: {$email}\nMessage: {$message}";
        $headers = "From: {$email}";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}