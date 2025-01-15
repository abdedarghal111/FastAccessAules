# Sobre el proyecto

Este es un proyecto que he realizado por diversión para tener una especie de calendario/mural o algún acceso rápido a la página de aules.

Trata de una página web que te coloca el enlace a la asignatura que necesites en el momento que toca esa asignatura. Se actualiza automáticamente para ofrecer lo que toca en cada momento(un acceso directo).

Se ha hecho simplemente por diversión, no tiene nada de especial y algunas practicas de las realizadas no están aconsejadas, por ejemplo esta mezcla de **sass**, **php**, **js**, **html**, **Jquery** etc, no sería la más aconsejable, se podría haber abordado de otra manera.

## Desplegar el proyecto

Si tu intención es probalo pues tenemos los siguientes 2 escenarios:

- Si usas **arch linux** o el gestor de paquetes **pacman**, simplemente ejecuta `./install.sh` para instalar las dependencias del proyecto. Seguido de eso, puedes abrir la página con los scripts dentro de `./deploy`.

- En caso de otro sistema operativo pues deberás instalar el gestor de paquetes **npm** y **php** para poder hacer uso de su servidor y seguir los siguientes pasos:
    1. Ejecuta `npm install` para instalar las dependencias.
    2. Ejecuta `mkdir ./src/css` para crear la carpeta donde se alojará el **css**.
    3. Ejecuta `npm run prepareWeb` para compilar el **scss**. 
    4. Ejecuta `php -S 192.168.0.1:8081 -t ./src -c ./src/php.ini` para crear el servidor.
    5. Accede a https://192.168.0.1:8081 para abrir la página web. 
    6. Para apagar el servidor simplemente termina el proceso de la terminal.

## Personalización

### Asignaturas y horario

El sistema se basa en recoger datos de archivos **js** con tablas **json**, cada fichero se explica por si mismo, están hubicados en `./src/js/data` y puedes modificarlos siguiendo la estructura que se ofrece en los comentarios cada fichero. **Importante**, los nombres de las asignaturas tienen que ser los mismos en todos los ficheros.

### Sonidos

Finalmente si usas **arch linux** o el gestor de paquetes **pacman**, al hacer uso de los scripts tienes la opción de que suene un sonido cada vez que inicias o apagar el servidor mediante script.

Para ello deberás colocar 2 archivos de sonido en las siguientes rutas:
- Archivo de inicio: `./deploy/res/notification up.wav`.
- Archivo de cierre: `./deploy/res/notification down.wav`.

No hace falta que explique a que se refiere cada uno, son autodescriptivos los nombres. Aconsejo que dure 1 segundo o menos el sonido, en mi caso eran sonidos de campanas pero no los he subido por posible copyright.