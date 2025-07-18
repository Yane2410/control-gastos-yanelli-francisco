import React, { useState, useEffect } from 'react';

function Formulario({ gastos, setGastos, gastoEditando, setGastoEditando, refFormulario }) {
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    if (gastoEditando) {
      setMonto(gastoEditando.monto);
      setCategoria(gastoEditando.categoria);
      setDescripcion(gastoEditando.descripcion);
    }
  }, [gastoEditando]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!monto || !categoria || !descripcion) {
      alert('Por favor completa todos los campos');
      return;
    }

    const gastoFormateado = {
      id: gastoEditando ? gastoEditando.id : Date.now(),
      monto: Number(monto),
      categoria,
      descripcion,
    };

    if (gastoEditando) {
      const gastosActualizados = gastos.map((gasto) =>
        gasto.id === gastoEditando.id ? gastoFormateado : gasto
      );
      setGastos(gastosActualizados);
      setGastoEditando(null);
    } else {
      setGastos([...gastos, gastoFormateado]);
    }

    setMonto('');
    setCategoria('');
    setDescripcion('');
  };

  return (
    <form ref={refFormulario} onSubmit={handleSubmit} className="border p-4 rounded bg-white shadow mb-4">
      <div className="mb-3">
        <label className="form-label">Monto:</label>
        <input
          type="number"
          className="form-control"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Categoría:</label>
        <select
          className="form-select"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option value="Alimentación">Alimentación</option>
          <option value="Transporte">Transporte</option>
          <option value="Ocio">Ocio</option>
          <option value="Otros">Otros</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción:</label>
        <input
          type="text"
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {gastoEditando ? 'Actualizar Gasto' : 'Agregar Gasto'}
      </button>
    </form>
  );
}

export default Formulario;
