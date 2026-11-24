<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$user_id = $conn->real_escape_string(
    $data["user_id"]
);

$username = $conn->real_escape_string(
    $data["username"]
);

$email = $conn->real_escape_string(
    $data["email"]
);

$password = $conn->real_escape_string(
    $data["password"]
);

if(!empty($password)){

    $sql = "
    UPDATE users
    SET
        username='$username',
        email='$email',
        password='$password'
    WHERE user_id='$user_id'
    ";

}else{

    $sql = "
    UPDATE users
    SET
        username='$username',
        email='$email'
    WHERE user_id='$user_id'
    ";

}

if($conn->query($sql)){

    echo json_encode([
        "success" => true,
        "message" => "Profile updated"
    ]);

}else{

    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);

}

$conn->close();

?>