$(document).ready(function() {
    
    "use strict";
    /* Inspired by Lee Byron's test data generator. */
    function stream_layers(n, m, o) {
    if (arguments.length < 3) o = 0;
    function bump(a) {
        var x = 1 / (.1 + Math.random()),
            y = 2 * Math.random() - .5,
            z = 10 / (.1 + Math.random());
        for (var i = 0; i < m; i++) {
        var w = (i / m - y) * z;
        a[i] += x * Math.exp(-w * w);
        }
    }
    return d3.range(n).map(function() {
        var a = [], i;
        for (i = 0; i < m; i++) a[i] = o + o * Math.random();
        for (i = 0; i < 5; i++) bump(a);
        return a.map(stream_index);
        });
    };

    /* Another layer generator using gamma distributions. */
    function stream_waves(n, m) {
    return d3.range(n).map(function(i) {
        return d3.range(m).map(function(j) {
            var x = 20 * j / m - i / 3;
            return 2 * x * Math.exp(-.5 * x);
        }).map(stream_index);
        });
    };

    function stream_index(d, i) {
    return {x: i, y: Math.max(0, d)};
    };
        var nvddata3 = function() {
            return stream_layers(3,10+Math.random()*100,.1).map(function(data, i) {
                return {
                    key: 'Product ' + (i + 1),
                    values: data
                };
            });
        };


        nv.addGraph(function() {
        var chart = nv.models.multiBarChart()
        .color(['#021aee','#b794f6','#5780F7'])

        chart.xAxis
            .tickFormat(d3.format(',f'));

        chart.yAxis
            .tickFormat(d3.format(',.1f'));

        d3.select('#dash-chart-1 svg')
            .datum(nvddata3())
            .transition().duration(500)
            .call(chart)
            ;

        nv.utils.windowResize(chart.update);

        return chart;
    });


    // Sparkline
    var DrawSparkline = function() {
        
        var linePoints = [0, 1, 3, 2, 1, 1, 4, 1, 2, 0, 3, 1, 3, 4, 1, 0, 2, 3, 6, 3, 4, 2, 7, 5, 2, 4, 1, 2, 6, 13, 4, 2];
        $('#sparkline-line').sparkline(linePoints, {
            type: 'line',
            width: '100%',
            height: '40',
            chartRangeMax: 13,
            lineColor: '#ffb74d',
            fillColor: 'rgba(255,183,77,0.3)',
            highlightLineColor: 'rgba(0,0,0,0)',
            highlightSpotColor: 'rgba(0,0,0,.2)',
            tooltip: false
        });
        
        var barParent = $('#sparkline-bar').closest('.card');
        var barPoints = [0, 1, 3, 2, 1, 1, 4, 1, 2, 0, 3, 1, 3, 4, 1, 0, 2, 3, 6, 3, 4, 2, 7, 5, 2, 4, 1, 2, 6, 13, 4, 2];
        var barWidth = 6;
        $('#sparkline-bar').sparkline(barPoints, {
            type: 'bar',
            height: '40px',
            width: '100%',
            barWidth: barWidth,
            barSpacing: (barParent.width() - (barPoints.length * barWidth)) / barPoints.length,
            barColor: 'rgba(0,0,0,.07)',
            tooltipFormat: ' <span style="color: #ccc">&#9679;</span> {{value}}</span>'
        });


        var barParent2 = $('#sparkline-bar-2').closest('.card');
        var barPoints2 = [2, 0, 1, 5, 6, 8, 4, 1, 2, 0, 1, 3, 2, 2, 3, 1, 0, 2, 6, 9, 10, 6, 4, 2, 3, 2, 1, 2, 6, 4, 4, 2];
        var barWidth2 = 6;
        $('#sparkline-bar-2').sparkline(barPoints2, {
            type: 'bar',
            height: '40px',
            width: '100%',
            barWidth: barWidth2,
            barSpacing: (barParent2.width() - (barPoints2.length * barWidth2)) / barPoints2.length,
            barColor: 'rgba(82,175,80,.15)',
            tooltipFormat: ' <span style="color: #ccc">&#9679;</span> {{value}}</span>'
        });
        
    };
    
    DrawSparkline();

    var resizeChart;

    $(window).resize(function(e) {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });

    $('.button-collapse').on('click', function() {
        clearTimeout(resizeChart);
        resizeChart = setTimeout(function() {
            DrawSparkline();
        }, 300);
    });

    var options6 = {
        colors: ['#f06292', '#ba68c8', '#9575cd'],
        chart: {
            height: 300,
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            },
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false
        },
        
        series: [{
            name: "Product 1",
            data: [
            [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
        },{
            name: "Product 2",
            data: [
            [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
        },{
            name: "Peoduct 3",
            data: [
            [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
        }],
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function(val) {
                    return parseFloat(val).toFixed(1)
                }
            }
        },
        yaxis: {
            tickAmount: 7
        }
    }

    var chart6 = new ApexCharts(
        document.querySelector("#apex6"),
        options6
    );
    
    chart6.render();

    var flotchart2 = function () {

        // We use an inline data source in the example, usually data would
        // be fetched from a server

        var data = [],
            totalPoints = 75;
        
        function getRandomData() {

            if (data.length > 0)
                data = data.slice(1);

            // Do a random walk

            while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 55) {
                    y = 55;
                }

                data.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }

        var plot4 = $.plot("#dash-flotchart", [ getRandomData() ], {
            series: {
                shadowSize: 0,
                lines: {
                  show: true,
                  fill: .15
                },   // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 75
            },
            xaxis: {
                min: 0,
                max: 50
            },
            colors: ["#5780F7"],
            legend: {
                show: false
            },
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "Y: %y",
                defaultTheme: false
            }
        });

        function update() {
            plot4.setData([getRandomData()]);

            plot4.draw();
            setTimeout(update, 300);
        }

        update();
        
    };

    flotchart2();


});