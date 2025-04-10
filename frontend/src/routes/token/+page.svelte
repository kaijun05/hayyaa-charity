<script lang="ts">
	export let data;
	import './token.css';
	console.log(data);
</script>

<div class="fade-in-up mx-w-10 container mx-auto flex w-3/4 flex-col gap-6">
	<h1 class="token-title text-3xl font-bold">Latest Token</h1>

	{#each data.tokens as token (token.id)}
		<div class="token-card rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-md">
			<div class="mb-4 flex items-center justify-between">
				<div class="img-wrapper w-1/4 max-w-30">
					<img src="./token.png" alt="token" />
				</div>
				<div class="token-wrapper mt-2 w-4/4">
					<div class="token-upper ml-5 flex justify-between">
						<h2 class="batch-name rounded bg-blue-100 px-2.5 py-0.5 text-xl font-semibold">
							Batch {new Date(token.created_at).toLocaleDateString()} - {new Date(
								token.end_at
							).toLocaleDateString()}
						</h2>
						<span class="font-medium text-black">
							#{token.id}
						</span>
					</div>

					<div class="ml-5 grid grid-cols-2 gap-4">
						<div>
							<span class="text-sm text-gray-500">People helped this week</span>
							<span class="text-lg font-medium text-gray-500">{token.number_of_people_donated}</span
							>
						</div>
					</div>
					<!-- <div class="button-wrap"> -->
					<button class="custom-btn btn-3"><span>View</span></button>
					<!-- </div> -->
				</div>
			</div>
			<!-- 
			<div class="mt-4 border-t border-gray-200 pt-4">
				<p class="text-gray-600">
					There are lots of people helped out during this week, 2 of them are in sight need of me.
				</p>
			</div> -->
		</div>
	{/each}
</div>
