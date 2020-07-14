import React, { useEffect, useState } from 'react';
import api from './services/api';

import User from './components/User';

// definindo uma interface para dizer como será o tipo de user recebido da api.
interface IUser {
  name: string;
  email?: string;
}

function App() {
  // indicando para o useState que o tipo de users será um array de user com a interface IUser
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // para o axios entender o tipo de resposta que terá da api adicionamos a interface definida anteriormente um array de IUser
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    })
  }, [])

  return (
    <div className="app">
      {users.map(user => <User key={user.email || 'Não possui e-mail'} user={user} />)}
    </div>
  );
}

export default App;