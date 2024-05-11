<!-- DropdownMenu.vue -->
<template>
    <div class="relative" @click="toggleDropdown">
      <slot name="trigger"></slot>
      <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
        <RouterLink to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            Bekijk profiel
        </RouterLink>
        <RouterLink to="/maintenance" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            Support
        </RouterLink>
        <!-- Add more menu items here -->
        <a @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Log-uit</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuth0 } from '@auth0/auth0-vue';
  import { useRouter } from 'vue-router';
  import { RouterLink } from 'vue-router';
  
  const { logout } = useAuth0();
  const router = useRouter();
  const isOpen = ref(false);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const navigateTo = (path) => {
    // Close the dropdown
    isOpen.value = false;
    // Navigate to the path
    router.push({ name: path });
  };
  </script>
  