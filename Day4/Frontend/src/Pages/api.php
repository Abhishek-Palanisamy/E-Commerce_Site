<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "agrofresh";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $uname = $data['uname'];
    $mobileno = $data['mobileno'];
    $emailid = $data['emailid'];
    $pwd = $data['pwd'];
    // Add more fields as needed

    $sql = "INSERT INTO register (uname, mobileno, emailid, pwd) VALUES ('$uname', '$mobileno', '$emailid', '$pwd')";
    // Add more columns as needed

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Values inserted successfully']);
    } else {
        echo json_encode(['error' => 'Error inserting values: ' . $conn->error]);
    }
}

$conn->close();
?>
