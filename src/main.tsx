import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header'
import Search from './components/form'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header>
            <Search></Search>
        </Header>
    </StrictMode>
)
