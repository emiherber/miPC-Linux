# Crear virtual host
Para crear un virtual host se debe agregar en el siguiente archivo **000-default.conf** 
```
nano /etc/apache2/sites-available/000-default.conf
```
::: warning
En algunos casos es necesario agregar el siguiente fragmento de codigo en 000-default.conf.
```
<Directory /var/www/>
  Options Indexes FollowSymLinks
  AllowOverride all
  Require all granted
</Directory>
```
Ejemplo:
```
<VirtualHost *:80>
  # the server uses to identify itself. This is used when creating
  # redirection URLs. In the context of virtual hosts, the ServerName
  # specifies what hostname must appear in the request's Host: header to
  # match this virtual host. For the default virtual host (this file) this
  # value is not decisive as it is used as a last resort host regardless.
  # However, you must set it for any further virtual host explicitly.
  #ServerName www.example.com

  ServerAdmin webmaster@localhost
  DocumentRoot ${ABSOLUTE_APACHE_DOCUMENT_ROOT}

  # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
  # error, crit, alert, emerg.
  # It is also possible to configure the loglevel for particular
  # modules, e.g.
  #LogLevel info ssl:warn

  ErrorLog ${APACHE_LOG_DIR}/error.log
  CustomLog ${APACHE_LOG_DIR}/access.log combined

  # For most configuration files from conf-available/, which are
  # enabled or disabled at a global level, it is possible to
  # include a line for only one particular virtual host. For example the
  # following line enables the CGI configuration for this host only
  # after it has been globally disabled with "a2disconf".
  #Include conf-available/serve-cgi-bin.conf
  <Directory /var/www/>
    Options Indexes FollowSymLinks
    AllowOverride all
    Require all granted
  </Directory>
</VirtualHost>
```
:::

Para crear un virtual host utilizo la siguiente plantilla:
```
# NOMBRE DEL PROYECTO
<VirtualHost *:80>
  ServerName nombreProyecto.local
  ServerAdmin webmaster@localhost
  DocumentRoot /var/www/html/carpetaProyecto
  ErrorLog /var/www/html/carpetaProyecto/error.log
</VirtualHost>
```

Para acceder al sitio definido en el virtual host se debe registrar el **serverName** en el archivo
/etc/hosts.

| Ip localhost   |   serverName             |
| -------------  | :----------------------: |
| 127.0.0.1      | nombreProyecto.local |

