import ReactDOM from 'react-dom/client'
import { CssBaseline, } from "@mui/material";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes';
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <CssBaseline />
    <RouterProvider router={router} />
  </>

)
