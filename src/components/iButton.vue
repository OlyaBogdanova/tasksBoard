<template>
  <button :style="computedBtnStyled" :class="btnClassList">
    <slot />
  </button>
</template>
<script setup>
const btnClassList =
  'flex justify-center items-center border border-solid cursor-pointer w-fit h-fit text-black p-1.5 text-base transition-all hover:backdrop-filter: contrast(2)'
</script>
<style lang="scss" scoped></style>
