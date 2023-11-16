import { useState } from 'react'

import { calculateInvestmentResults } from './util/investment'

import Header from './components/Header/Header'
import Result from './components/Result/Result'
import UserInput from './components/UserInput/UserInput'

export default function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  // Prepared data to render table at start
  let investmentResult = calculateInvestmentResults(investment)

  function handleChangeInvestment(e) {
    setInvestment((currInvestment) => {
      return {
        ...currInvestment,
        [e.target.id]: Number(e.target.value),
      }
    })
    investmentResult = calculateInvestmentResults(investment)
  }

  return (
    <>
      <Header />
      <UserInput
        investmentData={investment}
        changeInvestment={handleChangeInvestment}
      />
      <Result investmentResult={investmentResult} />
    </>
  )
}
