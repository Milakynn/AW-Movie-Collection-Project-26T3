<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$movie_id = $data["movie_id"];

$conn->query("
DELETE FROM favorites
WHERE movie_id = '$movie_id'
");

$conn->query("
DELETE FROM reviews
WHERE movie_id = '$movie_id'
");

$conn->query("
DELETE FROM movie_cast
WHERE movie_id = '$movie_id'
");

$sql = "
DELETE FROM movies
WHERE movie_id = '$movie_id'
";

if($conn->query($sql)){

    echo json_encode([
        "success" => true
    ]);

}else{

    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);

}

$conn->close();

?>