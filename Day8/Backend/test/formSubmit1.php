<?php 
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost","root","","agrofresh");

if(mysqli_connect_error()){
echo mysqli_connect_error();
exit();
}
else{
$uname = $_POST['uname'];
$address = $_POST['address'];
$emailid = $_POST['emailid'];
$bill = $_POST['bill'];
$totalquantity = $_POST['totalquantity'];
$payment = $_POST['payment'];

$sql = "INSERT INTO checkout(uname,address,emailid,bill,totalquantity,payment) VALUES('$uname','$address','$emailid','$bill','$totalquantity','$payment');";
$res = mysqli_query($conn, $sql);

if($res){
echo "Success!";
}
else{
echo "Error!";
}
$conn->close();
}
?>