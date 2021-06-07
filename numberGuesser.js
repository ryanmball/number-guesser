var app = new Vue({
  el: "#app",
  data: {
    message: "",
    number: Math.floor(Math.random() * 100),
    userGuess: null,
    winner: false,
  },
  methods: {
    checkGuess: function() {
      if (this.userGuess > this.number) {
        this.message = "Too high. Guess again.";
      } else if (this.userGuess < this.number) {
        this.message = "Too low. Guess again.";
      } else {
        this.message = "You win!!!";
        this.winner = true;
      }
    },
    playAgain: function() {
      location.reload();
    },
  }
});