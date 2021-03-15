<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <h1>{{ $store.state.counter }}</h1>
    </div>
    <div class="">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.counterSquared }}
    </div>
    <br />
    <div class="buttons">
      <button @click="$store.dispatch('incCounter')">+</button>
      <button @click="$store.dispatch('decCounter')">-</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.buttons button {
  width: 65px;
  height: 39px;
  font-size: 26px;
  color: white;
  background-color: #35495e;
  border: 0px;
  margin: 0px 5px;
}
</style>
