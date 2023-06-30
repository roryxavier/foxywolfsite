<script lang="ts">
	import Actionbar from '../../component/Actionbar.svelte';
	import EventSectionTs from '../../model/Event/EventSection';

	import EventSection from './EventSection.svelte';

	import furum from '../../assets/furum.png';
	import littleisland from '../../assets/littleisland.png';

	import ConEvent from '../../model/Event/EventCon';
	import TierEvent from '../../model/Event/TierEvent';
	import HonorGuest from '../../model/Event/HonorGuest';
	import Theme from '../../model/Event/Theme';

	const eventSections = [
		new EventSectionTs(
			'Upcoming',
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
				)
		),
		new EventSectionTs(
			'Visited',
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
	<title>Con Visited</title>
</svelte:head>

<div>
	<Actionbar />
	<div class="PageCons-body flex flex-col items-center justify-start" style="min-height: 100dvh">
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

<style lang="scss">
	.PageCons-body {
		background: #eaf3f8;
	}
</style>
