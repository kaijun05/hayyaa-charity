<script lang='ts'>
    export let header: string = ''
    export let subText: string = ''
</script>

<div class="flex flex-col gap-2 p-6 bg-black/40 rounded-4xl break-inside-avoid mb-4 shadow-2xs">
    <h1 class="font-bold text-2xl">{header}</h1>
    <p class="font-light text-justify">{subText}</p>
</div>