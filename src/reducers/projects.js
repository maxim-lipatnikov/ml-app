import { PROJECT_ADD, PROJECT_TASK_ADD } from '../actions/projects/projects'
import { projects } from '../components/NormalizeProjects/NormalizeProjects'
import { NormalizeProjects } from '../components/NormalizeProjects/NormalizeProjects'

const { projectsById, tasksById } = NormalizeProjects(projects)

const initialState = {
  projects: projectsById,
  tasks: tasksById
}

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_ADD: {
      const projectId = Object.keys(state.projects).length + 1
      const newProject = {
        id: projectId,
        name: action.name,
        tasks: []
      }
      const newProjects = { ...state.projects }
      newProjects[projectId] = newProject
      return {
        ...state,
        projects: newProjects
      }
    }
    case PROJECT_TASK_ADD: {
      const projectId = action.projectId
      const taskId = action.taskId
      let newProjTasks = { ...state.projects }
      newProjTasks[projectId].tasks = [...newProjTasks[projectId].tasks, taskId]
      return {
        ...state,
        projects: newProjTasks
      }
    }
    default:
      return state;
  }
}


// export const projects = {
//   projectsById: {
//     1: {
//         id: 1,
//         name: 'To do at home',
//         tasks: [1, 2, 3]
//     },
//     2: {
//         id: 2,
//         name: 'Homeworks',
//         tasks: [4, 5, 6]
//     }
// },
// tasksById: {
//     1: {
//         id: 1,
//         name: 'Task Name 1',
//         description: 'Task Description 1',
//         completed: false 
//     },
//     2: {
//         id: 2,
//         name: 'Task Name 2',
//         description: 'Task Description 2',
//         completed: true
//     },
//     3: {
//         id: 3,
//         name: 'Task Name 3',
//         description: 'Task Description 3',
//         completed: false
//     },
//     4: {
//         id: 4,
//         name: 'Task Name 4',
//         description: 'Task Description 4',
//         completed: true
//     },
//     5: {
//         id: 5,
//         name: 'Task Name 5',
//         description: 'Task Description 5',
//         completed: false
//     },
//     6: {
//         id: 6,
//         name: 'Task Name 6',
//         description: 'Task Description 6',
//         completed: true
//     }
// }
// }
