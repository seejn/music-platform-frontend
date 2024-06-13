<template>
  <div>
    <GuestNav />
    <div class="login overflow-y-hidden">
      <div class="main min-h-screen flex justify-center items-center bg-black">
        <div class="container max-w-7xl w-full bg-white rounded-lg shadow-lg flex">
          <div class="w-2/3">
            <img src="/src/assets/pic/tay.jpg" alt="Tay" class="w-full h-full object-cover" />
          </div>
          <div class="w-1/3 p-8 flex items-center justify-center">
            <form @submit.prevent="submitForm" class="w-full">
              <div>
                <h2 class="text-3xl font-bold mb-8 text-black text-center">Login</h2>


                <div class="space-y-6">
                  <div class="form-group">
                    <label class="block text-lg font-medium text-gray-700 mb-2" for="email">Email</label>
                    <input v-model="info.email" type="text" id="email" class="form-input w-full rounded-md border border-blood bg-white text-gray-900 p-2" />
                    <p v-if="!info.email && formSubmitted" class="text-red-500 text-sm mt-2">Email is required.</p>
                    <p v-if="info.email && !isEmailValid && formSubmitted" class="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
                  </div>


                  <div class="form-group">
                    <label class="block text-lg font-medium text-gray-700 mb-2" for="password">Password</label>
                    <input v-model="info.password" type="password" id="password" class="form-input w-full rounded-md border border-blood bg-white text-gray-900 p-2" />
                    <p v-if="!info.password && formSubmitted" class="text-red-500 text-sm mt-2">Password is required.</p>
                    <p v-if="info.password && loginFailed && formSubmitted" class="text-red-500 text-sm mt-2">Please enter the right password.</p>
                  </div>


                  <div class="form-submit flex justify-center mt-8">
                    <button type="submit" class="bg-white border-red-800 border-2 hover:bg-red-800 hover:text-white text-black font-bold py-2 px-4 rounded-full mb">Login</button>
                  </div>


                  <div class="flex justify-center mt-8">
                    <p>Don't have an account?</p>
                  </div>


                  <div class="flex justify-center mt-8">
                    <RouterLink to="/signup" class="bg-white border-red-800 border-2 hover:bg-red-800 hover:text-white text-black font-bold py-2 px-4 rounded-full mb">Signup</RouterLink>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, computed, watch } from 'vue';
import GuestNav from '../../components/Header/GuestNav.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Login } from '../../api/Auth';
const info = ref({
  email: '',
  password: ''
});

const formSubmitted = ref(false);
const loginFailed = ref(false);

const router = useRouter();
const store = useStore();

const isEmailValid = computed(() => {
  return /\S+@\S+\.\S+/.test(info.value.email);
});


watch(() => info.value.password, (newPassword) => {
  if (loginFailed.value) {
    loginFailed.value = false;
  }
});

const clearForm = () => {
  info.value.email = '';
  info.value.password = '';
  formSubmitted.value = false;
  loginFailed.value = false;
};

const submitForm = async () => {
  formSubmitted.value = true;
  loginFailed.value = false;

  if (!info.value.email || !info.value.password) {
    console.error('Please fill in all required fields.');
    return;
  }

  if (!isEmailValid.value) {
    console.error('Please enter a valid email address.');
    return;
  }

  try {
    const response = await Login({ email: info.value.email, password: info.value.password });

    console.log("from login", response.user.role)
    store.dispatch("login", response)
    if(response.user.role === 3) router.push({name: 'AdminDashboard'})
    else router.push({ name: 'Home' });

    clearForm();
  } catch (error) {
  
    loginFailed.value = true;
  }
};
</script>

<style>
.login {
  font-family: 'Inter', sans-serif;
}
</style>
