import axios from 'axios';
import Head from 'next/head'
import Header from '../src/components/Header.js'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import matrixStyle from '../assets/styles/matrix.module.css'

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

  let component;

  if (responseMatrix.iteration === '') {
    component = <div>
      Waiting...
    </div>
  } else {
    component = <div>
      <div className="column">
        <div className="column is-quarter"><strong>Iteration: </strong>{responseMatrix.iteration}</div>
        <div className="column is-quarter"><strong>Individual: </strong>{responseMatrix.individual}</div>
        <div className="column is-half"><strong>Cost: </strong>{responseMatrix.cost}</div>
        <div className="column is-half"><strong>Best Solution: </strong>
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th><abbr title="person1">Wine</abbr></th>
                  <th><span className={matrixStyle.user1}></span></th>
                  <th><abbr title="person2">P2</abbr></th>
                  <th><abbr title="person3">P3</abbr></th>
                </tr>
              </thead>
              {
                responseMatrix.bestSolution &&
                /*
                // To return a dinamic table
                responseMatrix.bestSolution && responseMatrix.bestSolution.map((items, index) => {
                return (
                  <tr key={index}>
                    {items.map((subItem, sIndex) => {
                      return <td key={sIndex}>{subItem}</td>
                    }
                    )}
                  </tr>
                )*/
                <tbody>
                  <tr>
                    <td><progress className="progress is-danger" value="100" max="100"></progress></td>
                    <td>{responseMatrix.bestSolution[0][0]}</td>
                    <td>{responseMatrix.bestSolution[0][1]}</td>
                    <td>{responseMatrix.bestSolution[0][2]}</td>
                  </tr>
                  <tr>
                    <td><progress className="progress is-danger" value="50" max="100"></progress></td>
                    <td>{responseMatrix.bestSolution[1][0]}</td>
                    <td>{responseMatrix.bestSolution[1][1]}</td>
                    <td>{responseMatrix.bestSolution[1][2]}</td>
                  </tr>
                  <tr>
                    <td><progress className="progress is-danger" value="0" max="100"></progress></td>
                    <td>{responseMatrix.bestSolution[2][0]}</td>
                    <td>{responseMatrix.bestSolution[2][1]}</td>
                    <td>{responseMatrix.bestSolution[2][2]}</td>
                  </tr>
                </tbody>
              }
            </table>
          </div>
        </div>
      </div>
    </div>
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
        <div className="columns is-one-third pl-5 pt2 pb2">
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
          <div className="column is-two-thirds pr-5">
            <div>
              {component}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">

      </footer>
    </div>
  )
}
