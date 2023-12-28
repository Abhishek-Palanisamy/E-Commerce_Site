<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

$conn = new mysqli("localhost", "root", "", "agrofresh");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (mysqli_connect_error()) {
        echo json_encode(["success" => false, "message" => "Database connection error"]);
        exit();
    } else {
        if (isset($_POST['uname']) && isset($_POST['pwd'])) {
            $uname = $_POST['uname'];
            $pwd = $_POST['pwd'];

            $sql = "SELECT * FROM register WHERE uname = '$uname' and pwd='$pwd'";
            $result = mysqli_query($conn, $sql);

            if (mysqli_num_rows($result) > 0) {
                echo json_encode(["success" => true, "message" => "Account exists"]);
            } else {
                echo json_encode(["success" => false, "message" => "Account does not exist. Check Credentials"]);
            }

            $conn->close();
        } else {
            echo json_encode(["success" => false, "message" => "Username parameter is missing"]);
        }
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
