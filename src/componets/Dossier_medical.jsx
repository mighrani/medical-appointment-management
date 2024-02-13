import { useSelector } from "react-redux";

// const data = {"id": 10, "cin": "J678901", "nom": "Moore", "prenom": "Ella", "tel": "+112233445",    "dateNaissance": "30/01/2022", "sexe": "F", "rendezVous": "28/01/2024","valid":false }


function DossierMedical(props){
    
    const v = useSelector(state=>state.dossier)
    const initialStatePatientFromStore = useSelector(state=>state.patient)
    const x = initialStatePatientFromStore.filter(i=>(i.cin==v) )

    const data  = x[0]
    

    function parseDate(dateString) {
        var parts = dateString.split('/');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    return(
        <div>
            <h1 className=" text-center  ">Dossier medical : {data.id}</h1>     
            <div className="d-flex justify-content-around mt-5">
                
                    <table className="table table-bordered " style={{width: "40%"}}>
                        <tbody>
                            <tr>
                                <th scope="row">Nom</th>
                                <td>{data.nom}</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Prenom</th>
                                <td>{data.prenom}</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">CIN</th>
                                <td>{data.cin}</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Sexe</th>
                                <td>{data.sexe}</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Date de naissance </th>
                                <td>{data.dateNaissance}</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Age</th>
                                <td>{new Date().getFullYear() - parseDate(data.dateNaissance).getFullYear()}</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Tel</th>
                                <td>{data.tel}</td>
                            
                            </tr>
                        </tbody>
                    </table>
               
                    <table className="table table-bordered  " style={{width: "40%"}}>
                        <tbody>
                            <tr>
                                <th scope="row">Total des rendez-vous</th>
                                <td>Jacob</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Total des consultations</th>
                                <td>Jacob</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Total des ordonnances </th>
                                <td>Jacob</td>
                            
                            </tr>
                            <tr>
                                <th scope="row">Total des frais payes </th>
                                <td>Jacob</td>
                            
                            </tr>
                        </tbody>
                    </table>
            
        </div> 
    </div> 
    )
}

export default DossierMedical