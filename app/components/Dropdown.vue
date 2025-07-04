<script setup lang="ts">

</script>

<template>
    <div class="dropdown">
        <button class="dropdown-trigger">
            <slot name="trigger"></slot>
        </button>
        <ul class="dropdown-menu">
            <slot></slot>
        </ul>
    </div>
</template>