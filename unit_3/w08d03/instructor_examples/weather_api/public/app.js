const app = angular.module('myApp', []);

app.controller('BaseCtrl', ['$http', function($http){
    console.log(' this is happening ')
    const controller = this;
    this.message = '',
    this.getWeather = function() {
        $http({
            method: 'GET',
            url: '/weather'
        }).then(
            function(response){
              console.log(typeof response)
                console.log(response.data.main.temp, ' this is response')

            },
            function(err){
                console.log(err);
            }
        );
    },
    this.postWeather = function() {

      const data = {
        city: controller.city
      }
      console.log(data)
      $http({
            method: 'POST',
            url: '/weather',
            data: data
        }).then(
            function(response){
              console.log(response)
              controller.message = response.data.main.temp + " is the temperate in " + response.data.name

            },
            function(err){
                console.log(err);
            }
        );
    }
}])
