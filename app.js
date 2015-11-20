/*  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Testname',
    price: 2.95,
    description:'Test description',
  }

})();*/
(function(){
var app = angular.module('vet', [ ]);
app.controller('DatepickerDemoCtrl', function ($scope) {
$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});
app.controller('VetController', function($scope, $http){
  this.events;
  $scope.events = [];
  $http.get('http://localhost:81/com.rest/events').
       success(function(data) {
        angular.forEach(data.events, function(value, key) {
       this.events = $scope.events.push(value);
    });
         
        });


this.addHruta = function(hrutas) {
 this.hrutas.push({id:hrutas.length + 1, 
  direccion:hrutas.direccion + '/'+ hrutas.nro + '/'+ hrutas.barrio,
  cliente:hrutas.cliente,
  motivo:hrutas.motivo,
  deuda:hrutas.deuda,
  observacion:hrutas.observacion,
 });
};
});
  var events = [ 
  {   
        fecha:"",
        direccion: "cuchacucha 175 bis",
        cliente:"Daniel ",
        motivo: "Vomitos",
        deuda: 1.00,
        observacion: "Tine mala conducta",
  },
  {
        fecha:"",
        direccion: "washington 175 bis",
        cliente:"Ivan",
        motivo: "Vomitos",
        deuda: 0.00,
        observacion: "Tine mala conducta",
  },
  {
        fecha:"",
        direccion: "Lituania 175 bis",
        cliente:"Marcelo",
        motivo: "Vomitos",
        deuda: 0.00,
        observacion: "Tine mala conducta",
  },
  {
        fecha:"",
        direccion: "Roma 175 bis",
        cliente:"German",
        motivo: "Vomitos",
        deuda: 0.01,
        observacion: "Tine mala conducta",
    
  }];
})();