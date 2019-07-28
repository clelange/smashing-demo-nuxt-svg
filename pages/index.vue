<template>
  <main>
    <div class="background">
      <app-masthead />
    </div>
    <div class="headings">
      <h1>Hello
        <!-- Hello tacoface
        <br />I love delicious tacos! -->
      </h1>
    </div>
    <div class="links">
      <p>Go follow Hawk</p>
    </div>
    <div class="nextpage">Projects ></div>
  </main>
</template>

<script>
import AppMasthead from "~/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: calc(100vh-100px);
  display: grid;
  grid-template-columns: 100px 100px 1fr 1fr;
  grid-template-rows: 1fr 1fr 100px 50px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .background {
    grid-area: 1 / 3 / 4 / 5;
  }
  .headings {
    grid-area: 2 / 1 / 3 / 4;
    // background: #aaaaaa;
  }
  .links {
    grid-area: 4 / 1 / 5 / 4;
    padding: 30px;
  }
  .nextpage {
    grid-area: 3 / 4 / 5 / 5;
    background: #eee;
    color: black;
    padding: 30px;
  }
}
</style>