import React from 'react';

// definindo a estrutura de tipos de user
interface IUser {
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}
// para que esse componente fique usável para propriedades como children, então utilizamos o React.FC<Props> e passando o Props definido pela interface que criamos para dizer o tipo do nosso user.
const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br />
      <strong>Nome: </strong> {user.email} <br /><br />
    </div>
  )
}

export default User;