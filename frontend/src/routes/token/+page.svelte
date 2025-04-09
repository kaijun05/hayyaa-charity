<script lang="ts">
	export let data;
	import './token.css';
	console.log(data);
</script>

<div class="container mx-auto flex w-3/4 flex-col gap-6">
	<h1 class="token-title text-3xl font-bold">Latest Token</h1>

	{#each data.tokens as token (token.id)}
		<div class="token-card rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-md">
			<div class="mb-4 flex items-start justify-between">
				<h2 class="batch-name rounded bg-blue-100 px-2.5 py-0.5 text-xl font-semibold">
					Batch {new Date(token.created_at).toLocaleDateString()} - {new Date(
						token.end_at
					).toLocaleDateString()}
				</h2>
				<span class="font-medium text-black">
					#{token.id}
				</span>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<span class="text-sm text-gray-500">People helped this week</span>
					<span class="text-lg font-medium text-gray-500">{token.number_of_people_donated}</span>
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
