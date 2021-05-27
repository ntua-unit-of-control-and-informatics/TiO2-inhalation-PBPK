import { Component, OnInit, Input, AfterViewInit, ViewChild, OnChanges } from '@angular/core';
import { MODEL_ID, TITLE } from '../../assets/project-constants'
import { JaqpotService } from '../jaqpot-api/jaqpot-api.service';
import {ThemePalette} from '@angular/material/core';
import { PlotService, ChartOptions } from '../plot-service.service/plot-service.service';
import { DialogsService } from '../dialogs/dialogs.service';


export interface DispFeats {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: DispFeats[];
}

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss']
})
export class PredictionsComponent implements OnInit {

  constructor(
    private _dialogsService:DialogsService,
    private _jaqpotApi:JaqpotService,
    private _charts: PlotService

  ) { }

  predsOptions: Partial<ChartOptions>;
  showChart: boolean = false;

  chartFields = {
    'time':[]
  };

  outFeats: DispFeats = {
    name: "Plot all species",
    completed: false,
    color: "primary",
    subtasks: []
  }

  
  calcPrediction:boolean = false;
  predsOK:boolean = false;
  predictions = {}

  @Input() timeseries: { [key: string]: any; };

  ngOnInit(): void {
  }

  allComplete: boolean = false;

  predict(){
    this.calcPrediction = true
    this._jaqpotApi.predict(MODEL_ID ,[this.timeseries]).subscribe(m =>{
      
      m.predictions.forEach(obj => {
              Object.keys(obj).forEach(key => {
                this.predictions[key] = (this.predictions[key] || []).concat([obj[key]]).map(Number);
              });
            });

            Object.keys(m.predictions[0]).forEach(key => {
              if (key!=="time"){
                this.outFeats.subtasks.push({
                  name: key,
                  completed: false,
                  color: "accent"
                })
              }              
              
            })
            this.calcPrediction = false
            this.predsOK = true
    },
      err => {
        this._dialogsService.raiseServerError(err)
        this.calcPrediction = false
        throw new Error(err);

      })
  }

  ngOnChanges(changes) {
    this.predict();  
  }
  
  updateAllComplete() {
    this.allComplete = this.outFeats.subtasks != null && this.outFeats.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.outFeats.subtasks == null) {
      return false;
    }

    let chartCols = ['time']

    this.outFeats.subtasks.forEach(t => {
        if (t.completed){
          chartCols.push(t.name);
      }
    });

    chartCols = chartCols.sort();

    if (JSON.stringify(chartCols)!==JSON.stringify(Object.keys(this.chartFields).sort())){
      this.renderPlot(chartCols)  
    } 
    
    
    return this.outFeats.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.outFeats.subtasks == null) {
      return;
    }
    this.outFeats.subtasks.forEach(t => t.completed = completed);
  }

  renderPlot(cols){
    this.chartFields = {"time": this.predictions["time"]}
    if (cols.length>=2){
      cols.forEach(c => {
        this.chartFields[c] = this.predictions[c]      
      });

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
        "xaxis.title.text": "Time (hours)",
        "xaxis.type": "numeric",
        "dataLabels.enabled": false,
        "stroke.width": 0.5
      };
      console.log(this.chartFields)
      this.predsOptions = this._charts.getDataChart(this.chartFields, "time", "Concentration (mg/g)", "Time (hours)", false)
      console.log('keys', Object.keys(this.predsOptions))
      console.log(this.predsOptions)
      this.showChart = true;
    } else {
      this.showChart = false;
    }
      
  }

}
