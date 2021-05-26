import axios from "../../utils/axios.js";

export function loadEmployees() {
  return async (dispatch) => {
    const response = await axios.get("/employees");
    dispatch(setEmployees(response.data));
  };
}

export function setEmployees(employees) {
  return {
    type: "employee_list",
    data: employees,
  };
}
