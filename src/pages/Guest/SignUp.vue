<template>
  <div>
    <GuestNav />
    <div class="main min-h-screen flex justify-center items-center bg-black">
      <div class="container max-w-7xl w-full bg-white rounded-lg shadow-lg flex">
        <div class="w-2/3">
          <img src="/src/assets/pic/billie.jpg" alt="Billie" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/2 p-8">
          <form @submit.prevent="submitForm">
            <div>
              <h2 class="text-3xl font-bold mb-8 text-black text-center">Registration Form</h2>
              <div class="space-y-6">
                <div v-for="(field, index) in fields" :key="index" class="form-group">
                  <label :for="field.id" :class="labelClasses">{{ field.label }}</label>
                  <input
                    v-model="info[field.model]"
                    :id="field.id"
                    :type="field.type"
                    :class="inputClasses"
                    :required="field.required"
                  />
                </div>
                <div class="form-group">
                  <label for="dob" :class="labelClasses">Date of Birth</label>
                  <input
                    v-model="info.dob"
                    id="dob"
                    :class="inputClasses"
                    type="date"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="gender" :class="labelClasses">Gender</label>
                  <select
                    v-model="info.gender"
                    id="gender"
                    :class="inputClasses"
                    required
                  >
                    <option disabled value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="form-submit flex justify-center mt-8">
                  <button type="submit" class="bg-white border-blood border-2 hover:bg-blood hover:text-white text-black font-bold py-2 px-4 rounded-full mb">Submit</button>
                </div>
                <div class="flex justify-center mt-8">
                  <p>Already have an account?</p>
                </div>
                <div class="flex justify-center mt-4">
                  <button @click.prevent="navigateToLogin" class="bg-white border-blood border-2 hover:bg-blood hover:text-white text-black font-bold py-2 px-4 rounded-full mb">Login</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import GuestNav from '../../components/Header/GuestNav.vue';
import { useRouter } from 'vue-router';
import { createUser } from '../../api/Auth';

export default {
  name: 'Register',
  components: {
    GuestNav,
  },
  setup() {
    const router = useRouter();
    
    const info = ref({
      id: null,
      first_name: '',
      last_name: '',
      dob: '',
      gender: '',
      email: '',
      password: '',
    });

    const fields = [
      { id: 'first_name', label: 'First Name', model: 'first_name', type: 'text', required: true },
      { id: 'last_name', label: 'Last Name', model: 'last_name', type: 'text', required: true },
      { id: 'email', label: 'Email', model: 'email', type: 'email', required: true },
      { id: 'password', label: 'Password', model: 'password', type: 'password', required: true },
    ];

    const labelClasses = 'block text-sm font-medium text-gray-700 mb-2';
    const inputClasses = 'form-input w-full rounded-md border border-blood bg-white text-gray-900 p-2';

    const submitForm = async () => {
      try {
        const response = await createUser(info.value);
        console.log('User created successfully:', response);
        clearForm();
        // Implement success toast or message here
      } catch (error) {
        console.error('User creation failed:', error);
        // Implement error toast or message here
      }
    };

    const navigateToLogin = () => {
      router.push('/login');
    };

    const clearForm = () => {
      info.value = {
        id: null,
        first_name: '',
        last_name: '',
        dob: '',
        gender: '',
        email: '',
        password: '',
      };
    };

    return {
      info,
      fields,
      labelClasses,
      inputClasses,
      submitForm,
      navigateToLogin,
    };
  },
};
</script>

<style>
/* Add any additional custom styles here */
</style>
