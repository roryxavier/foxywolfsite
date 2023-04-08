<script lang="ts">
	export let menu: { title: string; icon?: string; href?: string } = { title: '' };
</script>

{#if typeof menu.href === 'string'}
	<a class="RowMenu" target="_blank" rel="noreferrer" href={menu.href}>{menu.title}</a>
{:else}
	<button class="RowMenu">{menu.title}</button>
{/if}

<style lang="scss">
	.RowMenu {
		width: 10rem;
      width: 100%;
		padding: 0.5rem 0.25rem;

		font-size: 0.875rem;
		line-height: 1.25rem;

		text-align: center;

		border-radius: 0.5rem;

		display: flex;
		align-items: center;
		justify-content: center;

		background: hsla(0, 0%, 100%, 0.5);
		transition: all 300ms;
		border: 2px solid;
		border-color: transparent;

		&:hover {
			transform: scale(1.01);
			box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
			border-color: hsla(0, 0%, 100%, 0.5);
		}
	}
</style>
