<?php
header("Access-Control-Allow-Origin: *");

// Assuming the database name is "user_db" and the table name is "users"
$conn = mysqli_connect("localhost", "root", "", "agrofresh");
if (!$conn) {
  die("Connection error: " . mysqli_connect_error());
}

if (isset($_POST["uname"]) && isset($_POST["pwd"])) {
  $uname = $_POST["uname"];
  $pwd = $_POST["pwd"];
  // Sanitize the input to prevent SQL injection
  $username = mysqli_real_escape_string($conn, $uname);
  $password = mysqli_real_escape_string($conn, $pwd);
  // Query the database to get the hashed password for the username
  $sql = "SELECT pwd FROM register WHERE uname = '$uname'";
  $result = mysqli_query($conn, $sql);
  if ($result) {
    // Check if the username exists in the database
    if (mysqli_num_rows($result) > 0) {
      // Get the hashed password from the database
      $row = mysqli_fetch_assoc($result);
      $hash = $row["password"];
      // Verify the password using password_verify
      if (password_verify($password, $hash)) {
        // Return "success" as a JSON object if the password matches
        $response = array("status" => "success");
      } else {
        // Return an error message as a JSON object if the password does not match
        $response = array("status" => "Invalid username or password");
      }
    } else {
      // Return an error message as a JSON object if the username does not exist
      $response = array("status" => "Invalid username or password");
    }
  } else {
    // Return a query error as a JSON object if the query fails
    $response = array("status" => "Query error: " . mysqli_error($conn));
  }
} else {
  // Return a missing input error as a JSON object if the username or password is not provided
  $response = array("status" => "No username or password provided");
}

// Set the Content-Type header to application/json
header("Content-Type: application/json");
// Send the response as a JSON object
echo json_encode($response);

mysqli_close($conn);
?>
