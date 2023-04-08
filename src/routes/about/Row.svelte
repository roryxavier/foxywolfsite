<script lang="ts">
	export let title = '';
	export let clickables = [{ title: '' }];
</script>

<div class="w-full flex flex-row">
	<span class="w-40">{title}</span>
	<div class="flex flex-row gap-4">
		{#each clickables as clickable}
			<button class="w-40 px-1 text-sm rounded border border-gray-900">{clickable.title}</button>
		{/each}
	</div>
</div>
