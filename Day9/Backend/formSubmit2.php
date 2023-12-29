<?php 
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost","root","","agrofresh");

if(mysqli_connect_error()){
echo mysqli_connect_error();
exit();
}
else{
$firstname = $_POST['firstname'];
$subject = $_POST['subject'];
$emailid = $_POST['emailid'];
$mobile = $_POST['mobile'];
$query = $_POST['query'];

$sql = "INSERT INTO contactus (firstname,subject,emailid,mobile,query) VALUES('$firstname','$subject','$emailid','$mobile','$query');";
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