<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
type ButtonSize = 'sm' | 'md' | 'lg';

const props = defineProps<{
    to?: string;
    href?: string;
    icon?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
}>();

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
    if (!props.disabled) {
        emit('click', event);
    }
};

const buttonClasses = computed(() => {
    return [
        'btn',
        props.variant ? `btn-${props.variant}` : '',
        props.size ? `btn-${props.size}` : '',
        { 'btn-disabled': props.disabled }
    ].join(' ');
});
</script>

<template>
    <NuxtLink
        v-if="props.to"
        :to="props.to"
        :class="buttonClasses"
        :aria-disabled="props.disabled"
        @click="handleClick"
        :disabled="props.disabled"
    >
        <Icon v-if="props.icon" :name="props.icon" />
        <slot />
    </NuxtLink>
    <a
        v-else-if="props.href"
        :href="props.href"
        :class="buttonClasses"
        :aria-disabled="props.disabled"
        @click="handleClick"
        rel="noopener noreferrer"
    >
        <Icon v-if="props.icon" :name="props.icon" />
        <slot />
    </a>
    <button
        v-else
        :class="buttonClasses"
        :aria-disabled="props.disabled"
        @click="handleClick"
        :disabled="props.disabled"
        type="button"
    >
        <Icon v-if="props.icon" :name="props.icon" />
        <slot />
    </button>
</template>