<script>
	import UserDropdown from '$lib/userDropdown.svelte';
</script>

<header class="h-14 w-screen flex bg-neutral-700 p-2 rounded-b-lg">
	<a href="/" class="w-10 flex">
		<img class="h-10" src="icon/favicon.svg" alt="Logo" />
	</a>
	<div class="ml-auto">
		<UserDropdown />
	</div>
</header>
