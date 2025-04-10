<script lang="ts">
  	import { fadeInOnScroll } from "$lib/interfaces/fadeIn.js";
    import Total from "./Total.svelte";
    import ArrowButton from "./ArrowButton.svelte";
</script>

<div class="max-w-6xl mx-auto px-6 pt-20 mb-80">
    <p class="text-[5rem] font-semibold leading-tight mt-30 mb-[50rem]">
      Transforming Charity with Transparency & AI
    </p>
    <div class="fade-in-section grid grid-cols-2 fade-in-up" use:fadeInOnScroll>
      <Total header='funded' subtext='RM 45,000,000' />
      <Total header='distributed' subtext='RM 44,445,000' />
      <Total header='donors' subtext='1,500,650 donors' />
      <Total header='helped' subtext='3,000,000 recipients' />
      <ArrowButton text='Be a donor now ' buttonText='Donate' />
     </div>
</div>