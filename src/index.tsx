import { createRoot } from 'react-dom/client'
import Hello from './hello'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Hello />)
