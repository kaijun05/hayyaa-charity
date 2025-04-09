<script>
    import UserIcon from "./UserIcon.svelte";
</script>

<div class="flex m-auto w-[90%] gap-8 justify-between rounded-full px-3 my-4 items-center bg-white/15 font-semibold h-[95px]">
    <a href="/" class="text-3xl font-semibold ml-8">Hayyaa</a>
    <div class="flex gap-16">
        <a href="/#about-us" class="text-1xl hover:text-slate-300">About us</a>
        <a href="/token" class="text-1xl hover:text-slate-300">Token Tracker</a>
        <a href="/donate" class="text-1xl hover:text-slate-300">Donate now</a>
    </div>
    <div>
        <UserIcon />
    </div>
</div>