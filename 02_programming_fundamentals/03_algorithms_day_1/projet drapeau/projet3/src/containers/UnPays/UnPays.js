import React, { Component } from 'react';
import axios from "axios";
import TitreH1 from "../../components/Titres/TitreH1";
import Pays from "../PaysManager/Pays/Pays";

class UnPays extends Component {
    state = {
        data : null,
        loading : false,
    }

    componentDidMount = () => {
        this.setState({loading:true});
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.nomPays}?fullText=true`)
            .then(reponse => {
                this.setState({
                    loading:false,
                    data: reponse.data[0]
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            })
    }

    render() {
        return (
            
            <div className="container">
                <TitreH1>Page du pays : {this.props.nomPays}</TitreH1>
                {
                    this.state.data &&
                    <Pays 
                        drapeau={this.state.data.flag}
                        nom={this.state.data.name}
                        capitale={this.state.data.capital}
                        region={this.state.data.region}
                        nomFrancais={this.state.data.translations.fr}
                        {...this.props}
                        solo={true}
                        monnaie={this.state.data.currencies[0].name}
                    />
                }

            </div>
        );
    }
}

export default UnPays;