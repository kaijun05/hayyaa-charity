<script lang="ts">
    export let text: string = ''
    export let buttonText: string = ''
</script>

<div class="flex items-center gap-2">
    <span class="text-2xl font-bold flex items-center gap-2">{text}<span class="text-lg">→</span></span>
    <a href="/donate" class="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 transition-colors">
    {buttonText}
    </a>
</div>