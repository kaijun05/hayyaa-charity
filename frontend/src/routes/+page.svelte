<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import Main from "../components/Main.svelte";
  import Testimonial from "../components/Testimonial.svelte";
</script>

  <!-- Hero Section -->
   <main class=" max-w-[80rem] min-w-[50rem] mx-auto fade-in-up">
      <Hero />
      <Main />
      <div class="grid p-4 grid-cols-3">
        <Testimonial header='test' subText='test subtext 123 ' />
      </div>
    </main>
        