
<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../stores/useProjectStore';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const route=useRoute()
const router=useRouter()
const id=ref()
   onMounted(()=>{
    id.value=route.params.item
   }) 
const store=useProjectStore()
const name=ref('')
const error=ref('')
const status=ref(false)
const addAct=()=>{
    if(name.value!==''){
        const pj=store.getProjects.find(project=>project.name===id.value)
        const exist=pj.activities.find(activity=>activity.name===name.value)
        console.log(exist);
        if(!exist){
            const activity={name,status,fecha:Date.now()}
            store.addActividad(id.value,activity);
            router.push('/')
        }else{
            error.value='ya existe una actividad con este nombre'
        }
    }else{
        error.value='Debe especificar un nombre'
    }
}
</script>
<template>
    <div class="container">
    <div class="form">
        <h2>Add Activity</h2>
        <label for="name">Name</label>
        <input autocomplete="none" name="name" type="text" v-model="name"/>
        <label for="status">Status</label>
        <input name="status" type="checkbox" v-model="status"/>
        <button @click.prevent="addAct()">Submit</button>
        <p style="color: red;">{{error}}</p>
        <router-link to="/">Come back to Home</router-link>
    </div>
</div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
}
.form{
    background-color: #79e1e9af;
    padding: 10px;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form input[type="text"]{
    height: 30px;
    border: none;
    border-radius: 10px;
    padding: 0 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
}
.form input[type='checkbox']{
    transform: scale(1.5);
    margin: 10px;
}
.form button{
    height: 30px;
    width: 90px;
    border: none;
    border-radius: 10px;
    font-size: large;
    margin-bottom: 10px;
}
.form button:hover{
    transform: scale(1.1);
}
</style>