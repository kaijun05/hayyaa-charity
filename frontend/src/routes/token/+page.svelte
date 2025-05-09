<script lang="ts">
	let { data } = $props();
	import tokenCss from './token.css?url';

	// Search functionality
	let searchTerm = $state('');
	const searchableKeys = ['id']; // Add other keys you want to search

	// Filter tokens based on search term
	const filteredTokens = $derived(
		searchTerm === ''
			? data.tokens
			: data.tokens.filter((token: { [x: string]: any }) =>
					searchableKeys.some((key) =>
						String(token[key]).toLowerCase().includes(searchTerm.toLowerCase())
					)
				)
	);

	// Pagination - now works with filteredTokens
	let currentPage = $state(1);
	const itemsListedPerPage = 10;
	type PageRangeItem = number | '...';

	let totalPages = $derived(Math.ceil(filteredTokens.length / itemsListedPerPage));
	const paginatedTokens = $derived(
		filteredTokens.slice((currentPage - 1) * itemsListedPerPage, currentPage * itemsListedPerPage)
	);

	const totalItems = $derived(filteredTokens.length);

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		}
	}

	function nextPage() {
		if (currentPage < totalPages) {
			currentPage++;
		}
	}

	function prevPage() {
		if (currentPage > 1) {
			currentPage--;
		}
	}

	const getPageRange = $derived(() => {
		const range: PageRangeItem[] = [];
		const maxVisible = 3;

		range.push(1);

		let start = Math.max(2, currentPage - Math.floor(maxVisible / 2));
		let end = Math.min(totalPages - 1, currentPage + Math.floor(maxVisible / 2));

		if (currentPage <= Math.floor(maxVisible / 2) + 1) {
			end = maxVisible;
		}

		if (currentPage >= totalPages - Math.floor(maxVisible / 2)) {
			start = totalPages - maxVisible + 1;
		}

		if (start > 2) {
			range.push('...');
		}

		for (let i = start; i <= end; i++) {
			if (i > 1 && i < totalPages) {
				range.push(i);
			}
		}

		if (end < totalPages - 1) {
			range.push('...');
		}

		if (totalPages > 1) {
			range.push(totalPages);
		}

		return range;
	});
</script>

<svelte:head>
	<link rel="stylesheet" href={tokenCss} />
</svelte:head>

<div class="wrapper-container fade-in-up mx-w-10 container mx-auto flex w-3/4 flex-col gap-6">
	<h1 class="token-title text-3xl font-bold">Latest Token</h1>

	<!-- Seach Bar -->
	<div class="search-bar mb-6">
		<input
			type="text"
			placeholder="Search tokens..."
			bind:value={searchTerm}
			class="focus:outline-nonetex w-full rounded-lg border border-gray-300 px-4 py-2 text-black focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
		/>
		{#if searchTerm}
			<div class=" text-w text-white">
				Found {filteredTokens.length}
				{filteredTokens.length === 1 ? 'result' : 'results'}
			</div>
		{/if}
	</div>

	{#each paginatedTokens as token (token.id)}
		<div class="token-card rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-md">
			<div class="mb-4 flex items-center justify-between">
				<div class="img-wrapper w-1/4">
					<img src="./token.png" alt="token" />
				</div>
				<div class="token-wrapper mt-2 w-4/4">
					<div class="token-upper ml-5 flex justify-between">
						<h2 class="batch-name rounded bg-blue-100 px-2.5 py-0.5 text-xl font-semibold">
							Batch {new Date(token.created_at).toLocaleDateString('en-GB')} - {new Date(
								token.end_at
							).toLocaleDateString('en-GB')}
						</h2>
						<span class="font-medium text-black">
							#{token.id}
						</span>
					</div>

					<div class="ml-5 grid grid-cols-2 gap-4">
						<div>
							<span class="text-sm text-gray-500">People Helped This Week - </span>
							<span class="text-sm font-bold text-gray-500">{token.number_of_people_donated}</span>
						</div>
					</div>

					<a href="/token/{token.id}" class="custom-btn btn-3"><span>View</span></a>
				</div>
			</div>
		</div>
	{/each}

	<!-- Pagination controls -->
	{#if filteredTokens.length > 0}
		<div class="m-auto flex w-full flex-col content-center justify-center">
			<div
				class="m-auto flex items-center justify-between rounded-full border-4 border-orange-100 bg-white shadow-sm"
			>
				<!-- Previous Button -->
				<button
					class="page-button flex items-center font-medium text-gray-800 disabled:cursor-not-allowed disabled:text-gray-400"
					onclick={prevPage}
					disabled={currentPage === 1}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mr-1.5 h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
					</svg>
					<span>Prev</span>
				</button>

				<!-- Page Numbers -->
				<div class="page-button flex flex-1 items-center justify-center gap-1">
					{#each getPageRange() as page}
						{#if page === '...'}
							<span class="mx-1 px-2 text-gray-400">...</span>
						{:else}
							<button
								class={`mx-1 h-10 w-10 rounded-full ${page === currentPage ? 'border-4 border-indigo-200 bg-indigo-600 text-white' : 'text-gray-800 hover:bg-gray-100'}`}
								onclick={() => goToPage(page)}
							>
								{page}
							</button>
						{/if}
					{/each}
				</div>

				<!-- Next Button -->
				<button
					class="page-button flex items-center font-medium text-gray-800 disabled:cursor-not-allowed disabled:text-gray-400"
					onclick={nextPage}
					disabled={currentPage === totalPages}
				>
					<span>Next</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="ml-1.5 h-6 w-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>

			<div class="mt-4 mb-4 text-center font-medium text-gray-800">
				<span>-</span>
				<span class="mx-2 text-white">{totalItems} items</span>
				<span>-</span>
			</div>
		</div>
	{:else}
		<div class="py-8 text-center text-gray-500">No tokens found matching your search.</div>
	{/if}
</div>
