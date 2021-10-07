export default function Request(props) {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    
    return (
        <div className="column is-centered">
            <form onSubmit={handleSubmit(execute)}>
                <div className="field">
                    <label className="label">Population: </label>
                    <div className="control">
                        <input type="input is-info" {...register('population', { required: true })}></input>
                    </div>
                    {errors.population && <span>Population required</span>}
                </div>
                <div className="field">
                    <label className="label">Number of Iterations: </label>
                    <div className="control">
                        <input type="input is-info" {...register('iterations', { required: true })}></input>
                    </div>
                    {errors.iterations && <span>Number of Iterations required</span>}
                </div>
                <div className="field">
                    <label className="label">Mutation Probability: </label>
                    <div className="control">
                        <input type="input is-info" {...register('mutation_probability', { required: true })}></input>
                    </div>
                    {errors.population && <span>Mutation Probability required</span>}
                </div>
                <div className="field">
                    <label className="label">Fiability: </label>
                    <div className="control">
                        <input type="input is-info" {...register('fiability', { required: true })}></input>
                    </div>
                    {errors.population && <span>Fiability required</span>}
                </div>
                <button type="submit" className="button is-primary">Process</button>
            </form>
        </div>
    );
}