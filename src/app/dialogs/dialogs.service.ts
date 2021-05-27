import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NotEnoughErrorComponent } from './not-enough-error/not-enough-error.component';
import { MalformedInputComponent } from './malformed-input/malformed-input.component';
import { ServerErrorComponent } from './server-error/server-error.component'
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  

  constructor(
    private _dialog: MatDialog,
  ){}
  
  public raiseNotEnoughInput(){
    let dialogRef: MatDialogRef<NotEnoughErrorComponent>;
    dialogRef = this._dialog.open(NotEnoughErrorComponent)
    return dialogRef.afterClosed()
  }

  public raiseMalformedInput(xCoord:any, yCoord:any, val:any){
    let dialogRef: MatDialogRef<MalformedInputComponent>;
    dialogRef = this._dialog.open(MalformedInputComponent,{
      data:{
        x: xCoord,
        y: yCoord,
        value: val
      }
    })
    return dialogRef.afterClosed()
  }

  public raiseServerError(errorMsg: string){
    

    let dialogRef: MatDialogRef<ServerErrorComponent>;
    dialogRef = this._dialog.open(ServerErrorComponent,{
      data:{
        msg: errorMsg
      }
    })
    return dialogRef.afterClosed()
    
    // if (error.error instanceof ErrorEvent) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.error('An error occurred:', error.error.message);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong,
    //     console.error(
    //       `Backend returned code ${error.status}, ` +
    //       `body was: ${error.error}`);
    //   }
  }
}