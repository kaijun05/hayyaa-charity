<script lang="ts">
	import AppCss from '../app.css?url';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="stylesheet" href={AppCss} /></svelte:head>

<Navbar />

<main>
	{@render children()}
</main>

<footer>
	<Footer />
</footer>
