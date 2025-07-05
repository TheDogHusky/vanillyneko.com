<script setup lang="ts">
const dropdownContent = ref<HTMLElement | null>(null);
const active = ref(false);

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

const onEnter = (el: Element, done: any) => {
    const element = el as HTMLElement;
    element.style.height = '0';
    element.style.opacity = '0';
    console.log('Transition started:', element.style.height);

    // This is a trick to ensure the browser applies the initial state
    // before calculating the end state on the next frame.
    getComputedStyle(el);

    // Set the end state for the transition
    requestAnimationFrame(() => {
        element.style.height = `${el.scrollHeight}px`;
        element.style.opacity = '1';
        console.log('Transition started:', element.style.height);
        done();
    });
};

// Clean up inline styles after the transition is done
const onAfterEnter = (el: Element) => {
    const element = el as HTMLElement;
    element.style.height = ''; // Allows the content to resize if needed
};

// Set the state before the element leaves the DOM
const onLeave = (el: Element) => {
    // Set the height explicitly so CSS can transition from it
    const element = el as HTMLElement;
    element.style.height = `${el.scrollHeight}px`;
    element.style.opacity = '1';

    getComputedStyle(el);

    requestAnimationFrame(() => {
        // Animate to the collapsed state
        element.style.height = '0';
        element.style.opacity = '0';
    });
};

// Clean up after leave
const onAfterLeave = (el: Element) => {
    // Optional cleanup if needed
};
</script>

<template>
    <div class="dropdown" :class="{ active }">
        <button class="dropdown-trigger" @click="active = !active" :class="{ active }">
            <slot name="trigger"></slot>
            <Icon name="material-symbols:keyboard-arrow-down-rounded" class="font-xl" />
        </button>
        <Transition
            name="collapse"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @leave="onLeave"
            @after-leave="onAfterLeave"
        >
            <div class="dropdown-content-wrapper" v-if="active">
                <ul ref="dropdownContent" class="dropdown-content" :class="{ active }">
                    <slot></slot>
                </ul>
            </div>
        </Transition>
    </div>
</template>