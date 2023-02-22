<div class="bg">
	<div class="grid h-screen place-items-center max-w-lg mx-auto">
		<slot />
	</div>
</div>

<style lang="css">
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
			background-image: linear-gradient(0deg, #f4d668 0%, #42c8ff 100%);
		}
		50% {
			background-position: 100% 50%;
			background-image: linear-gradient(180deg, #f4d668 0%, #42c8ff 100%);
		}
		100% {
			background-image: linear-gradient(360deg, #f4d668 0%, #42c8ff 100%);
			background-position: 0% 50%;
		}
	}
	.bg {
		animation: gradient 15s ease infinite;
		background-size: 400% 400%;
	}
</style>
