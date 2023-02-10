google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawVisualizationByYearAndMonth);

function drawVisualizationByYearAndMonth() {
    //chart color
    let colorsArray = ['rgb(25, 135, 84)',
        'rgb(198, 54, 70)',
        'rgb(13, 202, 240)',
        'rgb(255, 193, 7)',
        'rgb(13, 110, 253)',
        'rgb(108, 117, 125)',
        'rgb(220, 34, 51)'];
    let copy = [...colorsArray];
    //table of data
    const data = google.visualization.arrayToDataTable([
        ['', 'col1', 'col2', 'col3', 'col4', 'col5', 'col6', 'col7',],
        ['1', 56566, 15500, 7350, 45554, 4550, 41226, 7420,],
        ['2', 66339, 57830, 50560, 45223, 47640, 15442, 25420,],
        ['3', 7380, 65463, 16560, 55513, 55660, 545, 54520,],
        ['4', 37333, 25328, 26357, 69267, 54456, 45280, 5865,],
        ['5', 45880, 65555, 20542, 32567, 42203, 68790, 54880,],
        ['6', 55544, 75250, 12230, 38654, 43880, 24570, 38880,],
        ['7', 7523, 57621, 67520, 77885, 49956, 7420, 650,],
        ['8', 30000, 66621, 78980, 78556, 4750, 52750, 897,],
        ['9', 45220, 7522, 2250, 23, 65450, 78250, 10576,],
        ['10', 78380, 45681, 65540, 51659, 54650, 54850, 45609,],
        ['11', 35780, 3, 9985, 16, 65870, 78520, 75890,],
        ['12', 45331, 56890, 78540, 33333, 70000, 80000, 57890,],
        ['13', 73570, 75460, 569, 1, 56650, 45980, 45680,],
        ['14', 4868, 79877, 650, 55578, 5357, 65880, 78540,],
        ['15', 52220, 42220, 20000, 1, 3453, 45340, 45580,],
    ]);
//chart options
    const options = {
        animation: {
            duration: 450,
            easing: 'out',
            startup: false,
        },
        legend: 'bottom',
        title: 'column Charts'
    };

    options.colors = colorsArray;
    const chart = new google.visualization.ColumnChart(document.getElementById('columnchart_material'));
    google.visualization.events.addListener(chart, 'error', function (googleError) {
        google.visualization.errors.removeError(googleError.id);
        document.getElementById("hideerror").style.display = "none";
    });
//updateScreen for checkbox
    function updateScreen() {
        view = new google.visualization.DataView(data);
        options.colors = colorsArray;
        colorsArray = [...copy];
        if (document.getElementById("1").checked === false) {
            view.hideColumns([1]);
            delete options.colors[0];
        }
        if (document.getElementById("2").checked === false) {
            view.hideColumns([2]);
            delete options.colors[1];
        }
        if (document.getElementById("3").checked === false) {
            view.hideColumns([3]);
            delete options.colors[2];
        }
        if (document.getElementById("4").checked === false) {
            view.hideColumns([4]);
            delete options.colors[3];
        }
        if (document.getElementById("5").checked === false) {
            view.hideColumns([5]);
            delete options.colors[4];
        }
        if (document.getElementById("6").checked === false) {
            view.hideColumns([6]);
            delete options.colors[5];
        }
        if (document.getElementById("7").checked === false) {
            view.hideColumns([7]);
            delete options.colors[6];
        }
        options.colors = options.colors.filter((a) => a);

        chart.draw(view, options);
    }

    chart.draw(data, options);
    const ShowAll = document.getElementById("Total");
    const col1 = document.getElementById("1");
    const col2 = document.getElementById("2");
    const col3 = document.getElementById("3");
    const col4 = document.getElementById("4");
    const col5= document.getElementById("5");
    const col6 = document.getElementById("6");
    const col7 = document.getElementById("7");

    col1.onclick = function () {
        updateScreen();
    }
    col2.onclick = function () {
        updateScreen();
    }
    col3.onclick = function () {
        updateScreen();
    }
    col4.onclick = function () {
        updateScreen();
    }
    col5.onclick = function () {
        updateScreen();
    }
    col6.onclick = function () {
        updateScreen();
    }
    col7.onclick = function () {
        updateScreen();
    }

    ShowAll.onclick = function (checkBox) {
        view = new google.visualization.DataView(data);
        get = document.getElementsByName('Num');
        get.forEach(element => {
            element.checked = checkBox.checked = true;
        });

        options.colors = copy;
        colorsArray = [...copy];
        chart.draw(view, options);
    }
}