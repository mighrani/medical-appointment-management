
import { useDispatch , useSelector } from "react-redux"
import { validptient , deletepatient } from '../Store'; 
import { Link } from "react-router-dom";



let data = null

function ListePatient(){
    
    const initialStatePatientFromStore = useSelector(state=>state.patient)
    const searchInput = useSelector(state=>state.search)
     
    const searchByCin  = initialStatePatientFromStore.filter(i=>((i.cin).match(searchInput.input)) )
    const searchByPrenom  = initialStatePatientFromStore.filter(i=>((i.prenom).match(searchInput.input)) )

    if(searchInput.input.trim()== ""){
        data = initialStatePatientFromStore
    }else{
        if(searchInput.select=="cin"){
            data = searchByCin
        }else{
            data = searchByPrenom
        }
    }

    function parseDate(dateString) {
        var parts = dateString.split('/');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }
    return(
        <div>
            <div class="card ">
                    <div class="card-header text-center">
                       Liste des patients 
                    </div>
                    <div class="card-body">
                        <div class="card-title">
                            <FormSearch/>
                        </div> 
                        <div class="card-title border border-3 rounded">
                            <table className="table ">
                                <thead>
                                    <tr className='text-center'>
                                        <th scope="col">#</th>
                                        <th scope="col">CIN</th>
                                        <th scope="col">nom</th>
                                        <th scope="col">Prenom</th>
                                        <th scope="col">tel</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Sexe</th>
                                        <th scope="col">action</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {data.map(i=>( 
                                        <Tr  id={i.id} cin={i.cin} nom={i.nom} prenom={i.prenom} tel={i.tel} sexe={i.sexe} age={new Date().getFullYear() - parseDate(i.dateNaissance).getFullYear()}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>      
                    </div>
                </div>         
        </div>
    )
}

export function FormSearch(){

    const x = useSelector(state=>state.search)
    const dispatch = useDispatch()

    return(
        <div className=" d-flex">
                    <div className=" d-flex me-2">
                        <label for="inputState" className="d-flex">Search by </label>
                        <select id="inputState" className="form-control" value={x.select} onChange={e=>dispatch({type:"select",payload:e.target.value})} >
                            <option value="prenom">Nom</option>
                            <option value="cin" >CIN</option>

                        </select>
                    </div>
                    <div className="  d-flex">        
                        <input type="text" className="form-control" id="inputZip" value={x.input} onChange={e=>dispatch({type:"input",payload:e.target.value})} />
                        {x.input && <button className="btn btn-light ms-2 text-color.danger" type="submit"  onClick={e=>dispatch({type:"input",payload:""})}>❌</button> }
                    </div>
        </div>
        
    )
}

export function Tr({id,cin,nom,prenom,tel,age,sexe}){
    const dispatch = useDispatch()
    
    function hundelValidation(e){
        e.preventDefault()
        dispatch(validptient(e.target.value))
    }
    function hundelDelete(e){
        e.preventDefault()
        dispatch(deletepatient(e.target.value))
    }
    function hundelDossier(e){
        e.preventDefault() 
        dispatch({type:"SET_DOSSIER",payload:e.target.id})
    }
    return(
        <tr>
            <th scope="row">{id}</th>
            <td>{cin}</td>
            <td>{prenom}</td>
            <td>{nom}</td>
            <td>{tel}</td>
            <td>{age}</td>
            <td>{sexe}</td>
            <td className="d-flex justify-content-center ">
                <button className="btn btn-success me-2" type="submit" value={cin} onClick={e=>hundelValidation(e)}>✔️</button>
                <div onClick={hundelDossier}>
                    <Link to={`/dossiermedical`}>
                        <button className="btn btn-primary me-2" type="button" id={cin} >📁</button>
                    </Link>
                </div>
                {/* <button className="btn btn-primary me-2" type="submit" value={cin} onClick={e=>hundelDossier(e)}>📁</button> */}
                <button className="btn btn-danger" type="submit" value={cin} onClick={e=>hundelDelete(e)}>❌</button>
            </td>
        </tr>
    )
}

export default ListePatient

