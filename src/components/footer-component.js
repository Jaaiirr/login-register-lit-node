import { LitElement, html, css } from "lit";

export class FooterComponent extends LitElement {
  static styles = [
    css`
      .container {
        background-color: #1d2c67;
        height: 50px;
        padding: 10px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
      }
    `,
  ];

  render() {
    return html `
      <footer class="container">
        <span class="footer-container">Eddy T. 🧑🏻‍💻</span>
      </footer>
    `;
  };
}

customElements.define('footer-component', FooterComponent);
