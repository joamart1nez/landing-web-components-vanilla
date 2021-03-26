import {normalizeCss, WelcomeCss} from '../styles.js';
let template = document.createElement('template');
template.innerHTML = //html
`
  <div class="welcome">
    <div class="welcome_card">
      <h1 class="title"></h1>
      <p class="content"></p>
      <button>SHOP NOW</button>
    </div>
  </div>
`
template.innerHTML += normalizeCss();
template.innerHTML += WelcomeCss();

class Welcome extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    let welcomeEl = this.shadowRoot.querySelector('.welcome');
    welcomeEl.style.backgroundImage = `url(${this.getAttribute('path')})`;
    
    let title = this.shadowRoot.querySelector('.title');
    title.innerHTML = this.getAttribute('title');

    let content = this.shadowRoot.querySelector('.content');
    content.innerHTML = this.getAttribute('content');

  }
}

window.customElements.define('welcome-component', Welcome);