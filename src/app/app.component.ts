import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcClientNotification, OidcSecurityService, PublicConfiguration, PublicEventsService,  EventTypes } from 'angular-auth-oidc-client';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TITLE, DESCRIPTION} from '../assets/project-constants'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = TITLE;
  desc = DESCRIPTION;

  isAuthenticated: boolean;
  loggedIn:boolean;
  subscription:Subscription;
  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;

  configuration: PublicConfiguration;
  userDataChanged$: Observable<OidcClientNotification<any>>;
  userData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;
  checkSessionChanged$: Observable<boolean>;
  checkSessionChanged: any;

  constructor(
    public oidcSecurityService: OidcSecurityService,
    private _router:Router,private eventService: PublicEventsService,
    private _http: HttpClient
    ){}

  ngOnInit(){
    this.isAuthorizedSubscription = this.oidcSecurityService.isAuthenticated$.subscribe(
      (isAuthorized: boolean) => {
        if(isAuthorized === true){
          this.isAuthenticated = true;
        }else{
          this.isAuthenticated = false;
        }
      });
      this.configuration = this.oidcSecurityService.configuration;
      this.userData$ = this.oidcSecurityService.userData$;
      this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
      this.checkSessionChanged$ = this.oidcSecurityService.checkSessionChanged$;

      this.oidcSecurityService.checkAuth().subscribe((isAuthenticated) => console.log('app authenticated', isAuthenticated));

      this.eventService
          .registerForEvents()
          .pipe(filter((notification) => notification.type === EventTypes.CheckSessionReceived))
          .subscribe((value) => console.log('CheckSessionReceived with value from app', value));
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff()
  }

  downloadTutorial(){
    this._http.get("../../assets/Tutorial - NanoInhale.pdf", {responseType: "blob"}).subscribe(pdf => {
      var blob = new Blob([pdf], { type: 'text/csv; charset=utf-8' });
      var url = window.URL.createObjectURL(blob);
      const datasetName = "NanoInhale - Tutorial.pdf"
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
    })  
  }

}