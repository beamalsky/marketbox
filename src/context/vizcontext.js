import React from "react"

const defaultState = {
  setStateFromVariableKey: () => {},
}

const VizContext = React.createContext(defaultState)

class VizProvider extends React.Component {
  state = {
    people: 700,
    donation: 40,
    donation_two: 40,
    followers: 1000,
    seen: 25,
    percent: 10,
    donation_three: 40
  }

  render () {
    const { children } = this.props
    const {
      people,
      donation,
      donation_two,
      followers,
      seen,
      percent,
      donation_three
    } = this.state

    return (
      <VizContext.Provider
        value={{
          people,
          donation,
          donation_two,
          followers,
          seen,
          percent,
          donation_three,
          setStateFromVariableKey: (variable, value) => {
            this.setState({ [variable]: value })
          }
        }}
      >
        {children}
      </VizContext.Provider>
    )
  }
}

export default VizContext

export { VizProvider }
