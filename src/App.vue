<script>

export default {
  name: 'App',
  data(){
        return{

        }
      },
    methods: {
        handleTabClick: function (tabNames) {
            this.activeTabName = tabNames;
            this.currentTab = this.tabs[tabNames];
        }
    },
    apollo: {

    },
    components: {  },
}

</script>

<template>
  <Barnav/>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>