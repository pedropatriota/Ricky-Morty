import Input from '.';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { dark } from '../../styles/themes';

const handleChangeMocked = jest.fn();
describe('Input', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={dark}>
        <Input value="" handleChange={handleChangeMocked} />
      </ThemeProvider>
    );

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByPlaceholderText('Search for a country')).toBeInTheDocument();
  });

  it('should be able to type in the input', async () => {
    render(
      <ThemeProvider theme={dark}>
        <Input value="" handleChange={handleChangeMocked} />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText('Search for a country') as HTMLInputElement;

    await waitFor(async () => {
      await userEvent.type(inputElement, 'World!');
      expect(handleChangeMocked).toHaveBeenCalled();
    });
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={dark}>
        <Input value="" handleChange={handleChangeMocked} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
