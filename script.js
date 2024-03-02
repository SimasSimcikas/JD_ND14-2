const table = document.querySelector("table");
const btn = document.querySelector("#add");

const name = document.querySelector("#name");
const last = document.querySelector("#last");
const age = document.querySelector("#age");

const addButton = document.querySelector("#add");
const removeFirstButton = document.querySelector("#removeFirst");
const addLastButton = document.querySelector("#removeLast");

for (let i = 0; i < people.length; i++) {
  table.innerHTML += `
        <tr>
            <td>${people[i].name}</td>
            <td>${people[i].last}</td>
            <td>${people[i].age}</td>
        </tr>
    `;
}

addButton.addEventListener("click", addRow);
function addRow() {
  name.value;

  if (name.value.length < 1 || last.value.length < 1) {
    return alert("Uzpildykite visus laukus!");
  } else {
    // const tableRow = document.createElement("tr");
    people.push({ name: name.value, last: last.value, age: age.value });

    table.innerHTML += `
        <tr>
            <td>${name.value}</td>
            <td>${last.value}</td>
            <td>${age.value}</td>
        </tr>
    `;
  }
}

tableRow.append(nameTableData, lastNameTableData, ageTableData);
tableRow.append(tableRow);

btn.addEventListener("click", addElement);
