<script setup lang="ts">
const active = ref(false);

const toggleDropdown = () => {
    active.value = !active.value;
};
</script>

<template>
    <div class="sub-dropdown">
        <button class="sub-dropdown-trigger" @click="toggleDropdown">
            <slot name="trigger"></slot>
            <Icon name="material-symbols:keyboard-arrow-down-rounded" class="font-xl" />
        </button>
        <ul ref="dropdownContent" class="sub-dropdown-content" :class="{ active }">
            <slot />
        </ul>
    </div>
</template>