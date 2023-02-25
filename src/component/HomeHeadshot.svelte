<script lang="ts">
	export let src: string = '';
	export let alt: string = '';
	export let href: string = '';
	export let target: string = '';
</script>

<!-- <img {src} {alt} class="Headshot w-48 rounded-3xl shadow-lg rounded-full" /> -->
<!-- <img {src} {alt} class="Headshot w-48 shadow-lg rounded-full" /> -->

{#if href.length}
	<a class="Headshot-button" {href} {target}>
		<img class="Headshot shadow-lg rounded-full" {src} {alt} />
	</a>
{/if}
{#if !href.length}
	<img class="Headshot shadow-lg rounded-full" {src} {alt} />
{/if}

<style lang="scss">
	.Headshot-button {
		cursor: pointer;

		.Headshot {
			transition: all 200ms;
		}

		&:hover {
			.Headshot {
				transform: translateY(-0.5rem);
			}
		}
	}

	.Headshot {
		background-color: hsla(0, 0%, 100%, 0.2);
		width: 30vw;
		min-width: 3rem;
		max-width: 10rem;
	}
</style>
