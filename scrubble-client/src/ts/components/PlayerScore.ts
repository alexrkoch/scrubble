const template = document.createElement("template");
template.innerHTML = `
<style> 
  .player-box {
    width: 100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px black solid;
    margin: 0.25rem;
  }

  .name {
    line-height: 0.2;
    padding-left: 0.25rem;
    padding-right: 0.5rem;
  }

  .score {
    font-weight: 400;
    line-height: 0.2;
    padding-right: 0.25rem;
  }
</style>

<div class="player-box">
    <h3 class="name"></h3>
    <h3 class="score"></h3>
</div>
`;

class PlayerScore extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector(".name").innerHTML = this.getAttribute(
      "name"
    );
    this.shadowRoot.querySelector(".score").innerHTML = this.getAttribute(
      "score"
    );
  }
}
window.customElements.define("player-score", PlayerScore);
