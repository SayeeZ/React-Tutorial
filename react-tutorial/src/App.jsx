import React from 'react'

const App = () => {
  let user='Sayee'
  const changeUser=() => {
    console.log(user)
    user='Rahul'
    console.log(user)
  }
  return (
    <div>
      <h1>Username is {user}</h1>
      <button onClick={changeUser}>Change user</button>
    </div>
  )
}

export default App