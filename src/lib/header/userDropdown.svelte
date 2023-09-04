<script lang="ts">
	export let username: string;
	export let userAvatar: string | undefined;

	if (userAvatar == '') userAvatar = '/defaultUserAvatar.png';

	interface DropdownEntry {
		link: string;
		icon: string;
		text: string;
	}
	export let dropdownEntries: DropdownEntry[] = [];

	import { onMount } from 'svelte';
	onMount(() => {
		window.onclick = function (event: MouseEvent) {
			var userDropdown = document.querySelector('#userDropdown') as HTMLElement;
			if (event) {
				if (
					event.target instanceof HTMLElement &&
					event.target?.contains(userDropdown) == true &&
					event.target !== userDropdown
				) {
					hideUserProfileDropdown();
				}
			}
		};
	});
	const toggleUserProfileDropdown = () => {
		let userDropdown = document.querySelector('#userDropdown') as HTMLElement;
		if (userDropdown) {
			userDropdown.style.opacity != '0' && userDropdown.style.visibility != ''
				? hideUserProfileDropdown()
				: showUserProfileDropdown();
		}
	};
	const hideUserProfileDropdown = () => {
		var userDropdown = document.querySelector('#userDropdown') as HTMLElement;
		userDropdown.style.opacity = '0';
		userDropdown.style.visibility = 'hidden';
	};
	const showUserProfileDropdown = () => {
		var userDropdown = document.querySelector('#userDropdown') as HTMLElement;
		userDropdown.style.opacity = '100';
		userDropdown.style.visibility = 'visible';
	};
</script>

<div class="w-60">
	<div class="w-max ml-auto">
		<button
			class=" outline-none focus:outline-none w-auto h-10 ml-auto flex"
			id="userDropdownButton"
			on:click={() => {
				toggleUserProfileDropdown();
			}}
			aria-label="User Dropdown"
		>
			<span class="z-30 group h-10 w-10 inline-block">
				<img class="  rounded-full overflow-hidden transition" src={userAvatar} alt="" />
				<div
					class="relative duration-150 -z-10 group-hover:scale-100 transition bg-[--accent-color] scale-0 mt-[-2.75rem] ml-[-0.25rem] w-12 h-12 rounded-full overflow-hidden"
				/>
			</span>
		</button>
		<div
			id="userDropdown"
			class=" z-20 absolute left-auto right-0 invisible group-hover:visible w-64 transform opacity-0 group-hover:opacity-100
            transition duration-300 ease-in-out origin-top bg-neutral-700 rounded-b-lg overflow-hidden"
		>
			<div class="flex justify-around w-auto mx-auto">
				<img class="w-14 rounded-full" src={userAvatar} alt="" />
				<div class="w-[60%]">
					<span class="text-sm">Signed in as</span>
					<br />
					<span class=" font-bold text-xl">{username}</span>
				</div>
			</div>
			<hr class="mt-2 border-[--accent-color] border-[1px] rounded-full w-11/12 mx-auto" />
			<ul class="pt-1">
				{#if dropdownEntries.length > 0}
					{#each Object.entries(dropdownEntries) as [str, dropdownEntry]}
						<a href={dropdownEntry.link}
							><li
								class="flex items-center rounded-sm px-3 py-2 hover:bg-neutral-600 hover:border-[--accent-color] transition border-l-4 border-transparent"
							>
								{dropdownEntry.icon}
								<span> {dropdownEntry.text} </span>
							</li></a
						>
					{/each}
				{/if}
				<a href="/settings"
					><li
						class="flex items-center rounded-sm px-3 py-2 hover:bg-neutral-600 hover:border-[--accent-color] transition border-l-4 border-transparent"
					>
						<i class="fa-solid fa-gear text-xl mr-3" />
						<span> Settings </span>
					</li></a
				>
				<form action="/logout?/logout" method="post">
					<button class="inline w-[100%]">
						<li
							class="hover:text-rose-400 flex items-center rounded-sm px-3 py-2 hover:bg-neutral-600 hover:border-[--accent-color] transition border-l-4 border-transparent"
						>
							<i class="fa-solid fa-arrow-right-from-bracket text-xl mr-3" />
							<span>Sign Out</span>
						</li>
					</button>
				</form>
			</ul>
		</div>
	</div>
</div>
