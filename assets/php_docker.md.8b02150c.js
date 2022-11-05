import{_ as e,c as a,o as s,a as r}from"./app.d825676a.js";const C=JSON.parse('{"title":"Configuraci\xF3n general de docker","description":"","frontmatter":{},"headers":[{"level":3,"title":"Crear la red","slug":"crear-la-red","link":"#crear-la-red","children":[]},{"level":3,"title":"Servidor PHP 7.3","slug":"servidor-php-7-3","link":"#servidor-php-7-3","children":[]},{"level":3,"title":"Servidor PHP 8.0","slug":"servidor-php-8-0","link":"#servidor-php-8-0","children":[]}],"relativePath":"php/docker.md"}'),n={name:"php/docker.md"},o=r(`<h1 id="configuracion-general-de-docker" tabindex="-1">Configuraci\xF3n general de docker <a class="header-anchor" href="#configuracion-general-de-docker" aria-hidden="true">#</a></h1><p>Una vez instalado docker siguiendo la documentaci\xF3n oficial, creo la siguiente red local para que los diferentes contenedores se puedan comunicar.</p><h3 id="crear-la-red" tabindex="-1">Crear la red <a class="header-anchor" href="#crear-la-red" aria-hidden="true">#</a></h3><blockquote><p>docker network create nombreRed.</p><p>Ejemplo: docker network create desarrollo</p><p>docker network connect --alias aliasContenedor nombreRed nombreContenedor</p><p>Ejemplo: docker network connect --alias mysql desarrollo mysql-db</p></blockquote><h1 id="imagenes-utilizadas" tabindex="-1">Imagenes utilizadas <a class="header-anchor" href="#imagenes-utilizadas" aria-hidden="true">#</a></h1><p>Las im\xE1genes utilizadas para los distintos proyectos son las siguientes, ya que tienen el driver de sql server instalado.</p><ul><li>marcosqueiroz/php7.3-apache-sqlsvr:latest</li><li>marcosqueiroz/php8.0.5-apache-sqlsvr</li></ul><h3 id="servidor-php-7-3" tabindex="-1">Servidor PHP 7.3 <a class="header-anchor" href="#servidor-php-7-3" aria-hidden="true">#</a></h3><p>Creo la carpeta <strong>htdocs/servidor-php73</strong> en <strong>opt</strong>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker run -p 80:80 -v /opt/htdocs/servidor-php73:/var/www/html \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name servidorphp73 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-d marcosqueiroz/php7.3-apache-sqlsvr:latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Acceder en modo interactivo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker exec -it servidorphp73 bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="servidor-php-8-0" tabindex="-1">Servidor PHP 8.0 <a class="header-anchor" href="#servidor-php-8-0" aria-hidden="true">#</a></h3><p>Creo la carpeta <strong>htdocs/servidor-php80</strong> en <strong>opt</strong>.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker run -p 80:80 -v /opt/htdocs/servidor-php80:/var/www/html \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name servidorphp80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-d marcosqueiroz/php8.0.5-apache-sqlsvr</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Acceder en modo interactivo</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker exec -it servidorphp80 bash</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,17),p=[o];function l(c,i,t,d,h,u){return s(),a("div",null,p)}const g=e(n,[["render",l]]);export{C as __pageData,g as default};