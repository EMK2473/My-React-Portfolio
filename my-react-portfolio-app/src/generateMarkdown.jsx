class Generator {
  constructor(data) {
    this.data = data;
  }
  generateMarkdown(data) {
    return `
    # This will be my resume file!
  `;
  }
}
module.exports = { Generator };
