<script lang="ts">
	import type TierEvent from '../../model/Event/TierEvent';

	export let tierEvent: TierEvent;
</script>

<div class="RegistrationTier">
	<span class="RegistrationTier-owner">{tierEvent.owner}</span>
	{#if tierEvent.alternativeName.length > 0}
		<span>{tierEvent.alternativeName}</span>
	{/if}
	<span>{tierEvent.name}</span>
</div>

<style lang="scss">
	.RegistrationTier {
		display: flex;
		flex-direction: row;
		align-items: center;

		& > * {
			width: 7rem;
		}
		.RegistrationTier-owner {
			width: 5rem;
		}
	}
</style>
