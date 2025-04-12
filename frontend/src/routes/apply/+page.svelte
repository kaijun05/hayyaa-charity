<script>
	import ApplyCss from './apply.css?url';

	let fullName = '';
	let icNumber = '';
	let email = '';
	let phone = '';
	let address = '';
	let monthlyIncome = '';
	let householdSize = '';
	let healthCondition = '';
	let employmentStatus = '';
	let documents = '';
	let remarks = '';

	let errorMessage = '';

	const healthOptions = ['Healthy', 'Chronic Illness', 'Disabled', 'Elderly Care', 'Other'];

	const employmentOptions = ['Employed', 'Unemployed', 'Student', 'Retired', 'Other'];

	function handleSubmit() {
		if (!fullName || !icNumber || !address || !monthlyIncome || !householdSize) {
			errorMessage = 'Please fill in all required fields (*)';
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		console.log({
			fullName,
			icNumber,
			email,
			phone,
			address,
			monthlyIncome,
			householdSize,
			healthCondition,
			employmentStatus,
			documents,
			remarks
		});

		errorMessage = '';
		alert('Application submitted successfully!');
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={ApplyCss} />
</svelte:head>
<div class="fade-in-up mx-auto block max-w-[1500px] py-[5rem]">
	<div class="mb-5 w-full text-left text-7xl font-bold text-white">
		You're not alone, let us help.
	</div>

	<div class="application-form">
		<h2 class="form-title">Application for Financial Aid</h2>

		{#if errorMessage}
			<div class="error-text">{errorMessage}</div>
		{/if}

		<div class="form-grid">
			<div>
				<label for="fullName" class="form-label">Enter Your Name *</label>
				<input
					id="fullName"
					type="text"
					bind:value={fullName}
					placeholder="Full Name"
					required
					class="input"
				/>
			</div>

			<div>
				<label for="icNumber" class="form-label">Enter Your IC/Passport Number *</label>
				<input
					id="icNumber"
					type="text"
					bind:value={icNumber}
					placeholder="IC Number"
					required
					class="input"
				/>
			</div>

			<div>
				<label for="email" class="form-label">Enter Your Email (optional)</label>
				<input id="email" type="email" bind:value={email} placeholder="Email" class="input" />
			</div>

			<div>
				<label for="phone" class="form-label">Enter Your Phone Number (optional)</label>
				<input id="phone" type="tel" bind:value={phone} placeholder="Phone Number" class="input" />
			</div>

			<div>
				<label for="address" class="form-label">Enter Your Address *</label>
				<input
					id="address"
					type="text"
					bind:value={address}
					placeholder="Address"
					required
					class="input"
				/>
			</div>

			<div>
				<label for="monthlyIncome" class="form-label">Enter Your Monthly Income (RM) *</label>
				<input
					id="monthlyIncome"
					type="number"
					bind:value={monthlyIncome}
					placeholder="Monthly Income"
					required
					class="input"
				/>
			</div>

			<div>
				<label for="householdSize" class="form-label">Enter Your Household Size *</label>
				<input
					id="householdSize"
					type="number"
					bind:value={householdSize}
					placeholder="Household Size"
					required
					class="input"
				/>
			</div>

			<div>
				<label for="healthCondition" class="form-label">Select Your Health Condition *</label>
				<select id="healthCondition" bind:value={healthCondition} class="input options">
					<option value="" disabled selected>Health Condition</option>
					{#each healthOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</div>

			{#if healthCondition === 'Disabled' || healthCondition === 'Chronic Illness' || healthCondition === 'Other'}
				<div>
					<label for="supportingDocument" class="form-label">Upload Supporting Document *</label>
					<input type="file" class="input" />
				</div>
			{/if}

			<div>
				<label for="employmentStatus" class="form-label">Select Your Employment Status</label>
				<select id="employmentStatus" bind:value={employmentStatus} class="input options">
					<option value="" disabled selected>Employment Status</option>
					{#each employmentOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="remarks" class="form-label">
					Remarks: Explain Your Situation, Needs, or Circumstances
					</label>
				<textarea id="remarks" bind:value={remarks} rows="4" class="input"></textarea>
			</div>

			<div class="button-container">
				<button on:click={handleSubmit} class="submit-button"> Submit Application </button>
			</div>
		</div>
	</div>
</div>
