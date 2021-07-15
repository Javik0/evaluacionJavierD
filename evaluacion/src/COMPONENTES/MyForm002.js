class MyForm2 extends React.Component{

    state={
        nombre:'',
        apellido:'',
        edad:0
    }

    myOnSubmit=(evn)=>{
        evn.preventDefault();
        this.props.añadirUsuario(this.state.nombre, this.state.apellido, this.state.edad);
    }

    myOnChange=(env)=>{
        this.setState({
            [env.target.name]:env.target.value
        })
    }

    guardarArchivo = () => {
        this.props.guardarArchivo()
    }

    render(){
        return(
            <div align = "center">
                <form onSubmit={this.myOnSubmit} >
                    <input name="nombre"
                        type="text" 
                        placeholder="Nombre" 
                        onChange={this.myOnChange} 
                        value={this.state.nombre}
                    />
                    <br />
                    <br />
                    <input name="apellido"
                        type="text" 
                        placeholder="Apellido" 
                        onChange={this.myOnChange} 
                        value={this.state.apellido}
                    />
                    <br />
                    <br />
                    <input name="edad"
                        type="text" 
                        placeholder="Edad" 
                        onChange={this.myOnChange} 
                        value={this.state.edad}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        )
    }
}