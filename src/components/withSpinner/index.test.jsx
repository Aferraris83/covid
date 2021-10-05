import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import withSpinner from ".";

describe('whitSpinner HOC', () => {
  const FakeComponent = ({ name }) => <div>{name}</div>;
  const FAKE_COMPONENT = 'Fake component';
  const PROGRESSBAR = 'progressbar';

  const FakeWithSpinner = withSpinner(FakeComponent);
  
  it('render spinner', () => {
    
    render(<FakeWithSpinner name={FAKE_COMPONENT} isLoading/>)
    
    const fake = screen.queryByText(FAKE_COMPONENT);
    const spinner = screen.getByRole(PROGRESSBAR);

    expect(spinner).toBeTruthy();
    expect(fake).toBeFalsy();
  })

  it('render fake component and other props', () => {
    
    render(<FakeWithSpinner name={FAKE_COMPONENT} />)
    
    const spinner = screen.queryByRole(PROGRESSBAR);
    const fake = screen.getByText(FAKE_COMPONENT);

    expect(fake).toBeTruthy();
    expect(spinner).toBeFalsy();
  })
})
