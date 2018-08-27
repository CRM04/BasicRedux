import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducir';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador:number;

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contState => {
      this.contador = contState;
    })
  }

  reset(){
    this.store.dispatch( new ResetAction())
  }

}
