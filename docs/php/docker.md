# Configuración general de docker

Una vez instalado docker siguiendo la documentación oficial, creo la siguiente red local para que los diferentes contenedores se puedan comunicar.

## Crear la red

> docker network create nombreRed.
>
> Ejemplo: docker network create desarrollo
>
> docker network connect --alias aliasContenedor nombreRed nombreContenedor
>
> Ejemplo: docker network connect --alias mysql desarrollo mysql-db

## Imagenes utilizadas

Las imágenes utilizadas para los distintos proyectos son las siguientes, ya que tienen el driver de sql server instalado.

- marcosqueiroz/php7.3-apache-sqlsvr:latest
- marcosqueiroz/php8.0.5-apache-sqlsvr

### Servidor PHP 7.3

Creo la carpeta **htdocs/servidor-php73** en **opt**.

```bash
docker run -p 80:80 -v /opt/htdocs/servidor-php73:/var/www/html \
--name servidorphp73 \
-d marcosqueiroz/php7.3-apache-sqlsvr:latest
```

Acceder en modo interactivo

```bash
docker exec -it servidorphp73 bash
```

### Servidor PHP 8.0

Creo la carpeta **htdocs/servidor-php80** en **opt**.

```bash
docker run -p 80:80 -v /opt/htdocs/servidor-php80:/var/www/html \
--name servidorphp80 \
-d marcosqueiroz/php8.0.5-apache-sqlsvr
```

Acceder en modo interactivo

```bash
docker exec -it servidorphp80 bash
```
