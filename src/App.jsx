import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Button from './components/Button'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button />
    </ThemeProvider>
  )
}
