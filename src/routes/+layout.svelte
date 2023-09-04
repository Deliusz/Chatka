<script lang="ts">
	import '../app.css';
	import Header from '$lib/header/header.svelte';
	export let data;
</script>

<Header
	headerData={{
		username: data.user?.username,
		userAvatar: data.user?.avatar
	}}
/>

<slot />
