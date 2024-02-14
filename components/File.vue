<script setup>
import JPG from '@/assets/icons/jpg.vue'

defineProps({
  name: String,
  size: String
})
</script>

<template>
  <div class="file">
    <div class="file__preview"></div>
    <div class="file__info">
      <JPG class="file__icon" />
      <div class="file__data">
        <p class="file__name"> {{ name }} </p>
        <p class="file__size"> {{ size }} </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 196px;
  width: 175px;
  &__preview {
    width: 100%;
    height: 100%;
    background: rgb(99, 99, 99);
  }
  &__info {
    display: flex;
    flex-direction: row;
    padding: 16px 0;
    align-self: start;
    background: #2d2b29;
    width: 100%;
    border: 1px solid #ffffff24;
  }
  &__icon {
  }
  &__data {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &__name {
    font-size: 14px;
  }
  &__size {
    color: #bbb5ae;
    font-size: 10px;
  }
}

</style>