export default function UserInput({ investmentData, changeInvestment }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            min="0"
            defaultValue={investmentData.initialInvestment || ''}
            onChange={changeInvestment}
            required
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annuall Investment</label>
          <input
            type="number"
            id="annualInvestment"
            min="0"
            defaultValue={investmentData.annualInvestment || ''}
            onChange={changeInvestment}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            min="0"
            defaultValue={investmentData.expectedReturn || ''}
            onChange={changeInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            min="0"
            defaultValue={investmentData.duration || ''}
            onChange={changeInvestment}
            required
          />
        </p>
      </div>
    </div>
  )
}
