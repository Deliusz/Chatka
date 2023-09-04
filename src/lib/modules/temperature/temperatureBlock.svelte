<script lang="ts">
	import { fade } from 'svelte/transition';
	export let color: string;
	export let temperature: string;
	export let name: string;
	export let breakPoints = [40, 45, 50, 55];

	let state = (temperature: string) => {
		let temp = Number(temperature);
		return temp >= breakPoints[3]
			? 'full'
			: temp >= breakPoints[2]
			? 'three-quarters'
			: temp >= breakPoints[1]
			? 'half'
			: temp >= breakPoints[0]
			? 'quarter'
			: 'empty';
	};
	let animate = (temperature: string) => {
		return temperature == '0' ? 'animate-pulse' : '';
	};
</script>

<div class="{color} sm:w-40 basis-[48%] p-3 rounded-2xl" in:fade={{ duration: 500 }}>
	<div class="mb-2">
		{#key temperature}
			<i class="fa-solid fa-temperature-{state(temperature)} {animate(temperature)}  text-4xl" />
		{/key}
		<span class=" float-right text-4xl {animate(temperature)} "><b>{temperature}</b>°C</span>
	</div>
	<span class="font-semibold {animate(temperature)} ">{name}</span>
</div>
