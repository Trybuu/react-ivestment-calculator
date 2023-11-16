export default function UserInput({ investmentData, changeInvestment }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">
          Initial Investment
          <input
            type="number"
            id="initialInvestment"
            min="0"
            defaultValue={investmentData.initialInvestment || ''}
            onChange={changeInvestment}
          />
        </label>

        <label htmlFor="annualInvestment">
          Annuall Investment
          <input
            type="number"
            id="annualInvestment"
            min="0"
            defaultValue={investmentData.annualInvestment || ''}
            onChange={changeInvestment}
          />
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="expectedReturn">
          Expected Return
          <input
            type="number"
            id="expectedReturn"
            min="0"
            defaultValue={investmentData.expectedReturn || ''}
            onChange={changeInvestment}
          />
        </label>

        <label htmlFor="duration">
          Duration
          <input
            type="number"
            id="duration"
            min="0"
            defaultValue={investmentData.duration || ''}
            onChange={changeInvestment}
          />
        </label>
      </div>
    </div>
  )
}
