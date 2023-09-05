<script lang="ts">
	export let form;
</script>

<header>
	<title>Login</title>
</header>
<form class="flex flex-col items-center" action="?/login" method="POST">
	<div class="min-h-full flex flex-col justify-center sm:py-12">
		<div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
			<div class="bg-neutral-700 shadow w-full rounded-lg divide-y divide-gray-200">
				<div class="px-5 pt-7 pb-1">
					<label for="email" class="font-semibold text-sm text-neutral-100 pb-1 block">E-mail</label
					>
					<input
						type="email"
						name="email"
						class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
						value={form?.email || ''}
					/>
					<label for="password" class="font-semibold text-sm text-neutral-100 pb-1 block"
						>Password</label
					>
					<input
						name="password"
						type="password"
						class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
					/>
					<button
						type="submit"
						class="transition duration-200 bg-[--accent-color] hover:saturate-150 focus:saturate-150 focus:shadow-sm focus:ring-4 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
					>
						<span class="inline-block mr-2">Login</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="w-4 h-4 inline-block"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</button>
					{#if form?.error}
						<span class="text-red-500 block pt-1 w-full text-center">
							Invalid email or password
						</span>
					{:else}
						<span class="text-red-500 block pt-1">&nbsp;</span>
					{/if}
				</div>
			</div>
		</div>
	</div>
</form>

<style>
	input {
		color: black;
	}
</style>
