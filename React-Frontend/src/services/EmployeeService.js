import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/ems/employees';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId){
        return axios.get('http://localhost:8080/ems' + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put('http://localhost:8080/ems' + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete('http://localhost:8080/ems' + '/' + employeeId);
    }
}

export default new EmployeeService();