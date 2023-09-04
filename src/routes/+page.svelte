<script>
	import TemperatureModule from '$lib/modules/temperature/temperatures.svelte';
	import ComebacksModule from '$lib/modules/comebacks/comebacks.svelte';
	import { fly, fade } from 'svelte/transition';
</script>

<head>
	<title>Chatka</title>
</head>

<div
	out:fly={{ x: 400 }}
	in:fly={{ x: -400 }}
	class="justify-center sm:justify-normal sm:w-100 flex gap-2 flex-col sm:flex-row p-2"
>
	<TemperatureModule />
	<ComebacksModule />
</div>
<a href="/test">Test</a>
<a href="/">Home</a>
