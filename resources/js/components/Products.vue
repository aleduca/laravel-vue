<script setup>
import {ref} from 'vue';

const name = ref('')
</script>
<template>

{{ name }}

<input type="text" v-model="name">

</template>