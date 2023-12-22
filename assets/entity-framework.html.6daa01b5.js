import{d as a}from"./app.d8b64c72.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=a(`<h1 id="entity-framework" tabindex="-1"><a class="header-anchor" href="#entity-framework" aria-hidden="true">#</a> Entity Framework</h1><h2 id="gridify-entityframework-package" tabindex="-1"><a class="header-anchor" href="#gridify-entityframework-package" aria-hidden="true">#</a> Gridify.EntityFramework Package</h2><p>The <code>Gridify.EntityFramework</code> package has two additional <code>GridifyAsync()</code> and <code>GridifyQueryableAsync()</code> methods.</p><h2 id="compatibility-layer" tabindex="-1"><a class="header-anchor" href="#compatibility-layer" aria-hidden="true">#</a> Compatibility layer</h2><p>If you want to use gridify with Entity Framework, you should enable the compatibility layer:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>GridifyGlobalConfiguration<span class="token punctuation">.</span><span class="token function">EnableEntityFrameworkCompatibilityLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Enabling the compatibility layer provides the following features:</p><ul><li>It tweaks the internal expression builder to make it compatible with Entity Framework.</li><li>EF query optimization</li><li>EF ServiceProviderCaching support</li><li>Creates parameterized queries</li></ul><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">DECLARE</span> <span class="token variable">@__Value_0</span> nvarchar<span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span> <span class="token operator">=</span> N<span class="token string">&#39;vahid&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> <span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>Id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>CreateDate<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>FkGuid<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>Name<span class="token punctuation">]</span>
<span class="token keyword">FROM</span> <span class="token punctuation">[</span>Users<span class="token punctuation">]</span> <span class="token keyword">AS</span> <span class="token punctuation">[</span>u<span class="token punctuation">]</span>
<span class="token keyword">WHERE</span> <span class="token punctuation">[</span>u<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">[</span>Name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">@__Value_0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,9);function e(p,o){return t}var l=n(s,[["render",e]]);export{l as default};