<script setup>
import { useProjectStore } from '../stores/useProjectStore';
const store=useProjectStore()
</script>

<template>
    <div>
    <div class="main">
    <div class="container">
      <h2>Projects</h2>
      <div>
      <ul v-for="item in store.getProjects" :key="item.name">
        <li>{{item.name}}</li>
      </ul>
      </div>
      <button @click="this.$router.push('/addproject')">Add Project</button>
    </div>
    <div class="container">
      <h2>Project Activity</h2>
      <button @click="this.$router.push('/addactivity')">Add Activity</button>
    </div>
    </div>
    </div>
    </template>
    
    <style scoped>

    .main{
      display: flex;
    }
    .container{
      background: #57e2ecbd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 550px;
      border-radius: 20px;
      padding: 10px;
      margin: 10px;
    }
    .container div{
        height: 450;
        overflow-y: auto;
    }
    </style>
    