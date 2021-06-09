import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Estados } from "./Estados";
import { map } from "lodash";
import { Cards } from "./Cards";

export function DatosUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [estado, setEstado] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUsuarios([]);
    if (estado) {
      setLoading(true);
      Axios.get(
        `https://servicios.inclubtest.online:2053/api/suscription/all/state/${estado}`
      ).then((response) => {
        const data = response.data.objModel;
        setLoading(false);
        setUsuarios(data);
      });
    }
  }, [estado]);

  const onChange = (_estado) => {
    setEstado(_estado);
  };

  return (
    <div className="container">
      <Estados onChange={onChange} />
      {!estado ? (
        <p className="sin-info">Seleccione un estado</p>
      ) : loading ? (
        <div className="loading">
          <progress className="progress is-small is-primary " max="100">
            15%
          </progress>
        </div>
      ) : usuarios.length ? (
        <div className="columns is-multiline">
          {map(usuarios, (usuario, ix) => {
            return (
              <div
                key={ix}
                className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
              >
                <Cards usuario={usuario} />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="sin-info">No hay informacion con ese estado</p>
      )}
    </div>
  );
}
