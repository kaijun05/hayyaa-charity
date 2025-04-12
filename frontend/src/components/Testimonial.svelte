<script lang='ts'>
    import Quote from "./Quote.svelte";
    const quotes = {
        amirah: {
            header: 'Amirah, Donor from Kelantan',
            subText: 'Finally, I could actually see where my donations went. I donated RM200 and few days after I saw it helped a family in Kepong, it brightens my day seeing people are actually helped with my donations, I love the transparency given for us donors.'
        },
        ken: {
            header: 'Ken, Monthly donor',
            subText: 'I used to donate quietly and never thought much of it. But seeing the impact made from my donations, it made me want to give more to help them. The donor badges were a nice touch too, it’s like an achievement seeing it, having that sense of helping people really impacted the amount i am willing to donate.'
        },
        iman: {
            header: 'Iman, Surau Community Agent',
            subText: 'We used to manage aid manually, this system helps us track who received what, when and how. It’s easier to manage now and feel more organized with everyone involved'
        },
        aina: {
            header: 'Aina, Zakat Fund Administrator',
            subText: 'The AI-based recipient prioritization had saved us hours of manual review, ensuring the most urgent cases are helped first'
        },
        chin: {
            header: 'Chin, Beneficiary from Kelantan',
            subText: 'I lost my job after the flood, they gave me money for my children for groceries after a few days of application. I did not expect the funds to be distributed to us fast.'
        },
        hamzah: {
            header: 'Hamzah, Recipient in Pahang',
            subText: 'I do not have a phone to reach out to anyone and asking for help seems even more impossible, my family were at the brink of starving. My local surau signed me up for the fund and after a few days I was able to receive the fund and feed my family, this system should be used throughout Malaysia to help more people like me.'
        },
    }

    import { fadeInOnScroll } from "$lib/interfaces/fadeIn.js";
</script>

<div class="fade-in-section mt-[35rem] mb-64" use:fadeInOnScroll>
    <h1 class="text-6xl font-bold mb-2">Real people, Real impact</h1>
    <p class="text-6xl font-bold mb-1">❝</p>
    <div class="columns-1 sm:columns-2 md:columns-3">
        <Quote header={quotes.amirah.header} subText={quotes.amirah.subText}/>
        <Quote header={quotes.aina.header} subText={quotes.aina.subText}/>
        <Quote header={quotes.ken.header} subText={quotes.ken.subText}/>
        <Quote header={quotes.chin.header} subText={quotes.chin.subText}/>
        <Quote header={quotes.iman.header} subText={quotes.iman.subText}/>
        <Quote header={quotes.hamzah.header} subText={quotes.hamzah.subText}/>
    </div>
</div>