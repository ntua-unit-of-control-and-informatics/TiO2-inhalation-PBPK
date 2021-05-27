
import { Input, Component, OnInit } from '@angular/core';
import { PlotService, ChartOptions } from '../plot-service.service/plot-service.service';

export interface DataHash {
  [key: string] : Array<number>;
} 


@Component({
  selector: 'app-view-input',
  templateUrl: './view-input.component.html',
  styleUrls: ['./view-input.component.scss']
})

export class ViewInputComponent implements OnInit {

  @Input() data: DataHash;
  chartOptions: Partial<ChartOptions>;
  allInpCharts: Array<Partial<ChartOptions>>;
  
  showInpChart: boolean = false;
  showAllInpCharts: boolean = false;

  columns = [];
  init: boolean = false;
  disabled = false;



  constructor(
    private _plots: PlotService
  ) { }

  inputValues = {
    xaxis : "",
    yaxis: "",
    allCols: false
  }

  ngOnInit(): void {
    this.columns = Object.keys(this.data);
    this.init = true;

    let inpShow = true;
    if (inpShow) {
      let props = {
        "chart.type": "line",
        "chart.zoom.enabled": true,
        "grid": {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        "title": {
          text: "Exposure concentration (ug/m^3)",
          align: "center"

        },
        "xaxis.tickPlacement": "on",
      };

      this.chartOptions = this._plots.getDataChart(this.data,"Time (hours)", "Exposure concentration (μg/m^3)", null, true)
    }
    inpShow = false;
    console.log(this.chartOptions)
  }

  // myChange(event) {
    
  //   if (this.inputValues.allCols){
  //     let props = {
  //       "chart.type": "line",
  //       "chart.zoom.enabled": true,
  //       "grid": {
  //         row: {
  //           colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
  //           opacity: 0.5
  //         }
  //       },
  //       "title": {
  //         text: "All Timeseries",
  //         align: "center"

  //       },
  //       "xaxis.tickPlacement": "on"
  //     };
  //     this.chartOptions = this._plots.getDataChart(this.data, "Time (hours)", null, props)
  //     this.showInpChart = true;
  //   } else if (this.inputValues.xaxis!=="" && this.inputValues.yaxis!==""){

  //     let props = {
  //       "chart.type": "line",
  //       "chart.zoom.enabled": true,
  //       "grid": {
  //         row: {
  //           colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
  //           opacity: 0.5
  //         }
  //       },
  //       "title": {
  //         text: this.inputValues.yaxis + " vs " + this.inputValues.xaxis,
  //         align: "center"

  //       },
  //       "xaxis.tickPlacement": "on"
  //     };

  //     this.chartOptions = this._plots.getDataChart(this.data, this.inputValues.xaxis, this.inputValues.yaxis, props)
  //     console.log(this.chartOptions)
  //     this.showInpChart = true;
  //   }
  // }
}
