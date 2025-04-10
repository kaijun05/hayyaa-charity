<script lang="ts">
    import Total from "./Total.svelte";
    import ArrowButton from "./ArrowButton.svelte";
</script>

<div class="max-w-6xl mx-auto px-6 pt-20 mb-80 fade-in-up">
    <h1 class="text-7xl font-semibold leading-tight mb-80">
      Transforming Charity with Transparency & AI
     </h1>
     <div class="grid grid-cols-2 fade-in-up">
        <Total header='funded' subtext='RM 450,000' />
        <Total header='distributed' subtext='RM 445,000' />
        <Total header='donors' subtext='1,600 donors' />
        <Total header='helped' subtext='4000 recipients' />
        <ArrowButton text='Be a donor now ' buttonText='Donate' />
     </div>
   </div>