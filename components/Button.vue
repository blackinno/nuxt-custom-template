<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, reuired: true, default: '' },
  },
}
</script>

<style lang="scss" scoped>
</style>