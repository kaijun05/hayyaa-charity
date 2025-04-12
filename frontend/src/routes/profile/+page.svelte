<script lang="ts">
	export let data;
	import ProfileCss from './profile.css?url';

	const userProfile = {
		name: 'Ash',
		fullName: 'Ashikin',
		email: 'ashikinHelps@gmail.com',
		status: 'Top 1,000 Donor of the Month',
		donorRank: 'Gold Donor',
		donorSince: '30/3/2025',
		totalDonated: 10000,
		monthlyStreak: 5,
		peopleHelped: 20,
		tokensOwned: 5,
		avatar: './avatar.png'
	};
</script>

<svelte:head>
	<link rel="stylesheet" href={ProfileCss} />
</svelte:head>

<div class="profile-container fade-in-up max-w-[1500px]">
	<p class="mt-10 mb-5 text-[5rem] leading-tight font-semibold">Hello, {userProfile.name}</p>

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
				<span class="mb-5 w-full text-right text-[1.5rem] font-bold text-white">Donor Rank</span>
				<div class="rank-badge">
					{userProfile.donorRank}
					<span>since <strong>{userProfile.donorSince}</strong></span>
				</div>
			</div>
			<img src="./gold_medal.png" alt="Gold Medal" class="medal" />
		</div>
	</div>

	<div class="mx-auto mb-80 pt-20">
		<div class="grid grid-cols-2 gap-y-8">
			{#each [{ label: 'Total Donated', value: `RM${userProfile.totalDonated.toLocaleString()}` }, { label: 'Monthly Donation Streak', value: userProfile.monthlyStreak }, { label: 'People Helped', value: userProfile.peopleHelped }, { label: 'Tokens Owned', value: userProfile.tokensOwned }] as stat}
				<div>
					<h3 class="text-4xl opacity-80">{stat.label}</h3>
					<p class="mt-1 text-6xl font-semibold">{stat.value}</p>
				</div>
			{/each}
		</div>
	</div>

	<div>
		<h3 class="mb-10 text-4xl opacity-80">Tokens (5)</h3>
		{#each data.tokens as token (token.id)}
			<div class="token-card my-5 rounded-lg border-l-4 border-blue-500 bg-white p-6 shadow-md">
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
								<span class="text-sm text-gray-500">People Helped This Week - </span>
								<span class="text-lg font-bold text-gray-500"
									>{token.number_of_people_donated}</span
								>
							</div>
						</div>
						<a href="/token/{token.id}" class="custom-btn btn-3"><span>View</span></a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
