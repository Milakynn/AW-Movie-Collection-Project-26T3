<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db.php");

$movie_id = $_GET["movie_id"];

$sql = "SELECT review_text, review_rating
        FROM reviews
        WHERE movie_id = $movie_id";

$result = $conn->query($sql);

$reviews = array();

while ($row = $result->fetch_assoc()) {
    $reviews[] = $row;
}

echo json_encode($reviews);

$conn->close();

?>