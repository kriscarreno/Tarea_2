import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProjectStore=defineStore('projects',()=>{
    const projects=ref([])
    
    const getProjects=computed(()=>projects.value)

    function addProject(name){
       const newProject={name,activities:[]}
       projects.value.push(newProject)
    }
    function deleteProject(){}
    return{projects,addProject,getProjects}
})