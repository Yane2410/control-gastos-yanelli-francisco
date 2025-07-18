import React from 'react';

function ListaGastos({ gastos, setGastos }) {
  const eliminarGasto = (id) => {
  const confirmacion = window.confirm('¿Seguro que deseas eliminar este gasto?');
  if (confirmacion) {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  }
};

  if (gastos.length === 0) {
    return <p className="text-center mt-4 text-muted">No hay gastos registrados aún.</p>;
  }

  // Agrupar por categoría
  const gastosPorCategoria = gastos.reduce((acc, gasto) => {
    if (!acc[gasto.categoria]) {
      acc[gasto.categoria] = [];
    }
    acc[gasto.categoria].push(gasto);
    return acc;
  }, {});

  return (
    <div className="mt-4">
      <h4 className="text-secondary mb-3">📋 Listado de Gastos por Categoría</h4>
      {Object.keys(gastosPorCategoria).map((categoria) => (
        <div key={categoria} className="mb-4">
          <h5 className="text-primary mb-3">{categoria}</h5>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            {gastosPorCategoria[categoria].map((gasto) => (
              <div className="col" key={gasto.id}>
                <div className="card position-relative h-100 shadow-sm">
                  <button
                    onClick={() => eliminarGasto(gasto.id)}
                    className="btn btn-outline-danger btn-sm position-absolute top-0 end-0 m-2"
                    aria-label="Eliminar"
                    title="Eliminar gasto"
                    style={{ fontSize: '1.2rem', padding: '0.25rem 0.5rem' }}
                  >
                    🗑️
                  </button>
                  <div className="card-body d-flex flex-column justify-content-between">
                    <p className="card-text">{gasto.descripcion}</p>
                    <div className="text-end">
                      <span className="badge bg-primary fs-6">
                        ${Number(gasto.monto).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListaGastos;
