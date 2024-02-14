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
  min-height: 200px;
  width: 175px;
  &__preview {
    height: 130px;
    background: rgba(255, 255, 255, 0.249);
  }
  &__info {
    display: flex;
    flex-direction: row;
    height: 32px;
    gap: 5px;
    padding: 16px 0;
    background: #2d2b29;
    align-items: center;
  }

  &__icon {
  }
  &__data {
    display: flex;
    flex-direction: column;
  }
  &__name {
    color: #ffffff;
    font-size: 14px;
  }
  &__size {
    color: #bbb5ae;
    font-size: 10px;
  }
}

</style>