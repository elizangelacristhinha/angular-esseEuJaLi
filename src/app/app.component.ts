import * as M from 'materialize-css';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mobile') sideNav?:ElementRef;

  title = 'angular-esseEuJaLi';
  ngAfterViewInit():void{
    let $sideNav = $ ('#mobile-demo') ;
    M.Sidenav.init($sideNav);
  }
}
