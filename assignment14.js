// Questoin 1
let employees = [
    {
        "id": 1,
        "name": "Abhinav",
        "department": "IT",
        "Salary": 75000
    }, {
        "id": 2,
        "name": "Gaurav",
        "department": "Sales",
        "Salary": 52000
    }, {
        "id": 3,
        "name": "Raj",
        "department": "IT",
        "Salary": 64000
    }
]

// a)
let ITEmp = employees.filter((data) => data.department === 'IT')
console.log(ITEmp)
// b)
let whoEarnLessThan = employees.filter((data) => data.Salary < 65000)
console.log(whoEarnLessThan)

// =====================================================================

// Question 2

let hospitals = [
    {
        "id": 1,
        "name": "Hospital A",
        "location": "Delhi",
        "noOfBeds": 450,
        "availability": "Yes"
    }, {
        "id": 2,
        "name": "Hospital B",

        "location": "Pune",
        "noOfBeds": 150,
        "availability": "No"
    }, {
        "id": 3,
        "name": "Hospital",
        "location": "Pune",
        "noOfBeds": 350, 
        "availability" : "Yes"
    }
]

// a)
console.log(hospitals.filter((data)=> data.noOfBeds > 200))
// b)
console.log(hospitals.filter((data)=> data.availability === 'Yes'))
// c)
console.log(hospitals.filter((data)=> data.location === 'Pune'))
