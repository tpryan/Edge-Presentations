// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: false,
	progress: true,
	history: true,
	
	theme: Reveal.getQueryHash().theme || 'edge', // available themes are in /css/theme
	transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/linear(2d)

	// Optional libraries used to extend on reveal.js
	dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
        // { src: 'plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
        // { src: 'plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});