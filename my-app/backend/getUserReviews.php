<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("db.php");

$user_id = $_GET["user_id"];

$sql = "
SELECT
    reviews.review_id,
    reviews.review_text,
    reviews.review_rating,
    movies.title
FROM reviews

JOIN movies
ON reviews.movie_id = movies.movie_id

WHERE reviews.user_id = '$user_id'

ORDER BY reviews.created_at DESC
";

$result = $conn->query($sql);

$reviews = [];

while($row = $result->fetch_assoc()){
    $reviews[] = $row;
}

echo json_encode($reviews);

$conn->close();

?>