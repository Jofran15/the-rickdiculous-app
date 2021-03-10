import React, { Component } from 'react'
import axios from "axios";
import Lugar from '../components/Lugar'

 class Lugares extends Component {
    state={
        lugares:[]
    }

    componentDidMount(){
        axios.get("https://rickandmortyapi.com/api/location").then((response) => {
  this.setState({ lugares: response.data.results });
  console.log(this.state);
  console.log('hola munod')
});
    }
    render() {

        const lugares=this.state.lugares.map((lugar)=>{
            return <Lugar
            nombre={lugar.name}
            />

        })
       
        return (
            <div className='main-lugares'>
                <p>{lugares}</p>
            </div>
        )
    }
}

export default Lugares
