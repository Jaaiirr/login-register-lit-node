import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";
export class LoginLit extends LitElement {
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

      .no-account {
        font-size: 12px;
        text-align: right;
        text-decoration: underline;
        color: #dddbff;
      }

      .no-account:hover {
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <section class="login">
        <form class="main-container">
          <h1>Login</h1>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="email" class="form-control" name="" id="email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="" id="password" />
            <span id="noAccount" class="no-account">Doesn't have an account?</>
          </div>
          <button type="button" @click=${this.handleLoginUser}>Log In</button>
        </form>
      </section>
    `;
  };

  firstUpdated() {
    const noAccount = this.shadowRoot.getElementById('noAccount');
    noAccount.addEventListener('click', this.handleClickDoesnHaveAccount.bind(this));
  };

  handleLoginUser() {
    alert("Log in...");
  };

  handleClickDoesnHaveAccount() {
    Router.go('/register');
  };
}

customElements.define("login-lit", LoginLit);
