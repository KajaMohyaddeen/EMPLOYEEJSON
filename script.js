class Employee {
  constructor(empid, empname, dept, sal) {
      this.empid = empid;
      this.empname = empname;
      this.dept = dept;
      this.sal = sal;
  }
}

// Load static employees on page load
window.onload = function () {
  loadStaticEmployees();
};

// JSON data for employees
const jsonData = `{
  "emp": [
      {
          "empname": "Ram",
          "empid": 111,
          "dept": "Production",
          "sal": 4000
      },
      {
          "empname": "Sita",
          "empid": 112,
          "dept": "HR",
          "sal": 4500
      },
      {
          "empname": "Lakshman",
          "empid": 113,
          "dept": "Finance",
          "sal": 5000
      },
      {
          "empname": "Bharat",
          "empid": 114,
          "dept": "Marketing",
          "sal": 4800
      },
      {
          "empname": "Shiva",
          "empid": 115,
          "dept": "IT",
          "sal": 5500
      },
      {
          "empname": "Parvati",
          "empid": 116,
          "dept": "Administration",
          "sal": 4200
      },
      {
          "empname": "Hanuman",
          "empid": 117,
          "dept": "Customer Service",
          "sal": 4700
      },
      {
          "empname": "Ganesha",
          "empid": 118,
          "dept": "Research and Development",
          "sal": 5200
      },
      {
          "empname": "Kartikeya",
          "empid": 119,
          "dept": "Quality Assurance",
          "sal": 4900
      },
      {
          "empname": "Durga",
          "empid": 120,
          "dept": "Operations",
          "sal": 5100
      }
  ]
}`;

// Parse JSON data
const employeesData = JSON.parse(jsonData).emp;

// Convert JSON data to Employee objects
const employees = employeesData.map(employee => new Employee(employee.empid, employee.empname, employee.dept, employee.sal));


displayEmployees(employees);

function displayEmployees(employeesArray) {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';
  employeesArray.forEach(employee => {
      const div = document.createElement('div');
      div.classList.add('employee-tile');
      div.innerHTML = `
          <div class="employee-details">
              <p id="employee-name"><bold>${employee.empname}</bold></p>
              <p><strong>Department:</strong> ${employee.dept}</p>
              <p><strong>Salary:</strong> $${employee.sal}</p>
              <p><strong>Employee ID:</strong> ${employee.empid}</p>
          </div>
      `;
      employeeList.appendChild(div);
  });
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  setTimeout(() => {
      errorMessage.style.display = 'none';
  }, 3000);
}


document.getElementById('searchInput').addEventListener('input', function () {
  const searchInput = this.value.trim(); // Trim any whitespace
  if (!searchInput) {
    displayEmployees(employees); // If search input is empty, display all employees
    return;
  }
  const filteredEmployees = employees.filter(employee => employee.empid.toString().includes(searchInput));
  displayEmployees(filteredEmployees);
});

