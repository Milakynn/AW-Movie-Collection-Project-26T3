<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db.php");

$user_id = $_GET["user_id"];

$sql = "
SELECT COUNT(*) AS total_favorites
FROM favorites
WHERE user_id = '$user_id'
";

$result = $conn->query($sql);
$row = $result->fetch_assoc();

echo json_encode($row);

$conn->close();

?>