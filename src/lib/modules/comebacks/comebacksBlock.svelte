<script lang="ts">
	import { getBackgroundGradientVariant } from '$lib/functions/colors';
	import { getCurrentDayComebackTime } from '$lib/functions/helpers';

	export let username: string;
	export let time: object;
	export let avatar: string;
	export let color: string;
	export let id: string;
	avatar = avatar == '' ? '/defaultUserAvatar.png' : avatar;
</script>

{#if time && getCurrentDayComebackTime(time) != '00:00'}
	<a href="/view/comeback/{id}">
		<div class="{getBackgroundGradientVariant(color)} flex flex-row w-100 p-3 rounded-2xl">
			<img class="h-10 mr-2 rounded-full" src={avatar} alt="" />
			<span class="text-2xl font-semibold self-center">{username}</span>
			<span class="text-3xl font-bold self-center ml-auto mr-0"
				>{getCurrentDayComebackTime(time)}</span
			>
		</div>
	</a>
{/if}
