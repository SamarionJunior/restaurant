/// CSS ///
import './css/index.scss'
/// REACT ///
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/// REDUX ///
import { Provider } from 'react-redux'
import store from './data/redux/store.ts'
/// COMPONENTS ///
import Restaurant from './site/pages/Restaurant.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Restaurant/>
    </Provider>
  </StrictMode>,
)
