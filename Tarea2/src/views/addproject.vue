
<template>
    <h1>Create Project</h1>
    <input placeholder="Give a name" type="text" v-model="name"/>
    <button type="submit" @click="submit">Submit</button>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
import { useProjectStore } from '../stores/useProjectStore';

const store=useProjectStore()
const router=useRouter()
const name=ref('')
function submit(){
    store.addProject(name)
    router.push('/')
}
</script>