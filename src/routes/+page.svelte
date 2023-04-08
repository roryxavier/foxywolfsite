<script lang="ts">
	import CardText from '../component/CardText.svelte';

	import HomeHeadshot from '../component/HomeHeadshot.svelte';
	import HomeHeart from '../component/HomeHeart.svelte';
	import HomeButton from '../component/HomeButton.svelte';

	import rory from '../assets/rory.webp';
	import jimmy from '../assets/jimmy.webp';

	import LinkList from '../LinkList';
</script>

<div
	class="w-full flex flex-col items-center justify-start"
	style="height: max-content; min-height: 70dvh;"
>
	<div
		class="w-full p-6 pb-16 gap-12 flex flex-col items-center justify-center"
		style="max-width: 35rem; height: max-content; min-height: 70dvh;"
	>
		<div class="flex flex-row items-center justify-center gap-5">
			<HomeHeadshot src={rory} alt="Rory Badge" href="https://rorywolf.net/" target="_blank" />
			<HomeHeart />
			<HomeHeadshot src={jimmy} alt="Jimmy Badge" href="http://jimmychane.com" target="_blank" />
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

		<div class="Buttons flex flex-row flex-wrap-reverse w-full gap-2 flex justify-center">
			{#each LinkList.map((link) => link).reverse() as link}
				<HomeButton title={link.title} href={link.href} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	:root {
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
