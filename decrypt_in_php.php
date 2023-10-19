<?php
    $postDataInJSON = file_get_contents("php://input");
    $data = json_decode($postDataInJSON, true);
    // key
    $key = pack('H*', '0123456789abcdef0123456789abcdef');
    // vecteur init
    $iv = pack('H*', 'abcdef9876543210abcdef9876543210');
    // Crypt Use
    $method = 'aes-128-cbc';
    $decrypted=openssl_decrypt(base64_decode($data['encrypted']),$method,$key,OPENSSL_RAW_DATA,$iv);
    echo '{"dechiffrement":"'.$decrypted.'"}';
?>