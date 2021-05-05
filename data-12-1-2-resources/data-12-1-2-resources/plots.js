// Plotly.newPlot("plotArea", [{x: [1, 4, 9], y: [10, 20, 30]}]);

// Lunch Example
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };

// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };

// Plotly.newPlot("plotArea", [trace], layout);

//Drinks Example
{/* <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout); */}

// //Drinks Examlpe with as a Pie Chart
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);

// //Use map() to double the number in the array
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);

//Same above using arrow function
// var numbers = [1,2,3,4,5];

// var doubled = numbers.map(num => num * 2);
// console.log(doubled);


// Use map() to add 5 to the each number in the array
// var numb = [0,2,4,6,8];
// var doubled = numb.map(function(num){
//     return num + 5;
// });
// console.log(doubled);


//Grab the city out of an array using map()
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

//Grab to population from the same array
// var popUlation = cities.map(function(pop){
//     return pop.population;
// });
// console.log(popUlation);

//Larger than 1 using filter 
// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);
 
//Using slice to pull first 3 out of an array
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(0,3);

// Using slice to get the last two options 
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );

