<script setup lang="ts">
const active = ref(false);
const route = useRoute();

function updadeHeaderColor() {
    const header = document.querySelector('header');
    if (header) {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

onMounted(() => {
    updadeHeaderColor();
    window.addEventListener('scroll', updadeHeaderColor);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', updadeHeaderColor);
});

const toggleItems = () => {
    active.value = !active.value;
};

watch(() => route.path, () => {
    active.value = false;
});
</script>

<template>
    <header>
        <nav class="navbar">
            <div class="navbar-left">
                <div class="navbar-toggle-wrapper" :class="{ active }" @click="toggleItems">
                    <svg class="navbar-toggle" viewBox="0 0 24 24" stroke="currentColor" focusable="false">
                        <g transform="translate(12,12)">
                            <path class="navbar-toggle-line-1" d="M-9 -5 L9 -5" fill="none" stroke-width="2"></path>
                            <path class="navbar-toggle-line-2" d="M-9 0 L9 0" fill="none" stroke-width="2"></path>
                            <path class="navbar-toggle-line-3" d="M-9 5 L9 5" fill="none" stroke-width="2"></path>
                        </g>
                    </svg>
                </div>
                <NuxtLink to="/" class="navbar-brand">
                    <Image src="/img/logo.png" alt="VanillyNeko Logo" />
                    <span>VanillyNeko</span>
                </NuxtLink>
            </div>
            <div class="navbar-collapse" :class="{ active }">
                <ul class="navbar-items">
                    <li>
                        <NuxtLink to="/"><span>Home</span></NuxtLink>
                    </li>
                    <li>
                        <Dropdown>
                            <template #trigger>
                                <span>Donations</span>
                            </template>

                            <li>
                                <a target="_blank" href="https://www.amazon.com/hz/wishlist/ls/15EGTSWVHZJHX?ref_=wl_share">Amazon Wishlist</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://cash.app/$VanillyNeko">Cashapp</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://vanillyneko.gumroad.com/coffee">Gumroad</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://ko-fi.com/vanillyneko">Ko-Fi</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.paypal.com/paypalme/vanillynekottv">PayPal</a>
                            </li>
                            <li>
                                <SubDropdown>
                                    <template #trigger>
                                        <span>Stripe Donation</span>
                                    </template>
                                    

                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/5kAeUU0W9dL39e8bIM">5$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/5kAeUU0W9dL39e8bIM">10$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/6oEaEE48lgXfduo9AF">15$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/9AQ00034hdL39e86ov">20$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/3cs7ss48lbCV0HCfZ6">25$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/28o000dIVcGZfCwcMV">30$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/9AQ3cc8oB7mFaic3cm">35$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/dR600048lcGZaic7sD">40$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/14k1440W922leys3co">45$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/3cs1448oB4at3TOdQT">50$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/00g288gV7ayRduo00d">55$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/5kA9AAdIV9uNfCw3cq">60$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/00g3cccERbCV1LGcN1">65$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/4gwfYY8oBfTb61WaEU">70$ Monthly</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://buy.stripe.com/8wM4gg5cp9uN4XS7sJ">75$ Monthly</a>
                                    </li>
                                </SubDropdown>
                            </li>
                            <li>
                                <a target="_blank" href="https://billing.stripe.com/p/login/6oE6px2Zwe6v2QwaEE">Manage Stripe Billing</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://venmo.com/u/VanillyNeko">Venmo</a>
                            </li>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <template #trigger>
                                <span>Socials</span>
                            </template>

                            <li>
                                <a target="_blank" href="https://bsky.app/profile/vanillyneko.bsky.social">Bluesky</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://discord.com/invite/6vQUZ4Q4YT">Discord</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/vanillyneko">Facebook Page</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://giphy.com/channel/vanillyneko">Giphy</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/VanillyNeko">GitHub (organization)</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/arty01238">Github (personal)</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.google.com/search?q=VanillyNeko">Google Search</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/vanillyneko/">Instagram</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/vanillyneko">History</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://myanimelist.net/profile/VanillyNeko">MyAnimeList</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.snapchat.com/@vanillyneko">Snapchat</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://open.spotify.com/user/alrider01226">Spotify</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://steamcommunity.com/id/VanillyNeko/">Steam</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://tenor.com/users/vanillyneko">Tenor</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.tiktok.com/@vanillyneko">Tiktok</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.twitch.tv/vanillyneko">Twitch</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://x.com/vanillyneko">Twitter/X</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://vrchat.com/home/user/usr_79f2acb3-46b6-4a0d-a54f-af8211b16188">VRChat</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.youtube.com/@vanillyneko">YouTube</a>
                            </li>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <template #trigger>
                                <span>Services</span>
                            </template>

                            <li>
                                <SubDropdown>
                                    <template #trigger>
                                        <span>AI Services</span>
                                    </template>
                                    <li>
                                        <a target="_blank" href="https://yuna.vnil.cc/">Free Chatbot</a>
                                    </li>
                                </SubDropdown>
                            </li>
                            <li>
                                <SubDropdown>
                                    <template #trigger>
                                        <span>Client Services</span>
                                    </template>
                                    <li>
                                        <a target="_blank" href="https://nanako.vnil.me/">IRC Client</a>
                                    </li>
                                </SubDropdown>
                            </li>
                            <li>
                                <NuxtLink to="/discord-themes">Discord Themes</NuxtLink>
                            </li>
                            <li>
                                <SubDropdown>
                                    <template #trigger>
                                        <span>File Sharing Services</span>
                                    </template>
                                    <li>
                                        <a target="_blank" href="https://vnil.me/">Public Chibisafe/File Share Service</a>
                                    </li>
                                </SubDropdown>
                            </li>
                            <li>
                                <SubDropdown>
                                    <template #trigger>
                                        <span>Media</span>
                                    </template>
                                    <li>
                                        <a target="_blank" href="https://yuki.vnil.me">Requests (Jelly)</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://app.plex.tv/">Plex (watch)</a>
                                    </li>
                                </SubDropdown>
                            </li>
                            <li>
                                <NuxtLink to="/bots">Public Bots</NuxtLink>
                            </li>
                            <li>
                                <SubDropdown>
                                    <template #trigger>
                                        <span>Sequenzia Things</span>
                                    </template>
                                    <li>
                                        <a target="_blank" href="https://app.vnil.me/ambient?displayname=Untitled">Ambient</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://app.vnil.me/">Sequenzia</a>
                                    </li>
                                </SubDropdown>
                            </li>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <template #trigger>
                                <span>Logins</span>
                            </template>

                            <li>
                                <a target="_blank" href="https://mail.google.com/">G-Mail</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://stor.chibidreams.cloud/">Storage</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://dashboard.stripe.com">Stripe Dashboard</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://vnil.ui.com">UID</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://unifi.ui.com">Router Login</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://dash.cloudflare.com/">Cloudflare Dashboard</a>
                            </li>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <template #trigger>
                                <span>Extra Info</span>
                            </template>

                            <li>
                                <a target="_blank" href="https://docs.google.com/document/d/1VBMstoR9kDFxgQbyi_ZLOJ5_kriX98jv/edit?usp=sharing&ouid=103792036069402227180&rtpof=true&sd=true">Cosplay List</a>
                            </li>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown>
                            <template #trigger>
                                <span>Contact Us</span>
                            </template>

                            <li>
                                <NuxtLink to="/contact">Contact Info</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/artists">My Artists</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/status">Status</NuxtLink>
                            </li>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
