export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
  }
  get Template() {
    return `
    <div>
          <h5>${this.body}</h5>
          <p class="overflow-content">${this.author}</p>       
    </div>
    `
  }
}