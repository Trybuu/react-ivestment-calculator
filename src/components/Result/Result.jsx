import { formatter } from '../../util/investment'

export default function Result({ investmentResult }) {
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
        {investmentResult.map((result, i, array) => {
          // var sum = arr.reduce(function(prev, curr) {
          //   return prev + curr;
          // });
          const totalInterest =
            i > 0
              ? array[i - 1].interest + array[i].interest
              : array[i].interest

          return (
            <>
              <tr key={result.year}>
                <th>{result.year}</th>
                <th>{formatter.format(result.valueEndOfYear)}</th>
                <th>{formatter.format(result.interest)}</th>
                <th>{formatter.format(totalInterest)}</th>
                <th>
                  {formatter.format(result.valueEndOfYear - totalInterest)}
                </th>
              </tr>
            </>
          )
        })}
      </tbody>
    </table>
  )
}
