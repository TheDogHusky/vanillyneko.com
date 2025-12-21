<script setup lang="ts">
import { requireRole } from "~/utils/functions";

definePageMeta({
    auth: true,
    middleware: ['sidebase-auth', requireRole("admin")]
});
</script>

<template>
    <main class="center index">
        <MainWallpaper/>
        <h1 class="font-6xl">Admin Logins!~</h1>
        <ScrollButton to="#content"/>
    </main>
    <section class="container min-h-screen bg-image bg-tertiary-wallpaper">
        <h2 class="font-6xl">Access Links!~</h2>
        <ul class="font-2xl w-3/4">
            <li>
                <p>
                    <span class="font-bold">Radarr</span>: <a href="https://riko.vnil.me" target="_blank">https://riko.vnil.me</a>
                </p>
            </li>

            <li>
                <p>
                    <span class="font-bold">Sonarr</span>: <a href="https://aiko.vnil.me" target="_blank">https://aiko.vnil.me</a>
                </p>
            </li>

            <li>
                <p>
                    <span class="font-bold">Prowlarr</span>: <a href="https://chiyo.vnil.me" target="_blank">https://chiyo.vnil.me</a>
                </p>
            </li>

            <li>
                <p>
                    <span class="font-bold">Downloader</span>: <a href="https://kiyomi.vnil.me" target="_blank">https://kiyomi.vnil.me</a>
                </p>
            </li>

            <li>
                <p>
                    <span class="font-bold">Requests</span>: <a href="https://yuki.vnil.me" target="_blank">https://yuki.vnil.me</a>
                </p>
            </li>

            <li>
                <p>
                    <span class="font-bold">AList File Manager</span>: <a href="https://fumiko.vnil.me" target="_blank">https://fumiko.vnil.me</a>
                </p>
            </li>

            <li>
                <p>
                    <span class="font-bold">Proxmox</span>: <a href="https://yumi.vnil.me" target="_blank">https://yumi.vnil.me</a>
                </p>
            </li>

            <li>
                <p>
                    <span class="font-bold">Gitea</span>: <a href="https://sakura.vnil.me" target="_blank">https://sakura.vnil.me</a>
                </p>
            </li>
        </ul>
    </section>
    <section class="container min-h-screen bg-image bg-secondary-wallpaper">
        <h2 class="font-6xl">Saving These Here For Later! (Neko Sneaky)</h2>
        <ul class="font-2xl w-3/4">
            <li>
                <p>
                    <span class="font-bold">Dame Sizing</span>:
                    <NuxtLink to="/dm">https://www.vanillyneko.com/dm</NuxtLink>
                </p>
            </li>
        </ul>
    </section>
    <section class="container min-h-screen bg-image bg-tertiary-wallpaper">
        <h2 class="font-6xl">Access Links!~</h2>
        <ul class="font-2xl w-3/4">
            <li><p><span class="font-bold">Akari</span> (Convoy): <a href="https://akari.vnil.me" target="_blank">https://akari.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Sakura</span> (Gitea): <a href="https://sakura.vnil.me" target="_blank">https://sakura.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Yumi</span> (Proxmox): <a href="https://yumi.vnil.me" target="_blank">https://yumi.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Riko</span> (Radarr): <a href="https://riko.vnil.me" target="_blank">https://riko.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Miku</span>: <a href="https://miku.vnil.me" target="_blank">https://miku.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Aiko</span> (Sonarr): <a href="https://aiko.vnil.me" target="_blank">https://aiko.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Emi</span> (Wizarr): <a href="https://emi.vnil.me" target="_blank">https://emi.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Haruka</span> (Ente-Auth): <a href="https://haruka.vnil.me" target="_blank">https://haruka.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Natsuki</span>: <a href="https://natsuki.vnil.me" target="_blank">https://natsuki.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Mai</span> (Immich): <a href="https://mai.vnil.me" target="_blank">https://mai.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Hinata</span>: <a href="https://hinata.vnil.me" target="_blank">https://hinata.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Kiyomi</span> (qBittorrent): <a href="https://kiyomi.vnil.me"
                                                                           target="_blank">https://kiyomi.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Chiyo</span> (Prowlarr): <a href="https://chiyo.vnil.me" target="_blank">https://chiyo.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Sayuri</span> (Email): <a href="https://sayuri.kigulove.moe" target="_blank">https://sayuri.kigulove.moe</a>
            </p></li>
            <li><p><span class="font-bold">Nanami</span>: <a href="https://nanami.vnil.me" target="_blank">https://nanami.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Sora</span> (Lidarr): <a href="https://sora.vnil.me" target="_blank">https://sora.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Rika</span>: <a href="https://rika.vnil.me" target="_blank">https://rika.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Yuki</span> (Requests): <a href="https://yuki.vnil.me" target="_blank">https://yuki.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Fumiko</span> (AList): <a href="https://fumiko.vnil.me" target="_blank">https://fumiko.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Ayumi</span>: <a href="https://ayumi.vnil.me" target="_blank">https://ayumi.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Hina</span>: <a href="https://hina.vnil.me" target="_blank">https://hina.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Mika</span>: <a href="https://mika.vnil.me" target="_blank">https://mika.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Rei</span> (Vaultwarden): <a href="https://rei.vnil.me" target="_blank">https://rei.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Nanako</span> (IRC Client): <a href="https://nanako.vnil.me" target="_blank">https://nanako.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Izumi</span> (Scrypted): <a href="https://izumi.vnil.me" target="_blank">https://izumi.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Kaname</span>: <a href="https://kaname.vnil.me" target="_blank">https://kaname.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Ami</span>: <a href="https://ami.vnil.me"
                                                          target="_blank">https://ami.vnil.me</a></p></li>
            <li><p><span class="font-bold">Misa</span> (Wazuh): <a href="https://misa.vnil.me" target="_blank">https://misa.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Kyouka</span>: <a href="https://kyouka.vnil.me" target="_blank">https://kyouka.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Eriko</span>: <a href="https://eriko.vnil.me" target="_blank">https://eriko.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Nao</span>: <a href="https://nao.vnil.me"
                                                          target="_blank">https://nao.vnil.me</a></p></li>
            <li><p><span class="font-bold">Haruhi</span>: <a href="https://haruhi.vnil.me" target="_blank">https://haruhi.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Yuna</span> (OpenAI): <a href="https://yuna.vnil.me" target="_blank">https://yuna.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Kaori</span>: <a href="https://kaori.vnil.me" target="_blank">https://kaori.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Akemi</span> (Home Assistant): <a href="https://akemi.vnil.me"
                                                                             target="_blank">https://akemi.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Tsukiko</span>: <a href="https://tsukiko.vnil.me" target="_blank">https://tsukiko.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Misaki</span>: <a href="https://misaki.vnil.me" target="_blank">https://misaki.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Saki</span> (BlueBubbles): <a href="https://saki.vnil.me" target="_blank">https://saki.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Asuka</span>: <a href="https://asuka.vnil.me" target="_blank">https://asuka.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Tsubaki</span> (Portainer): <a href="https://tsubaki.vnil.me"
                                                                          target="_blank">https://tsubaki.vnil.me</a>
            </p></li>
            <li><p><span class="font-bold">Oniichan</span> (Supermicro IPMI): <a href="https://oniichan.vnil.me"
                                                                                 target="_blank">https://oniichan.vnil.me</a>
            </p></li>
        </ul>
    </section>
</template>