var app = angular.module("ngFun", []);


app.controller("PokemonCtrl", function($scope) {

	$scope.searchPokemon = '';

	$scope.catchphrase = "gotta catch 'em all!";


	$scope.pokemon = [
	  {
	    Ndex: 25,
	    name: 'Pikachu',
	    type: 'Electric'
	  },
	  {
	    Ndex: 10,
	    name: 'Caterpie',
	    type: 'Bug'
	  },
	  {
	    Ndex: 39,
	    name: 'Jigglypuff',
	    type: 'Fairy'
	  },
	  {
	    Ndex: 94,
	     name: 'Gengar',
	    type: 'Ghost'
	  },
	  {
	    Ndex: 143,
	    name: 'Snorlax',
	    type: 'Normal'
	  }
	];


});

app.filter("reverse", function() {
  return function(input) {
    var result = "";
    input = input || "";
    for (var i=0; i<input.length; i++) {
      result = input.charAt(i) + result;
    }

    return result.toLowerCase();
  };
});








