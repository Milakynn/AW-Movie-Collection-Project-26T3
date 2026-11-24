<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include("db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$title = $conn->real_escape_string(
    $data["title"]
);

$genre = $conn->real_escape_string(
    $data["genre"]
);

$description = $conn->real_escape_string(
    $data["description"]
);

$release_year = $conn->real_escape_string(
    $data["release_year"]
);

$runtime = $conn->real_escape_string(
    $data["runtime"]
);

$image_url = $conn->real_escape_string(
    $data["image_url"]
);

$rating = $conn->real_escape_string(
    $data["rating"]
);

$cast = $conn->real_escape_string(
    $data["cast"]
);

$sql = "
INSERT INTO movies
(
 title,
 genre,
 description,
 release_year,
 runtime,
 image_url,
 rating
)
VALUES
(
 '$title',
 '$genre',
 '$description',
 '$release_year',
 '$runtime',
 '$image_url',
 '$rating'
)
";

if($conn->query($sql)){

    $movie_id = $conn->insert_id;

    $castArray = explode(",", $cast);

    foreach($castArray as $actor){

        $actor = trim($actor);

        if(!empty($actor)){

            $actor = $conn->real_escape_string($actor);

            $conn->query("
                INSERT INTO movie_cast
                (
                    movie_id,
                    actor_name
                )
                VALUES
                (
                    '$movie_id',
                    '$actor'
                )
            ");

        }

    }

    echo json_encode([
        "success" => true
    ]);

}else{

    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);

}

$conn->close();

?>