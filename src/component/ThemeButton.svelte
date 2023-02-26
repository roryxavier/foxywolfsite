<script lang="ts">
	export let click = () => {};
	export let isLightTheme: boolean = true;
	let isOptionLightTheme = true;
</script>

<button
	class="ThemeButton"
	on:click={() => {
		isOptionLightTheme = !isOptionLightTheme;
		click();
	}}
>
	{#if isOptionLightTheme}
		<svg
			class="Icon"
			width="512"
			height="512"
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M247.464 332.736C205.05 332.736 170.664 298.353 170.664 255.936C170.664 213.522 205.05 179.136 247.464 179.136C289.881 179.136 324.264 213.522 324.264 255.936C324.264 298.353 289.881 332.736 247.464 332.736ZM247.464 315.67C280.455 315.67 307.199 288.927 307.199 255.936C307.199 222.947 280.456 196.204 247.464 196.204C214.475 196.204 187.733 222.947 187.733 255.936C187.733 288.927 214.475 315.67 247.464 315.67ZM255.999 145.006H238.933V93.8057H255.999V145.006ZM331.943 183.532L319.874 171.463L356.077 135.257L368.146 147.326L331.943 183.532ZM358.4 264.471V247.406H409.6V264.471H358.4ZM319.874 340.416L331.943 328.347L368.146 364.55L356.077 376.618L319.874 340.416ZM238.934 366.873H256V418.073H238.934V366.873ZM162.99 328.347L175.059 340.416L138.853 376.618L126.785 364.55L162.99 328.347ZM136.533 247.407V264.473H85.333V247.407H136.533ZM175.059 171.463L162.99 183.532L126.785 147.326L138.853 135.257L175.059 171.463Z"
				fill={isLightTheme ? 'black' : 'white'}
			/>
		</svg>
	{:else}
		<svg
			class="Icon"
			width="512"
			height="512"
			viewBox="0 0 512 512"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M373.343 341.241C297.925 341.241 236.807 280.115 236.807 204.705C236.807 172.491 248.027 142.939 266.692 119.589C193.257 121.854 134.406 181.928 134.406 255.905C134.406 331.308 195.526 392.441 270.942 392.441C314.142 392.441 352.577 372.335 377.599 341.026C376.17 341.075 374.779 341.241 373.345 341.241L373.343 341.241Z"
				fill={isLightTheme ? 'black' : 'white'}
			/>
		</svg>
	{/if}
</button>

<style lang="scss">
	.ThemeButton {
		--size: 3rem;
		width: var(--size);
		height: var(--size);
		display: flex;
		align-items: center;
		justify-content: center;
		.Icon {
			width: var(--size);
			height: var(--size);
		}
	}
</style>
