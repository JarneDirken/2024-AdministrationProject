<template>
    <div class="flex flex-col justify-center items-center text-center" style="height: calc(100vh - 8rem);">
        <span class="text-2xl">
            Please log in to use the app.<br>Or contact an administrator for further details.
        </span>
        <button class="border rounded-lg p-4 px-16 bg-black text-white" @click="login">
            Log in
        </button>
    </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();

const login = () => {
  loginWithRedirect();
};
</script>