<script>
	export let totalPages;
	export let currentPage;
	export let onPageSelect;

	import { IconChevronLeft, IconChevronRight } from "@tabler/icons-svelte";

	function nextPage() {
		let page = Math.min(currentPage + 1, totalPages);
		if (currentPage == page) return;
		currentPage = Math.min(currentPage + 1, totalPages);
		onPageSelect(currentPage);
	}

	function prevPage() {
		let page = Math.max(currentPage - 1, 1);
		if (currentPage == page) return;
		currentPage = page;
		onPageSelect(currentPage);
	}

	function onPageChange(page) {
		if (currentPage == page) return;
		currentPage = page;
		onPageSelect(currentPage);
	}
</script>

<div class="pagination">
	<button on:click={prevPage} disabled={currentPage === 1} class="pg-prevbtn"><IconChevronLeft /></button>

	{#if currentPage > 3}
		<button on:click={() => onPageChange(1)} class="pg-item">1</button>
		<span class="pg-break-item">...</span>
	{/if}

	{#if currentPage == 3}
		<button on:click={() => onPageChange(1)} class="pg-item">1</button>
	{/if}

	{#each Array.from({ length: Math.min(totalPages, 3) })
		.map((_, i) => currentPage - 1 + i)
		.filter((n) => n > 0 && n <= totalPages) as page}
		<button on:click={() => onPageChange(page)} class="pg-item {currentPage === page ? 'pg-selected' : ''}">{page}</button>
	{/each}

	{#if currentPage < totalPages - 2}
		<span class="pg-break-item">...</span>
		<button on:click={() => onPageChange(totalPages)} class="pg-item">{totalPages}</button>
	{/if}

	{#if currentPage == totalPages - 2}
		<button on:click={() => onPageChange(totalPages)} class="pg-item">{totalPages}</button>
	{/if}

	<button on:click={nextPage} disabled={currentPage === totalPages} class="pg-nextbtn"><IconChevronRight /></button>
</div>

<style>
	.pagination {
		display: flex;
		justify-content: center;
		gap: 12px;
	}
	.pg-item,
	.pg-break-item {
		display: grid;
		place-items: center;
		font-weight: 500;
		flex-basis: 64px;
		border-radius: 50%;
	}
	.pg-item:hover {
		border: 1px solid #5f5f5f;
	}
	.pg-selected {
		font-weight: 800;
		color: #961ca5;
	}
	.pg-prevbtn,
	.pg-nextbtn {
		color: #5f5f5f;
		display: grid;
		place-items: center;
		font-weight: 500;
		border: 1px solid #5f5f5f;
		flex-basis: 64px;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
	}
</style>
