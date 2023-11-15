export default function UserInput({ investmentData, changeInvestment }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initial">
          Initial Investment
          <input
            type="number"
            id="initial"
            min="0"
            defaultValue={investmentData.initial || ''}
            onChange={changeInvestment}
          />
        </label>

        <label htmlFor="annuall">
          Annuall Investment
          <input
            type="number"
            id="annuall"
            min="0"
            defaultValue={investmentData.annuall || ''}
            onChange={changeInvestment}
          />
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="return">
          Expected Return
          <input
            type="number"
            id="return"
            min="0"
            defaultValue={investmentData.return || ''}
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
