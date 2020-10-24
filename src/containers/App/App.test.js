const React = require('react')
const Component = require('react').Component
const App = require('../components/App.js')
const screen = require('@testing-library/react').screen
const render = require('@testing-library/react').render
const cleanup = require('@testing-library/react').cleanup
const fireEvent = require('@testing-library/react').fireEvent


describe('App component', () => {
  beforeAll(() => {
    render(<App />)
  })

  it('should have the right message in the dom', () => {
    const message = 'Hello, World!';

    expect(screen.getByText(message)).toBeInTheDocument()
  })

  afterAll(cleanup)
})
