import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addpatient } from '../Store';

function Addpatient(){
    const initialStatePatientFromStore = useSelector(state=>state.patient)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch =useDispatch()

    const onSubmit = data => {
        dispatch(addpatient(data))
    };

    return(
        <div className="card m-auto" style={{width: "50%"}}>
            <h1 className="m-auto">Ajouter un patient</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">patient {initialStatePatientFromStore.length+1}</li>
                <li className="list-group-item">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-group">
                            <label htmlFor="cin">CIN</label>
                            <input type="text" className="form-control" id="cin" {...register("cin", { required: true })} />
                            {errors.cin && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" className="form-control" id="nom" {...register("nom", { required: true })}/>
                            {errors.nom && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom">Prenom</label>
                            <input type="text" className="form-control" id="prenom" {...register("prenom", { required: true })}/>
                            {errors.prenom && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="numerp">Tel</label>
                            <input type="text" className="form-control" id="numero" {...register("tel", { required: true })} />
                            {errors.tel && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateNaissance">Date de naissance</label>
                            <input type="date" className="form-control" id="dateNaissance"  {...register("dateNaissance", { required: true })} />
                            {errors.dateNaissance && <span className='text-danger'>This field is required</span>}
                        </div>
                        
                        <div className="form-group mt-3 mb-3 ">
                            <div>
                                <label>Sexe</label>
                                <select {...register("sexe", { required: true })}>
                                    <option value="homme">Homme</option>
                                    <option value="femme">Femme</option>
                                </select>
                                {errors.sexe && <span className='text-danger'>This field is required</span>}
                            </div>                           
                        </div> 
                        <div className="form-group">
                            <label htmlFor="rendezVous">Rendez-vous</label>
                            <input type="date" className="form-control" id="rendezVous" {...register("rendezVous", { required: true })}/>
                            {errors.rendezVous && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group d-flex justify-content-center mt-4"> 
                            
                            <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                        
                    </form>
                </li>
            </ul>
        </div>
        
    )
}


export default Addpatient

