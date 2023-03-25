<script lang="ts">
	import CardText from '../component/CardText.svelte';

	import HomeHeadshot from '../component/HomeHeadshot.svelte';
	import HomeHeart from '../component/HomeHeart.svelte';
	import HomeButton from '../component/HomeButton.svelte';
	import EventSection from '../component/EventSection.svelte';
	import EventCard from '../component/EventCard.svelte';

	import rory from '../assets/rory.webp';
	import jimmy from '../assets/jimmy.webp';
	import furum from '../assets/furum.png';
	import littleisland from '../assets/littleisland.png';

	import LinkList from '../LinkList';

	import ConEvent from '../ConEvent';

	const eventSections = [
		{
			title: 'Upcoming',
			events: [
				new ConEvent()
					.setIcon(littleisland)
					.setTitle('Little Island Furcon - LIFC')
					.setDateTime('10-11 June 2022')
					.setTheme('Swrods & Sorcery')
					.setGuestOfHonor('Daza | Fursuit Maker')
					.setRegistrationTier('Hero | Super Sponser'),
				new ConEvent().setIcon(furum).setTitle('Fur Upon Malaysia - FURUM').setDateTime('2023')
			]
		},
		{
			title: 'Visited',
			events: [
				new ConEvent()
					.setIcon(furum)
					.setTitle('Fur Upon Malaysia - FURUM')
					.setDateTime('10-11 December 2022')
			]
		}
	];
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

<div class="PageCons">
	<div
		class="flex flex-col items-center justify-center"
		style="height: 30vh; background: linear-gradient(180deg, transparent, var(--background));"
	>
		<!-- <span>Scroll Down</span> -->
	</div>

	<div
		class="flex flex-col items-center justify-start"
		style="min-height: 70dvh; background: var(--background)"
	>
		<div
			class="flex flex-col items-start justify-start gap-16 p-6 w-full"
			style="max-width: 35rem; padding-bottom: 20rem;"
		>
			{#each eventSections as eventSection}
				<EventSection title={eventSection.title}>
					{#each eventSection.events as con}
						<EventCard conEvent={con} />
					{/each}
				</EventSection>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.PageCons {
		--background: #eaf3f8;
	}

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
