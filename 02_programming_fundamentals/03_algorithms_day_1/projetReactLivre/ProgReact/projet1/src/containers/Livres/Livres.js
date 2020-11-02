import React, { Component } from 'react';
import Livre from "./Livre/Livre";
import FormulaireAjout from "./FormulaireAjout/FormulaireAjout";
import FormulaireModification from "./FormulaireModification/FormulaireModification";
import Alert from "../../components/Alert/Alert";

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nbPages:200},
            {id:3, titre:"La France du 19ème", auteur: "Albert PATRICK", nbPages: 500},
            {id:5, titre:"Le monde des animaux", auteur: "Marc MERLIN", nbPages: 250},
            {id:8, titre:"Le Virus d'Asie", auteur: "Tya MILO", nbPages: 120},
        ],
        lastIdLivre : 8,
        idLivreAModifier : 0,
        alertMessage : null
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(l => {
            return l.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({
            livres:newLivres,
            alertMessage: {
                message : "Suppression effectuÃ©e",
                type : "alert-danger"
            }
        });
    }

    handleAjoutLivre = (titre, auteur, nbPages) => {
        const newLivre = {
            id:this.state.lastIdLivre + 1, 
            titre:titre, 
            auteur: auteur, 
            nbPages: nbPages
        };

        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);

        this.setState(oldState => {
            return {
                livres: newListeLivres,
                lastIdLivre: oldState.lastIdLivre + 1,
                alertMessage: {
                    message : "Ajout effectuÃ©e",
                    type : "alert-success"
                }
            }
        })
        this.props.fermerAjoutLivre();
    }

    handleModificationLivre = (id,titre,auteur,nbPages) => {
        const caseLivre = this.state.livres.findIndex(l => {
            return l.id === id;
        });

        const newLivre = {id,titre,auteur,nbPages};

        const newListe = [...this.state.livres];
        newListe[caseLivre] = newLivre;

        this.setState({
            livres : newListe,
            idLivreAModifier : 0,
            alertMessage: {
                message : "Modification effectuÃ©e",
                type : "alert-warning"
            }
        })

    }

    render() {
        return (
            <>
                {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.livres.map(livre => {
                                if(livre.id !== this.state.idLivreAModifier){
                                    return (
                                    <tr key={livre.id}>
                                            <Livre 
                                                titre={livre.titre}
                                                auteur={livre.auteur}
                                                nbPages={livre.nbPages}
                                                suppression={() => this.handleSuppressionLivre(livre.id)}
                                                modification={() => this.setState({idLivreAModifier:livre.id})}
                                            />
                                    </tr>
                                    );
                                } else {
                                    return (
                                        <tr key={livre.id}>
                                            <FormulaireModification 
                                            id={livre.id}
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nbPages={livre.nbPages}
                                            validationModification={this.handleModificationLivre}
                                            />
                                        </tr>
                                        )
                                    ;
                                }
                            })
                        }
                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout validation = {this.handleAjoutLivre}/>}
            </>
        );
    }
}

export default Livres;