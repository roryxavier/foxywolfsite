<script>
	import CenterLayout from '../component/CenterLayout.svelte';
	import rory from '../assets/rory.webp';
	import jimmy from '../assets/jimmy.webp';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import CardText from '../component/CardText.svelte';

	let show = false;
	onMount(() => (show = true));

	let linkList = ['Con Visited', 'Timeline', 'Gallery', 'Travel Map'];
</script>

<CenterLayout>
	{#if show}
		<div
			class="flex flex-col items-center space-y-2.5"
			transition:fade={{ delay: 250, duration: 1500 }}
		>
			<div class="flex flex-row items-center">
				<img alt="Rory Badge" src={rory} class="w-48 border border-white shadow-lg rounded-full" />
				<div class="w-5" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width=""
					stroke="currentColor"
					class="h-12"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
					/>
				</svg>
				<div class="w-5" />
				<img
					alt="Rory Badge"
					src={jimmy}
					class="w-48 rounded-3xl border border-white shadow-lg rounded-full"
				/>
			</div>
			<CardText>
				<div class="flex items-center text-center text-2xl flex-col">
					<p>Rory and Jimmy's Furry Memory Lane</p>
					<p>
						A journey celebrating our memories and milestones as a blue wolf and yellow fox furry
						couple.
					</p>
					<p>Join us and create new memories!</p>
				</div>
			</CardText>
			<div class="h-8" />
			<div class="w-48">
				<div class="flex flex-col items-center text-2xl space-y-2 w-48">
					{#each linkList as link}
						<button
							class="font-semibold text-blue-800  py-2 px-4  rounded-lg border border-black w-full"
						>
							{link}
						</button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</CenterLayout>

<style lang="scss">
	@import url(https://fonts.bunny.net/css?family=montserrat:500);

	:root {
		font-family: 'Montserrat', sans-serif;
		//@media (max-width: 700px) {
		//  font-size: 19px;
		//}
		//@media (max-width: 600px) {
		//  font-size: 18px;
		//}
		//@media (max-width: 500px) {
		//  font-size: 17px;
		//}
		//@media (max-width: 400px) {
		//  font-size: 16px;
		//}
		//@media (max-width: 300px) {
		//  font-size: 15px;
		//}
		//@media (max-width: 200px) {
		//  font-size: 14px;
		//}
		//font-size: 20px;
		//@media (min-width: 1000px) {
		//  font-size: 21px;
		//}
		//@media (min-width: 1200px) {
		//  font-size: 22px;
		//}
	}
</style>
