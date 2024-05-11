<script setup>
import { ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { user, getAccessTokenSilently } = useAuth0();
const name = ref(user.value.name);
const email = ref(user.value.email);

</script>

<template>
  <div class="flex flex-col items-center justify-center text-center">
    <img :src="user.picture" class="w-32 h-32 rounded-full" alt="Profile picture" />
    <h1>name: {{user.name}}</h1>
    <h1>email: {{user.email}}</h1>
    <h1>Nickname: {{ user.nickname }}</h1>
  </div>
</template>
