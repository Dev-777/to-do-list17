const initialState = {
  createTaskModal: {
    isOpen: false,
    inputForm: {
      name: "",
      email: "",
      description: "",
    },
  },
  item: {
    name: "",
    email: "",
    description: "",
    status: "In progress",
  },
  confirmModal: {
    isOpen: false,
  },
};

const rebootCreateTaskModal = (state, initialState) => {
  return { ...state, createTaskModal: initialState.createTaskModal };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OpenModal":
      return {
        ...state,
        createTaskModal: {
          ...state.createTaskModal,
          isOpen: !state.createTaskModal.isOpen,
        },
      };

    case "CloseModal":
      return rebootCreateTaskModal(state, initialState);
    case "CancelModal":
      return rebootCreateTaskModal(state, initialState);
    case "CreateModal":
      return {
        ...state,
        item: { ...state.item, ...state.createTaskModal.inputForm },
      };

    default:
      return state;
  }
};
