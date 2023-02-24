<script>
	import CardText from '../component/CardText.svelte';

	import HomeHeadshot from '../component/HomeHeadshot.svelte';
	import HomeHeart from '../component/HomeHeart.svelte';
	import HomeButton from '../component/HomeButton.svelte';

	import rory from '../assets/rory.webp';
	import jimmy from '../assets/jimmy.webp';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let show = false;
	onMount(() => (show = true));

	const linkList = ['Con Visited', 'Timeline', 'Gallery', 'Travel Map'];
</script>

{#if show}
	<div
		class="Content m-auto p-6 pb-16 gap-8 flex flex-col items-center justify-center"
		transition:fade={{ delay: 250, duration: 1500 }}
	>
		<div class="flex flex-row items-center justify-center gap-5">
			<HomeHeadshot src={rory} alt="Rory Badge" />
			<HomeHeart />
			<HomeHeadshot src={jimmy} alt="Jimmy Badge" />
		</div>

		<CardText>
			<div class="gap-4 p-4 flex items-center text-center flex-col">
				<p>Rory and Jimmy's Furry Memory Lane</p>
				<p>
					A journey celebrating our memories and milestones as a blue wolf and yellow fox furry
					couple.
				</p>
				<p>Join us and create new memories!</p>
			</div>
		</CardText>

		<div class="Buttons w-full gap-2 grid">
			{#each linkList as link} <HomeButton>{link}</HomeButton> {/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.Content {
		max-width: 35rem;
	}
	.Buttons {
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	}

	@import url(https://fonts.bunny.net/css?family=montserrat:500);

	:root {
		font-family: 'Montserrat', sans-serif;

		@media (min-width: 700px) {
			font-size: 17px;
		}
		@media (min-width: 800px) {
			font-size: 18px;
		}
		@media (min-width: 900px) {
			font-size: 20px;
		}
		@media (min-width: 1000px) {
			font-size: 22px;
		}
		@media (min-width: 1100px) {
			font-size: 26px;
		}

		@media (max-width: 500px) {
			font-size: 15px;
		}
		@media (max-width: 400px) {
			font-size: 14px;
		}
	}
</style>
