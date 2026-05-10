<?php

$folder = "documents/";
$files = scandir($folder);

$data = [];

foreach($files as $file){

    if($file == "." || $file == ".."){
        continue;
    }

    $path = $folder . $file;

    $extension = pathinfo($path, PATHINFO_EXTENSION);

    $size = filesize($path);

    $sizeFormatted = round($size / 1024, 2) . " KB";

    $mime = mime_content_type($path);

    $data[] = [
        "name" => $file,
        "path" => $path,
        "extension" => $extension,
        "size" => $sizeFormatted,
        "type" => $mime
    ];
}

header('Content-Type: application/json');

echo json_encode($data);
?>