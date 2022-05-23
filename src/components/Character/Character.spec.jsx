import { render, screen } from '@testing-library/react'
import { Character } from './index'

it('renders Character unchanged', () => {
  const { container } = render(<Character image="/" name="Spider Man" />)
  expect(container).toMatchSnapshot()
})

describe('Character', () => {
  it('Should have a spider man Character', () => {
    render(<Character image="/" name="Spider Man" />);

    const heading = screen.getByAltText(/Spider Man/i)

    expect(heading).toBeInTheDocument()
  })
})