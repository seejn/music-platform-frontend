<!-- src/components/MainContent.vue -->
<template>
    <div class="w-full h-20">
      <nav class=" fixed w-full">
        <div class="bg-black text-white h-20 p-6 flex items-center justify-between">
          <div>
            <button
              class="p-5 font-bold text-lg hover:text-orange-800"
              @click="goToPrevious"
            >
              &lt;
            </button>
            <button
              class="p-5 font-bold text-lg hover:text-orange-800"
              @click="goToNext"
            >
              &gt;
            </button>
          </div>
          <div class="relative flex items-center">
            <button class="p-5 font-bold text-lg hover:text-orange-800">
              Upload
            </button><!-- src/components/MainContent.vue -->
            <template>
                <div class="w-full h-20">
                  <nav class=" fixed w-full">
                    <div class="bg-black text-white h-20 p-6 flex items-center justify-between">
                      <div>
                        <button
                          class="p-5 font-bold text-lg hover:text-orange-800"
                          @click="goToPrevious"
                        >
                          &lt;
                        </button>
                        <button
                          class="p-5 font-bold text-lg hover:text-orange-800"
                          @click="goToNext"
                        >
                          &gt;
                        </button>
                      </div>
                      <div class="relative flex items-center">
                        <button class="p-5 font-bold text-lg hover:text-orange-800">
                          Upload
                        </button>
                        <button
                          id="dropdownHoverButton"
                          @click="toggleDropdown"
                          class="relative p-6 text-white focus:outline-none font-medium rounded-full"
                          type="button"
                        >
                          <img src="/src/assets/tay.jpg" alt="Tay" class="w-10 h-10 rounded-full" />
                        </button>
                        <!-- Dropdown menu -->
                        <div
                          v-show="isDropdownVisible"
                          class="absolute top-20 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                        >
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</a>
                            </li>
                            <li>
                              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <!-- Add more main content here -->
                </div>
              </template>
              
              <script>
              export default {
                name: 'MainContent',
                data() {
                  return {
                    isDropdownVisible: false
                  };
                },
                methods: {
                  toggleDropdown() {
                    this.isDropdownVisible = !this.isDropdownVisible;
                  },
                  handleClickOutside(event) {
                    if (!this.$el.contains(event.target)) {
                      this.isDropdownVisible = false;
                    }
                  },
                  goToPrevious() {
                    // Logic for previous button
                  },
                  goToNext() {
                    // Logic for next button
                  }
                },
                mounted() {
                  document.addEventListener('click', this.handleClickOutside);
                },
                beforeDestroy() {
                  document.removeEventListener('click', this.handleClickOutside);
                }
              };
              </script>
              
              <style scoped>
              #dropdownHoverButton img {
                width: 4rem; /* Adjust the size as needed */
                height: 4rem; /* Adjust the size as needed */
                border-radius: 50%;
              }
              </style>
              
            <button
              id="dropdownHoverButton"
              @click="toggleDropdown"
              class="relative p-6 text-white focus:outline-none font-medium rounded-full"
              type="button"
            >
              <img src="/src/assets/tay.jpg" alt="Tay" class="w-10 h-10 rounded-full" />
            </button>
            <!-- Dropdown menu -->
            <div
              v-show="isDropdownVisible"
              class="absolute top-20 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Profile</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <!-- Add more main content here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainContent',
    data() {
      return {
        isDropdownVisible: false
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownVisible = !this.isDropdownVisible;
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.isDropdownVisible = false;
        }
      },
      goToPrevious() {
        // Logic for previous button
      },
      goToNext() {
        // Logic for next button
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  };
  </script>
  
  <style scoped>
  #dropdownHoverButton img {
    width: 4rem; /* Adjust the size as needed */
    height: 4rem; /* Adjust the size as needed */
    border-radius: 50%;
  }
  </style>
  