<template>
  <div>
    <GuestNav />
    <div class="main min-h-screen flex justify-center items-center bg-black">
      <div class="container max-w-7xl w-full bg-white rounded-lg shadow-lg flex">
        <div class="w-2/3">
          <img src="/src/assets/pic/harryy.jpg" alt="Harry" class="w-full h-full object-cover" />
        </div>
        <div class="w-1/2 p-8">

          <form @submit.prevent="submitForm">
            <div>
              <h2 class="text-3xl font-bold mb-8 text-black text-center">Registration Form</h2>
              <div class="space-y-6">
                <div class="form-group">
                  <label for="first_name" :class="labelClasses">First Name</label>
                  <input
                    v-model="info.first_name"
                    id="first_name"
                    type="text"
                    :class="inputClasses"
                  />
                  <p v-if="!info.first_name && formSubmitted" class="text-red-500 text-sm mt-2">First Name is required.</p>
                </div>


                <div class="form-group">
                  <label for="last_name" :class="labelClasses">Last Name</label>
                  <input
                    v-model="info.last_name"
                    id="last_name"
                    type="text"
                    :class="inputClasses"
                  />
                  <p v-if="!info.last_name && formSubmitted" class="text-red-500 text-sm mt-2">Last Name is required.</p>
                </div>


                <div class="form-group">
                  <label for="email" :class="labelClasses">Email</label>
                  <input
                    v-model="info.email"
                    id="email"
                    type="text"
                    :class="inputClasses"
                  />
                  <p v-if="!info.email && formSubmitted" class="text-red-500 text-sm mt-2">Email is required.</p>
                  <p v-if="info.email && !isEmailValid && formSubmitted" class="text-red-500 text-sm mt-2">Please enter a valid email address.</p>
                </div>


                <div class="form-group">
                  <label for="password" :class="labelClasses">Password</label>
                  <input
                    v-model="info.password"
                    id="password"
                    type="password"
                    :class="inputClasses"
                  />
                  <p v-if="!info.password && formSubmitted" class="text-red-500 text-sm mt-2">Password is required.</p>
                  <p v-if="info.password && passwordRequirementsNotMet && formSubmitted" class="text-red-500 text-sm mt-2">Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.</p>
                </div>


                <div class="form-group">
                  <label for="confirmPassword" :class="labelClasses">Confirm Password</label>
                  <input
                    v-model="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    :class="inputClasses"
                  />
                  <p v-if="passwordsDoNotMatch" class="text-red-500 text-sm mt-2">Passwords do not match.</p>
                  <p v-if="!confirmPassword && formSubmitted" class="text-red-500 text-sm mt-2">Please confirm your password.</p>
                </div>


                <div class="form-group">
                  <label for="dob" :class="labelClasses">Date of Birth</label>
                  <input
                    v-model="info.dob"
                    id="dob"
                    :class="inputClasses"
                    type="date" 
                  />
                  <p v-if="!info.dob && formSubmitted" class="text-red-500 text-sm mt-2">Date of Birth is required.</p>
                  <p v-if="dobInFuture" class="text-red-500 text-sm mt-2">Date cannot be greater than today's date.</p>
                </div>


                <div class="form-group">
                  <label for="gender" :class="labelClasses">Gender</label>
                  <select
                    v-model="info.gender"
                    id="gender"
                    :class="inputClasses"
                  >
                    <option disabled value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <p v-if="!info.gender && formSubmitted" class="text-red-500 text-sm mt-2">Gender is required.</p>
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, computed, watch } from 'vue';
import GuestNav from '../../components/Header/GuestNav.vue';
import { useRouter } from 'vue-router';
import { createArtist, createUser } from '../../api/Auth';

export default {
  name: 'Register',
  components: {
    GuestNav,
  },
  setup() {
    const router = useRouter();

    const info = ref({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      dob: '',
      gender: '',
    });

    const confirmPassword = ref('');
    const passwordsDoNotMatch = ref(false);
    const passwordRequirementsNotMet = ref(false);
    const dobInFuture = ref(false);
    const formSubmitted = ref(false);


    const labelClasses = 'block text-sm font-medium text-gray-700 mb-2';
    const inputClasses = 'form-input w-full rounded-md border border-blood bg-white text-gray-900 p-2';

    const isEmailValid = computed(() => {
      return /\S+@\S+\.\S+/.test(info.value.email);
    });


    watch(info, (newInfo) => {
      if (passwordRequirementsNotMet.value) {
        const hasUpperCase = /[A-Z]/.test(newInfo.password);
        const hasLowerCase = /[a-z]/.test(newInfo.password);
        const hasNumber = /[0-9]/.test(newInfo.password);
        const hasSpecialChar = /[!@#$%^&*]/.test(newInfo.password);

        if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
          passwordRequirementsNotMet.value = false;
        }
      }

      if (passwordsDoNotMatch.value) {
        passwordsDoNotMatch.value = newInfo.password !== confirmPassword.value;
      }
    }, { deep: true });

    watch(confirmPassword, (newConfirmPassword) => {
      passwordsDoNotMatch.value = newConfirmPassword !== info.value.password;
    });


    const submitForm = async () => {
      formSubmitted.value = true;

      try {
        if (!info.value.first_name || !info.value.last_name || !info.value.email || !info.value.password || !confirmPassword.value || !info.value.dob || !info.value.gender) {
          throw new Error('Please fill in all required fields.');
        }

        if (info.value.email && !isEmailValid.value) {
          throw new Error('Please enter a valid email address.');
        }

        if (info.value.password !== confirmPassword.value) {
          passwordsDoNotMatch.value = true;
          throw new Error('Passwords do not match');
        } else {
          passwordsDoNotMatch.value = false;
        }


        const hasUpperCase = /[A-Z]/.test(info.value.password);
        const hasLowerCase = /[a-z]/.test(info.value.password);
        const hasNumber = /[0-9]/.test(info.value.password);
        const hasSpecialChar = /[!@#$%^&*]/.test(info.value.password);

        if (!(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar)) {
          passwordRequirementsNotMet.value = true;
          throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        } else {
          passwordRequirementsNotMet.value = false;
        }


        const dobDate = new Date(info.value.dob);
        const currentDate = new Date();
        if (dobDate > currentDate) {
          dobInFuture.value = true;
          throw new Error('Date of birth cannot be in the future');
        } else {
          dobInFuture.value = false;
        }


        const response = await createArtist(info.value);
        toast.success('Artist created successfully');
        clearForm();
      } catch (error) {
        toast.error('Artist creation failed');
      }
    };


    const navigateToLogin = () => {
      router.push('/login');
    };

    const clearForm = () => {
      info.value.first_name = '';
      info.value.last_name = '';
      info.value.email = '';
      info.value.password = '';
      info.value.dob = '';
      info.value.gender = '';

      confirmPassword.value = '';
      passwordsDoNotMatch.value = false;
      passwordRequirementsNotMet.value = false;
      dobInFuture.value = false;
      formSubmitted.value = false;
    };

    return {
      info,
      confirmPassword,
      passwordsDoNotMatch,
      passwordRequirementsNotMet,
      dobInFuture,
      labelClasses,
      inputClasses,
      submitForm,
      navigateToLogin,
      formSubmitted,
      clearForm,
      isEmailValid,
    };
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}
</style>
