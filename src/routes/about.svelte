<script>
	import meandwren from 'images/me+wren.jpg';
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>Under Construction 🏗</h1>

<figure>
	<img alt="Me and Wren" src="{meandwren}">
	<figcaption>You found me!</figcaption>
</figure>

<p><strong>While I'm getting this site up to snuff, I'd really prefer you just read a <a href="/blog">post</a>.</strong></p>
