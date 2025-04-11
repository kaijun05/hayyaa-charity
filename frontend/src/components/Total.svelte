<script lang="ts">
    import { onMount } from 'svelte';
    export let header: string;
    export let subtext: string;
  
    let animatedValue = 0;
    let finalValue = 0;
  
    function parseNumber(text: string): number {
      return +text.replace(/[^\d]/g, '');
    }
  
    function formatNumber(num: number): string {
      return subtext.includes("RM")
        ? `RM ${num.toLocaleString()}`
        : `${num.toLocaleString()} ${subtext.split(" ").slice(1).join(" ")}`;
    }
  
    // easing function
    function easeOutExpo(t: number): number {
      return t === 1 ? 1 : 1 - Math.pow(2, -20 * t);
    }
  
    onMount(() => {
      finalValue = parseNumber(subtext);
      let start = Math.floor(Math.random() * (finalValue / 2));
      let duration = 1500 + Math.random() * 2000;
  
      let lastValue = start;
      let startTime = performance.now();
  
      const step = (timestamp: number) => {
        let elapsed = timestamp - startTime;
        let progress = Math.min(elapsed / duration, 1);
        let eased = easeOutExpo(progress);
  
        let currentValue = Math.floor(start + (finalValue - start) * eased);
  
        if (currentValue !== lastValue || progress === 1) {
          animatedValue = currentValue;
          lastValue = currentValue;
        }
  
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          animatedValue = finalValue;
        }
      };
  
      requestAnimationFrame(step);
    });
  </script>
  
  <div class="mb-8">
    <h3 class="text-[2rem] opacity-80">Total {header}</h3>
    <p class="text-[4rem] font-semibold mt-1">{formatNumber(animatedValue)}</p>
  </div>
