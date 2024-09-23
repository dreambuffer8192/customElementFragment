class CustomComponent extends HTMLElement {
	constructor() {
		super();
	}
	
	this.innerHTML = "<p>No veo peliculas :(</p>";
}
customElements.define("team-fmb", CustomComponent);

