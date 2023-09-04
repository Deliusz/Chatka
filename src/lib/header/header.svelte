<script lang="ts">
	import UserDropdown from '$lib/header/userDropdown.svelte';
	interface HeaderData {
		username: string;
		userAvatar: string | undefined;
	}
	export let headerData: HeaderData;
</script>

<header class="h-14 w-screen flex bg-neutral-700 px-6 py-2 rounded-b-lg">
	<a href="/" class="w-10 flex">
		<img class="h-10" src="icon/favicon.svg" alt="Logo" />
	</a>
	{#if headerData.username}
		<div class="ml-auto">
			<UserDropdown username={headerData.username} userAvatar={headerData.userAvatar} />
		</div>
	{/if}
</header>
