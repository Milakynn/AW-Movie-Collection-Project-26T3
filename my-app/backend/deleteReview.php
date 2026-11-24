<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$review_id = $data["review_id"];

$sql = "
DELETE FROM reviews
WHERE review_id = '$review_id'
";

if($conn->query($sql)){

    echo json_encode([
        "success" => true,
        "message" => "Review deleted"
    ]);

}else{

    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);

}

$conn->close();

?>