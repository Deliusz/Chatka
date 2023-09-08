<script lang="ts">
	import { fade } from 'svelte/transition';
	import ComebacksBlock from './comebacksBlock.svelte';
	import { onMount } from 'svelte';
	import { sortComebacksByTime } from '$lib/functions/helpers';
	import type { ComebacksData } from '$lib/functions/helpers';

	let dataComplete = false;
	let comebacks: Array<ComebacksData>;

	onMount(async () => {
		setInterval(async () => {
			const temps = await fetch('http://10.100.100.1:5173/api/comebacks');
			const json = await temps.json();
			comebacks = json;
			comebacks = sortComebacksByTime(comebacks);
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
						id={comeback.id}
						avatar={comeback.avatar}
						username={comeback.username}
						time={comeback.time}
						color={comeback.color}
					/>
				{/key}
			{/each}
		</div>
	</div>
{/if}
