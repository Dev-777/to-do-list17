export type StateType = {
  createTaskModalIsOpen: boolean;
  confirmModalIsOpen: boolean;
  editItemModalIsOpen: boolean;
  loadList: boolean;
  item: {
    name: string;
    email: string;
    description: string;
    status: string;
  };
  itemList: any[];
  validation: {
    name: boolean;
    email: boolean;
    description: boolean;
  };

  editModal: {
    editModalDefaultValue: string;
    editableItemIndex: string;
  };
};

export type ListItemProsType = {
  name: string;
  email: string;
  description: string;
  status: string;
  index: number;
};
