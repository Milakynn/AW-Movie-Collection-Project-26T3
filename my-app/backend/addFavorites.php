<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     exit(0);
// }

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

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

$user_id = $data["user_id"];
$movie_id = $data["movie_id"];

$checkSql = "
SELECT *
FROM favorites
WHERE user_id = '$user_id'
AND movie_id = '$movie_id'
";

$checkResult = $conn->query($checkSql);

if ($checkResult->num_rows > 0) {

    echo json_encode([
        "message" => "Movie already in favorites."
    ]);

    exit();
}

$sql = "
INSERT INTO favorites
(user_id, movie_id)
VALUES
('$user_id', '$movie_id')
";

if ($conn->query($sql)) {

    echo json_encode([
        "success" => true,
        "message" => "Added to favorites!"
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
}

$conn->close();

?>