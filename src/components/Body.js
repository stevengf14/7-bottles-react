import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import Result from './Result.js';


export default function Body(props) {
    const url = 'https://7hwpo179nc.execute-api.us-east-2.amazonaws.com/production/gentic';
    const [responseMatrix, setResponseMatrix] = useState({});
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    useEffect(() => {
        setResponseMatrix({
            iteration: '',
            individual: '',
            cost: '',
            bestSolution: []
        })
    }, [])
    const execute = (data) => {
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
                    //console.log(responseMatrix);
                }
            })
            .catch((error) => {
                console.error('Error: ' + error)
            });
    }

    return (
        <div>
            <div className="columns is-multiline pl-6 pt-4 pb-4 pr-6">
                <div className="column is-one-third is-align-content-center">
                    <form onSubmit={handleSubmit(execute)}>
                        <div className="field">
                            <label className="label">Population: </label>
                            <div className="control">
                                <input type="number" className="is-info" placeholder="1-1000" {...register('population', { required: true, min: 1, max: 1000 })}></input>
                            </div>
                            {errors.population && <span>Population required. Min value: 1 - Max value: 1000</span>}
                        </div>
                        <div className="field">
                            <label className="label">Number of Iterations: </label>
                            <div className="control">
                                <input type="number" className="is-info" placeholder="1-1000" {...register('iterations', { required: true, min: 1, max: 1000 })}></input>
                            </div>
                            {errors.iterations && <span>Number of Iterations required. Min value: 1 - Max value: 1000</span>}
                        </div>
                        <div className="field">
                            <label className="label">Mutation Probability: </label>
                            <div className="control">
                                <input className="is-info" placeholder="0 - 1"{...register('mutation_probability', { required: true, pattern: /^(?!0*[.,]0*$|[.,]0*$|0*$)\d+[,.]?\d{0,2}$/ })}></input>
                            </div>
                            {errors.population && <span>Mutation Probability required</span>}
                        </div>
                        <div className="field">
                            <label className="label">Fiability: </label>
                            <div className="control">
                                <input type="input" className="is-info" placeholder="1-20" {...register('fiability', { required: true, min: 1, max: 20 })}></input>
                            </div>
                            {errors.population && <span>Fiability required. Min value:1 - Max value: 20</span>}
                        </div>
                        <button type="submit" className="button is-primary">Process</button>
                    </form>
                </div>

                <div className="column is-two-thirds pr-5">
                    <div>
                        {responseMatrix.iteration && <Result data={responseMatrix} />}
                    </div>
                </div>
            </div>
        </div>
    )
}