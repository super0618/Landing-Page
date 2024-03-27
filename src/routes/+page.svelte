<script>
	import EventCard from "$lib/components/eventCard.svelte";
	import StoryCard from "$lib/components/storyCard.svelte";
	import Pagination from "$lib/components/pagination.svelte";
	import abstracto from "$lib/assets/abstracto.png";
	import abstracto_dark from "$lib/assets/abstracto_dark.png";
	import dxstudio from "$lib/assets/dxstudio.png";
	import { darkMode } from "$lib/store";
</script>

<div class="banner">
	<div class="container flex flex-col justify-center md:flex-row md:items-center md:justify-between h-[367px]">
		<p class="text-[84px] lg:text-[120px] xl:text-[146px] font-bold">EVENTS</p>
		<p class="max-w-[360px] xl:max-w-[400px]">
			Here's what we've lined up for you in the coming days and weeks. You may see some just concluded events here too. To see past events go here.
		</p>
	</div>
	<div class="absolute inset-0 hidden md:grid place-items-center">
		{#if $darkMode}
			<img src={abstracto_dark} alt="abstracto" />
		{:else}
			<img src={abstracto} alt="abstracto" />
		{/if}
	</div>
</div>

<div class="py-4">
	<div class="container grid grid-cols-1 lg:grid-cols-3 gap-y-6 md:gap-6">
		<div class="col-span-2 space-y-6">
			<EventCard
				eventImage="/src/lib/assets/card01.png"
				eventYear={2024}
				eventMonth="MAR"
				eventDay={12}
				eventDateTime="9:00 AM - 9:00 PM (EAT)"
				eventType="In person"
				eventTitle="Financial Services Innovation Exchange"
				eventLocation="Windsor Golf Hotel and Country Club"
				isSponcor={true}
			/>
			<EventCard
				eventImage="/src/lib/assets/card02.png"
				eventYear={2024}
				eventMonth="MAR"
				eventDay={20}
				eventDateTime="April 4, 2024"
				eventType="In person"
				eventTitle="Africa CISO Summit"
				eventLocation="Radisson Blu Upperhill, Nairobi"
				isSponcor={false}
			/>
			<EventCard
				eventImage="/src/lib/assets/card03.png"
				eventYear={2024}
				eventMonth="MAR"
				eventDay={4}
				eventDateTime="April 4, 2024"
				eventType="In person"
				eventTitle="Cloud and Security Roadshow - Uganda"
				eventLocation="Kampala, Uganda"
				isSponcor={false}
			/>
			<EventCard
				eventImage="/src/lib/assets/card04.png"
				eventYear={2024}
				eventMonth="MAR"
				eventDay={20}
				eventDateTime="at 8 AM - 6 PM (GMT + 3)"
				eventType="Virtual"
				eventTitle="Africa SaccoTech Forum 2024"
				eventLocation="Virtual Event"
				isSponcor={false}
			/>
		</div>
		<div class="space-y-4">
			<div class="text-2xl font-medium text-center dark:text-white mb-6">TOP STORIES</div>
			<StoryCard storyImage="/src/lib/assets/img01.png" storyTitle="I&M Bank, Mastercard Partner For A dx Project In Uganda" />
			<StoryCard storyImage="/src/lib/assets/img02.png" storyTitle="Brands Need AI Tools To Manage Crisis In The Digital Era" />
			<StoryCard storyImage="/src/lib/assets/img03.png" storyTitle="AFA@10 Cohort Founder Wins At AfricArena" />
			<div class="hidden lg:block">
				<img src={dxstudio} alt="dxstudio" class="w-full" />
			</div>
		</div>
	</div>
	<div class="container py-12">
		<Pagination totalPages={32} currentPage={1} onPageSelect={(e) => console.log("current page:", e)} />
	</div>
</div>

<style>
	.banner {
		position: relative;
	}
	.banner::before {
		content: "";
		position: absolute;
		top: -150px;
		left: -200px;
		width: 600px;
		height: 600px;
		background: radial-gradient(circle, #961ca544 15%, #961ca522 30%, #961ca500 60%);
		z-index: -1;
	}
	.banner::after {
		content: "";
		position: absolute;
		top: -200px;
		right: 0;
		width: 400px;
		height: 800px;
		background: radial-gradient(circle at right, #961ca530 15%, #961ca500 60%);
		z-index: -1;
	}
</style>
