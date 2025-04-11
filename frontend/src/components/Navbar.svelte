<script>
    import { onMount } from "svelte";
    import UserIcon from "./UserIcon.svelte";

    let scrolled = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<style>
    .navbar-transition {
        transition: all 0.4s ease-in-out;
    }
</style>

<div
    class="sticky top-0 z-50 h-[95px] font-semibold flex items-center justify-between px-3 bg-white/15 backdrop-blur navbar-transition"
    style="
        width: {scrolled ? '100%' : '80rem'};
        margin: {scrolled ? '0 auto 1rem auto' : '1rem auto'};
        border-radius: {scrolled ? '0px' : '9999px'};
        background-color: {scrolled ? '#1D2574' : ''};
    "
>
    <a href="/" rel="external" class="text-3xl font-semibold ml-8">Hayyaa</a>
    <div class="flex gap-16">
        <a href="/#about-us" class="text-1xl hover:text-slate-300">About us</a>
        <a href="/token" class="text-1xl hover:text-slate-300">Token Tracker</a>
        <a href="/donate" class="text-1xl hover:text-slate-300">Donate Now</a>
        <a href="/apply" class="text-1xl hover:text-slate-300">Apply Help</a>
    </div>
    <div>
        <UserIcon />
    </div>
</div>
