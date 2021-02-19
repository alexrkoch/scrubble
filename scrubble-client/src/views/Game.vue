<template>
  <div class="game">
    <h1>This is the game page for game with ID: {{ gameId }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Game extends Vue {
  @Prop()
  gameId?: string;
}
</script>
