<template>
  <div>
    <VButton color="blue">测试</VButton>
    <VButton color="red">测试</VButton>
    <VButton color="yellow">测试</VButton>
    <VButton color="purple" icon="search">测试</VButton>
    <VButton color="pink" icon="edit">测试</VButton>
    <VButton color="indigo" icon="check">测试</VButton>
    <VButton color="gray" icon="message">测试</VButton>
  </div>
  <div></div>
</template>

<script lang="ts">
import VButton from "./button";

export default {
  components: {
    VButton,
  },
};
</script>
