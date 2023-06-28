// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    inputValue: '',
  }

  inputClick = event => {
    this.setState({inputValue: event.target.value})
  }

  updateValue = suggestion => {
    this.setState({inputValue: suggestion})
  }

  render() {
    const {inputValue} = this.state
    const {suggestionsList} = this.props
    const searchInput = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(inputValue.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-img"
          />
          <div className="search-container">
            <div className="input-field">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                value={inputValue}
                onChange={this.inputClick}
              />
            </div>
            <ul className="suggestion-container">
              {searchInput.map(eachList => (
                <SuggestionItem
                  key={eachList.id}
                  eachList={eachList}
                  updateValue={this.updateValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
