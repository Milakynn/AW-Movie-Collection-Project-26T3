<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$user_id = $conn->real_escape_string(
    $data["user_id"]
);

$movie_id = $conn->real_escape_string(
    $data["movie_id"]
);

$review_text = $conn->real_escape_string(
    $data["review_text"]
);

$review_rating = $conn->real_escape_string(
    $data["review_rating"]
);

$sql = "
INSERT INTO reviews
(
    movie_id,
    user_id,
    review_text,
    review_rating
)
VALUES
(
    '$movie_id',
    '$user_id',
    '$review_text',
    '$review_rating'
)
";

if($conn->query($sql)){

    echo json_encode([
        "success" => true,
        "message" => "Review added"
    ]);

}else{

    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);

}

$conn->close();

?>