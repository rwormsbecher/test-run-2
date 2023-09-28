
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TestButton, TestButtonTypesEnum } from '../src/components/button/Button';
import React from 'react';
import 'jest-styled-components';

describe("Test button", () => {
    test("renders a button with prop spreading", () => {
        const {getByText} = render(<TestButton buttontype={TestButtonTypesEnum.Primary} disabled data-testid="test">Test</TestButton>);

        expect(getByText(/test/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveAttribute("disabled", "");
        expect(screen.getByRole('button')).toHaveAttribute("data-testid", "test")
    })

    test('renders a secondary button in yellow', () => {
        render(
          <TestButton buttontype={TestButtonTypesEnum.Secondary}>test</TestButton>
        );
    
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveStyleRule('background', 'hotpink');
      });
})
