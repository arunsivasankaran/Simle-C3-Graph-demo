// 'use strict';
// var clickData = function () {
//     return Math.floor(Math.random()*2000) + 3000;
// };

// var clickData2 = function () {
//     return Math.floor(Math.random()*3000) + 7000;
// };

// var chart = c3.generate({
//     data: {
//         columns: [
//             ['data1', 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
//             ['data2', 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000, 7000]
//         ]
//     },
//     subchart: {
//         show: true
//     }
// });

// setTimeout(function () {
//     chart.load({
//         columns: [
//             ['data1', clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData(), clickData()]
//         ]
//     });
// }, 1000);

// setTimeout(function () {
//     chart.load({
//         columns: [
//             ['data2', clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2(), clickData2()]
//         ]
//     });
// }, 1500);

// setTimeout(function () {
//     chart.unload({
//         ids: 'data1'
//     });
// }, 2000);
