<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db.php");

$id = $_GET["id"];

$sql = "SELECT * FROM movies WHERE movie_id = $id";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(null);
}

$conn->close();

?>