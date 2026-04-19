import React, { useState } from 'react'

let Login = () => {

    let API = [
        { id: 1, name: "ABC", email: "abc@gmail.com", password: "12" },
        { id: 2, name: "DEF", email: "def@gmail.com", password: "1234" },
        { id: 3, name: "GHI", email: "ghi@gmail.com", password: "123456" }
    ]

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [flag, setFlag] = useState(false)
    let [sflag, setSFlag] = useState(false)
    let [correct, setCorrect] = useState(false)

    function check(x) {
        for (let t of API) {
            if (x.includes('@')) {
                if (x == t.email) {
                    return true
                }
            } else {
                if (x == t.password) {
                    return true
                }
            }
        }
        return false
    }

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(() => {  
            if (check(email) && check(password)) {
                setCorrect(true)
                console.log(`Email : ${email} | Password : ${password}`)
            } else if (!check(password) && check(email)) {
                setFlag(true)
            } else {
                setSFlag(true)
            }
        }, 3000)
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <h1>Sign<span style={{color:'red'}}>Up</span></h1>
                <input id="input-email" onChange={(e) => {
                    setEmail(e.target.value)
                    setFlag(false)
                    setCorrect(false)
                    setSFlag(false)
                }} type='email' placeholder='Email' />

                <input id="input-password" onChange={(e) => {
                    setPassword(e.target.value)
                    setFlag(false)
                    setCorrect(false)
                    setSFlag(false)
                }} type='password' placeholder='Password' />

                {flag && <p id='password-error' style={{ color: 'red', marginLeft: '16px', marginBottom:'15px' }}>Password Incorrect</p>}

                {sflag && <p id='user-error' style={{ color: 'red', marginLeft: '16px', marginBottom:'15px' }}>User not found</p>}

                {correct && <p id='user-error' style={{ color: 'green', marginLeft: '16px', marginBottom:'15px' }}>Login Successfull</p>}

                <button id="submit-form-btn">Submit</button>
            </form>
        </div>
    )
}

export default Login