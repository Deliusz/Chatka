<script lang="ts">
	import TemperatureBlock from './temperatureBlock.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { temperature1, temperature2 } from '../../../stores';

	let dataTime = 0;
	let dataTimeDifference = 0;
	let dataComplete = false;

	onMount(async () => {
		setInterval(async () => {
			const temps = await fetch('https://chatka.myddns.me/api/temperature.php?option=get');
			const json = await temps.json();
			let currnetDate = new Date();
			let currnetTime = currnetDate.getTime();
			let dataDate = new Date(json.time);
			dataTime = dataDate.getTime();
			temperature1.set(await parseInt(json.temp1).toString());
			temperature2.set(await parseInt(json.temp2).toString());
			dataComplete = true;
			dataTimeDifference = (currnetTime - dataTime) / 1000 / 60;
		}, 1000);
	});
</script>

{#if ($temperature1 != '0' || $temperature2 != '0') && dataTimeDifference <= 5 && dataComplete}
	<div
		class="bg-neutral-800 p-4 w-100 sm:w-96 rounded-2xl"
		in:fade={{ duration: 300 }}
		out:fade={{ duration: 300 }}
	>
		<span class="text-lg font-semibold mb-4 block sm:text-left">Temperatures</span>
		<div id="temperatureBoxContainer" class=" flex flex-wrap flex-row gap-3 justify-center">
			<TemperatureBlock
				color="bg-gradient-to-tr from-sky-500 to-blue-600"
				name="Boiler"
				temperature={$temperature1}
			/>

			<TemperatureBlock
				color="bg-gradient-to-tr from-amber-500 to-rose-600"
				name="Furnace"
				temperature={$temperature2}
				breakPoints={[50, 55, 60, 65]}
			/>
		</div>
	</div>
{/if}
