/* global angular */

// (function(){ wrapping code within function does not work with expressions, for me at this time - decided to not use
//Trying Again
    var app = angular.module('rentals', []);
    app.controller('RentalController', function(){
        this.products = cars;
    });
    
    app.controller('Rented', ['$scope',function($scope){
        $scope.rentMe = function(){
        if (this.product.available != 0){
                this.product.available--;
            }
        };
    }]);
    
        //$scope: Controllers are associated with an element in the DOM and so are provided with access to the scope.
        //syntax: 
        // someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {
        //   ...
        //   $scope.aMethod = function() {
        //     ...
        //   }
        //   ...
        // }]);
    
        var cars = [
            {
                type: 'Economy',
                description: 'not a gas guzzler',
                image: 'https://www.sixt.com/fileadmin/user_upload/Economy-car-rental.png', //200x114
                price: 18.99,
                available: 7,
                // reserved: 7,
                carStat: function(){
                    var available = this.available;
                    // var reserved = this.reserved;
                    if(available > 0){
                        available--;
                        // reserved++;
                        // console.log(available);
                        // return available;
                    }else if(available <= 0){
                        this.soldOut=true;
                        // console.log(this.soldOut);
                    }
                },
                colors: 'Black, Silver, White',
                rentable: true,
                soldOut: false
            },
            {
                type: 'Convertible',
                description: 'feel the wind in your hair',
                image: 'https://www.motorward.com/wp-content/images/2018/02/BMW-M4-Convertible-Edition-30-Jahre-9-175x175.jpg',
                price: 25.99,
                available: 9,
                // reserved: 2,
                carStat: function(){
                    var available = this.available;
                    // var reserved = this.reserved;
                    if(available > 0){
                        available--;
                        // reserved++;
                        // console.log(available);
                        // return available;
                    }else if(available <= 0){
                        this.soldOut=true;
                        // console.log(this.soldOut);
                    }
                },
                colors: 'Black, Red, Teal',
                rentable: true,
                soldOut: false
            },
            {
                type: 'LuxurySportsCar',
                description: 'out-run the fuzz in style',
                image: 'https://www.sixt.com/fileadmin/user_upload/jaguar-f-type-coupe-2d-silber-2017.png',
                price: 37.99,
                available: 10,
                // reserved: 3,
                carStat: function(){
                    var available = this.available;
                    // var reserved = this.reserved;
                    if(available > 0){
                        available--;
                        // reserved++;
                        // console.log(available);
                        // return available;
                    }else if(available <= 0){
                        this.soldOut=true;
                        // console.log(this.soldOut);
                    }
                },
                colors: 'BlackOnBlack, Silver, MidnightBlue',
                rentable: true,
                soldOut: false
            }
        ];
        // app.controller('rentCount', ['$scope', function($scope){
        //     $scope.rented = function(){
        //         if(this.products.available > 0){
        //             this.products.available++;
        //         }
        //     }
        // }] )
        //$scope: Controllers are associated with an element in the DOM and so are provided with access to the scope.
        //syntax: 
        // someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {
        //   ...
        //   $scope.aMethod = function() {
        //     ...
        //   }
        //   ...
        // }]);
        // function rentButton(){
        //     if(this.available > 0){
        //         this.available--;
        //         console.log(this.available);
        //     }else if(this.available <=0){
        //         console.log("UNAVAILABLE");
        //     }
        // }
// });








//app.js
// (function() {
//   var app = angular.module('gemStore', []);

//   app.controller('StoreController', function() {
//     this.products = gems;
//   });

//   var gems = [{
//     name: 'Azurite',
//     description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
//     shine: 8,
//     price: 110.50,
//     rarity: 7,
//     color: '#CCC',
//     faces: 14,
//     images: [ ]
//   }, {
//     name: 'Bloodstone',
//     description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
//     shine: 9,
//     price: 22.90,
//     rarity: 6,
//     color: '#EEE',
//     faces: 12,
//     images: [
//       "images/gem-01.gif",
//       "images/gem-03.gif",
//       "images/gem-04.gif"
//     ]
//   }, {
//     name: 'Zircon',
//     description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
//     shine: 70,
//     price: 1100,
//     rarity: 2,
//     color: '#000',
//     faces: 6,
//     images: [
//       "images/gem-06.gif",
//       "images/gem-07.gif",
//       "images/gem-09.gif"
//     ]
//   }];
// })();
