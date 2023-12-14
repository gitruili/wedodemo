import './App.global.css'
import styles from './App.module.css'

import { Navigation } from './components/Navigation'
import { Display } from './components/Display'
import { MetaMaskError } from './components/MetaMaskError'
import { MetaMaskContextProvider } from './hooks/useMetaMask'
import { Routes, Route } from "react-router-dom"
import Test from './pages/Test/Test'
import User from './pages/User/User'
import Manage from './pages/Manage/Manage'
import Block2 from './pages/Block2'
import Role from './pages/Role'
// import TaskReview from './pages/TaskReview/TaskReview'
import TaskReview2 from './pages/TaskReview2'
import { TaskSubmit } from './pages/TaskSubmit'
import TaskReview from './pages/TaskReview/TaskReview'
// import { TaskReview } from './pages/TaskReview'
// import MyComponent from './components/MyComponent'
// import TaskSubmit from './pages/TaskSubmit/TaskSubmit'

export const App = () => {

  return (
    <MetaMaskContextProvider>
      <div className={styles.appContainer}>
        {/* <Navigation /> */}
        <Routes>
          <Route path='/creatCommunity1' element={<User />} />
          <Route path='/creatCommunity3' element={<Test />} />
          <Route path='/block1' element={<Manage />} />
          <Route path='/block2' element={<Block2 />} />
          <Route path='/role' element={<Role />} />
          {/* <Route path='/taskSubmit' element={<MyComponent />} /> */}
          <Route path='/taskReview' element={<TaskReview />} />
          <Route path='/taskReview2' element={<TaskReview2 />} />
          <Route path='/' element={<Display />} />
        </Routes>
        <MetaMaskError />
      </div>
    </MetaMaskContextProvider>
  )
}