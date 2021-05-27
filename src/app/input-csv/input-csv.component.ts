import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder } from '@angular/forms'
import { DialogsService } from '../dialogs/dialogs.service';

// import { ErrorMessageComponent } from '../error-message/error-message.component'
// import { InputTypeErrorComponent } from '../input-type-error/input-type-error.component'


export interface DataHash {
  [key: string] : Array<number>;
} 

@Component({
  selector: 'app-input-csv',
  templateUrl: './input-csv.component.html',
  styleUrls: ['./input-csv.component.scss']
})


export class InputCsvComponent implements OnInit {

  myformArray = new FormArray([])

  csvGiven: boolean = false;
  goToPrediction: boolean = false;
 

  timeseries = {
      "exposure.concentration" : [], 
      "exposure.time" : [],
      "sim.start": 0,
      "sim.end": 0,
      "sim.step": 0,
      "weight": 0,
      "size": 0
    }

  dispSeries = {
    "Time (hours)" : [], 
    "Exposure concentration (ug/m^3)" : [],
}
  
  constructor(
    private _dialogsService:DialogsService,
    private _fb: FormBuilder,

  ) { }

  inputValues = this._fb.group({
    simstart: ['0'],
    simend: ['', Validators.required],
    simstep: ['1'],
    weight: ['', Validators.required],
    size: ['', Validators.required],
  });


  ngOnInit(){ }

  onSubmit(){
    if (this.csvGiven && this.inputValues.value.weight!=="" && this.inputValues.value.simend!=="" && this.inputValues.value.size!==""){

      this.timeseries['sim.end'] = Number(this.inputValues.value['simend'])
      this.timeseries['sim.start'] = Number(this.inputValues.value['simstart'])
      this.timeseries['sim.step'] = Number(this.inputValues.value['simstep'])
      this.timeseries['weight'] = Number(this.inputValues.value['weight'])
      this.timeseries['size'] = Number(this.inputValues.value['size'])
      this.timeseries['exposure.concentration'] = this.dispSeries['Exposure concentration (ug/m^3)']
      this.timeseries['exposure.time'] = this.dispSeries['Time (hours)']

      this.goToPrediction = true;
      console.log(this.timeseries)
    } else {
      this._dialogsService.raiseNotEnoughInput();
    }
  }  
  
  uploadDataset(files: FileList){
    this.goToPrediction = false;
    let reader: FileReader = new FileReader();
    let file: File = files.item(0);

    reader.readAsText(file);
    reader.onload = (e) => {
      var _csv = reader.result;
      _csv = _csv.toString()
      const rows = _csv.split(/\r?\n/)  
      
      let first = true; 
      let mapping = {}
      let rowsCnt = 2;
      rows.forEach((element) => {
        if (element!==""){
          if (first) {
            element.split(/,|;/).forEach(item => {
              mapping[element.split(/,|;/).indexOf(item)] = item.replace("\t", "");
            });
            first = false;
          } else {
            let iter = 0;
            element.split(/,|;/).forEach(item => {
              if (item.trim()=="" || isNaN(Number(item))){
                this._dialogsService.raiseMalformedInput(rowsCnt,mapping[iter],item)
                throw new Error('Non numeric values');
              };
              this.dispSeries[mapping[iter]].push(Number(item))
              iter = iter + 1;
            });
            rowsCnt = rowsCnt + 1;
          }
        }
      })

      this.csvGiven = true; 
    }
    
  }

  downloadTemplate(){
    var csvData:string = "Time (hours),Exposure concentration (ug/m^3)\n1,1.2\n2,1.5\n3,2.1\n6,2.9\n9,4.2\n10,5.3\n12,5.6\n13,5.7\n15,6.4\n20,10.6";
    let i = 0;

    var blob = new Blob(["\ufeff"+csvData], { type: 'text/csv; charset=utf-8' });
    var url = window.URL.createObjectURL(blob);
    const datasetName = "NanoInhale - Predict Template.csv"
    if(navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, datasetName);
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = datasetName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

}

