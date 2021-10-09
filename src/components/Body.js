import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import Result from './Result.js';


export default function Body(props) {
    const url = 'https://7hwpo179nc.execute-api.us-east-2.amazonaws.com/production/gentic';
    const [responseMatrix, setResponseMatrix] = useState({});
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [ loading, setLoading ] = useState(false);
    const [ processed, setProssed ] = useState(false);

    useEffect(() => {
        setResponseMatrix({
            iteration: '',
            individual: '',
            cost: '',
            bestSolution: []
        })
    }, [])
    const execute = (data) => {
        setLoading(true);
        setProssed(true);
        axios.post(url, data)
            .then((response) => {
                if (response.status === 200) {
                    console.debug(response.data)
                    setResponseMatrix({
                        iteration: response.data.iteration,
                        individual: response.data.individual,
                        cost: response.data.cost,
                        bestSolution: response.data.bestSolution
                    });
                }
            })
            .catch((error) => {
                console.error('Error: ' + error)
            });
    }

    const reset = (event) => {
        event.preventDefault();
        setValue('population', '');
        setValue('iterations', '');
        setValue('mutation_probability', '');
        setValue('fiability', '');

        setResponseMatrix({
            iteration: '',
            individual: '',
            cost: '',
            bestSolution: []
        })
        setLoading(false);
        setProssed(false);
    }

    return (
        <div>
            <div className="columns is-multiline pl-6 pt-4 pb-4 pr-6">
                <div className="column is-one-third is-align-content-center">
                    <form onSubmit={handleSubmit(execute)}>
                        <div className="field">
                            <label className="label">Population: </label>
                            <div className="control">
                                <input type="number" className="is-info" disabled={processed} placeholder="1-100" {...register('population', { required: true, min: 1, max: 100 })}></input>
                            </div>
                            {errors.population && <span className="has-text-warning has-text-weight-semibold">Population required.<p className="has-text-danger">min: 1 - max: 1000</p></span>}
                        </div>
                        <div className="field">
                            <label className="label">Number of Iterations: </label>
                            <div className="control">
                                <input type="number" className="is-info" disabled={processed} placeholder="1-1000" {...register('iterations', { required: true, min: 1, max: 1000 })}></input>
                            </div>
                            {errors.iterations && <span className="has-text-warning has-text-weight-semibold">Number of Iterations required.<p className="has-text-danger">min: 1 - max: 1000</p></span>}
                        </div>
                        <div className="field">
                            <label className="label">Mutation Probability: </label>
                            <div className="control">
                                <input type="number" step="any" className="is-info" disabled={processed} placeholder="0.0 - 1"{...register('mutation_probability', { required: true, min: 0, max: 1})}></input>
                            </div>
                            {errors.mutation_probability && <span className="has-text-warning has-text-weight-semibold">Mutation Probability required. <p className="has-text-danger">min: 0 - max: 1</p></span>}
                        </div>
                        <div className="field">
                            <label className="label">Fiability: </label>
                            <div className="control">
                                <input type="number" className="is-info" disabled={processed} placeholder="1-20" {...register('fiability', { required: true, min: 1, max: 20 })}></input>
                            </div>
                            {errors.population && <span className="has-text-warning has-text-weight-semibold">Fiability required.<p className="has-text-danger">min:1 - max: 20</p></span>}
                        </div>
                        <button type="submit" className="button is-info is-rounded mr-2">Process</button>
                        <button className="button is-info is-outlined is-rounded " onClick={reset}>Reset</button>
                    </form>
                </div>

                <div className="column is-two-thirds pr-5">
                    <div>
                        {responseMatrix.iteration ?
                            <Result data={responseMatrix} />
                            : loading && <div className="hero is-large is-align-items-center">Loading...</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}