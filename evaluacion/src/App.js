import React from 'react';
import './App.css';
import usuarios from './datos/usuarios.json';
import Elementos from './COMPONENTES/elementos.js';
import MyForm2 from './componentes/MyForm2';

class App extends React.Component{

  state ={
    usuarios:usuarios
  }

  añadirusuario=( nombre, apellido,edad )=>{
    const newusuario  = {
      id : this.state.usuarios.slice(-1)[0].id+1,
      nombre: nombre,
      apellido:apellido,
      edad:edad
    }
    this.setState({
      usuarios: [...this.state.usuarios, newusuario]//this.state.practica1.push(newElement)
    })
  }

  eliminarUsuario=(id)=>{

    const newState = this.state.usuarios.reduce((newArr,obj) =>{
      if(obj.id !== id){
        return newArr.concat(obj);
      }
      return newArr
    },[]);

    this.setState({
      usuarios: newState
    })
  }


  render(){
    return<div>
      <MyForm2 añadirUsuario={this.añadirUsuario} />
      <br />
      <Elementos usuarios={this.state.usuarios} eliminarUsuario={this.eliminarusuario}   />
    </div>
  }
}