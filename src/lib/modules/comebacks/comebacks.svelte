<script lang="ts">
	import { fade } from 'svelte/transition';
	import ComebacksBlock from './comebacksBlock.svelte';
	import { onMount } from 'svelte';

	interface timeData {
		Mon: string;
		Tue: string;
		Wed: string;
		Thu: string;
		Fri: string;
		Sat: string;
		Sun: string;
	}
	interface ComebacksData {
		username: string;
		avatar: string;
		time: timeData;
	}

	let dataComplete = false;
	let comebacks: Array<ComebacksData>;

	onMount(async () => {
		let interval = setInterval(async () => {
			const temps = await fetch('http://10.100.100.1:5173/api/comebacks');
			const json = await temps.json();
			comebacks = json;
			const currnetDate = new Date();
			const currentDay = currnetDate.toDateString().split(' ')[0];
			comebacks.sort((a, b) => {
				let aa = new Date(`2000-01-01T${a.time[currentDay as keyof timeData]}`).getTime();
				let bb = new Date(`2000-01-01T${b.time[currentDay as keyof timeData]}`).getTime();

				return aa - bb;
			});

			dataComplete = true;
		}, 1000);
	});
</script>

{#if dataComplete}
	<div
		class="bg-neutral-800 p-4 w-100 sm:w-96 rounded-2xl"
		in:fade={{ duration: 300 }}
		out:fade={{ duration: 300 }}
	>
		<a href="/settings/comebacks">
			<span class="text-lg font-semibold mb-4 block sm:text-left">Comebacks</span>
		</a>
		<div class=" flex flex-wrap flex-col gap-3 justify-center">
			{#each comebacks as comeback}
				{#key comeback}
					<ComebacksBlock
						avatar={comeback.avatar}
						username={comeback.username}
						time={comeback.time}
					/>
				{/key}
			{/each}
		</div>
	</div>
{/if}
