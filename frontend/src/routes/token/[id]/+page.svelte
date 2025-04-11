<script lang="ts">
	import './../token.css';
	import './token-id.css';

	import type { PageProps } from './$types.js';
	let { data }: PageProps = $props();
</script>

<div class="wrapper-container fade-in-up mx-w-10 container mx-auto flex w-3/4 flex-col gap-6 p-4">
	<div class="img-wrapper flex w-1/1 items-center justify-between">
		<h1 class="p-0 text-5xl">Token #{data.id}</h1>
		<img src="../token.png" alt="token" class="h-fit w-20" />
	</div>
	<!-- 	<div class="paragraph">
		<h2 class="text-3xl">Total funds collected</h2>
		<h1 class="fund text-4xl">RM 60,500</h1>
	</div> -->

	<!-- Grid Container -->
	<div class="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
		<!-- Section 1: Total Funds (Left) -->
		<div class="rounded-lg border border-blue-100 bg-blue-50 p-6">
			<h1 class="mb-4 text-2xl font-bold text-blue-800">Total funds collected</h1>
			<p class="mb-4 text-4xl font-bold text-blue-900">RM 60,500</p>
			<p class="text-gray-700">
				The amount, a total of RM60,500, was collected from 76 generous donors. The funds were
				distributed across three main categories...
			</p>
			<p class="mt-4 font-medium text-blue-800">
				To all the donors — Thank you for being part of this project.
			</p>
		</div>

		<!-- Section 2: Distribution (Right) -->
		<div class="rounded-lg border border-purple-100 bg-purple-50 p-6">
			<h2 class="mb-4 text-xl font-bold text-purple-800">Distribution Breakdown</h2>
			<div class="space-y-4">
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-purple-700">Schools Support</h3>
					<p class="text-2xl font-bold">RM 25,000</p>
				</div>
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-purple-700">Flood Relief</h3>
					<p class="text-2xl font-bold">RM 20,500</p>
				</div>
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-purple-700">Community Aid</h3>
					<p class="text-2xl font-bold">RM 15,000</p>
				</div>
			</div>
		</div>

		<!-- Section 3: Donors List (Left) -->
		<div class="rounded-lg border border-green-100 bg-green-50 p-6">
			<h2 class="mb-4 text-xl font-bold text-green-800">Donors list</h2>
			<div class="space-y-2">
				<!-- Example donor items -->
				<div class="flex justify-between rounded bg-white p-3 shadow-sm">
					<span>John Doe</span>
					<span class="font-medium">RM 1,000</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 shadow-sm">
					<span>Jane Smith</span>
					<span class="font-medium">RM 2,500</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 shadow-sm">
					<span>Acme Corp</span>
					<span class="font-medium">RM 5,000</span>
				</div>
			</div>
		</div>

		<!-- Section 4: Recipients (Right) -->
		<div class="rounded-lg border border-amber-100 bg-amber-50 p-6">
			<h2 class="mb-4 text-xl font-bold text-amber-800">Recipients</h2>
			<div class="space-y-4">
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-amber-700">Sunshine Elementary</h3>
					<p>RM 10,000 for school supplies</p>
				</div>
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-amber-700">Flood Victims (Klang Valley)</h3>
					<p>RM 15,000 for emergency relief</p>
				</div>
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-amber-700">Community Kitchen</h3>
					<p>RM 8,000 for food supplies</p>
				</div>
			</div>
		</div>
	</div>
</div>
