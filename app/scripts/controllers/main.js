'use strict';
/**
 * @ngdoc function
 * @name bamDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bamDemoApp
 */
angular.module('bamDemoApp')
    .controller('MainCtrl', function($scope, growl) {
        // $scope.awesomeThings = [
        //     'HTML5 Boilerplate',
        //     'AngularJS',
        //     'Karma'
        // ];
        $scope.spendAmount = 0;
        $scope.verify = function (x, y) {
          console.log(x,y);
          if (x > y) {
             growl.error('Spend Amount is greater than budget !!!', {title: 'ALERT WE GOT ERROR'});
          } else {
             growl.success('Spend Amount Accepted !!!');
          }
        };

        $scope.clickData = function () {
            return Math.floor(Math.random()*2000) + 3000;
        };

        $scope.clickData2 = function () {
            return Math.floor(Math.random()*3000) + 7000;
        };

        var clickData = function () {
            return Math.floor(Math.random()*2000) + 3000;
        };

        var clickData2 = function () {
            return Math.floor(Math.random()*3000) + 7000;
        };

        var chart = c3.generate({
            data: {
                columns: [
                    ['Saks Fifth Avenue', 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
                    ['Neiman Marcus', 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000],
                    ['Total', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            },
            subchart: {
                show: true
            }
        });

        var data1 = ['Saks Fifth Avenue', clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData()];
        var data2 = ['Neiman Marcus', clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2()];
        var data3 = ['Total' , data1[1] + data2[1], data1[2] + data2[2], data1[3] + data2[3], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1], data1[1] + data2[1] ];

        for (var i = 1; i < data1.length; i++) {
          data3[i] = data1[i] + data2[i];
        }

        $scope.data1Only = function () {
              chart.unload({
                  ids: 'Saks Fifth Avenue'
              });
              chart.unload({
                  ids: 'Neiman Marcus'
              });
              chart.unload({
                  ids: 'Total'
              });
              chart.load({
                  columns: [
                      data1
                  ]
              });
              console.log('Hello');
        };
        $scope.data2Only = function () {
          chart.unload({
              ids: 'Saks Fifth Avenue'
          });
          chart.unload({
              ids: 'Neiman Marcus'
          });
          chart.unload({
              ids: 'Total'
          });
          chart.load({
              columns: [
                  data2
              ]
          });
        };

        $scope.sumData = function () {
          chart.unload({
              ids: 'Saks Fifth Avenue'
          });
          chart.unload({
              ids: 'Neiman Marcus'
          });
          chart.unload({
              ids: 'Total'
          });
          chart.load({
              columns: [
                  data3
              ]
          });
        };

        $scope.allData = function () {
          chart.unload({
              ids: 'Saks Fifth Avenue'
          });
          chart.unload({
              ids: 'Neiman Marcus'
          });
          chart.unload({
              ids: 'Total'
          });
          chart.load({
              columns: [
                  data1, data2, data3
              ]
          });
        };

        setTimeout(function () {
            chart.load({
                columns: [
                    data1
                ]
            });
        }, 1000);

        setTimeout(function () {
            chart.load({
                columns: [
                    data2
                ]
            });
        }, 1500);

        setTimeout(function () {
            chart.load({
                columns: [
                    data3
                ]
            });
        }, 2000);

    });

