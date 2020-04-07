<template>
  <div id="app">
    <region-buttons></region-buttons>
    <contry-list></contry-list>
  </div>
</template>

<script>
import RegionButtons from './components/RegionButtons';
import ContryList from './components/ContryList';

export default {
  name: 'app',
  components: {
    RegionButtons,
    ContryList
  }
}
</script>

<style>
</style>

