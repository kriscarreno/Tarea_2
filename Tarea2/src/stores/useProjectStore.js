import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProjectStore=defineStore('projects',()=>{
    const projects=ref([])
    
    const getProjects=computed(()=>projects.value)

    function addProject(name){
       const newProject={name,activities:[],show:false}
       projects.value.push(newProject)
    }
    function deleteProject(item){
        const index = projects.value.findIndex(project => project.name === item.name);
        if(index!=-1){
            projects.value.splice(index,1)
        }
    }
    function updateProject(item,name){
        const projectChange=projects.value.find(project => project.name===item.name)
        projectChange.name=name
    }
    function addActividad(item,actividad){
        const projectToAdd=projects.value.find(project => project.name===item)
        console.log(item);
        console.log(projectToAdd);
        const newAct={project:item,name:actividad.name,status:actividad.status,fechaInicio:actividad.fecha}
        projectToAdd.activities.push(newAct)
    }
    function deleteActividad(item,name){
        const projectToAdd=projects.value.find(project => project.name===item)
        const index=projectToAdd.activities.findIndex(activity => activity.name===name)
        projectToAdd.activities.splice(index,1)
    }
    function updateActividad(item,nameAct,status){
        const projectToAdd=projects.value.find(project => project.name===item)
        const activity=projectToAdd.activities.find(activity => activity.name===nameAct)
        activity.status=status
    }
    return{projects,addProject,getProjects,deleteProject,updateProject,addActividad,deleteActividad,updateActividad}
})