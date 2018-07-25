var app=angular.module("root",["ui.router"]);

app.run(function($rootScope,$state) {

  $rootScope.result=[{first:'ITEM NAME',second:'PRICE',third:'QUANTITY',fourth:'TOTAL'}];
  $rootScope.checkusr=['sathish'];
  $rootScope.checkpass=['123'];
  
    $rootScope.purchase = function(name,price,quant) 
    {        
      $rootScope.get=(price*quant);
      $rootScope.bill=name+" amount:"+$rootScope.get;
      $rootScope.result.push({first:name,second:price,third:quant,fourth:$rootScope.get});
      alert(name+" purchased successfully");
    };
    
    $rootScope.register = function(fname,uname,upwd) 
    {        
      $rootScope.checkusr.push(uname);
      $rootScope.checkpass.push(upwd);
      alert(fname+" registered successfully");
    };
   // var count=0;
   $rootScope.authenticate=function(user,pass)
  {
       for(var i=0;i<$rootScope.checkusr.length;i++)
       {
         if(user==$rootScope.checkusr[i] && pass==$rootScope.checkpass[i])
           {
             alert("Successfully logged in");
             $state.go('profile');
           }
//         else
//         {
//              count++;
//           }
       }
//       if(count==($rootScope.checkusr.length))
//       {
//         alert("Invalid login");
//       }
    } 
    
});


app.controller("full",function($scope,$state){

  $scope.signup=function(){
        $state.go('sign');
  }
  
  $scope.displays=function(){
    $state.go('display');
    }
  
  $scope.home=function(){
    $state.go('default');
    }
  
  $scope.gopurchase=function(){
    $state.go('profile');
    }
  
});

app.config(function($stateProvider, $urlRouterProvider){
$stateProvider
        .state('default', {
            url: '/default',
            templateUrl: "default.html" 
        })
        .state('profile', {
            url: '/profile',
            templateUrl: "home.html"
        })
        .state('sign', {
            url: '/sign',
            templateUrl: "sign.html"
        })
        .state('display', {
            url: '/display',
            templateUrl: "display.html"
        });
    $urlRouterProvider.otherwise('/default');
});