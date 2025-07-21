<script lang="ts">
	import { onMount } from 'svelte';
	import BackButton from './BackButton.svelte';
	import LinkList from '@/model/LinkList';
	import { navigating } from '$app/stores';

	// import ThemeButton from './ThemeButton.svelte';

	let title: string = '';
	let scrollTop: number = 0;
	let isBackable: boolean = false;
	let selfHref = '';

	export function onLinkChange(href = ''): void {}

	function onSelfLinkChange(href = ''): void {
		onLinkChange(href);
		selfHref = href;
	}

	function setTitleOfLink(link = { title: '' }): void {
		title = link.title.length ? link.title : 'Foxy & Wolfy v0.0.2'; // TODO: track package version automatically
	}

	function invalidateScrollTop() {
		const html: HTMLHtmlElement | null = document.querySelector('html');
		if (html) scrollTop = html.scrollTop;
	}
	function getPathnames() {
		const { pathname } = window.location;
		return pathname
			.split('/')
			.map((name) => name.trim())
			.filter((name) => name.length > 0);
	}
	function invalidateBackable() {
		const pathnames = getPathnames();
		isBackable = pathnames.length > 0;

		const lastName = pathnames.length ? pathnames[pathnames.length - 1] : '';
		const link = LinkList.find((link) => link.href === lastName);
		setTitleOfLink(link);
	}
	function invalidateTitle() {
		setTimeout(() => {
			const pathnames = getPathnames();
			const lastName = pathnames.length ? pathnames[pathnames.length - 1] : '';
			const link = LinkList.find((link) => link.href === lastName);
			setTitleOfLink(link);

			onSelfLinkChange(link ? link.href : '');
			invalidateBackable();
		}, 500);
	}
	function clickBack() {
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
	}

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
	class="Actionbar
		{selfHref === '' ? 'Actionbar-parent-is-home' : 'Actionbar-parent-is-not-home'}
		{scrollTop > 0 ? 'Actionbar-parent-is-scrolled-up' : ''}
		w-full flex flex-row items-center justify-center"
>
	<div class="Actionbar-ThemeButton">
		{#if isBackable}
			<BackButton isLightTheme={scrollTop <= 0} click={() => clickBack()} />
		{/if}
	</div>

	<div class="flex flex-row justify-center grow">
		{#if title.length}
			<span class="text-lg font-bold text-center overflow-hidden">{title}</span>
		{/if}
	</div>

	<div class="Actionbar-ThemeButton">
		<!-- <ThemeButton isLightTheme={scrollTop <= 0} /> -->
	</div>
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

		.Actionbar-ThemeButton {
			height: inherit;
			aspect-ratio: 1/1;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.Actionbar-parent-is-home {
		background: hsla(200, 60%, 97%, 0.2);
	}
	.Actionbar-parent-is-not-home {
		background: white;
	}

	.Actionbar-parent-is-scrolled-up {
		color: white;
		background: hsla(0, 0%, 0%, 0.98);
	}
</style>
