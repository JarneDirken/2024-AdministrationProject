<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import CustomerModal from './clientModel.vue';

const props = defineProps({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  telephone: String,
  createdAt: String,
  note: String,
  vatNumber: String,
  companyName: String
});

const editClient = (client) => {
  selectedCustomer.value = client;
  modalMode.value = 'edit';
  showModal.value = true;
};

const emits = defineEmits(['deleted']);

const formattedDate = computed(() => {
  const date = new Date(props.createdAt);
  const options = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
  return new Intl.DateTimeFormat('en-US', options).format(date);
});

const deleteClient = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/clients/${props.id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      emits('deleted');
    } else {
      console.error('Failed to delete client');
      // Handle failure
    }
  } catch (error) {
    console.error('Error deleting client:', error);
    // Handle error
  }
};
</script>

<template>
  <div class="border-b border-gray-400 p-1 flex justify-between">
    <div class="flex flex-col" style="flex-basis: 23%; max-width: 23%;">
      <div>
        <span class="font-semibold truncate">{{ props.firstName }} {{ props.lastName }}</span>
      </div>
      <div class="flex gap-2 items-center">
        <font-awesome-icon :icon="['fas', 'clock']" class="text-gray-800" />
        <span class="truncate">{{ formattedDate }}</span>
      </div>
    </div>
    <div class="flex flex-col" style="flex-basis: 25%; max-width: 25%;">
      <div class="flex gap-2 items-center truncate">
        <font-awesome-icon :icon="['fas', 'envelope']" class="text-gray-800" />
        <span class="truncate">{{ props.email }}</span>
      </div>
      <div v-if="props.telephone" class="flex gap-2 items-center">
        <font-awesome-icon :icon="['fas', 'phone']" class="text-gray-800"/>
        <span class="truncate">{{ props.telephone }}</span>
      </div>
    </div>
    <div class="flex flex-col" style="flex-basis: 40%; max-width: 40%;">
      <div v-if="props.vatNumber && props.companyName" class="flex gap-2 items-center truncate">
        <span>Bedrijf: {{ props.companyName }} - {{ props.vatNumber }}</span>
      </div>
      <div v-if="props.note" class="truncate">
        <span>Notitie: {{ props.note }}</span>
      </div>
    </div>
    <div class="flex flex-col">
      <div>
        <font-awesome-icon icon="pencil-alt" 
          class="text-gray-500 bg-gray-200 rounded-full p-2 cursor-pointer
                hover:text-gray-600 hover:bg-gray-300"
          @click="editClient(client)"/>
      </div>
      <div>
        <font-awesome-icon icon="trash" 
          @click="deleteClient"
          class="text-red-500 bg-red-200 rounded-full p-2 cursor-pointer
                hover:text-red-600 hover:bg-red-300"/>
      </div>
    </div>
    <CustomerModal
      v-if="showModal"
      :mode="modalMode"
      :customer="selectedCustomer"
      @close="showModal = false"
      @created="fetchClients"
    />
  </div>
</template>

