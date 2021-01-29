export const rootReducer = (
  store = { todoFunc: [], todoClass: [] },
  action
) => {
  const { type } = action
  switch (type) {
    case 'ADD_TODO_FUNC':
      // console.info('rootReducer [8]', { action })
      return { ...store, todoFunc: [...store.todoFunc, action.data] }
    case 'CLEAR_TODO_FUNC':
      return { ...store, todoFunc: [] }
    case 'ADD_TODO_CLASS':
      // console.info('rootReducer [13]', { action })
      return { ...store, todoClass: [...store.todoClass, action.data] }
    case 'CLEAR_TODO_CLASS':
      return { ...store, todoClass: [] }
    default:
      return store
  }
}
