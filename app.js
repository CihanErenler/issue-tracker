const ui = new UI();
const storage = new Storage();

const form = document.getElementById("issue-form");
const container = document.querySelector(".container");

form.addEventListener("submit", handle);

function handle(e) {
  e.preventDefault();

  const id = Date.now();
  const content = document.getElementById("description").value;
  const severity = document.getElementById("severity").value;
  const responsibles = getResposibles(
    document.getElementById("responsibles").value
  );

  if (content === "" || responsibles === "") {
    ui.showAlert("danger", "Please fill in all empty fields");
  } else {
    const issue = new Issue(id, content, severity, responsibles);
    console.log(issue);

    storage.addToStorage(issue);
    ui.displayIssue(issue);
    ui.clearFields();
    ui.showAlert("success", "Issue has been added successfully");
  }
}

function getResposibles(responsibles) {
  const values = responsibles.split(",");
  return values;
}

container.addEventListener("click", (e) => {
  const parent = e.target.parentElement.parentElement;
  const id = parent.getAttribute("data-id");

  if (e.target.classList.contains("close")) {
    if (e.target.textContent === "Open") {
      e.target.textContent = "Close";
    } else {
      e.target.textContent = "Open";
    }

    console.log(typeof id);

    ui.updateElement(parent);
    storage.updateStorage(id);
  }

  if (e.target.classList.contains("delete")) {
    ui.showAlert("success", "Successfully deleted");
    storage.deleteFromStorage(id);
    e.target.parentElement.parentElement.remove();
  }
});

window.addEventListener("load", () => {
  ui.dipslayAll(storage.getAllFromStorage());
});
