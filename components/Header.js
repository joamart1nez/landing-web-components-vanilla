import { normalizeCss, HeaderCss } from "../styles.js";
let template = document.createElement("template");
template.innerHTML =
  //html
  `
	<header>
		<div class="header_nav">
			<span class="nav_item item-menu">
				Products
				<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 21 21" width="21" class="row"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
				<ul class="sub-menu">
					<li>Bottles</li>
					<li>Glasses</li>
					<li>Restaurants</li>
				</ul>
			</span>
			<span class="nav_item">Collections</span>
			<span class="nav_item">Gifts</span>
			<span class="nav_item">Our Magazine</span>
		</div>
		<div class="header_action">
			<div class="header_action_search" style="margin-left: 15px">
				<input type="search" class="header_action_search_input" id="search-input" autocomplete="off">
				<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" id="search-icon"><path d="M0 0h24v24H0z" fill="none"/><path fill="gray" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
			</div>
			<button class="button-nav-login" style="margin-left: 15px">Login</button>
			<button class="button-nav-sign" style="margin-left: 15px">SIGN UP</button>
		</div>
	</header>		
`;
template.innerHTML += normalizeCss();
template.innerHTML += HeaderCss();

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#search-icon")
      .addEventListener("click", () => {
        let inputSearch = this.shadowRoot.querySelector("#search-input");
        inputSearch.classList.toggle("search_input_invisible");
      });
    let itemMenu = this.shadowRoot.querySelector(".item-menu");
    let subMenu = this.shadowRoot.querySelector(".sub-menu");
    let row = this.shadowRoot.querySelector(".row");
    itemMenu.addEventListener("mouseover", () => {
      subMenu.style.transform = "scale(1)";
      row.style.transform = "rotate(0deg)";
    });
    itemMenu.addEventListener("mouseout", () => {
      subMenu.style.transform = "scale(0)";
      row.style.transform = "rotate(180deg)";
    });
  }
}

window.customElements.define("header-component", Header);
