<script lang="ts">
	import cssFile from './token-id.css?url';
	import { onMount } from 'svelte';
	import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
	import type { PageProps } from './$types.js';

	// Register required Chart.js components (now using DoughnutController)
	Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

	// Initialize with proper types (changed to 'doughnut')
	let chart: Chart<'doughnut', number[], string>;
	let chartCanvas: HTMLCanvasElement;

	// Chart data (keeping your 3 categories)
	let chartValues = [10, 30, 60];
	let chartLabels = ['Schools', 'Disaster', 'Homeless'];

	// Props (if you need them)
	let { data }: PageProps = $props();

	onMount(() => {
		const ctx = chartCanvas.getContext('2d');
		if (!ctx) return;

		chart = new Chart(ctx, {
			type: 'doughnut', // Changed to doughnut
			data: {
				labels: chartLabels,
				datasets: [
					{
						label: 'Distribution',
						backgroundColor: [
							'#004AAD', // Blue for Schools
							'#5271FF', // Light blue for Disaster
							'#0CC0DF' // Teal for Homeless
						],
						borderColor: 'rgb(255, 255, 255)',
						borderWidth: 1,
						data: chartValues
					}
				]
			},
			options: {
				responsive: true,
				cutout: '70%', // Adjust this to change the doughnut thickness (60-80% is typical)
				plugins: {
					legend: {
						position: 'right'
					},
					tooltip: {
						callbacks: {
							label: (context) => {
								return `${context.label}: ${context.raw}%`;
							}
						}
					}
				}
			}
		});

		// Cleanup function
		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});
	Chart.defaults.color = '#ffff';
	Chart.defaults.font.size = 20;
</script>

<svelte:head>
	<link rel="stylesheet" href={cssFile} />
</svelte:head>

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
		<div class="rounded-lg p-6">
			<h1 class="mb-4 text-2xl font-bold text-white">Total Funds Collected</h1>
			<p class="mb-4 text-4xl font-bold text-white">RM 60,500</p>
			<p class="text-xl text-white text-justify">
				This week, a total of <strong>RM60,500</strong> was collected from <strong>76</strong> generous donors. The funds were
				distributed across three main categories: <strong>10%</strong> to support <strong>underprivileged school children</strong>,
				<strong>20%</strong> toward <strong>disaster relief for families affected by recent flash floods</strong>, and <strong>70%</strong> to provide
				<strong>shelter, meals, and basic necessities for the homeless</strong>. Through this effort, aid reached <strong>450 recipients</strong> 
				across multiple regions, with prioritization determined by our AI system based on
				urgency, vulnerability, and community verification. 
			</p>
			<p class="font-xl mt-4 font-bold text-white">
				To All the Donors &horbar; Thank You for Being Part of this Impact!
			</p>
		</div>

		<!-- Section 2: Distribution (Right) -->
		<div class="mb-4 p-6 text-2xl font-bold text-white">
			<h2 class="mb-4 text-2xl font-bold text-white">Distribution Breakdown</h2>
			<div class="pie-chart">
				<canvas bind:this={chartCanvas} id="myChart"></canvas>
			</div>
		</div>

		<!-- Section 3: Donors List (Left) -->
		<div class="mb-4 p-6 text-2xl font-bold text-white">
			<h2 class="mb-4 text-xl font-bold text-white">Donors List</h2>
			<div class="space-y-2">
				<!-- Example donor items -->
				<div class="flex justify-between rounded bg-white p-3 text-black shadow-sm">
					<span>John Doe</span>
					<span class="font-medium">RM 1,000</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 text-black shadow-sm">
					<span>Jane Smith</span>
					<span class="font-medium">RM 2,500</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 text-black shadow-sm">
					<span>Acme Corp</span>
					<span class="font-medium">RM 5,000</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 text-black shadow-sm">
					<span>Annoymous Donor</span>
					<span class="font-medium">RM 5,000</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 text-black shadow-sm">
					<span>Annoymous Donor</span>
					<span class="font-medium">RM 5,000</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 text-black shadow-sm">
					<span>Annoymous Donor</span>
					<span class="font-medium">RM 5,000</span>
				</div>
				<div class="flex justify-between rounded bg-white p-3 text-black shadow-sm">
					<span>Annoymous Donor</span>

					<span class="font-medium">RM 5,000</span>
				</div>
			</div>
		</div>

		<!-- Section 4: Recipients (Right) -->
		<div class="mb-4 p-6 text-2xl font-bold text-white">
			<h2 class="mb-4 text-xl font-bold text-white">Recipients</h2>
			<div class="space-y-4">
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-black">Kai Jun Kindergarden</h3>
					<p class="text-black">RM 10,000 for school supplies</p>
				</div>
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-black">Johnny (Flood Victims Klang Valley)</h3>
					<p class="text-black">RM 15,000 for emergency relief</p>
				</div>
				<div class="rounded bg-white p-4 shadow">
					<h3 class="font-semibold text-black">Keat Hao (Kitchen Burned)</h3>
					<p class="text-black">RM 8,000 for food supplies</p>
				</div>
			</div>
		</div>
	</div>
</div>
