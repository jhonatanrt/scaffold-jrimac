import React, { useCallback, useEffect } from 'react';
import Form from './Form';

const Cotizador = (props: any) => {
  const imaginaryUser = {
    email: '',
    username: '',
    imaginaryThingId: null,
  };

  return (
    <div>
      <Form user={imaginaryUser}/>
    </div>
  )
}

export default Cotizador;
