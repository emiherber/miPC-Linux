import{_ as s,c as a,o as n,a as e}from"./app.d825676a.js";const E=JSON.parse('{"title":"Cambiar OWNER","description":"","frontmatter":{},"headers":[],"relativePath":"db/sqlserver.md"}'),l={name:"db/sqlserver.md"},p=e(`<h1 id="cambiar-owner" tabindex="-1">Cambiar OWNER <a class="header-anchor" href="#cambiar-owner" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">DECLARE @tabla as VARCHAR(100)</span></span>
<span class="line"><span style="color:#A6ACCD;">DECLARE rs CURSOR FOR</span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT &#39;ownerOriginal.&#39; + sysobjects.name FROM sysobjects WHERE xtype in(&#39;V&#39;,&#39;U&#39;,&#39;P&#39;,&#39;FN&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">OPEN rs</span></span>
<span class="line"><span style="color:#A6ACCD;">    FETCH NEXT FROM rs</span></span>
<span class="line"><span style="color:#A6ACCD;">    INTO @tabla</span></span>
<span class="line"><span style="color:#A6ACCD;">      WHILE @@FETCH_STATUS = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      BEGIN</span></span>
<span class="line"><span style="color:#A6ACCD;">        PRINT @tabla</span></span>
<span class="line"><span style="color:#A6ACCD;">        EXEC sp_changeobjectowner @tabla, &#39;dbo&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        Fetch NEXT FROM rs</span></span>
<span class="line"><span style="color:#A6ACCD;">        into @tabla</span></span>
<span class="line"><span style="color:#A6ACCD;">      END</span></span>
<span class="line"><span style="color:#A6ACCD;">    CLOSE rs</span></span>
<span class="line"><span style="color:#A6ACCD;">DEALLOCATE rs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),o=[p];function c(t,r,C,i,A,_){return n(),a("div",null,o)}const D=s(l,[["render",c]]);export{E as __pageData,D as default};
