import{_ as s,c as a,o as n,a as e}from"./app.e009cd84.js";const u=JSON.parse('{"title":"Personalizar ubuntu","description":"","frontmatter":{},"headers":[{"level":2,"title":"Terminal","slug":"terminal","link":"#terminal","children":[]}],"relativePath":"ubuntu/terminal.md"}'),p={name:"ubuntu/terminal.md"},l=e(`<h1 id="personalizar-ubuntu" tabindex="-1">Personalizar ubuntu <a class="header-anchor" href="#personalizar-ubuntu" aria-hidden="true">#</a></h1><h2 id="terminal" tabindex="-1">Terminal <a class="header-anchor" href="#terminal" aria-hidden="true">#</a></h2><p>Personalizo la terminal con ohmybash/oh-my-bash <a href="https://github.com/ohmybash/oh-my-bash" target="_blank" rel="noreferrer">oh-my-bash</a></p><p>Instalo el tema powerline <a href="https://github.com/ohmybash/oh-my-bash/tree/master/themes/powerline" target="_blank" rel="noreferrer">Powerline Theme</a></p><p>Cargar los alias del archivo .bash_aliases en ohmybash if [ -f ~/.bash_aliases ]; then . ~/.bash_aliases fi</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># iniciar/parar docker para php73 + sqlserver</span></span>
<span class="line"><span style="color:#A6ACCD;">function servidor_php73_sqlsrv() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  docker $1 sqlserver2017-db</span></span>
<span class="line"><span style="color:#A6ACCD;">  docker $1 servidorphp73</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># iniciar/parar docker para php + mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">function servidor_php73_mysql() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  docker $1 mysql-db</span></span>
<span class="line"><span style="color:#A6ACCD;">  docker $1 servidorphp73</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># iniciar/parar docker para php80 + sqlserver</span></span>
<span class="line"><span style="color:#A6ACCD;">function servidor_php80_sqlsrv() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  docker $1 sqlserver2017-db</span></span>
<span class="line"><span style="color:#A6ACCD;">  docker $1 servidorphp80</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export NVM_DIR=&quot;$HOME/.nvm&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/nvm.sh&quot;  # This loads nvm</span></span>
<span class="line"><span style="color:#A6ACCD;">[ -s &quot;$NVM_DIR/bash_completion&quot; ] &amp;&amp; \\. &quot;$NVM_DIR/bash_completion&quot;  # This loads nvm bash_completion</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># update paquetes de snap</span></span>
<span class="line"><span style="color:#A6ACCD;">alias snapu=&#39;snap refresh&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># update y upgrade paquetes</span></span>
<span class="line"><span style="color:#A6ACCD;">alias actualizar=&#39;sudo apt update &amp;&amp; sudo apt upgrade&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[l];function r(t,c,i,h,C,A){return n(),a("div",null,o)}const m=s(p,[["render",r]]);export{u as __pageData,m as default};
