<script lang="ts">
	import '../app.css';
	import Header from '$lib/modules/header/header.svelte';
	import type { UserData } from '$lib/functions/helpers';
	export let data: UserData;
</script>

<Header {data} />

<slot />
