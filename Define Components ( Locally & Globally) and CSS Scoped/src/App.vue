<template>
  <div>
    <student></student>
    <helloworld></helloworld>
  </div>
</template>

<script>
//locally define component
  import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      students: ["Shajib", "Robin", "Zihan", "Polash"],
      msg: "Welcome to MI Shajib site",
      title: 'Software Engineer'
    }
  },
  //also register here component
  components: {
    "helloworld": HelloWorld
  }
}
</script>

<style scoped>

</style>
