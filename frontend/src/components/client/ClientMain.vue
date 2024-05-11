<script setup>
import { onMounted } from 'vue';
import { useClients } from './useClients';
import ClientDisplay from './ClientDisplay.vue';

const { filteredClients, fetchClients, error, fetching } = useClients();

onMounted(fetchClients);
</script>

<template>
    <div class="w-full bg-white rounded-xl flex-grow mt-4 p-4 overflow-y-scroll border-gray-100 border-2" style="max-height: 23rem;">
        <div v-if="fetching">Laden...</div>
        <div v-if="error" class="text-red-500">Error: {{ error.message }}</div>
        <div v-if="filteredClients.length === 0">Niks gevonden...</div>
        <div v-for="client in filteredClients" :key="client.id">
            <ClientDisplay
                @deleted="fetchClients"
                :id="client._id"
                :firstName="client.firstName"
                :lastName="client.lastName"
                :email="client.email"
                :telephone="client.telephone"
                :createdAt="client.createdAt"
                :note="client.notes"
                :vatNumber="client.vatNumber"
                :companyName="client.companyName"
            />
        </div>
    </div>
</template>
