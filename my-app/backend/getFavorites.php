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

$user_id = $_GET["user_id"];

$sql = "
SELECT
    favorites.favorite_id,
    movies.movie_id,
    movies.title,
    movies.genre,
    movies.image_url
FROM favorites
JOIN movies
ON favorites.movie_id = movies.movie_id
WHERE favorites.user_id = '$user_id'
";

$result = $conn->query($sql);

$favorites = [];

while($row = $result->fetch_assoc()) {
    $favorites[] = $row;
}

echo json_encode($favorites);

$conn->close();

?>