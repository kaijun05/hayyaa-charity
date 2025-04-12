<script lang="ts">
	import DonateCss from './donate.css?url';

	let donationType = 'monthly';
	let selectedAmount: number | null = null;
	let customAmount: number | null = null;
	let isAnonymous = false;
	let errorMessage = '';
	const amounts = [100, 200, 300];

	function handleDonate() {
		const amount = customAmount || selectedAmount;
		if (!amount || amount < 50) {
			errorMessage = 'Please enter a valid amount (minimum RM 50).';
			return;
		}
		console.log(`Donating ${amount} RM ${donationType}${isAnonymous ? ' anonymously' : ''}`);
		errorMessage = '';
	}

	$: if (customAmount && customAmount !== null) {
		selectedAmount = null;
		if (Number(customAmount) < 50 || Number(customAmount) < 0) {
			errorMessage = 'Amount must be more than RM50';
		} else {
			errorMessage = '';
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={DonateCss} />
</svelte:head>

<div class="fade-in-up mx-auto block max-w-[1500px] py-[5rem]">
	<div class="donation-title flex justify-center">
		<div class="mb-5 w-full text-left text-7xl font-bold text-white">Every cent counts.</div>
	</div>

	<div class="donation-section">
		<div class="donation-container">
			<!-- Form Side -->
			<div class="donation-form">
				<h2 class="donation-method mb-5 text-2xl text-white">How would you like to donate?</h2>

				<div class="donation-options">
					<button
						class="donation-type"
						class:active={donationType === 'monthly'}
						on:click={() => (donationType = 'monthly')}
					>
						monthly
					</button>
					<button
						class="donation-type"
						class:active={donationType === 'one-off'}
						on:click={() => (donationType = 'one-off')}
					>
						one-off
					</button>
				</div>

				<div class="amount-options">
					{#each amounts as amount}
						<button
							class="amount-button"
							class:active={selectedAmount === amount}
							on:click={() => {
								selectedAmount = amount;
								customAmount = null;
							}}
						>
							RM {amount}
						</button>
					{/each}
				</div>

				<div class="custom-amount">
					<label for="custom-amount" class="mb-2 block text-left">Choose Your Own Amount (RM)</label
					>
					<input
						type="number"
						id="custom-amount"
						bind:value={customAmount}
						placeholder="Enter Amount"
					/>
					{#if errorMessage}
						<div class="error-message mt-2 text-red-500">{errorMessage}</div>
					{/if}
				</div>

				<div class="anonymize">
					<label>
						<input type="checkbox" bind:checked={isAnonymous} />
						Anonymize Your Name?
					</label>
				</div>

				<button class="donate-button" on:click={handleDonate}> DONATE </button>
			</div>

			<div class="image-section">
				<img src="./people-in-need.png" alt="Donation Illustration" class="donation-illustration" />
			</div>
		</div>
	</div>
</div>
