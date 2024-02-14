<script setup>
const route = useRoute()
</script>

<template>
  <div class="container">
    <p> id {{ route.params.id }}</p>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  margin: 0 auto;
  max-width: 952px;
  padding: 0 20px;
}
</style>
