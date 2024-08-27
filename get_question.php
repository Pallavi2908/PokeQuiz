<?php
$host = 'db';
$db = 'php_docker';
$user = 'php_docker';
$pass = 'password';
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the question ID from the URL query parameter
$question_id = isset($_GET['id']) ? intval($_GET['id']) : 1; // Default to question 1 if not provided

$sql = "SELECT * FROM quiz_questions WHERE id = $question_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $question_data = $result->fetch_assoc();
    $base_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . rtrim(dirname($_SERVER['PHP_SELF']), '/') . '/';
    $question_data['silhouette_image'] = $base_url . $question_data['silhouette_image'];
    $question_data['sprite_image'] = $base_url . $question_data['sprite_image'];
    $question_data['cry_audio'] = $base_url . $question_data['cry_audio'];

    echo json_encode($question_data);
} else {
    echo json_encode(["error" => "No question found."]);
}

$conn->close();
?>
