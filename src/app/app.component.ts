import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  currentUrl: any;
  routerEvents: any;
  constructor(private router: Router) { 
    this.routerEvents = this.router.events.subscribe(
      (event:any)=>{
        if(event instanceof NavigationEnd){
          this.currentUrl = event.url.replace('/','').replace('-',' ').toUpperCase();
          // Prints the current route
          // Eg.- /products
        }
      }
    )
  }
  ngOnInit() {
    // this.currentUrl = this.router.url;
    // console.log(this.router);
}
ngOnDestroy(): void {
  this.routerEvents.unsubscribe();
  // Unsubscribe to avoid memory leak
}

}
