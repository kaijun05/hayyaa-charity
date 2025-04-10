<script lang="ts">

  import "./profile.css";
  let userProfile = {
    name: 'Ash',
    fullName: 'Ashikin',
    email: 'ashikinHelps@gmail.com',
    status: 'Top 1,000 donor of the month',
    donorRank: 'Gold donor',
    donorSince: '30/3/2025',
    totalDonated: 10000,
    monthlyStreak: 5,
    peopleHelped: 20,
    tokensOwned: 5,
    avatar: "./avatar.png",
  };

</script>

<div class="profile-container max-w-[1500px] fade-in-up">
  <h1>Hello, {userProfile.name}</h1>
  
  <div class="profile-header">
    <div class="profile-info">
      <img src={userProfile.avatar} alt={userProfile.name} class="profile-avatar" />
      <div class="profile-details">
        <h2>{userProfile.fullName}</h2>
        <p class="status">{userProfile.status}</p>
        <p class="email">{userProfile.email}</p>
      </div>
    </div>
    
    <div class="donor-rank">
      <div>
        <span class="text-right text-[1.5rem] font-bold text-white w-full mb-5">Donor rank</span>
        <div class="rank-badge">
          {userProfile.donorRank}
          <span>since {userProfile.donorSince}</span>
        </div>
      </div>
      <img src="./gold_medal.png" alt="Gold Medal" class="medal"/>
    </div>
  </div>

  <div class="mx-autopt-20 mb-80">
    <div class="grid grid-cols-2">
      <div class="mb-8">
        <h3 class="text-sm opacity-80">Total donated</h3>
        <p class="text-4xl font-semibold mt-1">RM10,000</p>
      </div>
      <div class="mb-8">
        <h3 class="text-sm opacity-80">Monthly donation streak</h3>
        <p class="text-4xl font-semibold mt-1">5</p>
      </div>
      <div class="mb-8">
        <h3 class="text-sm opacity-80">People helped</h3>
        <p class="text-4xl font-semibold mt-1">20</p>
      </div>
      <div class="mb-8">
        <h3 class="text-sm opacity-80">Tokens owned</h3>
        <p class="text-4xl font-semibold mt-1">5</p>
      </div>
    </div>
  </div>

</div>
