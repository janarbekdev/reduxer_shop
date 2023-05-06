// const inistailState = {
//     task: JSON.parse(localStorage.getItem('basket')) || [],
// }
// export const TaskReducer = (state = inistailState, action) => {
//     switch (action.type) {
//         case "TAKE_TASK":
//             const findTask = state.task.find(el=> el.id ===  action.payload.id)
//             if (findTask){
//                 return {...state,task: state.task.map(el=> el.id === findTask.id ? {...el,quantity: el.quantity + 1} : 1)}
//             } else {
//                 return {...state,basket: [...state.task,{...action.payload,quality:1}]}
//             }
//         default:
//             return state
//
//     }
//
//
// }