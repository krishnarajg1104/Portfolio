<?php
// Establish database connection
$host = "localhost";
$username = "your_username";
$password = "your_password";
$database = "your_database";

$conn = mysqli_connect($host, $username, $password, $database);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Store form data in the database
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

if (mysqli_query($conn, $sql)) {
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

// Close database connection
mysqli_close($conn);
?>
