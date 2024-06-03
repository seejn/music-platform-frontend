<template>
  <div class="dashboard-container bg-black">
    <slot name="navbar" />
    <div class="content-container h-screen flex">
      <div class="sidebar">
        <slot name="sidebar" />
      </div>
      <div class="main-content">
        <slot name="mainContent" />
        <div class="footer">
          <Footer/>
          
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'; // Import the Footer component

export default {
  components: {
    Footer // Register the Footer component
  }
};
</script>
<style scoped>
.footer{
  height: min-content;
  bottom: 0;
  position: relative;

}

.dashboard-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-container {
  display: flex;
  flex: 1;
  background-color: black;
}

.sidebar {
  width: 250px; 
  background-color: #000;
  color: #fff;
  height: 100%; 
  padding: 1rem; 
}

.main-content {
  flex: 1;
  background-color: black; /* Adjust background color as needed */
  overflow-y: auto; /* Enable scrolling if content overflows */
  padding: 0; /* Adjust padding as needed */
}
</style>
