<script lang="ts">
	import Arrow from '../assets/arrow-002035.svg';

	export let rotate180: Boolean = false;
	export let isShowing: Boolean = true;
</script>

<button
	class="w-11 h-11 flex items-center justify-center transition"
	style="transform: rotate({rotate180 ? '-180deg' : '0deg'}); opacity: {isShowing ? '1' : '0'};"
>
	<img class="w-2.5 h-2.5" src={Arrow} alt="Click to Expand" />
</button>
