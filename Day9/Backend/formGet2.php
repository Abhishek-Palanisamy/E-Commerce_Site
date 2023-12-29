<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "agrofresh");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $uname = $_GET['uname'];

    $sql = "SELECT id,bill,totalquantity,payment FROM checkout WHERE uname = '$uname';";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        $userData = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($userData);
    } else {
        echo "Error fetching user data!";
    }

    $conn->close();
}
?>
