<?php set_include_path($_SERVER['DOCUMENT_ROOT'])?>
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
            <h2 class="baseh2Style">padding/margin</h2>
            <div class="baseContainer">
                <button id="div0">button 0</button>
                <button id="div1">button 1</button>
                <button id="div2">button 2</button>
                <button id="div3">button 3</button>
                <button id="div4">button 4</button>
                <button id="div5">button 5</button>
                <button id="div6">button 6</button>
                <button id="div7">button 7</button>
            </div>
            <h2 class="baseh2Style">Text size</h2>
            <div class="baseContainer">
                <span id="text1">tamaño 1</span><br/>
                <span id="text2">tamaño 2</span><br/>
                <span id="text3">tamaño 3</span><br/>
                <span id="text4">tamaño 4</span><br/>
                <span id="text5">tamaño 5</span><br/>
                <span id="text6">tamaño 6</span><br/>
                <span id="text7">tamaño 7</span><br/>
                <span id="text8">tamaño 8</span>
            </div>
            
        </main>
        <?php require "phpInclude/footer.php"?>
    </wrapper>
</body>
</html>