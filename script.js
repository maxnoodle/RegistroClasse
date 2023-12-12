document.addEventListener("DOMContentLoaded", function () {
    // Check if there are saved students in localStorage and load them
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    displayStudents(savedStudents);
});

function addStudent() {
    const nameInput = document.getElementById("name");
    const gradeInput = document.getElementById("grade");

    const name = nameInput.value.trim();
    const grade = gradeInput.value.trim();

    if (name !== "" && grade !== "") {
        const student = { name, grade };

        // Get existing students from localStorage
        const existingStudents = JSON.parse(localStorage.getItem("students")) || [];

        // Add the new student
        existingStudents.push(student);

        // Save the updated students to localStorage
        localStorage.setItem("students", JSON.stringify(existingStudents));

        // Clear input fields
        nameInput.value = "";
        gradeInput.value = "";

        // Display the updated list of students
        displayStudents(existingStudents);
    }
}

function displayStudents(students) {
    const studentList = document.getElementById("studentList");
    // Clear the current list
    studentList.innerHTML = "";

    // Display each student in the list
    students.forEach(student => {
        const listItem = document.createElement("li");
        listItem.textContent = `${student.name} - Voto: ${student.grade}`;

        // Add a delete button for each student
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        deleteButton.onclick = () => deleteStudent(student, students);

        listItem.appendChild(deleteButton);
        studentList.appendChild(listItem);
    });
}

function deleteStudent(studentToDelete, students) {
    // Filter out the student to be deleted
    const updatedStudents = students.filter(student => student !== studentToDelete);

    // Save the updated students to localStorage
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    // Display the updated list of students
    displayStudents(updatedStudents);
}
