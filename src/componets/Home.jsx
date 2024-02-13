import 'bootstrap/dist/css/bootstrap.css'
import { FormSearch, Tr } from './Liste_patient'
import { useSelector } from 'react-redux';
 
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const today = `${year}-${month}-${day}`;

let  data = null

function Home(){
    const initialStatePatientFromStore = useSelector(state=>state.patient)
    const searchInput = useSelector(state=>state.search)
   
    console.log(initialStatePatientFromStore)
    const cleanData = initialStatePatientFromStore.filter(i=>today == i.rendezVous && i.valid===false )  
    const nubervalide = initialStatePatientFromStore.filter(i=>today == i.rendezVous && i.valid==true )  
    const searchByCin  = initialStatePatientFromStore.filter(i=>today==i.rendezVous && i.valid==false  && ((i.cin).match(searchInput.input)) )
    const searchByPrenom  = initialStatePatientFromStore.filter(i=>today==i.rendezVous && i.valid==false  && ((i.prenom).match(searchInput.input)) )


    if(searchInput.input.trim()== ""){
        data =  cleanData
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
                <div class="row text-center">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Number of patient : {cleanData.length}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Number of valide patient : {nubervalide.length} </h5>
                            </div>
                        </div>
                    </div>
                </div>
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
export default Home