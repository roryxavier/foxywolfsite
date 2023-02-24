<button class="HomeButton py-3 px-6 font-semibold text-black rounded-lg">
	<slot />
</button>

<style lang="scss">
	.HomeButton {
		background-color: hsla(0, 0%, 100%, 0.5);
		transition: all 300ms;
		border: 2px solid;
		border-color: transparent;

		&:hover {
			transform: scale(1.01);
			box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
			border-color: hsla(0, 0%, 100%, 0.5);
		}
	}
</style>
