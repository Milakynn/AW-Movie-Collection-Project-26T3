<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db.php");

$movie_id = $_GET["movie_id"];

$sql = "SELECT actor_name
        FROM movie_cast
        WHERE movie_id = $movie_id";

$result = $conn->query($sql);

$cast = array();

while ($row = $result->fetch_assoc()) {
    $cast[] = $row;
}

echo json_encode($cast);

$conn->close();

?>