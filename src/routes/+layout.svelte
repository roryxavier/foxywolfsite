<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import HomeActionbar from '../component/HomeActionbar.svelte';

	let show = false;
	let currentHref = '';

	onMount(() => (show = true));
</script>

<div class="App" showBackground={`${currentHref === ''}`}>
	{#if show}
		<div class="Layout flex w-full flex-col" transition:fade={{ delay: 250, duration: 1500 }}>
			<HomeActionbar onLinkChange={(href = '') => (currentHref = href)} />
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	@import url(https://fonts.bunny.net/css?family=montserrat:500);
	:root {
		font-family: 'Montserrat', sans-serif;
	}

	.App {
		min-height: 100dvh;
		display: flex;
		align-items: stretch;
		justify-content: stretch;
	}
	.App[showBackground='true'] {
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
