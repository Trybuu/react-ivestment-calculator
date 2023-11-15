import { useState } from 'react'

import Header from './components/Header/Header'
import Result from './components/Result/Result'
import UserInput from './components/UserInput/UserInput'

export default function App() {
  const [investment, setInvestment] = useState({
    initial: null,
    annuall: null,
    return: null,
    duration: null,
  })

  function handleChangeInvestment(e) {
    console.log(investment)
    console.log(e.target.id)
    console.log(e.target.value)
    setInvestment((currInvestment) => {
      const newInvestment = { ...currInvestment, [e.target.id]: e.target.value }
      return newInvestment
    })
  }

  return (
    <>
      <Header />
      <UserInput
        investmentData={investment}
        changeInvestment={handleChangeInvestment}
      />
      <Result />
    </>
  )
}
