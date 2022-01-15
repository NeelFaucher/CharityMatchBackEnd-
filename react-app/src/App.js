import Login from './components/Login';
import Body from './components/Body';
import { useState } from 'react';

function App() {

  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? <Body /> : <Login setlogin={setloggedIn} />}
    </div>
  );
}

export default App;
