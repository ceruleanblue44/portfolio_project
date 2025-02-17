<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/intro">Intro</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
	.app-header {
		height: 0;
	}
</style>
