<script setup>
import ClientMain from '@/components/client/ClientMain.vue';
import ClientFilter from '../components/client/ClientFilter.vue'
</script>

<template>
     <div class="flex flex-col" style="min-height: calc(100vh - 7rem);">
        <ClientFilter />
        <ClientMain />
    </div>
</template>