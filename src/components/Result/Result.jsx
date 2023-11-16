import { formatter } from '../../util/investment'

export default function Result({ investmentResult }) {
  let totalInterest = 0 // Helper for calculate values in table

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {/* Table body goes here */}
        {investmentResult.map((result) => {
          totalInterest += result.interest

          return (
            <tr key={result.year}>
              <th>{result.year}</th>
              <th>{formatter.format(result.valueEndOfYear)}</th>
              <th>{formatter.format(result.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(result.valueEndOfYear - totalInterest)}</th>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
