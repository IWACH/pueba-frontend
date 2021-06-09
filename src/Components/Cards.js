import React from "react";
import { Link } from "react-router-dom";

export function Cards(props) {
  const info = props.usuario.userResponseDto;
  return (
    <div>
      <div className="card card-info">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <div className="image-profile">
                  {info.name.slice(0, 1) + info.lastname.slice(0, 1)}
                </div>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{info.name + " " + info.lastname}</p>
            </div>
          </div>
          <div className="content">{info.email}</div>
          <Link to={`/${encodeURI(info.name)}/cronograma`}>
            <div className="button is-info is-outlined">Cronograma de pagos</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
