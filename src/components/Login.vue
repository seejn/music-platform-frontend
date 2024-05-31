<template><div class="login overflow-y-hidden">
  <Guest/>
    <div class="main min-h-screen flex justify-center items-center bg-black  ">
      <div class="container max-w-7xl w-full bg-white rounded-lg shadow-lg flex">
        <div class="w-2/3 ">
          <img src="/src/assets/tay.jpg" alt="Tay" class=" w-full h-full object-cover" />
        </div>
        <div class="w-1/3 p-8 flex items-center justify-center">
          <form @submit.prevent="submitForm" class="w-full">
            <div>
              <h2 class="text-3xl font-bold mb-8 text-black text-center">Login</h2>
              <div class="space-y-6">
                <div class="form-group">
                  <label class="block text-lg font-medium text-gray-700 mb-2" for="email">Email</label>
                  <input type="email"  id="email" class="form-input w-full rounded-md border border-blood bg-white text-gray-900 p-2" />
                </div>
  
                <div class="form-group">
                  <label class="block text-lg font-medium text-gray-700 mb-2" for="password">Password</label>
                  <input type="password" id="password" class="form-input w-full rounded-md border border-blood bg-white text-gray-900 p-2" />
                </div>
  
                <div class="form-submit flex justify-center mt-8">
                  <button type="submit" class="bg-white border-blood border-2 hover:bg-blood hover:text-white  text-black font-bold py-2 px-4 rounded-full mb">Login</button>
                </div>
                <div class=" flex justify-center mt-8">

                <p>Already have an account?</p>
          </div>

          <div class="flex justify-center mt-8">
            <button @click="navigatetoSignup" class="bg-white border-blood border-2 hover:bg-blood hover:text-white  text-black font-bold py-2 px-4 rounded-full mb">Signup</button>
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
  import Guest from './Navbar/Guest.vue'

  export default {
    name: 'Login',
    components: {
      Guest   }
  };


</script>
  <style>
  .login
    {
      font-family: 'Inter', sans-serif;
    }
  
</style>
