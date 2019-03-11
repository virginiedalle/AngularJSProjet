var basket = angular.module('basketApp', []);
basket.run(['$rootScope', function($rootScope){
  // tableau vide pour le contenu du panier
  $rootScope.basketContent = [];
  $rootScope.total = 0;
}]);
basket.controller('displayContent',['$rootScope', '$scope', function($rootScope, $scope) {
  // ensemble des produits
  $scope.eManiaContent = [
    {
      id:0,
      name: "The Division 2",
      image: "assets/img/the-division-2.jpg",
      desc: "Dans Tom Clancy’s The Division 2, le destin du monde libre est en jeu. Menez une équipe d’agents d’élite à travers les rues d’un Washington DC dévasté pas la pandémie.",
      price: 39.99,
      ref: "125.066.158",
      category: "PC",
      qty: 1
    },

    {
      id:1,
      name: "DiRT Rally 2.0",
      image: "assets/img/dirt-rally.jpg",
      desc: "DiRT Rally 2.0 vous invite à arpenter les circuits de rallye les plus emblématiques du globe, dans les véhicules tout-terrain les plus puissants jamais conçus.",
      price: 30.49,
      ref: "125.068.558",
      category: "PC",
      qty: 1
    },
    {
      id:2,
      name: "Farming Simulator 19",
      image: "assets/img/farming-simulator.jpg",
      desc: "La franchise plusieurs fois millionnaire fait en 2018 un bond de géant sur une nouvelle plateforme, avec une refonte complète et une révision totale de son moteur graphique.",
      price: 26.86,
      ref: "125.269.558",
      category: "PC",
      qty: 1
    },
    {
      id:3,
      name: "Call of Duty: Modern Warfare 2",
      image: "assets/img/call-of.jpg",
      desc: "Call of Duty®: Modern Warfare 2 comprend, pour la première fois dans un jeu vidéo, une bande originale composée par le légendaire Hans Zimmer.",
      price: 5.04,
      ref: "125.693.444",
      category: "PC",
      qty: 1
    },
    {
      id:4,
      name: "Fortnite Deep Freeze",
      image: "assets/img/fortnite.jpg",
      desc: "The Fortnite Deep Freeze Bundle will include: Frostbite Outfit, Cold Front Glider, Chill-Axe Pickaxe, Freezing Point Back Bling.",
      price: 16.06,
      ref: "125.586.128",
      category: "PS4",
      qty: 1
    },
    {
      id:5,
      name: "WRC 8 version fer (comme Simon sur lol)",
      image: "assets/img/wrc.jpg",
      desc: "Le championnat WRC sur Playstation 4 est la compétition automobile la plus difficile au monde.",
      price: 1.99,
      ref: "125.325.128",
      category: "PS4",
      qty: 1
    },
    {
      id:6,
      name: "Apex Legends: 2150 Apex Coins",
      image: "assets/img/apex.jpg",
      desc: "Apex Legends est un jeu vidéo de type battle royale développé par Respawn Entertainment et édité par Electronic Arts.",
      price: 0.01,
      ref: "128.554.128",
      category: "PS4",
      qty: 1
    },
    {
      id:7,
      name: "Pro Evolution Soccer 2019",
      image: "assets/img/pes.jpg",
      desc: "Pro Evolution Soccer 2019 est un jeu vidéo de football de la série Pro Evolution Soccer développé par Konami.",
      price: 99.00,
      ref: "128.514.128",
      category: "PS4",
      qty: 1
    },
    {
      id:8,
      name: "Super Smash Bros. Ultimate Switch",
      image: "assets/img/supersmashbros.jpg",
      desc: "Des mondes de jeux et des combattants légendaires se retrouvent pour l’affrontement ultime dans le nouvel opus de la série Super Smash Bros. sur Nintendo Switch !",
      price: 54.99,
      ref: "125.066.158",
      category: "SWITCH",
      qty: 1
    },
    {
      id:9,
      name: "Pokémon: Let's Go, Pikachu! Switch",
      image: "assets/img/pokemonpikachu.jpg",
      desc: "Un nouveau jeu de rôle Pokémon débarque sur Nintendo Switch ! Pokémon : Let's Go, Pikachu et Pokémon : Let's Go, Évoli vous permettent de découvrir un grand RPG.",
      price: 47.99,
      ref: "125.068.558",
      category: "SWITCH",
      qty: 1
    },
    {
      id:10,
      name: "The Legend of Zelda: Breath of the Wild Switch",
      image: "assets/img/zelda.jpg",
      desc: "Après un sommeil de plus d'un siècle, Link se réveille seul dans un monde qu'il ne reconnaît pas. Le héros va désormais devoir explorer un territoire vaste et dangereux. ",
      price: 54.99,
      ref: "125.269.558",
      category: "SWITCH",
      qty: 1
    },
    {
      id:11,
      name: "Kirby Star Allies Switch",
      image: "assets/img/kirby.jpg",
      desc: "Faites équipe avec vos amis dans Kirby Star Allies, un jeu de plateforme et d'aventure, Le personnage principal est Kirby, une boule rose qui aspire ses ennemis pour obtenir leur pouvoir. ",
      price: 47.99,
      ref: "125.693.444",
      category: "SWITCH",
      qty: 1
    },
    {
      id:12,
      name: "Anthem",
      image: "assets/img/anthem.jpg",
      desc: "Dans un monde laissé à l'abandon par les dieux, une ténébreuse faction menace toute l'Humanité. Les seuls à se dresser entre ces criminels et la technologie qu'ils convoitent sont les Freelancers.",
      price: 34.99,
      ref: "125.586.128",
      category: "XBOX One",
      qty: 1
    },
    {
      id:13,
      name: "FIFA 19",
      image: "assets/img/fifa19.jpg",
      desc: "Optimisé par Frostbite, EA SPORTS FIFA 19 propose une expérience unique. Il s'agit du troisième opus de la série FIFA, après FIFA 17 et FIFA 18, utilisant le moteur de jeu exceptionnels Frostbite. ",
      price: 32.99,
      ref: "125.325.128",
      category: "XBOX One",
      qty: 1
    },
    {
      id:14,
      name: "Red Dead Redemption 2",
      image: "assets/img/reddead.jpg",
      desc: "Développé par les créateurs de Grand Theft Auto V et Red Dead Redemption, Red Dead Redemption 2 raconte une histoire épique au cœur des terres sauvages et impitoyables des États-Unis.",
      price: 49.99,
      ref: "128.554.128",
      category: "XBOX One",
      qty: 1
    },
    {
      id:15,
      name: "Far Cry New Dawn Deluxe Edition",
      image: "assets/img/farcry.jpg",
      desc: "Avec l'édition Deluxe, recevez le pack incluant :le pack Hurk. Doté de graphismes exceptionnels, Far Cry se distingue aussi par ses mécaniques de jeux novatrices.",
      price: 42.99,
      ref: "128.514.128",
      category: "XBOX One",
      qty: 1
    }
  ];
  // Ajouter un produit au panier
  $scope.addBasket = function(id) {
    // si on trouve un id dans le panier on incrémente la quantité (a changer)
    if (id in $rootScope.basketContent) {
      $rootScope.basketContent[id].gameQty++;
    }
    // dans le cas contraire on ajoute le produit dans le panier (nom, prix, image etc)
    else {
      $rootScope.basketContent.push({
        gameName: $scope.eManiaContent[id].name,
        gamePrice: $scope.eManiaContent[id].price,
        gameImg: $scope.eManiaContent[id].image,
        gameRef: $scope.eManiaContent[id].ref,
        gameQty: $scope.eManiaContent[id].qty,
      });
    }
    // calcul du prix total quand on clique sur ajouter ( total = total + prix produit (qui est égal a prix*quantité) )
    $rootScope.total += $rootScope.basketContent[id].gamePrice;
  };
  // incrémente le produit et le total
  $scope.increaseQty = function(id) {
    $rootScope.basketContent[id].gameQty++;
    $rootScope.total += $rootScope.basketContent[id].gamePrice;
  };
  // décrémente le produit et le total
  $scope.decreaseQty = function(id) {
    if ($rootScope.basketContent[id].gameQty > 1) {
      $rootScope.total -= $rootScope.basketContent[id].gamePrice;
      $rootScope.basketContent[id].gameQty--;
    } else {
      // supprime le produit et ajuste le total quand la quantité est a 0)
      $rootScope.total -= $rootScope.basketContent[id].gamePrice * $rootScope.basketContent[id].gameQty;
      $rootScope.basketContent.splice(id, 1);
    }
  };
  // retire un produit du panier et ajuste le total
  $scope.remove = function(id) {
    $rootScope.total -= $rootScope.basketContent[id].gamePrice * $rootScope.basketContent[id].gameQty;
    $rootScope.basketContent.splice(id, 1);
  };
}]);
// Librarie Aos (animations)
AOS.init();
// Animation cards (jquery)
$(document).ready(function(){
    $(".card").mouseenter(function(){
      $(this).animate({top: '-20px'});
    });
    $(".card").mouseleave(function(){
      $(this).animate({top: '+0px'});
    });
  });
