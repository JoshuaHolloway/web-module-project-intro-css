// Adapted from: https://youtu.be/PCWaFLy3VUo
class UersCard extends HTMLElement {
    constructor() {
        super();
        // this.innerHTML = `${this.getAttribute('name')}`;
        this.innerHTML = 'JOSH';
    }
}

// Define custom element:
window.customElements.define('user-card', UserCard);