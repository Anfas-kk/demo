
function showSectionad() {
            window.location.href = 
                "admin.html";
        }
        function showSectionco() {
            window.location.href = 
                "course.html";
        }
        function showSectionst() {
            window.location.href = 
                "student.html";
        }



let mentors = [];


const mName = document.getElementById("mName");
const mCourse = document.getElementById("mCourse");
const mAge = document.getElementById("mAge");
const mSalary = document.getElementById("mSalary");
const mentorTable = document.getElementById("mentorTable");
const addBtn = document.getElementById("addBtn");


function addMentor() {
if (
    mName.value === "" ||
    mCourse.value === "" ||
    mAge.value === "" ||
    mSalary.value === ""
) {
    alert("Please fill all fields");
    return;
}

mentors.push({
    name: mName.value,
    course: mCourse.value,
    age: Number(mAge.value),
    salary: Number(mSalary.value)
});

clearInputs();
renderMentors();
}


function renderMentors() {
mentorTable.innerHTML = "";

mentors.forEach((m, i) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${m.name}</td>
    <td>${m.course}</td>
    <td>${m.age}</td>
    <td>${m.salary}</td>
    <td>
        <button onclick="removeMentor(${i})">Remove</button>
    </td> `;

    mentorTable.appendChild(row);
});
}

function removeMentor(index) {
mentors.splice(index, 1);
renderMentors();
}


function clearInputs() {
mName.value = "";
mCourse.value = "";
mAge.value = "";
mSalary.value = "";
}


addBtn.addEventListener("click", addMentor);



