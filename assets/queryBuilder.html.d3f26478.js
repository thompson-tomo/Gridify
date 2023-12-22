import{d as t}from"./app.d8b64c72.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=t(`<h1 id="querybuilder" tabindex="-1"><a class="header-anchor" href="#querybuilder" aria-hidden="true">#</a> QueryBuilder</h1><p>The <code>QueryBuilder</code> class is really useful if you want to manually build your query Or when you don&#39;t want to use the extension methods.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>AddCondition</td><td>Adds a string base Filtering query</td></tr><tr><td>AddOrderBy</td><td>Adds a string base Ordering query</td></tr><tr><td>ConfigurePaging</td><td>Configure Page and PageSize</td></tr><tr><td>AddQuery</td><td>Accepts a GridifyQuery object to configure filtering,ordering and paging</td></tr><tr><td>UseCustomMapper</td><td>Accepts a GridifyMapper to use in build methods</td></tr><tr><td>UseEmptyMapper</td><td>Setup an Empty new GridifyMapper without auto generated mappings</td></tr><tr><td>AddMap</td><td>Add a single Map to existing mapper</td></tr><tr><td>RemoveMap</td><td>Remove a single Map from existing mapper</td></tr><tr><td>ConfigureDefaultMapper</td><td>Configuring default mapper when we didn&#39;t use AddMapper method</td></tr><tr><td>IsValid</td><td>Validates Condition, OrderBy, Query , Mapper and returns a bool</td></tr><tr><td>Build</td><td>Applies filtering ordering and paging to a queryable context</td></tr><tr><td>BuildCompiled</td><td>Compiles the expressions and returns a delegate for applying filtering ordering and paging to a enumerable collection</td></tr><tr><td>BuildFilteringExpression</td><td>Returns filtering expression that can be compiled for later use for enumerable collections</td></tr><tr><td>BuildEvaluator</td><td>Returns an evaluator delegate that can be use to evaluate an queryable context</td></tr><tr><td>BuildCompiledEvaluator</td><td>Returns an compiled evaluator delegate that can be use to evaluate an enumerable collection</td></tr><tr><td>BuildWithPaging</td><td>Applies filtering ordering and paging to a context, and returns paging result</td></tr><tr><td>BuildWithPagingCompiled</td><td>Compiles the expressions and returns a delegate for applying filtering ordering and paging to a enumerable collection, that returns paging result</td></tr><tr><td>BuildWithQueryablePaging</td><td>Applies filtering ordering and paging to a context, and returns queryable paging result</td></tr><tr><td>Evaluate</td><td>Directly Evaluate a context to check if all conditions are valid or not</td></tr></tbody></table><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">QueryBuilder<span class="token punctuation">&lt;</span>Person<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">AddCondition</span><span class="token punctuation">(</span><span class="token string">&quot;name=John&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">AddOrderBy</span><span class="token punctuation">(</span><span class="token string">&quot;age, id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> query <span class="token operator">=</span> builder<span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span>persons<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,4);function s(r,d){return a}var p=n(e,[["render",s]]);export{p as default};