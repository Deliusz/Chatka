<script lang="ts">
	import {
		getPeerCheckedTextColorVariant,
		getPeerCheckedBorderColorVariant
	} from '$lib/functions/colors';
	import { ifTimeIsInDay, getJSONfromFetch } from '$lib/functions/helpers';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { avaliableDays, avaliableTimes } from '$lib/functions/helpers';
	import type { timeData } from '$lib/functions/helpers';

	let times: timeData;
	let dataComplete = false;

	export let data;
	let color = data.user?.color;

	onMount(async () => {
		let userComebacks = await getJSONfromFetch(
			`http://10.100.100.1:5173/api/comebacks/user/${data?.user?.id}`
		);
		times = userComebacks.time;
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
										{#if ifTimeIsInDay(times, day.short, time)}
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
											class="text-lg p-2 border border-neutral-600 rounded-lg cursor-pointer {getPeerCheckedBorderColorVariant(
												color
											)} peer-checked:font-bold {getPeerCheckedTextColorVariant(
												color
											)} hover:text-neutral-100 hover:bg-neutral-700"
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
