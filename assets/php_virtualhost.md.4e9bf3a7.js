import{_ as s,c as a,o as n,d as l}from"./app.bf5b26ba.js";const d=JSON.parse('{"title":"Crear virtual host","description":"","frontmatter":{},"headers":[],"relativePath":"php/virtualhost.md"}'),e={name:"php/virtualhost.md"},o=l(`<h1 id="crear-virtual-host" tabindex="-1">Crear virtual host <a class="header-anchor" href="#crear-virtual-host" aria-hidden="true">#</a></h1><p>Para crear un virtual host se debe agregar en el siguiente archivo <strong>000-default.conf</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nano /etc/apache2/sites-available/000-default.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>En algunos casos en necesario agregar lo siguiente en el del sistema ubicado en el mismo archivo.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;Directory /var/www/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Options Indexes FollowSymLinks</span></span>
<span class="line"><span style="color:#A6ACCD;">  AllowOverride all</span></span>
<span class="line"><span style="color:#A6ACCD;">  Require all granted</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/Directory&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Ejemplo:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  # the server uses to identify itself. This is used when creating</span></span>
<span class="line"><span style="color:#A6ACCD;">  # redirection URLs. In the context of virtual hosts, the ServerName</span></span>
<span class="line"><span style="color:#A6ACCD;">  # specifies what hostname must appear in the request&#39;s Host: header to</span></span>
<span class="line"><span style="color:#A6ACCD;">  # match this virtual host. For the default virtual host (this file) this</span></span>
<span class="line"><span style="color:#A6ACCD;">  # value is not decisive as it is used as a last resort host regardless.</span></span>
<span class="line"><span style="color:#A6ACCD;">  # However, you must set it for any further virtual host explicitly.</span></span>
<span class="line"><span style="color:#A6ACCD;">  #ServerName www.example.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ServerAdmin webmaster@localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">  DocumentRoot \${ABSOLUTE_APACHE_DOCUMENT_ROOT}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,</span></span>
<span class="line"><span style="color:#A6ACCD;">  # error, crit, alert, emerg.</span></span>
<span class="line"><span style="color:#A6ACCD;">  # It is also possible to configure the loglevel for particular</span></span>
<span class="line"><span style="color:#A6ACCD;">  # modules, e.g.</span></span>
<span class="line"><span style="color:#A6ACCD;">  #LogLevel info ssl:warn</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ErrorLog \${APACHE_LOG_DIR}/error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">  CustomLog \${APACHE_LOG_DIR}/access.log combined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # For most configuration files from conf-available/, which are</span></span>
<span class="line"><span style="color:#A6ACCD;">  # enabled or disabled at a global level, it is possible to</span></span>
<span class="line"><span style="color:#A6ACCD;">  # include a line for only one particular virtual host. For example the</span></span>
<span class="line"><span style="color:#A6ACCD;">  # following line enables the CGI configuration for this host only</span></span>
<span class="line"><span style="color:#A6ACCD;">  # after it has been globally disabled with &quot;a2disconf&quot;.</span></span>
<span class="line"><span style="color:#A6ACCD;">  #Include conf-available/serve-cgi-bin.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Directory /var/www/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Options Indexes FollowSymLinks</span></span>
<span class="line"><span style="color:#A6ACCD;">    AllowOverride all</span></span>
<span class="line"><span style="color:#A6ACCD;">    Require all granted</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Directory&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/VirtualHost&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></div><p>Para crear un virtual host se debe utilizar la siguiente plantilla:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># NOMBRE DEL PROYECTO</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;VirtualHost *:80&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ServerName nombreProyecto.local</span></span>
<span class="line"><span style="color:#A6ACCD;">  ServerAdmin webmaster@localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">  DocumentRoot /var/www/html/carpetaProyecto</span></span>
<span class="line"><span style="color:#A6ACCD;">  ErrorLog /var/www/html/carpetaProyecto/error.log</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/VirtualHost&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),p=[o];function t(r,c,i,C,A,u){return n(),a("div",null,p)}const h=s(e,[["render",t]]);export{d as __pageData,h as default};
