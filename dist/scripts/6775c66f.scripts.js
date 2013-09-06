"use strict";angular.module("checklist",["firebase","checklist.controllers"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/create.html",controller:"ItemCtrl"}),a.when("/list/:currentList",{templateUrl:"views/list.html",controller:"ItemCtrl"}),a.when("/about",{templateUrl:"views/about.html",controller:"ItemCtrl"}),a.otherwise({redirectTo:"/"})}]),angular.module("checklist.controllers",[]).controller("ItemCtrl",["$scope","angularFire","$location","$routeParams",function(a,b,c,d){var e="https://mmy-checklist.firebaseio.com/list",f=b(e,a,"list",[{items:[{text:"start",status:!1}]}]);f.then(function(){a.newList=0,a.currentList=d.currentList,a.goAbout=function(){c.path("/about")},a.addItem=function(){a.newItem&&a.list[a.currentList].items.push({text:a.newItem,status:!1}),a.newItem=""},a.deleteItem=function(){a.list[a.currentList].items.splice(this.$index,1)},a.getTotal=function(){return a.list[a.currentList].items.length},a.getRemaining=function(){var b=0;return a.list[a.currentList].items.forEach(function(a){a.status||(b+=1)}),b},a.getDone=function(){var b=0;return a.list[a.currentList].items.forEach(function(a){a.status&&(b+=1)}),b},a.getPercent=function(){if(0!==a.list[a.currentList].items.length){var b=100*(a.getDone()/a.getTotal());return Math.round(b)+"%"}},a.getDecimal=function(){if(0!==a.list[a.currentList].items.length){var b=a.getDone()/a.getTotal();return Math.round(10*b)/10}}})}]).controller("CreateCtrl",["$scope","angularFire","$location","$routeParams",function(a,b,c){a.createList=function(){if(a.text){a.list.push({items:[{text:a.text,status:!1}]}),a.currentList=a.list.length-1,c.path("/list/"+a.currentList);var b=b("Your URL is: "+c.absUrl());return!1}a.text=""}}]);