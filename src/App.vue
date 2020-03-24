<template>
  <div id="app">
      <Home></Home>
  </div>
</template>

<script>
export default {
    components: {
        Home: () => import('./views/Home')
    }
}
</script>
