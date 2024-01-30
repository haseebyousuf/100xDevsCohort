import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import Signin from './pages/Signin';
import { useRecoilValue } from 'recoil';
import { userAtom } from './atoms/userAtom';
function App() {
  const user = useRecoilValue(userAtom);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={!user ? <Signin /> : <Navigate to='/dashboard' />}
        />
        <Route
          path='/signup'
          element={!user ? <Signup /> : <Navigate to='/dashboard' />}
        />
        <Route
          path='/signin'
          element={!user ? <Signin /> : <Navigate to='/dashboard' />}
        />
        <Route
          path='/dashboard'
          element={user ? <Dashboard /> : <Navigate to='/signin' />}
        />
        <Route
          path='/send'
          element={user ? <SendMoney /> : <Navigate to='/signin' />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
