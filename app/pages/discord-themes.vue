<script setup lang="ts">
import { parseMarkdown } from "@nuxtjs/mdc/runtime";
import type { MDCParserResult } from "@nuxtjs/mdc/module";

interface Theme {
    markdown: MDCParserResult;
    repoName: string;
    repoAuthor: string;
    backgroundClass: string;
}

const themes = ["https://github.com/VanillyNeko/Anya-bd", "https://github.com/VanillyNeko/Sailor-Moon-BD"];
const content = ref<Theme[]>([]);

const index = ref(0);

const getBackgroundClass = (): string => {
    const classes = [
        "bg-secondary",
        "bg-blue-100",
        "bg-primary"
    ];
    return classes[index.value++ % classes.length] as string;
};

/**
 * Extracts the markdown URL and repository name from a GitHub link.
 * @param githubLink - The GitHub repository link.
 * @return An object containing the markdown URL and repository name.
 */
const extractInformation = (githubLink: string): Theme => {
    const parts = githubLink.split("/");
    const username = parts[3];
    const repoName = parts[4];
    return {
        markdown: `https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`,
        repoName: repoName as string,
        repoAuthor: username as string,
        backgroundClass: getBackgroundClass()
    };
};

/**
 * Fetches the markdown content from a given URL.
 * @param markdownUrl - The URL of the markdown file.
 * @return The content of the markdown file as a string.
 */
const getMarkdownContent = async (markdownUrl: string): Promise<string> => {
    const response = await fetch(markdownUrl);
    if (!response.ok) {
        throw new Error(`Failed to fetch markdown content from ${markdownUrl}`);
    }
    return await response.text();
};

const fetchContent = async () => {
    content.value = [];
    for (const theme of themes) {
        const { markdown, repoName, repoAuthor, backgroundClass } = extractInformation(theme);
        try {
            const markdownContent = await getMarkdownContent(markdown);
            // Parse the markdown content to HTML
            const parsedContent = await parseMarkdown(markdownContent);
            content.value.push({ markdown: parsedContent, repoName, backgroundClass, repoAuthor });
        } catch (error) {
            console.error(`Error fetching content for ${repoName}:`, error);
        }
    }
};

onMounted(() => {
    fetchContent();
});
</script>

<template>
    <main class="container bg-dark min-h-10xl">
        <h1 class="font-6xl">Discord Themes</h1>
    </main>
    <section
        v-if="content.length"
        v-for="theme of content"
        :key="theme.repoName"
        class="container min-h-screen"
        :class="theme.backgroundClass"
    >
        <MDCRenderer
            :body="theme.markdown.body"
            :data="theme.markdown.data"
            class="markdown-content"
        />
        <Button
            size="lg"
            :href="`https://github.com/${theme.repoAuthor}/${theme.repoName}/releases/latest`"
            icon="solar:download-minimalistic-bold"
            target="_blank"
            variant="primary">
            Download {{ theme.repoName }}
        </Button>
    </section>
    <section v-else class="container min-h-screen bg-secondary">
        <div class="markdown-content">
            <Skeleton class="w-3/4" style="height: 2rem" />
            <hr class="separator discrete xs" />
            <Skeleton style="width: 40%;" />
            <Skeleton style="width: 45%;" />
            <Skeleton style="width: 48%;" />
            <Skeleton style="width: 35%;" />
            <Skeleton style="width: 60%;" />
            <Skeleton style="width: 55%;" />
            <Skeleton style="width: 49%;" />
            <Skeleton style="width: 70%;" />
            <Skeleton style="width: 72%;" />
            <Skeleton style="width: 65%;" />
            <Skeleton style="width: 68%;" />
            <Skeleton style="width: 50%;" />
            <Skeleton style="width: 55%;" />
            <Skeleton style="width: 48%;" />
            <Skeleton style="width: 47%;" />
            <Skeleton style="width: 70%;" />
            <Skeleton style="width:100%; height: 30rem" />
        </div>
    </section>
</template>