<script lang="ts">
	export let click = () => {};
	export let isLightTheme: boolean = true;
</script>

<button class="BackButton" on:click={() => click()}>
	<svg
		class="Icon"
		width="512"
		height="512"
		viewBox="0 0 512 512"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_1755_456)">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M10.8149 280.582L232.051 501.818C245.627 515.394 267.638 515.394 281.215 501.818C294.791 488.242 294.791 466.23 281.215 452.654L119.324 290.764L296.442 290.764V290.75H477.236C496.436 290.75 512 275.186 512 255.987C512 236.787 496.436 221.223 477.236 221.223L119.338 221.223L281.215 59.3457C294.791 45.7695 294.791 23.7583 281.215 10.1821C267.638 -3.39404 245.627 -3.39404 232.051 10.1821L10.8149 231.418C-2.76122 244.994 -2.76122 267.006 10.8149 280.582Z"
				fill={isLightTheme ? 'black' : 'white'}
			/>
		</g>
		<defs>
			<clipPath id="clip0_1755_456">
				<rect width="512" height="512" fill="white" />
			</clipPath>
		</defs>
	</svg>
</button>

<style lang="scss">
	.BackButton {
		--size: 3rem;
		width: var(--size);
		height: var(--size);
		display: flex;
		align-items: center;
		justify-content: center;

		&:focus {
			.Icon {
				transform: scale(0.9);
			}
		}

		.Icon {
			--size: 1.1rem;
			width: var(--size);
			height: var(--size);
			transition: all 200ms;
		}
	}
</style>
