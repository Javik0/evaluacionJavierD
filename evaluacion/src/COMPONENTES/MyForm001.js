import React from 'react';

class MiForm extends React.Component{

    state = {
        color:"",
        nombre:""
    }


    myOnSubmit=(evn)=>{
        evn.preventDefault();
        this.props.añadirConfiguracion(this.state.color, this.state.nombre);
    }

    myOnChange=(env)=>{
        this.setState({
            [env.target.name]:env.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.myOnSubmit} >
                <input name="color"
                type="text" 
                placeholder="ingrese un color" 
                onChange={this.myOnChange} 
                value={this.state.color} />
                <br />
                <br />
                <input name="nombre"
                type="text" 
                placeholder="ingrese un nombre de imagen" 
                onChange={this.myOnChange} 
                value={this.state.nombre} />
                <br />
                <br />
                <input type="submit" />
            </form>
        )
    }
}

export default MiForm