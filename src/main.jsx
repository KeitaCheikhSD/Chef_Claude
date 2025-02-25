/* The line `import { StrictMode } from 'react'` is importing the `StrictMode` component from the React
library. `StrictMode` is a tool that can help highlight potential problems in an application during
development. It performs additional checks and warnings to help identify and fix common issues in
the code. By wrapping components in `StrictMode`, you can catch potential problems early and improve
the overall quality of your React application. */
/* The line `import { StrictMode } from 'react'` is importing the `StrictMode` component from the React
library. `StrictMode` is a tool that can help highlight potential problems in an application during
development. It performs additional checks and warnings to help identify and fix common issues in
the code. By wrapping components in `StrictMode`, you can catch potential problems early and improve
the overall quality of your React application. */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
