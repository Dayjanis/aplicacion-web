import React, {Component} from 'react';


import Login from './login';
import Inicio from './inicio';

class HomeContainer extends Component{
    constructor (props){
        super(props);

        this.state ={
            vista: 'Login',
            usuario:'',
        };
    }
    cambiarpantalla= (pantalla)=>{
        this.setState({
            vista: pantalla,    
            
        });

    };
     render(){
         const {vista,usuario} = this.state;
         
 
         if (vista =='Login'){
             return(
                 <Login
                 cambiarpantalla = {this.cambiarpantalla}
                 onChangeText={(text) => this.setState({usuario:text})}
                 
                 />
             );
         }
         if (vista === 'Inicio'){
             return(
                 <Inicio
                 cambiarpantalla ={this.cambiarpantalla}
                 usuario={usuario}
                 />
             );

             }
     }
}

export default HomeContainer;