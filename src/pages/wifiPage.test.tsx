import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import WifiPage from "./WifiPage";

test('shows disabled text when the toggle switch is clicked', () => {
	render(<WifiPage/>)

	// const toggle = screen.getByTestId('switch')
	// expect(toggle).toHaveProperty('checked', true)

	// fireEvent.click(toggle, {target: {checked: true}})

	expect(screen.getByTestId("status")).toBe('disable')
})


