<script lang="ts">
	import { onMount } from 'svelte';
	import ThemeButton from './ThemeButton.svelte';

	export let title: string = '';

	let scrollTop: number = 0;

	onMount(() => {
		const element: HTMLBodyElement | null = document.querySelector('body');
		if (element)
			element.onscroll = (e) => {
				const html: HTMLHtmlElement | null = document.querySelector('html');
				if (html) scrollTop = html.scrollTop;
			};
	});
</script>

<div
	class="Actionbar {scrollTop > 0
		? 'Actionbar-background'
		: ''} w-full flex flex-row items-center justify-center"
>
	<div class="p-4 flex flex-row grow">
		{#if title.length}
			<span class="text-lg font-bold">{title}</span>
		{/if}
	</div>

	<!-- <div class="Actionbar-ThemeButton aspect-square flex items-center justify-center">
		<ThemeButton />
	</div> -->
</div>

<style lang="scss">
	.Actionbar {
		z-index: 1;
		height: 5rem;
		position: sticky;
		top: 0;

		transition: all 0.2s;

		background-color: hsla(200, 60%, 97%, 0.2);

		.Actionbar-ThemeButton {
			height: inherit;
		}
	}
	.Actionbar-background {
		background-color: hsla(201, 50%, 95%, 0.98);
	}
</style>
