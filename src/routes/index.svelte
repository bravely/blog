<!-- <script>
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


<h1>Under Construction 🏗</h1>

<figure>
	<img alt="Me and Wren" src="{meandwren}">
	<figcaption>You found me!</figcaption>
</figure>

<p><strong>While I'm getting this site up to snuff, I'd really prefer you just read a <a href="/blog">post</a>.</strong></p> -->

<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`blog.json`).then((r: { json: () => any; }) => r.json()).then((posts: { slug: string; title: string, html: any }[]) => {
			return { posts };
		});
	}
</script>

<script lang="ts">
	import Post from './blog/_Post.svelte'
	export let posts: { slug: string; title: string, html: any }[];
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	hr {
		border-top: 8px solid #bbb;
		border-radius: 5px;
		margin-bottom: 2em;
	}
</style>

<svelte:head>
	<title>Jake Demarest-Mays</title>
</svelte:head>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<!-- <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li> -->
		<Post post={post} />
		<hr>
	{/each}
</ul>

