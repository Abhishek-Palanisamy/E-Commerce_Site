<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "agrofresh");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $uname = $_POST['uname'];
    $emailid = $_POST['emailid'];
    $mobileno = $_POST['mobileno'];
    $address = $_POST['address'];


    // Assuming you have a session or some other means to identify the user
    $uname = $_SESSION['uname']; // Adjust this according to your authentication mechanism

    $sql = "UPDATE register SET uname = '$uname', emailid = '$emailid', mobileno = '$mobileno', address = '$address' WHERE uname = '$uname';";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo "User data updated successfully!";
    } else {
        echo "Error updating user data!";
    }

    $conn->close();
}
?>
