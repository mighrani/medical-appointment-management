import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch =useDispatch()

    const onSubmit = data => {
        dispatch({type:"login" , payload:data})
        
    };

    return(
        <div className="card m-auto" style={{width: "50%"}}>
            <h1 className="m-auto">Login</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="cin">CIN</label>
                            <input type="text" className="form-control" id="cin" {...register("cin", { required: true })} />
                            {errors.cin && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Nom</label>
                            <input type="password" className="form-control" id="password" {...register("pass", { required: true })}/>
                            {errors.password && <span className='text-danger'>This field is required</span>}
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


export default Login
