<script lang="ts">
	import RowMenu from './Row-Menu.svelte';

	export let title = '';
	export let menus: { title: string; icon?: string; href?: string }[] = [{ title: '' }];
</script>

<div class="w-full flex flex-row">
	<span class="w-40 py-2">{title}</span>
	<div class="grow grid flex-row gap-1 flex-wrap" style="grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));">
		{#each menus as menu}
			<RowMenu {menu} />
		{/each}
	</div>
</div>
