let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  let list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    let li = document.createElement("li");
    li.innerHTML = note + 
      `<button onclick="deleteNote(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

function addNote() {
  let input = document.getElementById("noteInput");
  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();
