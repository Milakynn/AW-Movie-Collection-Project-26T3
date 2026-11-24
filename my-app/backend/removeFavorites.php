<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli(
    "localhost",
    "root",
    "",
    "cinecollect"
);

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$favorite_id = $data["favorite_id"];

$sql = "
DELETE FROM favorites
WHERE favorite_id = '$favorite_id'
";

if($conn->query($sql)) {

    echo json_encode([
        "message" => "Removed from favorites"
    ]);

} else {

    echo json_encode([
        "message" => "Failed"
    ]);

}

$conn->close();

?>