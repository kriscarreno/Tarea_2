
<template>
    <div class="container">
        <div class="form">
    <h1>Crear Proyecto</h1>
    <input placeholder="Defina un nombre" type="text" v-model="name"/>
    <button type="submit" @click="submit">Crear</button>
    <p style="color: red">{{error}}</p>
    <router-link to="/">Regresar a la pantalla principal</router-link>
     </div> 
    </div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: center;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #79e1e9af;
    width: 300px;
}
.form input{
    border: none;
    border-radius: 20px;
    height: 30px;
    padding: 5px;
}
.form button{
    height: 30px;
    width: 90px;
    border: none;
    border-radius: 10px;
    font-size: large;
    margin-top: 10px;
    margin-bottom: 10px;
}

.form button:hover{
    transform: scale(1.1);
}
</style>

<script setup>
import { ref } from 'vue';
import {useRouter} from 'vue-router'
import { useProjectStore } from '../stores/useProjectStore';

const store=useProjectStore()
const router=useRouter()
const name=ref('')
const error=ref('')
function submit(){
    if(name.value!==''){
        const exist=store.getProjects.find(project=>project.name===name.value)
        if(!exist){
    store.addProject(name)
    router.push('/')
    error.value=''
        }else{
            error.value='Ya existe un proyecto con este nombre'
        }
    }else{
        error.value='Debe ingresar un nombre'
    }
}
</script>