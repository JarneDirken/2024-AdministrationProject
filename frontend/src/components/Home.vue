<template>
  <div>
    <h1>Invoices</h1>
    <ul>
      <li v-for="invoice in invoices" :key="invoice._id">
        {{ invoice._id }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      invoices: []
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:3000/api/invoices');
      this.invoices = response.data;
    } catch (error) {
      console.error("Failed to fetch invoices:", error);
    }
  }
};
</script>
