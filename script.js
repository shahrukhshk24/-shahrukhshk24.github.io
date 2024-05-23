// Generating 2*2 matrix of size 15
var Data = [];
for (var i = 0; i < 15; i++) {
    var row = [];
    for (var j = 0; j < 15; j++) {
        row.push(Math.floor(Math.random() * 15) + 1); //selecting random data point b/w 1 to 15
    }
    Data.push(row); // push generated data into array
}

// using array of colors for generated bars
var Colors = ['magenta', 'brown', 'lime', 'teal', 'indigo','white', 'green', 'blue', 'red', 'cyan', , 'violet', 'salmon', 'navy', 'olive', 'maroon', 'gray','yellow', 'purple', 'orange', 'pink'];

// created a function which accepts 2 parameter for data and for colors
function GeneratedBars(dataset, barscolors) {
    var N = dataset.length; //calculating the length

    var bars = d3.select('#bars');

    var i = 0;
    while (i < dataset.length) { // Iteration for the provided dataset
        var Dataforrow = dataset[i];
        var barscolor = barscolors[i % barscolors.length];
        var IIndex = i;

        var j = 0;
        while (j < Dataforrow.length) { // Iteration for the current row
            var value = Dataforrow[j];
            var JIndex = j;

            var Xaxis = (Dataforrow.length - 1) / 2; // do the calculations for the center point, and based on calcualtion adjust the position 
            var Zaxis = (dataset.length - 1) / 2;

            var x = JIndex - Xaxis; // based on above calculations adjusted the positions
            var z = IIndex - Zaxis;
            // create the entity for bar
            bars.append('a-entity')
                .attr('position', x + ' ' + (value / 2) + ' ' + z) // bar position
                .append('a-box') // seting a box which going to represent the bar
                .attr('geometry', 'width: 0.3; height: ' + value + '; depth: 0.3') // set the dimensions for bar
                .attr('material', 'color: ' + barscolor)// set the color for bars to display
                .attr('animation', 'property: height; to: ' + value + '; dur: 1000'); // showing anaimations on bars
            j++;
        }
        i++;
    }
}

// Call GeneratedBars function and provided argument of 2d matrix Data and array of colors as input
GeneratedBars(Data, Colors);
