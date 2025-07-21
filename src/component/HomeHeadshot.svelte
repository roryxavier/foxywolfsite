<script lang="ts">
	import type Label from '@/model/Label';

	export let src: string = '';
	export let alt: string = '';
	export let href: string = '';
	export let target: string = '';
	export let labels: Label[] = [];
</script>

<!-- <img {src} {alt} class="Headshot w-48 rounded-3xl shadow-lg rounded-full" /> -->
<!-- <img {src} {alt} class="Headshot w-48 shadow-lg rounded-full" /> -->

<div class="Headshot">
	{#if href.length}
		<a class="Headshot-button" {href} {target}>
			<img class="Headshot-icon shadow-lg rounded-full" {src} {alt} />
		</a>
	{/if}
	{#if !href.length}
		<img class="Headshot-icon shadow-lg rounded-full" {src} {alt} />
	{/if}

	{#if labels.length}
		<div class="Headshot-labels">
			{#each labels as label}
				<div class="Headshot-label">{label.title}</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.Headshot {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;

		.Headshot-button {
			cursor: pointer;

			.Headshot-icon {
				transition: all 200ms;
			}

			&:hover {
				.Headshot-icon {
					transform: translateY(-0.5rem);
				}
			}
		}
		.Headshot-icon {
			background-color: hsla(0, 0%, 100%, 0.2);
			width: 30vw;
			min-width: 3rem;
			max-width: 10rem;
		}

		.Headshot-labels {
			display: flex;
			flex-direction: row;
			gap: 6px;

			& > * {
				font-weight: 600;
				font-size: 0.8em;
				line-height: 1rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: inherit;

				&::after {
					--size: 4px;
					display: flex;
					width: var(--size);
					height: var(--size);
					background: rgba(0, 0, 0, 0.8);
					border-radius: 50%;
					content: ' ';
				}
				&:last-child {
					&::after {
						content: unset;
					}
				}
			}
		}
	}
</style>
