<script lang="ts">
	export let title: String = '';
</script>

<div class="w-full flex flex-col gap-4" style="color: #002035">
	<span class="text-3xl font-semibold">{title}</span>
	<div class="flex flex-col gap-2">
		<slot />
	</div>
</div>
