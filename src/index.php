<!DOCTYPE html>
<html lang="es">
<head>
    <?php require "phpInclude/head.php"?>
    <link rel="stylesheet" href="/css/<?php echo basename(__FILE__, '.php')?>.css"/>
    <title>aulesFastAccess</title>
</head>
<body>
    <wrapper>
        <?php require "phpInclude/header.php"?>
        <main>
            <div>
                <h2 class="baseh2Style">Ahora mismo</h2>
                <p id="ahoraMismoP" class="baseContainer"></p>
            </div>
            <div>
                <h2 class="baseh2Style">Cursos</h2>
                <ul class="baseContainer" id="listaEnlaces"></ul>
            </div>
        </main>
        <script src="js/main.js" type="module"></script>
        <?php require "phpInclude/footer.php"?>
    </wrapper>
</body>
</html>