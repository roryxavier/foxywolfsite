<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let show = false;

	onMount(() => (show = true));
</script>

{#if show}
	<div class="App" transition:fade={{ delay: 250, duration: 1500 }}>
		<slot />
	</div>
{/if}

<style lang="scss">
	@import url(https://fonts.bunny.net/css?family=montserrat:500);

	:root {
		font-family: 'Montserrat', sans-serif;

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
	}
</style>
