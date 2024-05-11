<template>
  <div class="flex flex-col h-screen">
    <header class="flex-shrink-0">
      <Header />
    </header>
    <div class="flex flex-grow overflow-hidden">
      <aside v-if="isAuthenticated" class="w-64 flex-shrink-0 overflow-y-auto bg-gray-50">
        <Sidebar />
      </aside>
      <main class="flex-grow overflow-y-auto bg-gray-50 p-4">
        <RouterView v-if="isAuthenticated" />
        <Login v-if="!isAuthenticated"/>
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Header from './components/layout/Header.vue';
import Sidebar from './components/layout/Sidebar.vue';
import { useAuth0 } from '@auth0/auth0-vue';
import Login from './views/error/Login.vue';

// Use useAuth0 composable to get authentication state and user
const { isAuthenticated } = useAuth0();
</script>
