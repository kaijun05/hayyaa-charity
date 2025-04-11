<script lang="ts">
  export let data;
  import "./profile.css";

  const userProfile = {
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
  <p class="text-[5rem] font-semibold leading-tight mt-10 mb-5">Hello, {userProfile.name}</p>

  <div class="profile-header">
    <div class="profile-info text-xl">
      <img src={userProfile.avatar} alt={userProfile.name} class="profile-avatar" />
      <div class="profile-details">
        <h2 class="font-semibold">{userProfile.fullName}</h2>
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
      <img src="./gold_medal.png" alt="Gold Medal" class="medal" />
    </div>
  </div>

  <div class="mx-auto pt-20 mb-80">
    <div class="grid grid-cols-2 gap-y-8">
      {#each [
        { label: "Total donated", value: `RM${userProfile.totalDonated.toLocaleString()}` },
        { label: "Monthly donation streak", value: userProfile.monthlyStreak },
        { label: "People helped", value: userProfile.peopleHelped },
        { label: "Tokens owned", value: userProfile.tokensOwned }
      ] as stat}
        <div>
          <h3 class="text-4xl opacity-80">{stat.label}</h3>
          <p class="text-6xl font-semibold mt-1">{stat.value}</p>
        </div>
      {/each}
    </div>
  </div>
  
  <div>
    <h3 class="text-4xl opacity-80 mb-10">Tokens (5)</h3>
  	{#each data.tokens as token (token.id)}
      <div class="token-card rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-md my-5">
        <div class="mb-4 flex items-center justify-between">
          <div class="img-wrapper w-1/4 max-w-30">
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
</div>


