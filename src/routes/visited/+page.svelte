<script lang="ts">
	import EventSection from './EventSection.svelte';
	import EventCard from './EventCard.svelte';

	import furum from '../../assets/furum.png';
	import littleisland from '../../assets/littleisland.png';

	import ConEvent from '../../model/Con/ConEvent';

	const eventSections = [
		{
			title: 'Upcoming',
			events: [
				new ConEvent()
					.setIcon(furum)
					.setTitle('Fur Upon Malaysia - FURUM')
					.setDateTime('09-10 December 2023')
					.setTheme('Space')
					.setGuestOfHonor('Kékéflipnote | 2D Animation Artist')
					.setTierInfo('Rory:Commander(Super Sponsor) Jimmy:Cadet(Standard)')
			]
		},
		{
			title: 'Visited',
			events: [
				new ConEvent()
					.setIcon(littleisland)
					.setTitle('Little Island Furcon - LIFC')
					.setDateTime('10-11 June 2023')
					.setTheme('Swrods & Sorcery')
					.setGuestOfHonor('Daza | Fursuit Maker')
					.setTierInfo('Rory:Adventure(Sponsor) Jimmy:Mercenary(Attendee)'),
				new ConEvent()
					.setIcon(furum)
					.setTitle('Fur Upon Malaysia - FURUM')
					.setDateTime('10-11 December 2022')
					.setTheme('Con Of The Lost')
					.setGuestOfHonor('Zephyxus (Zephy) | Furry Artist')
					.setTierInfo('Rory:Standard Jimmy:Standard')
			]
		}
	];
</script>

<svelte:head>
	<title>Con Visited</title>
</svelte:head>

<div class="PageCons">
	<div
		class="flex flex-col items-center justify-start"
		style="min-height: 100dvh; background: var(--background)"
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
</style>
