<script setup lang="ts">
import { bots } from '~/data/bots';

const getIcon = (link: string) => {
    if (link.includes('discord.gg') || link.includes('discord.com/invite') || link.includes('discordapp.com/invite')) {
        return 'fa6-brands:discord';
    } else if (link.includes('discord.com/oauth2/authorize') || link.includes('discordapp.com/oauth2/authorize')) {
        return 'material-symbols:add-to-photos-outline-rounded';
    } else if (link.includes('github.com')) {
        return 'mdi:github';
    } else {
        return 'material-symbols-light:link';
    }
}

const getLabel = (link: string) => {
    if (link.includes('discord.gg') || link.includes('discord.com/invite') || link.includes('discordapp.com/invite')) {
        return 'Join Discord';
    } else if (link.includes('discord.com/oauth2/authorize') || link.includes('discordapp.com/oauth2/authorize')) {
        return 'Add Bot';
    } else if (link.includes('github.com')) {
        return 'View on GitHub';
    } else {
        return 'Visit Link';
    }
}
</script>

<template>
    <main class="container bg-dark min-h-10xl">
        <h1 class="font-6xl">Public bots hosted by Me</h1>
    </main>
    <section class="container bg-red-50 min-h-section">
        <div class="bot-list">
            <div
                class="bot-card"
                v-for="bot in bots"
                :key="bot.name"
            >
                <h2 class="bot-name">{{ bot.name }}</h2>
                <p class="bot-description">{{ bot.description }}</p>
                <div class="bot-links">
                    <Button
                        v-if="bot.links"
                        class="btn btn-secondary"
                        v-for="(link, index) in bot.links"
                        :key="index"
                        size="lg"
                        :href="link"
                        :icon="getIcon(link)"
                        target="_blank"
                    >{{ getLabel(link) }}</Button>
                </div>
            </div>
        </div>
    </section>
</template>