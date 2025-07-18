import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaGastos from './components/ListaGastos';

function App() {
  const [gastos, setGastos] = useState(() => {
    const guardados = localStorage.getItem('gastos');
    return guardados ? JSON.parse(guardados) : [];
  });

  const [gastoEditando, setGastoEditando] = useState(null);

  useEffect(() => {
    if (Array.isArray(gastos)) {
      localStorage.setItem('gastos', JSON.stringify(gastos));
    }
  }, [gastos]);

  const total = gastos.reduce((acc, gasto) => acc + Number(gasto.monto || 0), 0);

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="col-12 col-md-10 col-lg-8 bg-white p-5 rounded shadow">
        <h1 className="text-center mb-4 text-primary">
          💸 Control de Gastos Personales
        </h1>

        <Formulario
          gastos={gastos}
          setGastos={setGastos}
          gastoEditando={gastoEditando}
          setGastoEditando={setGastoEditando}
        />

        <ListaGastos
          gastos={gastos}
          setGastos={setGastos}
          setGastoEditando={setGastoEditando}
        />

        <div className="mt-4 text-end">
          <h5 className="text-success">
            💰 Total Gastado: ${total.toLocaleString()}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
