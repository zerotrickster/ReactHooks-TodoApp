import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { CSSTransition } from "react-transition-group";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 400,
      }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={`alert alert-${
          alert.type || "warning"
        } d-flex justify-content-between align-items-center`}
      >
        <div>
          <strong className="alert-strong">Holy guacamole!</strong>
          {alert.text}
        </div>
        <button onClick={hide} type="button" className="btn btn-close">
          &times;
        </button>
      </div>
    </CSSTransition>
  );
};
