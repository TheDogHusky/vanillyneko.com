<script setup lang="ts">
import Dropdown from "~/components/Dropdown.vue";
import { hasOneOfRoles } from "~/utils/functions";
import SubDropdown from "~/components/SubDropdown.vue";
import { navbarItems } from "~/data/navbar";

const sortedNavbarItems = computed(() => {
    const clone = JSON.parse(JSON.stringify(navbarItems));

    const sortAlphabetically = (a: any, b: any) => {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
    };

    const sortNavbarItems = (items: any[]) => {
        if (!items || !Array.isArray(items)) return;
        items.sort(sortAlphabetically);
        for (const item of items) {
            if (item.items && Array.isArray(item.items)) {
                sortNavbarItems(item.items);
            }
        }
    };

    clone.forEach((item: any) => sortNavbarItems(item.items));

    return clone;
});

const active = ref(false);
const route = useRoute();
const { status, data } = useAuth();

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

const canView = (item: any) => {
    if (item.auth && item.auth !== status.value) return false;
    if (item.roles && typeof hasRole !== 'undefined' && !hasRole(data.value, item.roles)) return false;

    return !(item.oneOfRoles && !hasOneOfRoles(data.value, item.oneOfRoles));
};

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
                    <template v-for="(item, index) in sortedNavbarItems" :key="`nav-${index}-${item.label}`">
                        <li v-if="canView(item)">
                            <template v-if="item.type === 'link'">
                                <a v-if="item.target === '_blank'" :href="item.to" target="_blank">
                                    <span v-html="item.label"></span>
                                </a>
                                <NuxtLink v-else :to="item.to">
                                    <span v-html="item.label"></span>
                                </NuxtLink>
                            </template>

                            <Dropdown v-else-if="item.type === 'dropdown'">
                                <template #trigger>
                                    <span v-html="item.label"></span>
                                </template>

                                <template v-for="(child, childIndex) in item.items" :key="`drop-${index}-${childIndex}-${child.label}`">
                                    <li v-if="canView(child)">

                                        <template v-if="child.type === 'link'">
                                            <a v-if="child.target === '_blank'" :href="child.to" target="_blank">
                                                <span v-html="child.label"></span>
                                            </a>
                                            <NuxtLink v-else :to="child.to">
                                                <span v-html="child.label"></span>
                                            </NuxtLink>
                                        </template>

                                        <SubDropdown v-else-if="child.type === 'subdropdown'">
                                            <template #trigger>
                                                <span v-html="child.label"></span>
                                            </template>

                                            <template v-for="(subChild, subChildIndex) in child.items" :key="`sub-${index}-${childIndex}-${subChildIndex}-${subChild.label}`">
                                                <li v-if="canView(subChild)">
                                                    <a v-if="subChild.target === '_blank'" :href="subChild.to" target="_blank">
                                                        <span v-html="subChild.label"></span>
                                                    </a>
                                                    <NuxtLink v-else :to="subChild.to">
                                                        <span v-html="subChild.label"></span>
                                                    </NuxtLink>
                                                </li>
                                            </template>
                                        </SubDropdown>

                                    </li>
                                </template>
                            </Dropdown>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>
