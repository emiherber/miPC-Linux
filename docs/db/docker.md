# Configuración general de docker
Una vez instalado docker siguiendo la documentación oficial, creo la siguiente red local para que los diferentes contenedores se puedan comunicar.

### Crear la red

> docker network create nombreRed.
>
> Ejemplo: docker network create desarrollo
>
> docker network connect --alias aliasContenedor nombreRed nombreContenedor
>
> Ejemplo: docker network connect --alias mysql desarrollo mysql-db

# Imagenes utilizadas
Las imágenes utilizadas para los distintos proyectos son las siguientes, ya que tienen el driver de sql server instalado.
- mysql
- mcr.microsoft.com/mssql/server:2017-latest

### mysql-db
```
docker run -d -p 3306:3306 --name mysql-db \
-e MYSQL_ROOT_PASSWORD=miClave \ 
-v /opt/mysql:/var/lib/mysql mysql
```

### sqlserver2017-db
Creo la carpeta **sqlserver** en **opt**.

```
docker run --name sqlserver2017-db -p 1433:1433 \ 
-v /opt/sqlserver:/var/backups/ \
-e "ACCEPT_EULA=Y" -e "SA_PASSWORD=miClave!" \
-d mcr.microsoft.com/mssql/server:2017-latest
```

Acceder en modo interactivo
```
docker exec -it sqlserver2017-db "bash"
```