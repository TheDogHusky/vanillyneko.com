<script setup lang="ts">
const dropdownContent = ref<HTMLElement | null>(null);

function adjustDropdownPosition() {
    if (!dropdownContent.value) return;
    const rect = dropdownContent.value.getBoundingClientRect();
    console.log('Dropdown position adjusted:', rect);
    if (rect.right > window.innerWidth) {
        dropdownContent.value.classList.add('right');
    } else {
        dropdownContent.value.classList.remove('right');
    }
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
    <div class="dropdown">
        <button class="dropdown-trigger">
            <slot name="trigger"></slot>
            <Icon name="material-symbols:keyboard-arrow-down-rounded" class="font-xl" />
        </button>
        <ul ref="dropdownContent" class="dropdown-content">
            <slot></slot>
        </ul>
    </div>
</template>