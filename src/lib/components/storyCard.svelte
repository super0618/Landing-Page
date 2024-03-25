<script>
	export let storyImage;
	export let storyTitle;
</script>

<div class="flex bg-[#1C1B21] rounded-[10px] p-2 border border-[#fff5] dark:border-[#666] min-h-[84px]">
	<div class="basis-[92px] grow-0 shrink-0">
		<img src={storyImage} alt="event" class="h-full object-cover rounded-[10px]" />
	</div>
	<div class="flex-auto flex items-center px-9 font-medium">
		<p class="text-sm text-white">{storyTitle}</p>
	</div>
</div>
