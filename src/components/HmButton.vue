<template>
  <div class="hm-button">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.hm-button {
  height: 50px;
  line-height: 50px;
  background-color: red;
  border-radius: 25px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin: 20px;
}
</style>
