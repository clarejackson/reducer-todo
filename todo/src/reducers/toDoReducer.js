export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        },
      ];
      case ACTIONS.TOGGLE_TODO:
        return state.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed:!item.completed,
            };
          } else {
            return item;
          }
        });
        case ACTIONS.DELETE_TODO:
          return state.filter((item) => !item.completed);
          default:
            return state;
  }
};

export default toDoReducer;