cc_6.js

//Create an Employees Array of Employee Objects

const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];

//Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Shifts for ${employee.name}:`);
    employee.shifts.forEach(shift => {
        console.log(`- ${shift.day}: ${shift.hours} hours`);
    });
}

//Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name === employeeName);
    if (!employee) {
        console.log('Employee not found.');
        return;
    }
    const hasShift = employee.shifts.some(shift => shift.day === day);
    if (hasShift) {
        console.log(`${employeeName} is already scheduled for a shift on ${day}.`);
    } else {
        employee.shifts.push({ day, hours });
        console.log(`Assigned ${hours} hours on ${day} to ${employeeName}.`);
    }
}

//Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    const employee = employees.find(emp => emp.name === employeeName);
    if (!employee) {
        console.log('Employee not found.');
        return 0;
    }
    const totalHours = employee.shifts.reduce((total, shift) => total + shift.hours, 0);
    console.log(`${employeeName} has worked a total of ${totalHours} hours this week.`);
    return totalHours;
}

//Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    const availableEmployees = employees.filter(employee => 
        !employee.shifts.some(shift => shift.day === day)
    ).map(emp => emp.name);
    console.log(`Available employees on ${day}: ${availableEmployees.join(', ')}`);
}

// Example 1:
displayEmployeeShifts(employees[0]); // Displays shifts for John
assignShift('John', 'Friday', 5); // Assigns a shift to John
listAvailableEmployees('Tuesday'); // Lists employees available on Tuesday
calculateTotalHours('David'); // Calculates total hours for David