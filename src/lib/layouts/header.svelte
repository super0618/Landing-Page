<script>
	import logo from "$lib/assets/logo.svg";
	import logo_dark from "$lib/assets/logo_dark.svg";
	import lightbtn from "$lib/assets/lightbtn.svg";
	import darkbtn from "$lib/assets/darkbtn.svg";
	import { IconUser, IconSearch } from "@tabler/icons-svelte";
	import { darkMode } from "$lib/store";
	let menusRef;

	function toggleMenu() {
		menusRef.classList.toggle("hidden");
	}

	function switchTheme() {
		document.body.classList.toggle("dark");
		darkMode.set(!$darkMode);
	}
</script>

<div class="relative flex items-center gap-4 h-[90px] px-4 bg-white dark:bg-[#1C1B21] xl:border-none xl:bg-transparent 2xl:px-20 z-50">
	{#if $darkMode}
		<img src={logo_dark} alt="logo" />
	{:else}
		<img src={logo} alt="logo" />
	{/if}
	<div
		class="absolute hidden top-full left-0 right-0 pb-4 bg-white dark:bg-[#1C1B21] border-y dark:border-none shadow-lg xl:bg-transparent xl:pb-0 xl:border-none xl:static xl:flex xl:flex-auto xl:justify-end xl:items-center xl:shadow-none"
		bind:this={menusRef}
	>
		<a href="/" class="block px-3 py-2 text-nowrap hover:bg-gray-300 dark:hover:bg-[#131214]">HOME</a>
		<a href="/" class="block px-3 py-2 text-nowrap hover:bg-gray-300 dark:hover:bg-[#131214]">NEWS</a>
		<a href="/" class="block px-3 py-2 text-nowrap hover:bg-gray-300 dark:hover:bg-[#131214]">CXO SERIES</a>
		<a href="/" class="block px-3 py-2 text-nowrap hover:bg-gray-300 dark:hover:bg-[#131214]">PRODUCT REVIEWS</a>
		<a href="/" class="block px-3 py-2 text-nowrap hover:bg-gray-300 dark:hover:bg-[#131214]">WOMEN IN TECH</a>
		<a href="/" class="block px-3 py-2 text-nowrap hover:bg-gray-300 dark:hover:bg-[#131214]">BLOG</a>
		<a href="/" class="block font-bold text-[#961CA5] px-3 py-2 hover:bg-gray-300 dark:hover:bg-[#131214]">EVENTS</a>
		<a
			href="/"
			class="block px-3 text-nowrap py-2 hover:bg-gray-300 dark:hover:bg-[#131214] xl:inline-block xl:px-4 xl:py-3 xl:bg-[#961CA5] xl:rounded-lg xl:text-white"
		>
			Latest Magazine
		</a>
	</div>
	<div class="flex-auto xl:flex-none cursor-pointer" on:click={switchTheme}>
		{#if $darkMode}
			<img src={darkbtn} alt="mode" class="float-right" />
		{:else}
			<img src={lightbtn} alt="mode" class="float-right" />
		{/if}
	</div>
	<IconUser size={18} />
	<IconSearch size={18} />
	<button class="block cursor-pointer text-right xl:hidden py-2" on:click={toggleMenu}>&#9776;</button>
</div>
