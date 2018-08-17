### Instrucciones

1. ir a tu git bash o a tu terminal si estás en un sistema operativo basado en unix
2. Escribir los comandos:
            $ git clone https://github.com/marianar97/proyecto1.git
            $ cd proyecto1
            $ mkdir ssl
            $ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ssl/nginx.key -out ssl/nginx.crt
            $ sudo /usr/local/bin/docker-compose build &&  sudo /usr/local/bin/docker-compose up

### Instalar Docker
En caso que no se tenga instalado docker haz click [aqui](https://github.com/st0263eafit/appwebArticulosNodejs/blob/master/deploy-on-docker.md) y seguir las instrucciones