class Storage {
  addToStorage(issue) {
    let issues;

    if (localStorage.getItem("issues") === null) {
      issues = [];
    } else {
      issues = JSON.parse(localStorage.getItem("issues"));
    }

    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
  }

  getAllFromStorage() {
    return JSON.parse(localStorage.getItem("issues"));
  }

  updateStorage(id) {
    const all = this.getAllFromStorage();
    console.log(all);

    all.forEach((item) => {
      if (+item.id === +id) {
        console.log("girdi");
        item.open = !item.open;
      }
    });
    console.log(all);
    localStorage.setItem("issues", JSON.stringify(all));
  }

  deleteFromStorage(id) {
    const all = this.getAllFromStorage();

    all.forEach((item, index) => {
      if (+item.id === +id) {
        all.splice(index, 1);
      }
    });

    console.log(all);

    localStorage.setItem("issues", JSON.stringify(all));
  }
}
