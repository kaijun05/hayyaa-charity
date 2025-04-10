<script lang="ts">
    import Total from "./Total.svelte";
</script>

<div class="max-w-6xl mx-auto px-6 pt-20 mb-80">
    <h1 class="text-7xl font-semibold leading-tight mb-80">
      Transforming Charity with Transparency & AI
     </h1>
     <div class="grid grid-cols-2">
       <div>
         <Total header='funded' subtext='RM 450,000' />
       </div>
       <div>
         <Total header='distributed' subtext='RM 445,000' />
       </div>
       <div>
         <Total header='donors' subtext='1,600 donors' />
       </div>
       <div>
         <Total header='helped' subtext='4000 recipients' />
       </div>
        <div class="flex items-center gap-2">
        <span class="text-2xl font-bold flex items-center gap-2">Be a donor now <span class="text-lg">→</span></span>
        <a href="/donate" class="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-colors">
          Donate
        </a>
      </div>
     </div>
   </div>