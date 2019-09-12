<template>
  <div>
    <h3>{{ msg }}</h3>
    <ul>
      <li v-for="st in students">{{ st }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "All Students",
      students: ["Shajib", "Zihan", "Polash", "Robin"],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    color: red;
  }
</style>
