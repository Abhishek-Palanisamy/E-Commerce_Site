<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

$conn = mysqli_connect("localhost", "root", "", "agrofresh");
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Check if the 'uname' parameter is set in the POST request
    if (isset($_POST['save'])) {
        $uname = $_POST['uname'];
        $pwd = $_POST['pwd'];
        // You can include the password here if needed
        // $password = $_POST['password'];

        // Perform your logic to check if the username exists
        // For example, querying your database

        if (mysqli_connect_error()) {
            echo json_encode(["exists" => false, "message" => "Database connection error"]);
            exit();
        }

        $sql = "SELECT Count(*) FROM register WHERE uname = '$uname' and pwd='$pwd'";
        $result = mysqli_query($conn, $sql);

        if ( mysqli_num_rows($result) > 0) {
            // Username exists
            echo json_encode(["exists" => true, "message" => "Username exists"]);
        } else {
            // Username does not exist
            echo json_encode(["exists" => false, "message" => "Username does not exist"]);
        }

        $conn->close();
    } else {
        // 'uname' parameter is not set in the POST request
        echo json_encode(["exists" => false, "message" => "Username parameter is missing"]);
    }
} else {
    // Invalid request method
    echo json_encode(["exists" => false, "message" => "Invalid request method"]);
}
?>
