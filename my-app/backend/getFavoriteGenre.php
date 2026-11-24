<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("db.php");

$user_id = $_GET["user_id"];

$sql = "
SELECT movies.genre,
COUNT(*) AS total

FROM reviews

JOIN movies
ON reviews.movie_id = movies.movie_id

WHERE reviews.user_id = '$user_id'

GROUP BY movies.genre

ORDER BY total DESC

LIMIT 1
";

$result = $conn->query($sql);

if($result->num_rows > 0){

    echo json_encode(
        $result->fetch_assoc()
    );

}else{

    echo json_encode([
        "genre" => "None"
    ]);

}

$conn->close();

?>