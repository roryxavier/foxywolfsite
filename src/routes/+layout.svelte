<script lang="ts">
	import Actionbar from '@/component/Actionbar.svelte';
	import '@/app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import LinkList from '@/model/LinkList';
	import OgImage from '@/assets/together-w520h416.png';

	let show = false;
	let selfHref = '';

	onMount(() => {
		show = true;
		onSelfLinkChange();
	});

	function onSelfLinkChange() {
		const pathnames = window.location.pathname
			.split('/')
			.map((name) => name.trim())
			.filter((name) => name.length > 0);
		const lastName = pathnames.length ? pathnames[pathnames.length - 1] : '';
		const link = LinkList.find((link) => link.href === lastName);

		selfHref = link ? link.href : '';
	}

	$: if ($navigating) {
		setTimeout(() => onSelfLinkChange(), 500);
	}
</script>

<svelte:head>
	<!-- Twitter Meta -->
	<meta name="twitter:title" content="Foxy Wolf" />
	<meta name="twitter:image" content={OgImage} />
	<meta
		name="twitter:description"
		content="A journey celebrating our memories and milestones as a blue wolf and yellow fox furry couple"
	/>

	<!-- Meta -->
	<meta name="title" property="og:title" content="Foxy Wolf" />
	<meta name="type" property="og:type" content="website" />
	<meta name="image" property="og:image" content={OgImage} />
	<meta name="url" property="og:url" content="https://foxywolf.net" />
	<meta
		name="description"
		property="og:description"
		content="A journey celebrating our memories and milestones as a blue wolf and yellow fox furry couple"
	/>
</svelte:head>

{#if show}
	<div
		class="App {selfHref === '' ? 'App-animate-background' : ''}"
		transition:fade={{ delay: 250, duration: 1500 }}
	>
		<Actionbar />
		<slot />
	</div>
{/if}

<style lang="scss">
	@import url(https://fonts.bunny.net/css?family=montserrat:500);

	:root {
		font-family: system-ui, 'Montserrat', sans-serif;

		@media (min-width: 700px) {
			font-size: 17px;
		}
		@media (min-width: 800px) {
			font-size: 18px;
		}
		@media (min-width: 900px) {
			font-size: 20px;
		}
		@media (min-width: 1000px) {
			font-size: 22px;
		}

		@media (max-width: 500px) {
			font-size: 15px;
		}
		@media (max-width: 400px) {
			font-size: 14px;
		}
	}

	.App {
		min-height: 100dvh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: stretch;
		background: #eaf3f8;
	}

	.App-animate-background {
		animation: gradient 15s ease infinite;
		background-size: 400% 400%;
		background-image: linear-gradient(90deg, #f4d668, #42c8ff);
	}
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
