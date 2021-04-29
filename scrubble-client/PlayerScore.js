const template = document.createElement("template");
template.innerHTML = `
<style> 
  .player-box {
    width: 40%;
    height: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px $border-color solid;
    margin: 0.25rem;
      // &--current-turn {
      // border: 4px $border-color solid;
      // }

  .player-name {
    line-height: 0.2;
    padding-left: 0.25rem;
    padding-right: 0.5rem;
  }

  player-score {
    font-weight: 400;
    line-height: 0.2;
    padding-right: 0.25rem;
  }
</style>

<div class="player-box">
    <h3 class="player-name"></h3>
    <h3 class="player-score"></h3>
</div>
`;

class PlayerScore extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector(".player-name").innerHTML = this.getAttribute(
      "name"
    );
    this.shadowRoot.querySelector(
      ".player-score"
    ).innerHTML = this.getAttribute("score");
  }
}
window.customElements.define("player-score", PlayerScore);

// HTML
//
//       <div
//         class="players__player players__player--current-turn"
//         id="players__1"
//       >
//         <h3 class="players__name" id="players__1-name">Player 1:</h3>
//         <h3 class="players__score" id="players__1-score">24</h3>
//       </div>

// CSS
//
// .players {
//   width: 100%;
// max-height: 170px;
// margin: 1rem 2rem;
// display: flex;
// flex-direction: column;
// flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;

//   &__name {
//     line-height: 0.2;
//     padding-left: 0.25rem;
//     padding-right: 0.5rem;
//   }
// &__score {
//     font-weight: 400;
//     line-height: 0.2;
//     padding-right: 0.25rem;
//   }
//   &__player {
//     width: 40%;
//     height: 2.5rem;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     border: 1px $border-color solid;
//     margin: 0.25rem;
//     &--current-turn {
// border: 4px $border-color solid;
//     }
//   }
// }
