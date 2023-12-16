<script lang="ts">
	import EventSectionTs from '@/model/Event/EventSection';

	import EventSection from './EventSection.svelte';

	import iwag from '@/assets/furcon/iwag.ico';
	import furum from '@/assets/furcon/furum.png';
	import littleisland from '@/assets/furcon/littleisland.png';
	import philifur from '@/assets/furcon/philifur.png';

	import ConEvent from '@/model/Event/EventCon';
	import TierEvent from '@/model/Event/TierEvent';
	import HonorGuest from '@/model/Event/HonorGuest';
	import Theme from '@/model/Event/Theme';

	const eventSections = [
		new EventSectionTs(
			'Next?',
			new ConEvent()
				.setIcon(iwag)
				.setTitle('Indonesia Weekend Anthro Gathering - IWAG 2024')
				.setDateTime('13-14 July 2024')
				.setLink('https://iwag.furries.id/')
				.setTheme(new Theme('Beach'))
				.addRegistrationTier(new TierEvent().setOwner('Rory'))
				.addRegistrationTier(new TierEvent().setOwner('Jimmy'))
		),
		new EventSectionTs(
			'Visited',
			new ConEvent()
				.setIcon(furum)
				.setTitle('Fur Upon Malaysia - FURUM 2023')
				.setDateTime('09-10 December 2023')
				.setTheme(new Theme('Space'))
				.setHonorGuest(new HonorGuest('Kékéflipnote | 2D Animation Artist'))
				.addRegistrationTier(
					new TierEvent().setOwner('Rory').setName('Super Sponser').setAlternativeName('Commander')
				)
				.addRegistrationTier(
					new TierEvent().setOwner('Jimmy').setName('Standard').setAlternativeName('Cadet')
				),
			new ConEvent()
				.setIcon(philifur)
				.setTitle('PhiliFUR 2023')
				.setDateTime('23 September 2023')
				.setTheme(new Theme('Tails and Fables'))
				.addRegistrationTier(
					new TierEvent().setOwner('Rory').setName('Admission').setAlternativeName("Traveler' Pass")
				)
				.addRegistrationTier(
					new TierEvent()
						.setOwner('Jimmy')
						.setName('Admission')
						.setAlternativeName("Traveler' Pass")
				),
			new ConEvent()
				.setIcon(littleisland)
				.setTitle('Little Island Furcon - LIFC 2023')
				.setDateTime('10-11 June 2023')
				.setTheme(new Theme('Swrods & Sorcery'))
				.setHonorGuest(new HonorGuest('Daza | Fursuit Maker'))
				.addRegistrationTier(
					new TierEvent().setOwner('Rory').setName('Sponsor').setAlternativeName('Adventure')
				)
				.addRegistrationTier(
					new TierEvent().setOwner('Jimmy').setName('Attendee').setAlternativeName('Mercenary')
				),
			new ConEvent()
				.setIcon(furum)
				.setTitle('Fur Upon Malaysia - FURUM 2022')
				.setDateTime('10-11 December 2022')
				.setTheme(new Theme('Con Of The Lost'))
				.setHonorGuest(new HonorGuest('Zephyxus (Zephy) | Furry Artist'))
				.addRegistrationTier(new TierEvent().setOwner('Rory').setName('Standard'))
				.addRegistrationTier(new TierEvent().setOwner('Jimmy').setName('Standard'))
		)
	];
</script>

<svelte:head>
	<title>Furry Convention</title>
</svelte:head>

<div>
	<div class="flex flex-col items-center justify-start" style="min-height: 100dvh">
		<div
			class="flex flex-col items-start justify-start gap-16 p-6 w-full"
			style="max-width: 35rem; padding-bottom: 20rem;"
		>
			{#each eventSections as eventSection}
				<EventSection {eventSection} />
			{/each}
		</div>
	</div>
</div>
