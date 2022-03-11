<?php
    $nombre = $_POST['__subject'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];
    echo "<h2>Información recibida</h2>"

    $archivo = fopen("docs/mensajes/".$nombre.".xml", "w+b");    // Abrir el archivo, creándolo si no existe
    if( $archivo == false )
      echo "Error al crear el archivo";
    else
      echo "El archivo ha sido creado";
      fwrite($archivo, "<nombre>".$nombre."</nombre>\r\n");
      fwrite($archivo, "<email>".$email."</email>\r\n");
      fwrite($archivo, "<mensaje>".$mensaje."</mensaje>\r\n");
      fflush($archivo);
    fclose($archivo);   // Cerrar el archivo
?