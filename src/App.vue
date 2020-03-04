<template>
  <div id="app">
    <el-container class="app-container">
      <el-header class="app-header">
        <Myheader></Myheader>
      </el-header>
      <el-container>
        <el-aside width="135px">
          <Myside></Myside>
        </el-aside>
        <el-main class="app-main">
          <Mymain></Mymain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Myside from "./components/layout/Myaside.vue";
import Myheader from "./components/layout/Myheader.vue";
import Mymain from "./components/layout/Mymain.vue";
export default {
  name: "app",
  components: {
    Myside,
    Myheader,
    Mymain
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  #app {
    width: 100%;
    height: 100%;
    .app-container {
      height: 100%;
      .app-header {
        padding: 0;
      }
      .app-main {
        padding-bottom: 0;
      }
    }
  }
}
</style>
