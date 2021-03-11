class UI {
  displayIssue(issue) {
    let card = document.createElement("DIV");
    card.className = "card card-f";
    card.setAttribute("data-id", issue.id);
    card.innerHTML = `
        <span class="issue-id">Issue ID: ${issue.id}</span>
        <div class="status ${issue.open ? "opened" : "closed"}">
        ${issue.open ? "Open" : "Closed"}
        </div>
        <p class="issue-content">
          ${issue.content}
        </p>
        <div class="severity-info"><i class="far fa-clock"></i>
        ${issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)}
        </div>
        <div class="responsible-info">
          <i class="far fa-user-circle"></i>
          ${issue.responsibles
            .map(
              (item) => `
            <span class="responsible-person"> ${item} </span>
          `
            )
            .join(" ")}
        </div>
        <div>
          <a href="javascript:void(0)" class="btn close">${
            issue.open ? "Close" : "Open"
          }</a>
          <a href="javascript:void(0)" class="btn delete">Delete</a>
        </div>
      </div>
    `;

    document.querySelector(".container").appendChild(card);
  }

  clearFields() {
    document.getElementById("description").value = "";
    document.getElementById("severity").value = "select";
    document.getElementById("responsibles").value = "";
  }

  showAlert(type, text) {
    let alert = document.createElement("DIV");
    alert.id = "alert";
    alert.className = `${type} fadein`;
    alert.appendChild(document.createTextNode(text));
    document.body.appendChild(alert);

    setTimeout(() => {
      document.querySelector(`.${type}`).classList.add("fadeout");
      document.querySelector(`.${type}`).classList.remove("fadein");
    }, 3000);

    setTimeout(() => {
      document.querySelector(`.${type}`).remove();
    }, 3401);
  }

  updateElement(parent) {
    if (parent.children[1].classList.contains("opened")) {
      parent.children[1].classList.remove("opened");
      parent.children[1].classList.add("closed");
      parent.children[1].textContent = "Closed";
    } else {
      parent.children[1].classList.remove("closed");
      parent.children[1].classList.add("opened");
      parent.children[1].textContent = "Open";
    }
  }

  dipslayAll(issues) {
    issues.forEach((item) => {
      this.displayIssue(item);
    });
  }
}
