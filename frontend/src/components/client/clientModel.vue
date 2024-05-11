<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-8 rounded-lg w-full max-w-lg">
        <h2 class="text-xl font-bold mb-4">{{ mode === 'add' ? 'Voeg nieuwe klant toe' : 'Bewerk Klant' }}</h2>
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-700">Voornaam</label>
          <input type="text" id="firstName" v-model="localCustomer.firstName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
        </div>
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-700">Achternaam</label>
          <input type="text" id="lastName" v-model="localCustomer.lastName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" v-model="localCustomer.email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" required>
        </div>
        <div class="mb-4">
          <label for="telephone" class="block text-sm font-medium text-gray-700">Telefoon</label>
          <input type="tel" id="telephone" v-model="localCustomer.telephone" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div class="mb-4">
          <label for="companyName" class="block text-sm font-medium text-gray-700">Bedrijf naam</label>
          <input type="text" id="companyName" v-model="localCustomer.companyName" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div class="mb-4">
          <label for="vatNumber" class="block text-sm font-medium text-gray-700">BTW nummer</label>
          <input type="text" id="vatNumber" v-model="localCustomer.vatNumber" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div class="mb-4">
          <label for="vatNumber" class="block text-sm font-medium text-gray-700">Notities</label>
          <input type="text" id="vatNumber" v-model="localCustomer.notes" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
        </div>
        <div class="flex justify-end">
          <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" @click="$emit('close')">
            Terug
          </button>
          <button type="button" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="saveClient">
            Opslaan
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  
  const props = defineProps({
    mode: String,
  });
  
  const emits = defineEmits(['close', 'created']);
  
  const localCustomer =  {
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    companyName: '',
    vatNumber: '',
    notes: '',
  };
  
  const saveClient = async () => {
  const url = `http://localhost:3000/api/clients/${props.mode === 'edit' ? localCustomer._id : ''}`;
  const method = props.mode === 'edit' ? 'put' : 'post';

  try {
    const response = await axios({
      method: method,
      url: url,
      data: localCustomer
    });
    emits('close');
    emits('created'); 
  } catch (error) {
    console.error(error.response.data);
  }
};
  </script>
  