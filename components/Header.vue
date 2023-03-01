<template>
  <header>
    <HiddenSidebar :navLinks="navLinks" />
    <Navbar :navLinks="navLinks" />
  </header>
</template>

<script setup>
const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]
</script>
