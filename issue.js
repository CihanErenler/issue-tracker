class Issue {
  constructor(id, content, severity, responsibles, open = true) {
    this.id = id;
    this.content = content;
    this.severity = severity;
    this.responsibles = responsibles;
    this.open = open;
  }
}
