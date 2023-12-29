import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
export class RegisterUser extends LitElement {
  static styles = [
    css`
      button {
        width: 100%;
        height: 38px;
        border: thin solid #ffa399;
        cursor: pointer;
        font-family: "Raleway", sans-serif;
        color: #0c122c;
        border-radius: 5px;
        background-color: #ffa399;
      }

      label {
        font-size: 14px;
      }

      .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .form-control {
        height: 36px;
        border-radius: 5px;
        border: none;
      }

      .form-control:hover {
        outline: solid #ffa399;
      }

      .form-control:focus {
        outline: solid #ffa399;
      }

      .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .main-container {
        display: flex;
        flex-direction: column;
        width: 30%;
        justify-content: center;
        margin: 0 auto;
        gap: 25px;
        padding: 25px 40px;
        background-color: #1d2c67;
        border-radius: 20px 120px 20px 20px;
      }

      .already-account {
        font-size: 12px;
        text-align: right;
        text-decoration: underline;
        color: #dddbff;
      }

      .already-account:hover {
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <section class="login">
        <form class="main-container">
          <h1>Register</h1>
          <div class="form-group">
            <label for="name">Name(s)</label>
            <input type="text" class="form-control" name="" id="name" />
          </div>
          <div class="form-group">
            <label for="lastname">Last name</label>
            <input type="text" class="form-control" name="" id="lastname" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="" id="email" />
          </div>
          <div class="form-group">
            <label for="cellphone">Cellphone</label>
            <input type="tel" class="form-control" name="" id="cellphone" />
            <span id="alreadyAccount" class="already-account">Are you already a user?</span>
          </div>
          <button type="button" @click=${this.handleRegisterUser}>Sign Up</button>
        </form>
      </section>
    `;
  };

  firstUpdated() {
    const alreadyAccount = this.shadowRoot.getElementById('alreadyAccount');
    alreadyAccount.addEventListener('click', this.handleAlreadyAccount.bind(this));
  };

  handleRegisterUser() {
    alert('Register...');
  };

  handleAlreadyAccount() {
    Router.go('/login');
  };
}

customElements.define("register-user", RegisterUser);
