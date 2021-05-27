import { ChartType } from "ng-apexcharts";


export var defaultOptions = {
    annotations:{
        position: 'front' ,
        yaxis: [{
            y: 0,
            y2: null,
            strokeDashArray: 1,
            borderColor: '#c2c2c2',
            fillColor: '#c2c2c2',
            opacity: 0.3,
            offsetX: 0,
            offsetY: -3,
            width: '100%',
            yAxisIndex: 0,
            label: {
                borderColor: '#c2c2c2',
                borderWidth: 1,
                borderRadius: 2,
                text: undefined,
                textAnchor: <"end" | "start" | "middle">'end',
                position: 'right',
                offsetX: 0,
                offsetY: 0,
                style: {
                    background: '#fff',
                    color: '#777',
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: undefined,
                    cssClass: 'apexcharts-yaxis-annotation-label',
                    padding: {
                        left: 5,
                        right: 5,
                        top: 0,
                        bottom: 2,
                    }
                },
            },
        }],
        xaxis: [{
            x: 0,
            x2: null,
            strokeDashArray: 1,
            borderColor: '#c2c2c2',
            fillColor: '#c2c2c2',
            opacity: 0.3,
            offsetX: 0,
            offsetY: 0,
            label: {
                borderColor: '#c2c2c2',
                borderWidth: 1,
                borderRadius: 2,
                text: undefined,
                textAnchor: 'middle',
                position: 'top',
                orientation: <"horizontal" | "vertical">'vertical',
                offsetX: 0,
                offsetY: 0,
                style: {
                    background: '#fff',
                    color: '#777',
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: undefined,
                    cssClass: 'apexcharts-xaxis-annotation-label',
                },
            },
        }],
        points: [{
            x: 0,
            y: null,
            yAxisIndex: 0,
            seriesIndex: 0,
            marker: {
            size: 0,
            fillColor: "#fff",
            strokeColor: "#333",
            strokeWidth: 3,
            shape: "circle",
            radius: 2,
            OffsetX: 0,
            OffsetY: 0,
            cssClass: '',
            },
            label: {
                borderColor: '#c2c2c2',
                borderWidth: 1,
                borderRadius: 2,
                text: undefined,
                textAnchor: 'middle',
                offsetX: 0,
                offsetY: -15,
                style: {
                    background: '#fff',
                    color: '#777',
                    fontSize: '12px',
                    fontWeight: 400,
                    fontFamily: undefined,
                    cssClass: 'apexcharts-point-annotation-label',
                    padding: {
                    left: 5,
                    right: 5,
                    top: 0,
                    bottom: 2,
                    }
                },
            },
            image: {
            path: undefined,
            width: 20,
            height: 20,
            offsetX: 0,
            offsetY: 0,
            }
        }],
        
        texts: [{
            x: 0,
            y: 0,
            text: '',
            textAnchor: 'start',
            foreColor: undefined,
            fontSize: '13px',
            fontFamily: undefined,
            fontWeight: 400,
            appendTo: '.apexcharts-annotations',
            backgroundColor: 'transparent',
            borderColor: '#c2c2c2',
            borderRadius: 0,
            borderWidth: 0,
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2,
        }],

        
        images: [{
            path: '',
            x: 0,
            y: 0,
            width: 20,
            height: 20,
            appendTo: '.apexcharts-annotations'
        }],
    },
    chart:{
        animations: {
            enabled: true,
            easing: <"linear" | "easein" | "easeout" | "easeinout">'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        background: '#fff',
        brush: {
            enabled: false,
            target: undefined,
            autoScaleYaxis: false
        },
        defaultLocale: 'en',
        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.35
        },
        fontFamily: 'Helvetica, Arial, sans-serif',
        foreColor: '#373d3f',
        group: undefined,
        events: {
            animationEnd: undefined,
            beforeMount: undefined,
            mounted: undefined,
            updated: undefined,
            click: undefined,
            mouseMove: undefined,
            legendClick: undefined,
            markerClick: undefined,
            selection: undefined,
            dataPointSelection: undefined,
            dataPointMouseEnter: undefined,
            dataPointMouseLeave: undefined,
            beforeZoom: undefined,
            beforeResetZoom: undefined,
            zoomed: undefined,
            scrolled: undefined,
            // scrolled: undefined,
        },
        height: 'auto',
        id: undefined,
        locales: [{
            name: 'en',
            options: {
              months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              toolbar: {
                download: 'Download SVG',
                selection: 'Selection',
                selectionZoom: 'Selection Zoom',
                zoomIn: 'Zoom In',
                zoomOut: 'Zoom Out',
                pan: 'Panning',
                reset: 'Reset Zoom',
              }
            }
        }],
        offsetX: 0,
        offsetY: 0,
        parentHeightOffset: 15,
        redrawOnParentResize: true,
        redrawOnWindowResize: true,
        selection: {
            enabled: true,
            type: 'x',
            fill: {
              color: '#24292e',
              opacity: 0.1
            },
            stroke: {
              width: 1,
              dashArray: 3,
              color: '#24292e',
              opacity: 0.4
            },
            xaxis: {
              min: undefined,
              max: undefined
            },
            yaxis: {
              min: undefined,
              max: undefined
            }
        },
        sparkline: {
            enabled: false,
        },
        stacked: false,
        stackType: <"normal" | "100%">'normal',
        toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true || '<img src="/static/icons/reset.png" width="20">',
              customIcons: []
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: <"zoom" | "selection" | "pan">'zoom' 
        },
        type: <ChartType>"line",
        width: '100%',
        zoom: {
            enabled: true,
            type: <"x" | "y" | "xy">'x',  
            autoScaleYaxis: false,  
            zoomedArea: {
              fill: {
                color: '#90CAF9',
                opacity: 0.4
              },
              stroke: {
                color: '#0D47A1',
                opacity: 0.4,
                width: 1
              }
            }
        }
    },
    colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function (val, opts) {
            return val
        },
        textAnchor: <"end" | "start" | "middle">'middle',
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: undefined
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#fff',
          opacity: 0.9,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
          }
        },
        dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
        }
    },
    fill: {
        colors: undefined,
        opacity: 0.9,
        type: 'solid',
        gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
        },
        image: {
            src: [],
            width: undefined,
            height: undefined
        },
        pattern: {
            style: 'verticalLines',
            width: 6,
            height: 6,
            strokeWidth: 2,
        },
    },
    grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: <"front" | "back">'back',
        xaxis: {
            lines: {
                show: false
            }
        },   
        yaxis: {
            lines: {
                show: false
            }
        },  
        row: {
            colors: undefined,
            opacity: 0.5
        },  
        column: {
            colors: undefined,
            opacity: 0.5
        },  
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },  
    },
    labels:[],
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: <"left" | "right" | "bottom" | "top">'bottom',
        horizontalAlign: <"left" | "right" | "center">'center', 
        floating: false,
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        offsetX: 0,
        offsetY: 0,
        labels: {
            colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
        itemMargin: {
            horizontal: 5,
            vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        }
    },
    markers: {
        size: 0,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: <string[] | "square" | "circle" | "rect">"circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
    },
    noData: {
        text: undefined,
        align: <"left" | "right" | "center">'center',
        verticalAlign: <"bottom" | "middle" | "top">'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '14px',
          fontFamily: undefined
        }
    },
    plotOptions: {
        area: {
            fillTo: <"origin" | "end">'origin',
        },
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: '70%',
            barHeight: '70%',
            distributed: false,
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            colors: {
                ranges: [{
                    from: 0,
                    to: 0,
                    color: undefined
                }],
                backgroundBarColors: [],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },
            dataLabels: {
                position: 'top',
                maxItems: 100,
                hideOverflowingLabels: true,
                orientation: <"horizontal" | "vertical">'horizontal'
            }
        },
        bubble: {
            minBubbleRadius: undefined,
            maxBubbleRadius: undefined,
        },
        candlestick: {
            colors: {
              upward: '#00B746',
              downward: '#EF403C'
            },
            wick: {
              useFillColor: true
            }
        },
        boxPlot: {
            colors: {
              upper: '#00E396',
              lower: '#008FFB'
            }
        },
        heatmap: {
            radius: 2,
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            distributed: false,
            useFillColorAsStroke: false,
            colorScale: {
              ranges: [{
                  from: 0,
                  to: 0,
                  color: undefined,
                  foreColor: undefined,
                  name: undefined,
              }],
              inverse: false,
              min: undefined,
              max: undefined
            },        
        },
        treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: true,
            distributed: false,
            useFillColorAsStroke: false,
            colorScale: {
              ranges: [{
                  from: 0,
                  to: 0,
                  color: undefined,
                  foreColor: undefined,
                  name: undefined,
              }],
              inverse: false,
              min: undefined,
              max: undefined
            },        
        },
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
            }, 
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: false,
                name: {
                  show: true,
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: undefined,
                  offsetY: -10,
                  formatter: function (val) {
                    return val
                  }
                },
                value: {
                  show: true,
                  fontSize: '16px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  color: undefined,
                  offsetY: 16,
                  formatter: function (val) {
                    return val
                  }
                },
                total: {
                  show: false,
                  showAlways: false,
                  label: 'Total',
                  fontSize: '22px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }      
        },
        polarArea: {
            rings: {
              strokeWidth: 1,
              strokeColor: '#e8e8e8',
            },
            spokes: {
              strokeWidth: 1,
              connectorColors: '#e8e8e8',
            }
        },
        radar: {
            size: undefined,
            offsetX: 0,
            offsetY: 0,
            polygons: {
              strokeColors: '#e8e8e8',
              strokeWidth: <'string | string[]'>"1",
              connectorColors: '#e8e8e8',
              fill: {
                colors: undefined
              }
            }
        },
        radialBar: {
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
                margin: 5,
                size: '50%',
                background: 'transparent',
                image: undefined,
                imageWidth: 150,
                imageHeight: 150,
                imageOffsetX: 0,
                imageOffsetY: 0,
                imageClipped: true,
                position: <"front" | "back">'front',
                dropShadow: {
                  enabled: false,
                  top: 0,
                  left: 0,
                  blur: 3,
                  opacity: 0.5
                }
            },
            track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: '#f2f2f2',
                strokeWidth: '97%',
                opacity: 1,
                margin: 5, 
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5
                }
            },
            dataLabels: {
                show: true,
                name: {
                    show: true,
                    fontSize: '16px',
                    fontFamily: undefined,
                    fontWeight: 600,
                    color: undefined,
                    offsetY: -10
                  },
                  value: {
                    show: true,
                    fontSize: '14px',
                    fontFamily: undefined,
                    fontWeight: 400,
                    color: undefined,
                    offsetY: 16,
                    formatter: function (val) {
                      return val + '%'
                    }
                  },
                  total: {
                    show: false,
                    label: 'Total',
                    color: '#373d3f',
                    fontSize: '16px',
                    fontFamily: undefined,
                    fontWeight: 600,
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce((a, b) => {
                        return a + b
                      }, 0) / w.globals.series.length + '%'
                    }
                  }
            }
        }
    },
    responsive: [{
        breakpoint: undefined,
        options: {},
    }],
    series:[],
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0,
            }
        },
        hover: {
            filter: {
                type: 'lighten',
                value: 0.15,
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'darken',
                value: 0.35,
            }
        },
    },
    stroke: {
        show: true,
        curve: <"smooth" | "straight" | "stepline" | ("smooth" | "straight" | "stepline")[]>'smooth',
        lineCap: <CanvasLineCap>'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,      
    },
    subtitle: {
        text: undefined,
        align: <"left" | "right" | "center">'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '12px',
          fontWeight:  'normal',
          fontFamily:  undefined,
          color:  '#9699a2'
        }
    },
    theme: {
        mode: <"light" | "dark">'light', 
        palette: 'palette1', 
        monochrome: {
            enabled: false,
            color: '#255aee',
            shadeTo: <"light" | "dark">'light',
            shadeIntensity: 0.65
        }
    },
    title: {
        text: undefined,
        align: <"left" | "right" | "center">'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
    },
    tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: false,
        theme: 'false',
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName,
            },
        },
        z: {
            formatter: undefined,
            title: 'Size: '
        },
        marker: {
            show: true,
        },
        items: {
           display: 'flex',
        },
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
    },
    xaxis: {
        type: <"category" | "datetime" | "numeric">'category',
        categories: [],
        labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
                colors: [],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
            offsetX: 0,
            offsetY: 0,
            format: undefined,
            formatter: undefined,
            datetimeUTC: true,
            datetimeFormatter: {
                year: 'yyyy',
                month: "MMM 'yy",
                day: 'dd MMM',
                hour: 'HH:mm',
            },
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0
        },
        tickAmount: undefined,
        tickPlacement: 'between',
        min: undefined,
        max: undefined,
        range: undefined,
        floating: false,
        decimalsInFloat: undefined,
        position: 'bottom',
        title: {
            text: undefined,
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-title',
            },
        },
        crosshairs: {
            show: true,
            width: 1,
            position: 'back',
            opacity: 0.9,        
            stroke: {
                color: '#b6b6b6',
                width: 0,
                dashArray: 0,
            },
            fill: {
                type: 'solid',
                color: '#B1B9C4',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                },
            },
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 1,
                opacity: 0.4,
            },
        },
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: "",
              fontFamily: "",
            },
        },
    },
    yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        tickAmount: 6,
        min: 6,
        max: 6,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
            show: true,
            align: <"left" | "right" | "center">'right',
            minWidth: 0,
            maxWidth: 160,
            style: {
                colors: "",
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
        },
        axisBorder: {
            show: true,
            color: '#78909C',
            offsetX: 0,
            offsetY: 0
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: '#78909C',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        title: {
            text: undefined,
            rotate: -90,
            offsetX: 0,
            offsetY: 0,
            style: {
                color: undefined,
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-title',
            },
        },
        crosshairs: {
            show: true,
            position: <"front" | "back">'back',
            stroke: {
                color: '#b6b6b6',
                width: 1,
                dashArray: 0,
            },
        },
        tooltip: {
            enabled: true,
            offsetX: 0,
        },
        
    }     
}