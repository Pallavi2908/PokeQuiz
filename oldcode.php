<?php
$host = 'db'; // Assuming the database is running locally or within the same Docker network
$db = 'php_docker'; // The database name from your environment variable
$user = 'php_docker'; // The username
$pass = 'password'; // The password
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$base_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . rtrim(dirname($_SERVER['PHP_SELF']), '/') . '/';

$question_id = 1; // Example question ID
$sql = "SELECT * FROM quiz_questions WHERE id = $question_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $question_data = $result->fetch_assoc();

    // Add the base URL to make image paths absolute if needed
    $question_data['silhouette_image'] = $base_url . $question_data['silhouette_image'];
    $question_data['sprite_image'] = $base_url . $question_data['sprite_image'];
    $question_data['cry_audio'] = $base_url . $question_data['cry_audio'];
    $options = [
        $question_data['option1'],
        $question_data['option2'],
        $question_data['option3'],
        $question_data['option4']
    ];
    
    $question_data['options'] = $options; // Add options to the data
    echo json_encode($question_data); // Send data as JSON
} else {
    echo "No question found.";
}

$conn->close();
?>