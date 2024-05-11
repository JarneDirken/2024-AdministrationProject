<script setup>
import { useAuth0 } from '@auth0/auth0-vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const { logout } = useAuth0();

const handleLogout = () => {
  logout({ returnTo: window.location.origin });
};
</script>

<template>
    <div class="flex flex-col justify-between p-6 border-r" style="height: calc(100vh - 5rem);">
        <div class="flex flex-col gap-2">
                <RouterLink to="/" class="p-2" :class="{ 'active-link': route.path === '/' }">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'tachometer-alt']"/>
                        <span>Dashboard</span>
                    </div>
                </RouterLink>
                <RouterLink to="/clients" class="p-2" :class="{ 'active-link': route.path === '/clients' }">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'users']"/>
                        <span>Klanten</span>
                    </div>
                </RouterLink>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'magnifying-glass-chart']"/>
                        <span>Offertes</span>
                    </div>
                </RouterLink>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'file-invoice']"/>
                        <span>Facturen</span>
                    </div>
                </RouterLink>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'stopwatch']"/>
                        <span>Track Time</span>
                    </div>
                </RouterLink>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'chart-simple']"/>
                        <span>Analytics</span>
                    </div>
                </RouterLink>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'box']"/>
                        <span>Producten</span>
                    </div>
                </RouterLink>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'chart-line']"/>
                        <span>Uitgaven</span>
                    </div>
                </RouterLink>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'money-check-dollar']"/>
                        <span>Betalingen</span>
                    </div>
                </RouterLink>
        </div>
        <div>
            <div class="flex flex-col gap-3">
                <div class="border-b mt-4"></div>
                <RouterLink to="/maintenance" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'gear']"/>
                        <span>Instellingen</span>
                    </div>
                </RouterLink>
                <button @click="logout" class="p-2">
                    <div class="flex items-center gap-3 ml-2">
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']"/>
                        <span>Log-uit</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>