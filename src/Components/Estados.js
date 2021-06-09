import { map } from "lodash";
import React from "react";
import "../css/index.scss";

const estadosClientes = [
  { descripcion: "Inactivo", id: 0 },
  { descripcion: "Activo", id: 1 },
  { descripcion: "Pendiente validación inicial", id: 2 },
  { descripcion: "Rechazo inicial", id: 3 },
  { descripcion: "Pagar Despues", id: 4 },
  { descripcion: "Deuda 1", id: 5 },
  { descripcion: "Deuda 2", id: 6 },
  { descripcion: "Deuda 3", id: 7 },
  { descripcion: "PreLiquidacion", id: 8 },
  { descripcion: "Congelado", id: 9 },
  { descripcion: "Pendiente validación cuota", id: 10 },
  { descripcion: "Rechazo cuota", id: 11 },
  { descripcion: "Suscripción finalizada", id: 12 },
  { descripcion: "Pendiente validación migración", id: 13 },
  { descripcion: "Rechazo migración", id: 14 },
  { descripcion: "Liquidacion", id: 15 },
];
export function Estados(props) {
  const onChange = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div className="seleccionar-estado">
      <p>Selecionar un estado:</p>
      <div className="select is-small">
        <select onChange={onChange}>
          <option value={""}>Elegir</option>
          {map(estadosClientes, (estado, ix) => {
            return (
              <option key={ix} value={estado.id}>
                {estado.descripcion}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
