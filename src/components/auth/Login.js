import React from 'react'
import { useHistory } from 'react-router-dom'

import useForm from '../../hooks/useForm'
import { login } from '../../lib/api'
import { setToken } from '../../lib/auth'


export default function Login() {
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)
  const { formData, handleChange } = useForm({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await login(formData)
      setToken(data.token)
      history.push('/stores')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <section className="section">
      <div className="container">
        <div className="form">
          <form
            onSubmit={handleSubmit}  
          >
            <div className="inside">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {isError && (
                <p className="help is-danger">
                Incorrect login details
                </p>
              )}
              <div className="field">
                <button type="submit" className='button is-fullwidth is-warning'>
                Log In
                </button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  )
}
