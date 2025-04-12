<script lang="ts">
  	import { fadeInOnScroll } from "$lib/interfaces/fadeIn.js";
    import Total from "./Total.svelte";
    import ArrowButton from "./ArrowButton.svelte";
</script>

<div class="max-w-7xl mx-auto px-6 pt-20 mb-80">
    <p class="text-[5rem] font-semibold leading-tight mt-30 mb-[50rem]">
      Transforming Charity with Transparency & AI
    </p>
    <div class="fade-in-section grid grid-cols-2 fade-in-up" use:fadeInOnScroll>
      <Total header='Funded' subtext='RM 600,000' />
      <Total header='Distributed' subtext='RM 555,000' />
      <Total header='Donors' subtext='20,000 Donors' />
      <Total header='Helped' subtext='100,000 Recipients' />
      <ArrowButton text='Be a Donor Now!' buttonText='Donate' />
     </div>
</div>