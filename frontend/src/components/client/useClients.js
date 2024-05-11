import { ref, computed } from 'vue';
import axios from 'axios';

const clients = ref([]);
const nameFilter = ref('');
const emailFilter = ref('');
const error = ref(null);
const fetching = ref(false); 

export function useClients() {
    const fetchClients = async () => {
        fetching.value = true;
        try {
            const response = await axios.get('http://localhost:3000/api/clients');
            clients.value = response.data || [];
            error.value = null; 
        } catch (err) {
            clients.value = []; 
            error.value = err; 
        } finally {
            fetching.value = false;
        }
    };

    const filteredClients = computed(() => {
    if (!clients.value) return [];
    return clients.value.filter(client => {
        let fullname = client.firstName + " " + client.lastName;
        let fullnameReverse = client.lastName + " " + client.firstName; 
        return client.firstName.toLowerCase().includes(nameFilter.value.toLowerCase()) ||
               client.lastName.toLowerCase().includes(nameFilter.value.toLowerCase()) ||
               fullname.toLowerCase().includes(nameFilter.value.toLowerCase()) ||
               fullnameReverse.toLowerCase().includes(nameFilter.value.toLowerCase());
    });
});


    return {
        filteredClients,
        nameFilter,
        emailFilter,
        error,
        fetchClients,
        fetching
    };
}
