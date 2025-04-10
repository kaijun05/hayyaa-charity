<script lang="ts">
  import "./donate.css";

  let donationType = 'monthly';
  let selectedAmount: number | null = null;
  let customAmount: number | null = null;
  let isAnonymous = false;
  let errorMessage = '';

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
    }
    else {
      errorMessage = '';
    }
  }
</script>

<div class="block max-w-[1500px] my-[2rem] mx-auto py-[5rem] fade-in-up">
  <div class="donation-title flex justify-center">
    <div class="text-left text-7xl font-bold text-white w-full mb-5">
      Every cent counts.
    </div>
  </div>

  <div class="donation-section">
    <div class="donation-container">
      <!-- Form Side -->
      <div class="donation-form">
        <h2 class="donation-method text-2xl mb-5 text-white">How would you like to donate?</h2>

        <div class="donation-options">
          <button 
            class="donation-type" 
            class:active={donationType === 'monthly'}
            on:click={() => donationType = 'monthly'}>
            monthly
          </button>
          <button 
            class="donation-type"
            class:active={donationType === 'one-off'}
            on:click={() => donationType = 'one-off'}>
            one-off
          </button>
        </div>

        <div class="amount-options">
          <button 
            class="amount-button {selectedAmount === 100 ? 'active' : ''}"
            class:active={selectedAmount === 100}
            on:click={() => {selectedAmount = 100;
            customAmount = null;}}>
            RM 100
          </button>
          <button 
            class="amount-button {selectedAmount === 200 ? 'active' : ''}"
            class:active={selectedAmount === 200}
            on:click={() => {selectedAmount = 200;
            customAmount = null;}}>
            RM 200
          </button>
          <button 
            class="amount-button {selectedAmount === 300 ? 'active' : ''}"
            class:active={selectedAmount === 300}
            on:click={() => {selectedAmount = 300;
            customAmount = null;}}>
            RM 300
          </button>
        </div>

        <div class="custom-amount">
            <label for="custom-amount" class="block mb-2 text-left">Choose your own amount (RM)</label>
            <input 
              type="number" 
              id="custom-amount"
              bind:value={customAmount}
              placeholder="Enter amount" />
              {#if errorMessage}
              <div class="error-message text-red-500 mt-2">{errorMessage}</div>
              {/if}
        </div>

        <div class="anonymize">
          <label>
            <input 
              type="checkbox" 
              bind:checked={isAnonymous} />
            Anonymize your name
          </label>
        </div>

        <button class="donate-button" on:click={handleDonate}>
          DONATE
        </button>
      </div>

      <div class="image-section">
        <img src="./people-in-need.png" alt="Donation Illustration" class="donation-illustration" />
      </div>
    </div>
  </div>
  
</div>