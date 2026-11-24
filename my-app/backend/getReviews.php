<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db.php");

$movie_id = $_GET["movie_id"];

$sql = "SELECT
    reviews.review_text,
    reviews.review_rating,
    users.username
FROM reviews

JOIN users
ON reviews.user_id = users.user_id

WHERE reviews.movie_id = '$movie_id'";

$result = $conn->query($sql);

$reviews = array();

while ($row = $result->fetch_assoc()) {
    $reviews[] = $row;
}

echo json_encode($reviews);

$conn->close();

?>