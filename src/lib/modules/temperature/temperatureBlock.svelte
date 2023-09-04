<script lang="ts">
	export let color: string;
	export let temperature: string;
	export let name: string;
	export let breakPoints = [40, 45, 50, 55];
	let temp = Number(temperature) || 0;
	let state =
		temp >= breakPoints[3]
			? 'full'
			: temp >= breakPoints[2]
			? 'three-quarters'
			: temp >= breakPoints[1]
			? 'half'
			: temp >= breakPoints[0]
			? 'quarter'
			: 'empty';
</script>

<div class="{color}  sm:w-40 basis-[48%] p-3 rounded-2xl">
	<div class="mb-2">
		<i class="fa-solid fa-temperature-{state} text-4xl" />
		<span class=" float-right text-4xl"><b>{temperature}</b>°C</span>
	</div>
	<span class="font-semibold">{name}</span>
</div>
