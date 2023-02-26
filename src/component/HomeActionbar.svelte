<script lang="ts">
	import { onMount } from 'svelte';
	import BackButton from './BackButton.svelte';
	import LinkList from '../LinkList';
	import { navigating } from '$app/stores';

	// import ThemeButton from './ThemeButton.svelte';

	let title: string = '';
	let scrollTop: number = 0;
	let isBackable: boolean = false;

	const invalidateScrollTop = () => {
		const html: HTMLHtmlElement | null = document.querySelector('html');
		if (html) scrollTop = html.scrollTop;
	};
	const getPathnames = () => {
		const { pathname } = window.location;
		return pathname
			.split('/')
			.map((name) => name.trim())
			.filter((name) => name.length > 0);
	};
	const invalidateBackable = () => {
		const pathnames = getPathnames();
		isBackable = pathnames.length > 0;

		const lastName = pathnames.length ? pathnames[pathnames.length - 1] : '';
		const link = LinkList.find((link) => link.href === lastName);
		title = link && typeof link.title === 'string' ? link.title : '';
	};
	const invalidateTitle = () => {
		setTimeout(() => {
			const pathnames = getPathnames();
			const lastName = pathnames.length ? pathnames[pathnames.length - 1] : '';
			const link = LinkList.find((link) => link.href === lastName);
			title = link && typeof link.title === 'string' ? link.title : 'Foxy & Wolfy';
		}, 500);
	};
	const clickBack = () => {
		window.open('/', '_self');

		// works with svelte routing
		// navigate(-1);

		// using native pushing state, but svelte never update
		// window.history.pushState({}, '/', '/');

		// by checking history length, but not consistant if user will forward history
		// if (window.history.length > 2) {
		// 	window.history.back();
		// } else {
		// 	window.open('/', '_self');
		// }
	};

	$: if ($navigating) invalidateTitle();

	onMount(() => {
		const element: HTMLBodyElement | null = document.querySelector('body');
		if (element) element.onscroll = (e) => invalidateScrollTop();

		invalidateScrollTop();
		invalidateBackable();
		invalidateTitle();
	});
</script>

<div
	class="Actionbar {scrollTop > 0
		? 'Actionbar-background'
		: ''} w-full flex flex-row items-center justify-center"
>
	{#if isBackable}
		<div class="Actionbar-ThemeButton aspect-square flex items-center justify-center">
			<BackButton isLightTheme={scrollTop <= 0} click={() => clickBack()} />
		</div>
	{/if}

	<div class="p-4 flex flex-row grow">
		{#if title.length}
			<span class="text-lg font-bold">{title}</span>
		{/if}
	</div>

	<!-- <div class="Actionbar-ThemeButton aspect-square flex items-center justify-center">
		<ThemeButton isLightTheme={scrollTop <= 0} />
	</div> -->
</div>

<style lang="scss">
	.Actionbar {
		z-index: 1;
		height: 5rem;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;

		transition: all 0.2s;

		background-color: hsla(200, 60%, 97%, 0.2);

		.Actionbar-ThemeButton {
			height: inherit;
		}
	}
	.Actionbar-background {
		color: white;
		background-color: hsla(0, 0%, 0%, 0.98);
	}
</style>
