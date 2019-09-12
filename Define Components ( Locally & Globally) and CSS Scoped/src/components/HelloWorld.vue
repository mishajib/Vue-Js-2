<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to the Hello World Page"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{
    color: green;
  }
</style>
