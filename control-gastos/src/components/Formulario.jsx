import React, { useState } from 'react';

function Formulario({ gastos, setGastos }) {
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!monto || !categoria || !descripcion) {
      alert('Por favor completa todos los campos');
      return;
    }

    const nuevoGasto = {
      id: Date.now(),
      monto,
      categoria,
      descripcion,
    };

    const nuevosGastos = [...gastos, nuevoGasto];
    setGastos(nuevosGastos);

    alert('✨ Gasto guardado con amor 💖 ¡Sigue organizando tu vida financiera con magia! 🌟');

    setMonto('');
    setCategoria('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 rounded border shadow-sm bg-light mb-4">
      <h4 className="mb-3 text-secondary">📝 Registrar nuevo gasto</h4>

      <div className="mb-3">
        <label className="form-label">Monto:</label>
        <input
          type="number"
          className="form-control"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          placeholder="Ej: 5000"
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
          <option value="Alimentación">🍽️ Alimentación</option>
          <option value="Transporte">🚌 Transporte</option>
          <option value="Ocio">🎮 Ocio</option>
          <option value="Otros">📦 Otros</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción:</label>
        <input
          type="text"
          className="form-control"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Ej: Compras del súper"
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        ➕ Agregar Gasto
      </button>
    </form>
  );
}

export default Formulario;
