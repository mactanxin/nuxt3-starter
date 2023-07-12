<template>
  <div>
    <nav>
      <NuxtLink to="/posts/recent">Recent</NuxtLink>
      <NuxtLink to="/posts/popular">Popular</NuxtLink>
      <NuxtLink to="/posts/trending">Trending</NuxtLink>
    </nav>
    <slot />
  </div>
</template>
