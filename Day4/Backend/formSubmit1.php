<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "agrofresh");

if (mysqli_connect_error()) {
    echo mysqli_connect_error();
    exit();
} else {
    $uname = $_POST['uname'];
    $address = $_POST['address'];
    $emailid = $_POST['emailid'];
    $bill = $_POST['bill'];
    $payment = $_POST['payment'];

    // Retrieve product items from the form
    $productItems = [];
    $index = 0;
    while (isset($_POST["productItem{$index}"])) {
        $productItem = json_decode($_POST["productItem{$index}"], true);
        $productName = $productItem['name'];

        // Add product name to the product items array
        $productItems[] = $productName;

        $index++;
    }

    // Convert product names array to a comma-separated string
    $productNamesString = implode(', ', $productItems);

    $sql = "INSERT INTO checkout (uname, address, emailid, bill, payment, productNames) 
            VALUES ('$uname', '$address', '$emailid', '$bill', '$payment', '$productNamesString');";

    $res = mysqli_query($conn, $sql);

    if ($res) {
        echo "Success!";
    } else {
        echo "Error!";
    }

    $conn->close();
}
?>
