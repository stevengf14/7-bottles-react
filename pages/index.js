import axios from 'axios';
import Head from 'next/head'
import Header from '../src/components/Header.js'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import Result from '../src/components/Result.js';

export default function Home() {
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
          console.log(response.data)
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
        console.log('Error: ' + error)
      });
  }

  return (
    <div className="is-family-sans-serif has-background-primary">
      <Head>
        <title>7 Bottles</title>
        <meta name="description" content="7 Bottles solving with genetic algorithm" />
        <link rel="icon" href="/adn.png" />
      </Head>
      <Header />
      <main className="container box has-background-primary-light">
        <div className="columns is-multiline pl-6 pt-4 pb-4 pr-6">
          <div className="column is-one-third is-align-content-center">
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

          <div className="column is-two-thirds pr-5">
            <div>
              {responseMatrix.iteration && <Result data={responseMatrix} />}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">

      </footer>
    </div>
  )
}
