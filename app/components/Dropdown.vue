<script setup lang="ts">
import { isMobile } from 'mobile-device-detect';

const dropdownContent = ref<HTMLElement | null>(null);
const active = ref(false);

function adjustDropdownPosition() {
    if (!dropdownContent.value) return;
    const rect = dropdownContent.value.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
        console.log('Adjusting dropdown position to the right');
        dropdownContent.value.classList.add('right');
    } else {
        dropdownContent.value.classList.remove('right');
    }
}

function toggleDropdown() {
    if (isMobile) active.value = !active.value;
    else active.value = false;
}

onMounted(() => {
    adjustDropdownPosition();
    window.addEventListener('resize', adjustDropdownPosition);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', adjustDropdownPosition);
});
</script>

<template>
    <div class="dropdown" :class="{ active }">
        <button class="dropdown-trigger" @click="toggleDropdown" :class="{ active }">
            <slot name="trigger"></slot>
            <Icon name="material-symbols:keyboard-arrow-down-rounded" class="font-xl" />
        </button>
        <div ref="dropdownContent" class="dropdown-content-wrapper">
            <ul class="dropdown-content" :class="{ active }">
                <slot></slot>
            </ul>
        </div>
    </div>
</template>