"use strict";angular.module("checklist",["firebase","checklist.controllers","checklist.services"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/create.html",controller:"ItemCtrl"}),a.when("/list/:currentList",{templateUrl:"views/list.html",controller:"ItemCtrl"}),a.when("/about",{templateUrl:"views/about.html",controller:"ItemCtrl"}),a.otherwise({redirectTo:"/"})}]),angular.module("checklist.services",[]).service("firebaseFactory",["angularFire",function(a){return{link:function(b,c,d){var e="https://mmy-checklist.firebaseio.com/list";return a(e,b,c,d)}}}]),angular.module("checklist.controllers",[]).controller("CreateCtrl",["$scope","$location","$routeParams","firebaseFactory",function(a,b){a.createList=function(){return a.text?(a.list.push({items:[{text:a.text,status:!1}]}),a.currentList=a.list.length>0?a.list.length-1:0,console.log(b.path),b.path("/list/"+a.currentList),alert("Your URL is: "+b.absUrl()),!1):(a.text="",void 0)}}]).controller("ItemCtrl",["$scope","firebaseFactory","angularFire","$location","$routeParams",function(a,b,c,d,e){var f="https://mmy-checklist.firebaseio.com/list",g=c(f,a,"list",[{items:[{text:"start",status:!1}]}]);g.then(function(){a.newList=0,a.currentList=e.currentList,a.goAbout=function(){d.path("/about")},a.addItem=function(){a.newItem&&a.list[a.currentList].items.push({text:a.newItem,status:!1}),a.newItem=""},a.deleteItem=function(){a.list[a.currentList].items.splice(this.$index,1)},a.getTotal=function(){return a.list[a.currentList].items.length},a.getRemaining=function(){var b=0;return a.list[a.currentList].items.forEach(function(a){a.status||(b+=1)}),b},a.getDone=function(){var b=0;return a.list[a.currentList].items.forEach(function(a){a.status&&(b+=1)}),b},a.getPercent=function(){if(0!==a.list[a.currentList].items.length){var b=100*(a.getDone()/a.getTotal());return Math.round(b)+"%"}},a.getDecimal=function(){if(0!==a.list[a.currentList].items.length){var b=a.getDone()/a.getTotal();return Math.round(10*b)/10}}})}]);