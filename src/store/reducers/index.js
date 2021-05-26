let defaultState = {
  employees: [],
};

const mainReducer = (state = defaultState, action) => {
  if (action.type === "employee_list") {
    return {
      ...state,
      employees: action.employees,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default mainReducer;
