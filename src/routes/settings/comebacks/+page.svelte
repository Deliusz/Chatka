<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let avaliableTimes = ['13:50', '14:50', '15:50', '16:50', '00:00'];
	let avaliableDays = [
		{ long: 'Monday', short: 'Mon' },
		{ long: 'Tuesday', short: 'Tue' },
		{ long: 'Wednesday', short: 'Wed' },
		{ long: 'Thuersday', short: 'Thu' },
		{ long: 'Friday', short: 'Fri' },
		{ long: 'Saturday', short: 'Sat' },
		{ long: 'Sunday', short: 'Sun' }
	];
	interface timeData {
		Mon: string;
		Tue: string;
		Wed: string;
		Thu: string;
		Fri: string;
		Sat: string;
		Sun: string;
	}

	let data: timeData;

	let check = (time: string) => {
		let timeArr = time.split('-');
		console.log();
		if (data[timeArr[0] as keyof timeData] == timeArr[1]) {
			return true;
		}
		return false;
	};

	let dataComplete = false;
	const currnetDate = new Date();
	const currentDay = currnetDate.toDateString().split(' ')[0];

	onMount(async () => {
		const temps = await fetch('http://10.100.100.1:5173/api/comebacks/me');
		const json = await temps.json();
		data = json;
		console.log(json);
		dataComplete = true;
	});

	let form: any;
</script>

<div in:fly={{ y: 400, delay: 400 }} out:fly={{ x: -400 }}>
	{#if dataComplete}
		<form action="?/update" method="POST" bind:this={form}>
			<div class="justify-center flex gap-2 flex-col p-2 w-full sm:w-min mx-auto">
				{#each avaliableDays as day}
					<div class="bg-neutral-800 p-4 w-100 sm:w-96 rounded-2xl">
						<span class="text-lg font-semibold mb-4 block sm:text-left">{day.long}</span>
						<div class=" flex flex-wrap flex-col justify-center">
							<ul class="flex flex-row justify-evenly py-2">
								{#each avaliableTimes as time}
									<li>
										{#if check(day.short + '-' + time)}
											<input
												type="radio"
												id="{day.long}-{time}"
												name={day.short}
												value={time}
												class="hidden peer"
												required
												checked
												on:change={() => form.requestSubmit()}
											/>
										{:else}
											<input
												type="radio"
												id="{day.long}-{time}"
												name={day.short}
												value={time}
												class="hidden peer"
												required
												on:change={() => form.requestSubmit()}
											/>
										{/if}
										<label
											for="{day.long}-{time}"
											class="text-lg p-2 border border-neutral-600 rounded-lg cursor-pointer peer-checked:border-rose-400 peer-checked:font-bold peer-checked:text-rose-300 hover:text-neutral-100 hover:bg-neutral-700"
										>
											{time}
										</label>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			</div>
		</form>
	{/if}
</div>
