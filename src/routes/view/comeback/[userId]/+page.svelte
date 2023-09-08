<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import {
		getJSONfromFetch,
		type ComebacksData,
		type timeData,
		avaliableDays
	} from '$lib/functions/helpers';

	interface pageData {
		userId: string;
	}
	export let data: PageData & pageData;

	let userComebacks: ComebacksData;
	let dataComplete = false;
	let userTimes: timeData;

	const getUserTime = (time: string) => {
		return userTimes[time as keyof timeData];
	};

	onMount(async () => {
		setInterval(async () => {
			userComebacks = await getJSONfromFetch(`/api/comebacks/user/${data.userId}`);
			dataComplete = true;
			userTimes = userComebacks.time as timeData;
		}, 1000);
	});
</script>

<div
	out:fly={{ x: -400 }}
	in:fly={{ y: 400, delay: 400 }}
	class="justify-center sm:justify-normal sm:w-100 flex gap-2 flex-col sm:flex-row p-2"
>
	{#if dataComplete}
		<div class="justify-center flex gap-2 flex-col p-2 w-full sm:w-min mx-auto">
			<div
				class="bg-neutral-800 p-3 w-full sm:w-96 rounded-2xl"
				in:fade={{ duration: 300 }}
				out:fade={{ duration: 300 }}
			>
				<div class="flex justify-center flex-row w-100 mt-2 mb-5">
					<img
						class="h-10 mr-2 rounded-full"
						src={userComebacks.avatar || '/defaultUserAvatar.png'}
						alt=""
					/>
					<span class="text-2xl font-semibold self-center">{userComebacks.username}</span>
				</div>
				{#key userComebacks}
					<div class="flex flex-col gap-2">
						{#each avaliableDays as day}
							{#if getUserTime(day.short) == '00:00'}
								<div
									class="bg-neutral-900 text-neutral-600 items-center flex flex-row justify-around p-4 w-100 rounded-2xl"
								>
									<span class="text-lg text-center w-1/2 font-semibold block">{day.long}</span>
									<span class="justify-center text-2xl">{getUserTime(day.short)}</span>
								</div>
							{:else}
								<div
									class="bg-neutral-700 items-center flex flex-row justify-around p-4 w-100 rounded-2xl"
								>
									<span class="text-lg text-center w-1/2 font-semibold block">{day.long}</span>
									<span class="justify-center text-2xl">{getUserTime(day.short)}</span>
								</div>
							{/if}
						{/each}
					</div>
				{/key}
			</div>
		</div>
	{/if}
</div>
