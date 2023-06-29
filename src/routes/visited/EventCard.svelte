<script lang="ts">
	import EventCardIcon from './EventCard-Icon.svelte';
	import EventCardArrow from './EventCard-Arrow.svelte';
	import type ConEvent from '../../model/Event/ConEvent';
	import RegistrationTier from './EventCard-Detail-RegistrationTier.svelte';

	export let conEvent: ConEvent;

	let isExpand = true;

	let hasTheme = !!conEvent.theme;
	let hasHonorGuest = !!conEvent.honorGuest;
	let hasTierEvent = conEvent.tierEvents.length > 0;

	let hasContents = hasTheme || hasHonorGuest || hasTierEvent;
</script>

{#if conEvent}
	<div class="EventCard" isExpand={`${isExpand}`}>
		<button class="EventCard-header" on:click={() => (isExpand = !isExpand)}>
			<EventCardIcon src={conEvent.icon} />

			<div class="EventCard-title">
				<span class="font-bold">{conEvent.title}</span>
				<span style="font-size: 0.8rem">{conEvent.datetime}</span>
			</div>

			<EventCardArrow rotate180={isExpand} isShowing={isExpand || !!hasContents} />
		</button>

		<div class="EventCard-expandable">
			<div class="EventCard-expandable-body">
				<div class="EventCard-Details">
					{#if hasTheme}
						<div>
							<span class="title">Theme</span>
							<span class="subtitles">{conEvent.theme?.name}</span>
						</div>
					{/if}

					{#if hasHonorGuest}
						<div>
							<span class="title">Guest of Honor</span>
							{#if (conEvent.honorGuest?.href ?? '').length > 0}
								<a class="subtitles" href={conEvent.honorGuest?.href} target="_blank"
									>{conEvent.honorGuest?.name}</a
								>
							{:else}
								<span class="subtitles">{conEvent.honorGuest?.name}</span>
							{/if}
						</div>
					{/if}

					{#if hasTierEvent}
						<div>
							<span class="title">Registration Tier</span>
							<div class="subtitles">
								{#each conEvent.tierEvents as tierEvent}
									<RegistrationTier {tierEvent} />
								{/each}
							</div>
						</div>
					{/if}

					{#if !hasContents}
						<span class="EventCard-empty">No Details</span>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.EventCard {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;

		border-radius: 0.75rem;

		background: rgba(255, 255, 255, 0.6);
		border: 1px solid;
		border-color: hsla(204, 100%, 10%, 0.2);

		.EventCard-header {
			width: 100%;
			display: flex;
			flex-direction: row;
			padding: 1rem;
			align-items: center;
			justify-content: stretch;
			gap: 0.725rem;
			cursor: pointer;

			.EventCard-title {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				text-align: start;
				flex-grow: 1;
			}
		}
		.EventCard-expandable {
			display: grid;
			transition: grid-template-rows 200ms cubic-bezier(1, 0, 0, 1);

			.EventCard-expandable-body {
				overflow: hidden;

				.EventCard-Details {
					width: 100%;

					font-size: 1rem;
					padding: 2rem;
					gap: 2rem;

					display: flex;
					flex-direction: column;

					border-top: 1px solid;
					border-color: inherit;
					overflow: hidden;

					& > * {
						flex-basis: 100%;
						display: flex;
						flex-direction: column;
						align-items: start;
						text-align: start;
						line-height: 1rem;

						.title {
							font-weight: 600;
							margin-bottom: 0.5rem;
						}
						.subtitles {
							display: flex;
							flex-direction: column;
							font-size: 0.8rem;
						}
					}

					.EventCard-empty {
						align-items: center;
						text-align: center;
						font-size: 0.75rem;
						line-height: 1rem;
						opacity: 0.5;
					}
				}
			}
		}
	}
	.EventCard[isExpand='true'] {
		background: white;
		.EventCard-expandable {
			grid-template-rows: 1fr;
		}
	}
	.EventCard[isExpand='false'] {
		.EventCard-expandable {
			grid-template-rows: 0fr;
		}
		&:hover,
		&:focus {
			background: white;
		}
	}
</style>
