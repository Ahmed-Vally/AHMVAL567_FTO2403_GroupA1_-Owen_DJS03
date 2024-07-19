// components/book-preview.js
class BookPreview extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this._setupEventListeners();
    }
  
    _setupEventListeners() {
      this.shadowRoot.querySelector('[data-list-close]').addEventListener('click', () => {
        this.close();
      });
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .overlay { /* styles */ }
          .overlay__preview { /* styles */ }
          .overlay__details { /* styles */ }
          .overlay__close { /* styles */ }
        </style>
        <dialog class="overlay" data-list-active>
          <div class="overlay__preview">
            <img class="overlay__blur" data-list-blur src="">
            <img class="overlay__image" data-list-image src="">
          </div>
          <div class="overlay__details">
            <h2 class="overlay__title" data-list-title></h2>
            <h3 class="overlay__subtitle" data-list-subtitle></h3>
            <p class="overlay__description" data-list-description></p>
            <button class="overlay__close" data-list-close>Close</button>
          </div>
        </dialog>
      `;
    }
  
    open() {
      this.shadowRoot.querySelector('dialog').showModal();
    }
  
    close() {
      this.shadowRoot.querySelector('dialog').close();
    }
  }
  
  customElements.define('book-preview', BookPreview);
  