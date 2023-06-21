<script lang="ts">
	import EventCardIcon from './EventCard-Icon.svelte';
	import EventCardArrow from './EventCard-Arrow.svelte';
	import type ConEvent from '../../model/Con/ConEvent';

	export let conEvent: ConEvent;

	let isExpand = false;
</script>

{#if conEvent}
	<div
		class="EventCard w-full flex flex-col items-stretch justify-start rounded-xl transition overflow-hidden"
		isExpand={`${isExpand}`}
	>
		<button
			class="w-full flex flex-row items-center justify-stretch gap-3 cursor-pointer"
			on:click={() => {
				isExpand = !isExpand;
			}}
		>
			<EventCardIcon src={conEvent.icon} />

			<div class="w-full flex flex-col items-start grow-1 justify-center text-start">
				<span class="font-bold">{conEvent.title}</span>
				<span style="font-size: 0.8rem">{conEvent.datetime}</span>
			</div>

			<EventCardArrow rotate180={isExpand} isShowing={isExpand || !!conEvent.getDetails().length} />
		</button>

		{#if isExpand}
			{#if conEvent.getDetails().length}
				<div
					class="EventCard-Details flex flex-row"
					style="border-top: 1px solid; border-color: inherit"
				>
					{#each conEvent.getDetails() as detail}
						<div>
							<span class="title">{detail.title}</span>
							<span class="subtitle">{detail.subTitle}</span>
						</div>
					{/each}
				</div>

				<!-- <button
					class="flex flex-col items-center font-bold text-xs hover:bg-gray-200 transition"
					style="border-top: 1px solid; border-color: inherit;"
				>
					View Detail
				</button> -->
			{:else}
				<span
					class="w-full text-center text-xs opacity-50"
					style="border-top: 1px solid; border-color: inherit;">No Details</span
				>
			{/if}
		{/if}
	</div>
{/if}

<style lang="scss">
	.EventCard {
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid;
		border-color: hsla(204, 100%, 10%, 0.2);

		& > * {
			padding: 1rem;
		}

		.EventCard-Details {
			padding: 0;
			font-size: 0.8rem;

			& > * {
				border-right: 1px solid;
				border-color: inherit;
				padding: 1rem;

				flex-basis: 100%;
				display: flex;
				flex-direction: column;
				align-items: start;
				text-align: start;
				line-height: 1rem;

				.title {
					font-weight: 600;
				}
				.subtitle {
					font-size: 0.6rem;
				}
			}
			div:last-child {
				border: none;
			}
		}
	}
	.EventCard[isExpand='true'] {
		background: white;
	}
	.EventCard[isExpand='false'] {
		&:hover,
		&:focus {
			background: white;
		}
	}
</style>
