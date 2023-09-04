<script lang="ts">
	import { onMount } from 'svelte';
	import TemperatureBlock from './temperatureBlock.svelte';

	let tem1 = '0';
	let tem2 = '0';
	let dataComplete = false;

	onMount(async () => {
		setInterval(async () => {
			const temps = await fetch('https://chatka.myddns.me/api/temperature.php?option=get');
			const json = await temps.json();
			tem1 = parseInt(json.temp1).toString();
			tem2 = parseInt(json.temp2).toString();
			dataComplete = true;
		}, 500);
	});
</script>

{#if dataComplete}
	<div class="bg-neutral-800 p-4 w-[95%] sm:w-96 rounded-2xl sm:mx-4 my-4 mx-auto">
		<span class="text-lg font-semibold mb-4 block sm:text-left">Temperatures</span>
		<div id="temperatureBoxContainer" class=" flex flex-wrap flex-row gap-3 justify-center">
			{#key tem1}
				<TemperatureBlock
					color="bg-gradient-to-tr from-sky-500 to-blue-600"
					name="Boiler"
					temperature={tem1}
				/>
			{/key}
			{#key tem2}
				<TemperatureBlock
					color="bg-gradient-to-tr from-amber-500 to-rose-600"
					name="Furnace"
					temperature={tem2}
					breakPoints={[50, 55, 60, 65]}
				/>
			{/key}
		</div>
	</div>
{/if}
