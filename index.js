// Need to initialise the employee object first using the key:value syntax. 
// Created a variable to store the object in. 
// Inside the curly braces are the key-value pair, which makes up one property. 
let employee = {
    name : 'Sam',
    address: '11 Broadway St'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return{...employee, [key] : value};
}

// destructivelyUpdateEmployeeWithKeyAndValue(): this function should work the same as updateEmployeeWithKeyAndValue()
// but it should mutate the employee Object passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

// Deletes `key` from a clone of employee and returns the new employee (it is non-destructive).
// First, need to create a copy by creating a new variable and using the spread operator.
// Use the delete keyword to delete the key from the new variable.
// Retrun the value of the new variable.

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

// destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
// In this case, do not have to create a copy. Just need to delete the key from the object called employee. 
// Then, return the value of the object (e.g., employee).

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}