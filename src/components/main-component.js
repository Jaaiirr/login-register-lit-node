import { LitElement, html, css } from "lit";
import "./login-lit";
import "./register-user";

export class MainComponent extends LitElement {
  render() {
    return html`
      <login-lit></login-lit>
      <!-- <register-user></register-user> -->
    `;
  }
}

customElements.define("main-component", MainComponent);
