<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import HomeActionbar from '../component/HomeActionbar.svelte';

	let show = false;
	onMount(() => (show = true));
</script>

{#if show}
	<div class="Layout flex w-full flex-col" transition:fade={{ delay: 250, duration: 1500 }}>
		<HomeActionbar />
		<slot />
	</div>
{/if}

<style lang="scss">
	@import url(https://fonts.bunny.net/css?family=montserrat:500);
	:root {
		font-family: 'Montserrat', sans-serif;
	}
</style>
