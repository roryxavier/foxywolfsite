<script lang="ts">
	import type ConEvent from '@/model/Event/EventCon';
	import type EventSection from '@/model/Event/EventSection';

	import EventCard from './EventCard.svelte';

	export let eventSection: EventSection;

	const { title, events } = eventSection;

	let currentExpandEvent: ConEvent | null = null;
</script>

<div class="w-full flex flex-col gap-4" style="color: #002035">
	<span class="text-2xl font-semibold">{title}</span>
	<div class="flex flex-col gap-2">
		{#each events as event}
			<EventCard
				conEvent={event}
				isExpand={event === currentExpandEvent}
				onClick={() => {
					if (currentExpandEvent === event) currentExpandEvent = null;
					else currentExpandEvent = event;
				}}
			/>
		{/each}
		<slot />
	</div>
</div>
