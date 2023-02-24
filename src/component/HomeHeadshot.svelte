<script lang="ts">
	export let src: string = '';
	export let alt: string = '';
</script>

<!-- <img {src} {alt} class="Headshot w-48 rounded-3xl shadow-lg rounded-full" /> -->
<!-- <img {src} {alt} class="Headshot w-48 shadow-lg rounded-full" /> -->
<img {src} {alt} class="Headshot shadow-lg rounded-full" />

<style lang="scss">
	.Headshot {
		background-color: hsla(0, 0%, 100%, 0.2);
		width: 30vw;
		min-width: 3rem;
		max-width: 10rem;
	}
</style>
