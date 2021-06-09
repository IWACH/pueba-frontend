import React, { useState, useEffect } from "react";
import Axios from "axios";
import { map } from "lodash";
import Moment from "moment";

export function Cronograma(props) {
  const [openModal, setOpenModal] = useState(false);
  const [datosModal, setDatosModal] = useState({});
  const [loading, setLoading] = useState(false);
  const [cronograma, setCronograma] = useState([]);
  const { nombre } = props.match.params;

  const showModal = (c) => {
    setOpenModal(true);
    setDatosModal(c);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    setLoading(true);
    Axios.get(
      `https://servicios.inclubtest.online:2053/api/payment/schedule/vouchers/383`
    ).then((response) => {
      const data = response.data.objModel;
      setCronograma(data);
      setLoading(false);
    });
  }, []);

  let sumaAmortizacion = 0;
  let sumaInteres = 0;
  let sumaTotal = 0;
  const usuarioCronograma = map(cronograma, (c, ix) => {
    sumaAmortizacion += c.amortization;
    sumaInteres += c.interested;
    sumaTotal += c.amortization + c.interested;
    return (
      <tr>
        <th>{c.positionOnSchedule}</th>
        <td>{Moment(c.payDate).format("DD/MM/YYYY")}</td>
        <td>{c.capitalBalance}</td>
        <td>{c.amortization}</td>
        <td>{c.interested}</td>
        <td>{c.amortization + c.interested}</td>
        <td>
          <div className="button is-primary" onClick={() => showModal(c)}>
            Ver
          </div>
        </td>
      </tr>
    );
  });
  let imgBase64 =
    cronograma[datosModal.positionOnSchedule - 1]?.vouchers[0]?.base64;
  let validarFoto = imgBase64?.startsWith("/");
  return (
    <div>
      <p className="propietario-cronograma">{`Propietario: ${nombre}`}</p>
      <table className="table is-fullwidth">
        {console.log(cronograma)}
        <thead>
          <tr>
            <th>Cuota</th>
            <th>Fecha de pago</th>
            <th>Saldo Inicial</th>
            <th>Amortización</th>
            <th>Interes</th>
            <th>Total a pagar</th>
            <th>Ver recibo</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <th></th>
            <th></th>
            <th>{sumaAmortizacion.toFixed(2)}</th>
            <th>{sumaInteres}</th>
            <th>{sumaTotal.toFixed(2)}</th>
            <th></th>
          </tr>
        </tfoot>
        <tbody>{usuarioCronograma}</tbody>
      </table>
      {loading ? (
        <div className="column loading">
          <progress class="progress is-small is-primary" max="100">
            15%
          </progress>
        </div>
      ) : null}

      {/* modal */}

      <div className={`modal ${openModal ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        {validarFoto && cronograma.length ? (
          <div className="modal-content">
            <p className="image is-4by3">
              {cronograma.length ? (
                <img
                  src={`data:image/jpeg;base64,${imgBase64}`}
                  alt="imagen de vaucher"
                />
              ) : null}
            </p>
          </div>
        ) : (
          <div class="modal-content modal-content-sinfoto">
            No existe información
          </div>
        )}
        <button
          className="modal-close is-large"
          onClick={closeModal}
          aria-label="close"
        ></button>
      </div>
    </div>
  );
}
