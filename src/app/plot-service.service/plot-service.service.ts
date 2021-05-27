import { Injectable } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexDataLabels,
    ApexTitleSubtitle,
    ApexFill,
    ApexMarkers,
    ApexYAxis,
    ApexXAxis,
    ApexTooltip,
    ApexStroke
  } from "ng-apexcharts";

import { defaultOptions } from './plot-default.object';
import { Dataset, Prediction } from '@euclia/jaqpot-client/dist/models/jaqpot.models';


/*
    To use the service you must import it to a component and use the functions.
    The fucntions return a ChartOption object. Thus, you must pass the returned values to such an object:
    
    import { ChartOptions, <Service> } from '../<name>.service/<name>.service'
    
    [...]

    constructor (const _charts: <Sevice>) {};

    [...]

    chart: ChartOptions = this._charts.getDatasetChart();
    
    ==================================================================

    To display the chart in HTML use the built-in selector:
    <apx-chart
        [series]="chartOptions.series"
        [chart]="chartOptions.chart"
        [xaxis]="chartOptions.xaxis"
        [dataLabels]="chartOptions.dataLabels"
        [grid]="chartOptions.grid"
        [stroke]="chartOptions.stroke"
        [title]="chartOptions.title"
    ></apx-chart>

    ==================================================================

    Example properties parameter:
        let props = {
            "chart.type": "heatmap",
            "chart.height": 200,
            "chart.width": "100%",
            "dataLabels.enabledOnSeries" : [0],
            "title": {
                "text": "Test",
                "align": "center"
            }
        }
    
    For the correct paths visit: https://apexcharts.com/docs/options/ 
    and see the Options(Reference) 
*/


export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: any; //ApexChart;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    title: ApexTitleSubtitle;
    fill: ApexFill;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    grid: any; //ApexGrid;
    colors: any;
    toolbar: any;
  };
  
  

export interface DataHash {
  [key: string] : Array<number>;
} 

@Injectable({
  providedIn: 'root'
})
export class PlotService  {
    public chartOptions: Partial<ChartOptions>;

    public getDataChart(data:DataHash, xaxis:string, yaxis:string, XTitle?:string, dataLabels?:boolean):Partial<ChartOptions>{

  
        if (XTitle == null){
            XTitle = xaxis;
        }
    
        if (dataLabels == null){
          dataLabels = false
        }
    
    
        this.chartOptions = {
          series: [],
          colors: [],
          chart: {
            height: 500,
            type: "line",
            zoom: {
              enabled: true
            },
            toolbar:{
              export:{
                csv : {
                  headerCategory:xaxis
                }
              }
            }
          },
          dataLabels: {
            enabled: dataLabels
          },
          stroke: {
            curve: "straight"
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          xaxis: {
            categories: data[xaxis],
            type: "numeric",
            title:{
              text: XTitle
            }
          },
          yaxis:{
            title: {
              text: yaxis
            },
            // labels:{
            //   formatter: function (value) {
            //     return `${value.toFixed(3)}`
            //   }
            // },
            forceNiceScale: true,
            decimalsInFloat: 3
          },
          tooltip: {
            y: {
              formatter: function(value) {
                return `${value}`
              }
            }
          }
        };
    
        for (let [k, value] of Object.entries(Object.values(data))){
          let key = Object.keys(data)[k]
          
          if (key!==xaxis){
            this.chartOptions.series.push(
              {
                name: key,
                data: value
              }
            )
    
            this.chartOptions.colors.push(this.getRandomColor())
          }
        }
    
        // if (XTitle=="time"){
        //   this.chartOptions.xaxis.title.text = "Time (hours)"
        // }
      
        return this.chartOptions
      }

    // public getDatasetChart(jaqpotDataset: Dataset, Xaxis?:string, yaxis?:string, properties?:{[key:string]: any}):ApexOptions{
    
    //     var chartOptions = Object.create(defaultOptions);
    
    //     var dataValues = <DataHash>{};
        
    //     jaqpotDataset.dataEntry.forEach(obj => {
    //         Object.values(obj).forEach((val,index) => {
    //             console.log(val, index)

    //             if (index==1){
    //                 Object.keys(val).forEach(key => {
    //                     dataValues[key] = (dataValues[key] || []).concat([val[key]]).map(Number);
    //                 });
    //             } else {
    //                 if (Xaxis==null) {
    //                     dataValues['ID'] = (dataValues['ID'] || []).concat([val.name]);
    //                 }
    //             }
    //         });
    //     });

    //     if (Xaxis==null){
    //         chartOptions.xaxis.categories = dataValues['ID'];
    //         chartOptions.xaxis.title.text = 'ID';
    //     }

    //     if (yaxis==null || yaxis==""){
    //         jaqpotDataset.features.forEach(feat => {
    //             console.log(feat)
    //             if (feat.name!==Xaxis){
    //                 chartOptions.series.push({
    //                     name: feat.name,
    //                     data: dataValues[feat.key]
    //                 });
    //                 chartOptions.colors.push(this.getRandomColor())
    //             } else {
    //                 chartOptions.xaxis.categories = dataValues[feat.key];
    //                 chartOptions.xaxis.title.text = Xaxis;
    //             }
    //         });       
    //     } else {
    //         jaqpotDataset.features.forEach(feat => {
    //             if (feat.name==Xaxis){
    //                 chartOptions.xaxis.categories = dataValues[feat.key];
    //                 chartOptions.xaxis.title.text = Xaxis;
    //             }

    //             if (feat.name==yaxis){
    //                 chartOptions.series.push({
    //                     name: yaxis,
    //                     data: dataValues[feat.key]
    //                 });
    //             }
    //         });
    //     }

    //     if (properties==null){}
    //     else {
    //         for (let [key, value] of Object.entries(properties)){
    //             this.changeProp(chartOptions,key,value)
    //         }
    //     }
    //     console.log(chartOptions)
    //     return chartOptions
    // }



    
    // public getPredictionChart(jaqpotPrediction: Prediction, Xaxis:string, yaxis?:string, properties?:{[key:string]: any}):ApexOptions{
        
    //     var chartOptions = Object.create(defaultOptions);
    //     var dataValues = <DataHash>{};
        
    //     jaqpotPrediction.predictions.forEach(obj => {
    //         Object.keys(obj).forEach(key => {
    //             dataValues[key] = (dataValues[key] || []).concat([obj[key]]).map(Number);
    //         });
    //     });

        
    //     if (yaxis==null || yaxis==""){
    //         for (let [key, value] of Object.entries(dataValues)){
                
    //             if (key!==Xaxis){
    //                 chartOptions.series.push(
    //                     {
    //                         name: key,
    //                         data: value
    //                     }    
    //                 );
    //                 chartOptions.colors.push(this.getRandomColor())

    //             } else {
    //                 chartOptions.xaxis.categories = value;
    //                 chartOptions.xaxis.title.text = Xaxis;
    //             }
    //         }     
    //     } else {
    //         chartOptions.xaxis.categories = dataValues[Xaxis];
    //         chartOptions.xaxis.title.text = Xaxis;
    //         chartOptions.series.push({
    //             name: yaxis,
    //             data: dataValues[yaxis]
    //         });
    //     }
            
    //     if (properties==null){}
    //     else {
    //         for (let [key, value] of Object.entries(properties)){
    //             this.changeProp(chartOptions,key,value)
    //         }
    //     }
        
    //     return chartOptions
    // }


    
    // public getDataChart(data: DataHash, Xaxis:string, yaxis?:string, properties?:{[key:string]: any}):ApexOptions{

    //     // var chartOptions = Object.create(defaultOptions);
    //     var chartOptions = defaultOptions.options;
    //     console.log(defaultOptions)
    //     console.log(chartOptions)
    //     chartOptions.series = [];
        
    //     if (yaxis==null || yaxis==""){
    //         for (let [key, value] of Object.entries(data)){
    //             if (key!==Xaxis){
    //                 chartOptions.series.push(
    //                     {
    //                         name: key,
    //                         data: value
    //                     }    
    //                 );
    //                 chartOptions.colors.push(this.getRandomColor())

    //             } else {
    //                 chartOptions.xaxis.categories = value;
    //                 chartOptions.xaxis.title.text = Xaxis;
    //             }
    //         }     
    //     } else {
    //         chartOptions.xaxis.categories = data[Xaxis];
    //         chartOptions.xaxis.title.text = Xaxis;
    //         chartOptions.series.push({
    //             name: yaxis,
    //             data: data[yaxis]
    //         });
    //     }
            
    //     if (properties== null){}
    //     else{
    //         for (let [key, value] of Object.entries(properties)){
    //             this.changeProp(chartOptions,key,value)
    //         }
    //     }
        
    //     return chartOptions
    // }

    private getRandomColor():string{
        var colors = ['#CD5C5C','#F08080','#FA8072','#E9967A','#FFA07A','#DC143C','#FF0000','#B22222','#8B0000','#FFC0CB','#FFB6C1','#FF69B4','#FF1493','#C71585','#DB7093','#FFA07A','#FF7F50','#FF6347','#FF4500','#FF8C00','#FFA500','#FFD700','#FFFF00','#FFFFE0','#FFFACD','#FAFAD2','#FFEFD5','#FFE4B5','#FFDAB9','#EEE8AA','#F0E68C','#BDB76B','#E6E6FA','#D8BFD8','#DDA0DD','#EE82EE','#DA70D6','#FF00FF','#FF00FF','#BA55D3','#9370DB','#663399','#8A2BE2','#9400D3','#9932CC','#8B008B','#800080','#4B0082','#6A5ACD','#483D8B','#7B68EE','#ADFF2F','#7FFF00','#7CFC00','#00FF00','#32CD32','#98FB98','#90EE90','#00FA9A','#00FF7F','#3CB371','#2E8B57','#228B22','#008000','#006400','#9ACD32','#6B8E23','#808000','#556B2F','#66CDAA','#8FBC8B','#20B2AA','#008B8B','#008080','#00FFFF','#00FFFF','#E0FFFF','#AFEEEE','#7FFFD4','#40E0D0','#48D1CC','#00CED1','#5F9EA0','#4682B4','#B0C4DE','#B0E0E6','#ADD8E6','#87CEEB','#87CEFA','#00BFFF','#1E90FF','#6495ED','#7B68EE','#4169E1','#0000FF','#0000CD','#00008B','#000080','#191970','#FFF8DC','#FFEBCD','#FFE4C4','#FFDEAD','#F5DEB3','#DEB887','#D2B48C','#BC8F8F','#F4A460','#DAA520','#B8860B','#CD853F','#D2691E','#8B4513','#A0522D','#A52A2A','#800000','#DCDCDC','#D3D3D3','#C0C0C0','#A9A9A9','#808080','#696969','#778899','#708090','#2F4F4F','#000000']
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // private changeProp(object, path, value) {
        
    //     if (path.split('.').length === 1){
    //         object[path] = value;
    //         return;
    //         } else {
    //             if (object[path.split('.')[0]]) return this.changeProp(object[path.split('.')[0]], path.split('.').slice(1).join('.'), value);
    //             else {
    //                 object[path[0]] = {};
    //                 return this.changeProp(object[path.split('.')[0]], path.split('.').slice(1).join('.'),value);
    //             }
    //         }
    // };
}

