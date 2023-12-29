import { LitElement, html, css } from "lit";
import { Router } from "@vaadin/router";

export class HomeComponent extends LitElement {
    static styles = [
        css`
            .container {
                background-color: #1d2c67;
                height: 50px;
                padding: 10px 50px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: 16px;
            }

            .log-in-user:hover {
                cursor: pointer;
                text-decoration: underline;
                color: #ffa399;
                font-size: 16px;
            }
        `,
    ];

    render() {
        return html `
            <header class="container">
                <span id="loginUser" class="log-in-user">Log In</span>
            </header>
        `;
    };

    firstUpdated() {
        const loginUser = this.shadowRoot.getElementById('loginUser');
        loginUser.addEventListener('click', this.handleRedirectLoginUser.bind(this));
    };

    handleRedirectLoginUser() {
        Router.go('/login');
    };
};

customElements.define('home-component', HomeComponent);
