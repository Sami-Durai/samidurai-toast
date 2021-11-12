import React, { memo, useEffect, useRef } from "react";

import { Provider, useSelector } from "react-redux";

import { Toast } from "primereact/toast";

import store from "./store";

import { REF, PROPS, SHOW } from "./actionTypes";

const HFNToaster = () => {
  const toast = useRef(null);

  const toastProps = useSelector(state => state.props)

  useEffect(() => {
    store.dispatch({ type: REF, payload: toast });
  }, []);

  return (
    <Provider store={store}>
      <Toast onHide={() => { }} {...toastProps} ref={toast} />
    </Provider>
  );
};

export const toaster = {
  props: (payload) => {
    store.dispatch({ type: PROPS, payload: payload });
  },
  success: (payload) => {
    store.dispatch({ type: SHOW, payload: Object.assign({}, { summary: "Success" }, payload, { severity: "success" }) });
  },

  info: (payload) => {
    store.dispatch({ type: SHOW, payload: Object.assign({}, { summary: "Information" }, payload, { severity: "info" }) });
  },

  warn: (payload) => {
    store.dispatch({ type: SHOW, payload: Object.assign({}, { summary: "Warning" }, payload, { severity: "warn" }) });
  },

  error: (payload) => {
    store.dispatch({ type: SHOW, payload: Object.assign({}, { summary: "Error" }, payload, { severity: "error" }) });
  },

  custom: (payload) => {
    store.dispatch({
      type: SHOW, payload: payload
    });
  }
};

export default memo(HFNToaster);
