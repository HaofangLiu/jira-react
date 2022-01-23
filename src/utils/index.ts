import { useEffect, useState } from "react";
import { paramsInterface } from "model/ProjectListModel";

export const cleanObject = (obj: paramsInterface) => {
  const deepcopyObj = JSON.parse(JSON.stringify(obj));
  Object.keys(deepcopyObj).forEach((key) => {
    if (isFalsy(deepcopyObj[key])) {
      delete deepcopyObj[key];
    }
  });
  return deepcopyObj;
};

const isFalsy = (val: unknown) => (val === 0 || val === false ? false : !val);

// hook has to be used hook or component, not component
export const useMount = (cb: Function) => {
  useEffect(() => {
    cb();
  }, []);
};

export const useDebounce = (
  param: paramsInterface,
  wait: number
): paramsInterface => {
  const [paramDebounce, setParamDebounce] = useState(param);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setParamDebounce(param);
    }, wait);
    return () => {
      clearTimeout(timeout);
    };
  }, [param]);

  return paramDebounce;
};
