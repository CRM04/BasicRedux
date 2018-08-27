import * as fromContadorAction from './contador.actions';

export function contadorReducer(state:number = 10, action:fromContadorAction.actions){
    switch ( action.type ) {
        case fromContadorAction.INCREMENTAR:
            return state + 1;
            

        case fromContadorAction.DECREMENTAR:
            return state - 1;

        case fromContadorAction.MULTIPLICAR:
            return state * action.payload;
        
        case fromContadorAction.DIVIDIR:
            return state / 2;

        case fromContadorAction.RESET:
            return state = 0;
    
        default:
            return state;
    }
}