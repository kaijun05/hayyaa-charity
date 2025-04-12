<script lang='ts'>
    export let header: string = ''
    export let subText: string = ''
</script>

<div class="grid p-4 grid-cols-3">
    <div class="flex flex-col gap-4 bg-black/60 rounded w-[15rem]">
        <h1 class="font-bold text-2xl">{header}</h1>
        <p class="font-light">{subText}</p>
    </div>
</div>