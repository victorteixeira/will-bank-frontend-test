import { render, screen } from '@testing-library/react'
import { Button } from './index'

it('renders Button unchanged', () => {
  const { container } = render(<Button>OK</Button>)
  expect(container).toMatchSnapshot()
})

describe('Button', () => {
  it('Should have a text', () => {
    render(<Button>OK</Button>);

    const heading = screen.getByText(/OK/i)

    expect(heading).toBeInTheDocument()
  })
})