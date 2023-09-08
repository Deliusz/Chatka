<script lang="ts">
	import type { UserData } from '$lib/functions/helpers';
	import UserDropdown from '$lib/modules/header/userDropdown.svelte';

	export let data: UserData;
</script>

<header class="h-14 w-screen flex bg-neutral-700 px-6 py-2 rounded-b-lg">
	<a href="/" class="w-10 flex">
		<img class="h-10 w-10" src="/icon/favicon.svg" alt="Logo" />
	</a>
	{#if data.user}
		<div class="ml-auto">
			<UserDropdown {data} />
		</div>
	{/if}
</header>
