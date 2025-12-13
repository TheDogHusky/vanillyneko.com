<script setup lang="ts">

</script>

<template>
    <main class="container bg-dark min-h-10xl">
        <h1 class="font-6xl">Contact Information</h1>
    </main>
    <section class="bg-image bg-tertiary-wallpaper min-h-section container font-2xl gap-2xl">
        <h2 class="font-5xl">Get in Touch with Us</h2>
        <div class="contact-list">
            <div class="contact-info">
                <Icon name="material-symbols:mail-rounded"/>
                <h2 class="font-4xl">E-Mail</h2>
                <ul>
                    <li>
                        Vanilly's E-Mail: <a href="mailto:nilly@vanillyneko.com">nilly@vanillyneko.com</a>
                    </li>
                    <li>
                        Admins E-Mail: <a href="mailto:admin@vanillyneko.com">admin@vanillyneko.com</a>
                    </li>
                </ul>
            </div>
            <div class="contact-info">
                <Icon name="material-symbols:call-sharp"/>
                <h2 class="font-4xl">Phone or Fax</h2>
                <ul>
                    <li>
                        Phone: <a href="tel:+13048079093">+1 (304) 807-9093</a>
                    </li>
                    <li>
                        Fax: <a href="tel:+16812344457">+1 (681) 234-4457</a>
                    </li>
                </ul>
            </div>
            <div class="contact-info">
                <Icon name="fa6-brands:discord"/>
                <h2 class="font-4xl">Discord</h2>
                <ul>
                    <li>
                        Owner: <br> <code>@vanillyneko</code>
                    </li>
                    <li>
                        Helper(s): <br> <code>@leighmagee</code> (Support) <br> <code>@classy.craft3r</code> (Site
                        Development) <br> <code>@mommakat.</code> (Support) <br> <code>@gradius802</code>
                        (Support/Provider)
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section id="contact-form"
             class="min-h-section bg-secondary center container gap-2xl">
        <h2 class="font-5xl">Send us a message ♡ ~</h2>
        <p class="font-2xl">
            General Inquiries • Legal • Billing • Collabs • Questions • Just saying hi?~<br>
            We reply as fast as we can, so don't be shy!
        </p>
        <div class="iframe-wrapper">
            <iframe
                title="Contact Form"
                src="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/00d37c08-ee9e-4812-a4fe-1cdff160b835"
                referrerpolicy="origin"
                sandbox="allow-forms allow-popups allow-scripts allow-same-origin"
                frameborder="0"
                loading="lazy"
                class="crisp-iframe"
            ></iframe>
        </div>
        <p class="font-2xl">
            Or open a ticket on <a href="https://discord.com/invite/6vQUZ4Q4YT" target="_blank">Discord</a> in the <code>#support</code> channel.<br>
            You can also try out the chat in the bottom left corner of the page.
        </p>
    </section>
</template>

<style scoped>
.iframe-wrapper {
    position: relative;
    width: 39rem;
    height: 0;
    padding-bottom: 49rem;
    background: rgba(214, 185, 255, 0.95);
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
    border: 8px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(12px);
}

.crisp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

@media screen and (max-width: 768px) {
    .iframe-wrapper {
        width: 90%;
    }
}
</style>