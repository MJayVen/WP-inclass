<script setup lang="ts">
    import { ref } from 'vue';
    const { isOpen } = defineProps<{
        isOpen: boolean;
    }>();
</script>

<template>
    <div class="fly-out" :class="{ 'is-open': isOpen}">
        <div class="fly-out-body">
            <div class="hero">
                <div class="hero-body">
                    <slot name="header"></slot>
                </div>
            </div>
            <slot/>
        </div>
    </div>
</template>

<style scoped>
    .fly-out {
        position: fixed;
        top: 0;
        right: -20em;
        bottom: 0;
        width: 20em;
        background-color: #ffffff;
        border-left: 1px solid #000;
        z-index: 100;
        transition: right 0.5s ease-in-out;
        box-shadow: rgb(0 0 0 / 25%) -14px -0 8px;
        overflow-y: auto;
    }

    .fly-out-header {
        padding: 1em;
        background-color: aquamarine;
    }

    .fly-out-body {
        height: 100%;
        background-color: #ffffffaa;
        margin: 1em;
        padding: 1em;
    }

    .fly-out.is-open {
        right: 0;
    }

    .hero {
        background-color:  #1267a4aa;
    }
</style>