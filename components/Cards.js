import {normalizeCss, CardCss} from '../styles.js';
let template = document.createElement('template');
template.innerHTML = //html
`
  <div class="card">
    <h2 class="cardTitle" id="cardTitle"></h2>
    <p class="cardContent" id="cardContent"></p>
    <button class="cardButton">Purchase Now</button>
    <img id="cardImg"/>
  </div>
`
template.innerHTML += normalizeCss();
template.innerHTML += CardCss();

class Card extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  connectedCallback(){
    let cardTitle = this.shadowRoot.getElementById('cardTitle');
    cardTitle.innerHTML = this.getAttribute('title');

    let cardContent = this.shadowRoot.getElementById('cardContent');
    cardContent.innerHTML = this.getAttribute('content');

    let cardImg = this.shadowRoot.getElementById('cardImg');
    cardImg.setAttribute('src', this.getAttribute('img'));
  }
}

window.customElements.define('card-component', Card);