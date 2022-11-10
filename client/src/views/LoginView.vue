<script setup lang="ts">

import { login } from '../stores/session';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const name = ref('');

</script>

<template>
    <div>
        <form class="box" @submit.prevent="login(name, email, password)">
            <div class="field">
            <p class="control has-icons-left has-icons-right">
                <label class="label">Name</label>
                <input class="input" type="text" placeholder="First & Last Name" v-model="name">
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <label class="label">Email</label>
                <input class="input" type="email" placeholder="Email" v-model="email">
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <label class="label">Password</label>
                <input class="input" type="password" placeholder="Password" v-model="password">
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success">
                    Login
                </button>
            </p>
        </div>
        </form>
    </div>
</template>

<style scoped>

</style>