// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachList, updateValue} = props
  const {suggestion} = eachList
  const onClickSuggest = () => {
    updateValue(suggestion)
  }

  return (
    <li className="list-container">
      <p className="sugg">{suggestion}</p>
      <button onClick={onClickSuggest} type="button" className="buton">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
