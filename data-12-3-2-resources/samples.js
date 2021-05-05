// d3.json("samples.json").then(function(data){
//     console.log("hello");
// });

//We cannot directly run the html file associated with this json file.
//Must open terminal, and go to appropriate directory.
// Then type python -m http.server to create a server.
// Then copy go to http://localhost:8000/ in Chrome

// Print samples.json file
d3.json("samples.json").then(function(data){
    console.log(data);
});

//extracting the metadata of the first person in the dataset
// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};