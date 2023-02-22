<script>
	import CenterLayout from '../component/CenterLayout.svelte';
	import rory from '../assets/rory.webp';
	import jimmy from '../assets/jimmy.webp';
</script>

<CenterLayout>
	<div class="flex flex-col items-center space-y-3">
		<div class="flex flex-row items-center">
			<img alt="Rory Badge" src={rory} class="w-48 border border-white shadow-lg rounded-full" />
			<div class="w-5" />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width=""
				stroke="currentColor"
				class="h-12"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
				/>
			</svg>
			<div class="w-5" />
			<img
				alt="Rory Badge"
				src={jimmy}
				class="w-48 rounded-3xl border border-white shadow-lg rounded-full"
			/>
		</div>
		<div class="flex items-center text-center text-2xl">
			Rory and Jimmy's Furry Memory Lane: a journey celebrating our memories and milestones as a
			blue wolf and yellow fox couple. Join us and create new memories!
		</div>
		<div class="flex flex-col items-center text-2xl">
			<div>----- Directory ----</div>
			<div>Timeline</div>
			<div>Gallery</div>
			<div>Travel Map</div>
			<div>Con Visited</div>
		</div>
	</div>
</CenterLayout>
