<script lang="ts">
	interface timeData {
		Mon: string;
		Tue: string;
		Wed: string;
		Thu: string;
		Fri: string;
		Sat: string;
		Sun: string;
	}
	export let username: string;
	export let time: timeData;
	export let avatar: string;
	avatar = avatar == '' ? '/defaultUserAvatar.png' : avatar;
	const currnetDate = new Date();
	const currentDay = currnetDate.toDateString().split(' ')[0];

	let timeCurrentDay = time[currentDay as keyof timeData];
</script>

{#if time && timeCurrentDay != '00:00'}
	<div class="bg-gradient-to-tr from-teal-500 to-emerald-700 flex flex-row w-100 p-3 rounded-2xl">
		<img class="h-10 mr-2 rounded-full" src={avatar} alt="" />
		<span class="text-2xl font-semibold self-center">{username}</span>
		<span class="text-3xl font-bold self-center ml-auto mr-0">{timeCurrentDay}</span>
	</div>
{/if}
