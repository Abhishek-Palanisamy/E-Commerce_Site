//http://localhost/devtest/reactjs/contacts.php
<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "agrofresh"; 
$id = '';

$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];


if (!$con) {
die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
case 'GET':
    $uname = $_GET['uname'];

    $sql = "SELECT * FROM register WHERE uname = '$uname';";
    $result = mysqli_query($conn, $sql);

case 'POST':
if(isset($_GET["id"])){
$id = $_GET['id']; 
$uname = $_POST["uname"];
$mobileno = $_POST["mobileno"];
$emailid = $_POST["emailid"];
$address = $_POST["address"];


$sql = "UPDATE register SET uname='$uname', mobileno='$mobileno', emailid='$emailid', address='$address' WHERE id = $id"; 
}
break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
http_response_code(404);
die(mysqli_error($con));
}

if ($method == 'GET') {
if (!$id) echo '[';
for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
if (!$id) echo ']';
} elseif ($method == 'POST') {
echo json_encode($result);
} else {
echo mysqli_affected_rows($con);
}

$con->close();