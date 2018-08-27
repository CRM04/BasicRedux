import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducir';
import { MultiplicarAction, DividirAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {
  
  contador:number;

  constructor( private store:Store<AppState> ) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contState => {
      this.contador = contState;
    })
  }

  multiplicar(){
    this.store.dispatch( new MultiplicarAction( 2 ) )
  }

  dividir(){
    this.store.dispatch(new DividirAction(2));
  }

  reset(nuevoContador){
    this.contador = nuevoContador;
    
  }
}
