<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let content = '';
	let startTime: number;
	let interval: NodeJS.Timer;

	function displayTime(ms: number) {
		const hours = Math.floor(ms / 3600000);
		ms %= 3600000;
		const minutes = Math.floor(ms / 60000);
		ms %= 60000;
		const seconds = Math.floor(ms / 1000);

		content = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
			seconds
		).padStart(2, '0')}`;
	}

	onMount(() => {
		startTime = Date.now() - (startTime || 0);
		interval = setInterval(() => {
			const elapsed = Date.now() - startTime;
			displayTime(elapsed);
		}, 1000);
	});
	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<span>{content}</span>
