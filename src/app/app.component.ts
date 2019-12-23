import { Component ,OnInit } from '@angular/core';
import { of } from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'gad';
  
  ngOnInit(){
    let obs$ = of(1,2,3);
    obs$.subscribe(x => {
      console.log("tets 1gad",x)
    })
  }
}
