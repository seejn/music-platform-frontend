<template>
  <div>
    <Guest />
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
                <div v-for="(field, index) in formFields" :key="index" class="form-group">
                  <label :for="field.id" :class="labelClasses">{{ field.label }}</label>
                  <component
                    :is="field.type === 'select' ? 'select' : 'input'"
                    v-model="info[field.model]"
                    :id="field.id"
                    :class="inputClasses"
                    :type="field.type"
                    :required="field.required"
                  >
                    <option v-if="field.type === 'select'" disabled value="">Select {{ field.label }}</option>
                    <option v-for="option in field.options" :key="option.value" :value="option.value">{{ option.text }}</option>
                  </component>
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
import axios from 'axios';
import Guest from '../Navbar/GuestNav.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  components: {
    Guest,
  },
  setup() {
    const info = ref({
      id: null,
      first_name: 'John',
      last_name: 'Doe',
      dob: '1990-01-01',
      gender: 'M',
      address: '123 Main St, Anytown, USA',
      email: 'john.doe@example.com',
      password: 'password123',
    });

    const formFields = [
      { label: 'First Name', id: 'first_name', type: 'text', model: 'first_name', required: true },
      { label: 'Last Name', id: 'last_name', type: 'text', model: 'last_name', required: true },
      { label: 'Date of Birth', id: 'dob', type: 'date', model: 'dob', required: false },
      { label: 'Email', id: 'email', type: 'email', model: 'email', required: true },
      { label: 'Gender', id: 'gender', type: 'select', model: 'gender', required: false, options: [
          { text: 'Male', value: 'M' },
          { text: 'Female', value: 'F' },
          { text: 'Other', value: 'O' },
        ],
      },
      { label: 'Address', id: 'address', type: 'text', model: 'address', required: false },
      { label: 'Password', id: 'password', type: 'password', model: 'password', required: true },
    ];

    const labelClasses = 'block text-sm font-medium text-gray-700 mb-2';
    const inputClasses = 'form-input w-full rounded-md border border-blood bg-white text-gray-900 p-2';

    const submitForm = () => {
      console.log('Form submitted with the following data:', info.value);
      // Dummy data submission
      // Comment out axios.post and toast lines for dummy data
      // axios.post('http://127.0.0.1:8000/ams/artists/', info.value)
      //   .then(response => {
      //     if (response.status === 201) {
      //       clearForm();
      //       toast.success("User created successfully");
      //     }
      //   })
      //   .catch(error => {
      //     toast.error("User not created");
      //   });
    };

    const router = useRouter();

    const navigateToLogin = () => {
      console.log('Navigate to login');
      // Dummy navigation
      router.push('/login');
    };

    const clearForm = () => {
      info.value = {
        id: null,
        first_name: '',
        last_name: '',
        dob: '',
        gender: '',
        address: '',
        email: '',
        password: '',
      };
    };

    return {
      info,
      formFields,
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
