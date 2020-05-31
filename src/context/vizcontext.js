import React from "react"

const defaultState = {
  setStateFromVariableKey: () => {},
}

const VizContext = React.createContext(defaultState)

class VizProvider extends React.Component {
  state = {
  }

  render () {
    const { children } = this.props
    const stateDict = this.state

    return (
      <VizContext.Provider
        value={{
          stateDict,
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
