<script setup>
import { useProjectStore } from '../stores/useProjectStore';
import { ref,computed } from 'vue';
const store=useProjectStore()
const name=ref('')
const activities=ref([])
const selectedStatus=ref('')
const activitiesFiltred=computed(()=>{
  if (selectedStatus.value === '') {
       return activities.value;
     } else if(selectedStatus.value==='false'){
       return activities.value.filter(actividad => actividad.status === false)
     }else{
      return activities.value.filter(actividad => actividad.status === true)
     }
})
const updateItem=(item)=>{
  store.updateProject(item,name.value)
  name.value=''
  item.show=!item.show
}
const showUpdate=(item)=>{
  const div=document.getElementById('project')
  div.style.flexDirection='column'
  div.style.gap='10px'
  item.show=!item.show
}
const unShowUpdate=(item)=>{
  const div=document.getElementById('project')
  div.style.flexDirection='initial'
  item.show=!item.show
}

</script>

<template>
    <div>
    <div class="main">
    <div class="container">
      <h2>Proyectos</h2>
      <div>
      <ul  v-for="item in store.getProjects" :key="item.name">
        <li class="listItem">
           <span>{{item.name}}</span>
          <div id="project">
          <a @click="store.deleteProject(item)"><span>Eliminar</span></a>
          <a @click="activities=item.activities"><span>Mostrar actividades</span></a>
          <a @click="this.$router.push(`/addactivity${item.name}`)"><span>Añadir actividad</span></a>
          <a v-if="!item.show" @click="showUpdate(item)"><span>Actualizar Proyecto</span></a>
          <input placeholder="Define a new Name" class="inpUp" v-model="name"  v-if="item.show" type="text"/>
          <a v-if="item.show" @click="updateItem(item)"><span>Actualizar</span></a>
          <a v-if="item.show" @click="unShowUpdate(item)"><span>Cancelar</span></a>
          
          </div>
        </li>
      </ul>
      </div>
      <button @click="this.$router.push('/addproject')">Crear Proyecto</button>
    </div>
    <div class="container">
      <h2>Actividades de Proyecto</h2>
      <div>
        <select v-model="selectedStatus">
          <option value="">Todos</option>
          <option value="true">Completado</option>
          <option value="false">Pendiente</option>
        </select>
      </div>
      <div>
        <h3 v-if="activities.length>0">{{ activities[0].project }}</h3>
        <h3 v-if="activities.length===0">No hay actividades para mostrar</h3>
        <ul >
          <li class="listItem" v-for="item in activitiesFiltred" :key="item.name">
            <span>{{item.name}}</span>
            <input  v-model="item.status" type="checkbox"/>
            <a @click="store.deleteActividad(item.project,item.name)">Eliminar</a>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </div>
    </template>
    
    <style scoped>

    .main{
      display: flex;
    }
    .container{
      background: #79e1e9af;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      height: 550px;
      border-radius: 20px;
      padding: 10px;
      margin: 10px;
    }
    .container button:hover{
        transform: scale(1.1);
    }
    .container div{
      width: 100%;
        height: 450;
        overflow-y: auto;
    }
    .container div h3{
      padding: 10px;
    }
    .container button{
      height: 50px;
      width: 150px;
      border: none;
      border-radius: 20px;
      font-size: large;
    }
    .container ul{
      list-style: none;
    }
    .listItem{
        padding:10px;
        font-size: larger;
        font-weight: 500;
        cursor: pointer;
      
    }
    .listItem div{
      display: flex;
    }
    .listItem input[type='checkbox']{
      transform: scale(1.5);
      margin-left: 10px;
    }
    .inpUp{
      margin-left: 10px;
      border: none;
      border-radius: 10px;
      padding: 10px;
      margin-bottom: 10px;
    }
    .listItem a{
      padding-inline: 10px;
      background: #ffffff;
      border-radius:10px ;
      margin-left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .listItem a:hover{
      cursor: pointer;
      background: gray;
    }
    @media screen and (max-width: 1000px) {
      .main{
        flex-direction: column;
      }
      .container{
        width: 90%;
      }
      .listItem div{
        flex-direction: column;
      }
      .listItem a{
        margin-bottom: 10px;
      }
    }
    </style>
    