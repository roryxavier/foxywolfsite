<script lang="ts">
	import EventSection from './visited/EventSection.svelte';
	import EventCard from './visited/EventCard.svelte';

	import furum from '../assets/furum.png';
	import littleisland from '../assets/littleisland.png';

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
			<h2 class="w-full text-3xl font-bold" style="color: #002035">Con Visited</h2>

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
</style>
