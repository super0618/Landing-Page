<script>
	export let eventImage;
	export let eventYear;
	export let eventMonth;
	export let eventDay;
	export let eventDateTime;
	export let eventType;
	export let eventTitle;
	export let eventLocation;
	export let isSponcor;
	import { IconMapPinFilled, IconClockFilled } from "@tabler/icons-svelte";
</script>

<div class="flex min-h-[304px]">
	<div class="flex flex-col items-center justify-center bg-[#961CA5] text-white basis-[69px] grow-0 shrink-0 rounded-l-[10px]">
		<p class="text-[45px] leading-[51px] font-medium">{String(eventDay).padStart(2, "0")}</p>
		<p class="text-lg">{eventMonth}</p>
		<p class="text-xs">{eventYear}</p>
	</div>
	<div class="flex-auto grid md:grid-cols-2 gap-9 bg-white dark:bg-[#1c1b21] p-4 rounded-r-[10px] dark:border dark:border-[#fff5]">
		<div class="relative">
			<img src={eventImage} alt="event" class="h-full object-cover rounded-[10px]" />
			<div class="absolute right-[10px] bottom-[10px] px-[13px] py-[9px] bg-[#312F3B88] text-sm text-white rounded-[9px]">{eventType}</div>
		</div>
		<div class="flex flex-col justify-center">
			<p class="text-[26px] leading-[29px] font-medium mb-4">{eventTitle}</p>
			<div class="flex gap-1 mb-2">
				<IconMapPinFilled color="#961CA5" size={20} />
				<p class="text-sm">{eventLocation}</p>
			</div>
			<div class="flex gap-1 mb-6">
				<IconClockFilled color="#961CA5" size={20} />
				<p class="text-sm">{eventDateTime}</p>
			</div>
			{#if !isSponcor}
				<button class="py-2 rounded-lg bg-[#961CA5] text-white text-center mb-4">BECOME A SPONSOR</button>
				<div class="grid grid-cols-2 gap-6">
					<button class="py-2 rounded-lg border">REGISTER</button>
					<button class="py-2 bg-[#EFE6F0] dark:bg-[#292730] text-[#961CA5] dark:text-[#f9f9f9] rounded-lg">SPEAK</button>
				</div>
			{/if}
		</div>
	</div>
</div>
