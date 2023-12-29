<?php 
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost","root","","agrofresh");

if(mysqli_connect_error()){
echo mysqli_connect_error();
exit();
}
else{
$uname = $_POST['uname'];
$mobileno = $_POST['mobileno'];
$emailid = $_POST['emailid'];
$pwd = $_POST['pwd'];

$sql = "INSERT INTO register(uname,mobileno,emailid,pwd) VALUES('$uname','$mobileno','$emailid','$pwd');";
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