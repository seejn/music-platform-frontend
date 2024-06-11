<template>
  <Layout>
    <template #Main>
      <h6 class="text-center text-4xl mx-10 mb-10 text-white">Dashboard</h6>
      <div class="flex justify-between">
       
        <div class="flex-2 mr-4">
          <div class="rounded-xl mb-8">
            <div class="chart-container">
              <Bar />
            </div>
          </div>
          <div class="rounded-xl mb-8">
            <div class="chart-container w-full">
              <Pie />
            </div>
          </div>
        </div>
        <div class="flex-1 mr-10 w-36">
          <Card />
        </div>
      </div>
    </template>
  </Layout>
</template>
  <script setup>
import Card from '../../components/Dashboard/Card.vue'
import Bar from '../../components/Dashboard/Bar.vue'
import Pie from '../../components/Dashboard/Pie.vue'
import Layout from '../Layout.vue';
</script>

<style scoped>
  .glass-effect {
    background-color: rgba(194, 186, 186, 0.384);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 16px;
  }
 
.flex-2 {
  flex: 2;
}
.flex-1 {
  flex: 1;
}
</style>