// YourComponent.vue

<template>
  <div>
    <button @click="exportCSV">Export CSV</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    exportCSV() {
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/stats/export/dummy-csv/`, {
        responseType: 'blob'
      }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'dummy.csv');
        document.body.appendChild(link);
        link.click();
      }).catch(error => {
        console.error('Error exporting CSV:', error);
      });
    }
  }
};
</script>

<style>
/* Your CSS styles */
</style>
