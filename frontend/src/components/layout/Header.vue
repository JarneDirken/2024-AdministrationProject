<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import { RouterLink } from 'vue-router';
import DropdownMenu from './DropDown.vue';

const { isAuthenticated, user, loginWithRedirect } = useAuth0();

const login = () => {
  loginWithRedirect();
};
</script>

<template>
  <nav class="flex py-4 px-12 align-middle border-b justify-between h-20">
    <div class="flex items-center">
      <RouterLink to="/">
        <img src="../../assets/images/logo.png" width="150" alt="Logo" class="cursor-pointer"/>
      </RouterLink>
    </div>
    <div class="border rounded-lg w-3/5" v-if="isAuthenticated">
      <input
        class="px-2 py-2 rounded-lg w-full"
        type="search"
        name="search"
        placeholder="Type to search"
      />
    </div>
    <div class="flex items-center gap-8">
      <font-awesome-icon :icon="['fas', 'bell']" class="cursor-pointer" v-if="isAuthenticated"/>
      <font-awesome-icon :icon="['fas', 'user']" class="cursor-pointer" @click="login" v-if="!isAuthenticated"/>
      <DropdownMenu v-if="isAuthenticated && user">
        <template #trigger>
          <img :src="user.picture" class="w-9 h-9 rounded-full cursor-pointer" alt="Profile picture" />
        </template>
      </DropdownMenu>    
    </div>
  </nav>
</template>