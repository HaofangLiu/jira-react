import React, { useState, useEffect } from "react";
import { SearchPancel } from "./SearchPanel";
import { ListComp } from "./list";
import qs from "qs";
import { cleanObject, useMount, useDebounce } from "utils";

const ProjectList = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceObj = useDebounce(params, 1000);

  const url = process.env.REACT_APP_JSON_SERVER;

  useEffect(() => {
    fetch(`${url}/projects?${qs.stringify(cleanObject(debounceObj))}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((result) => {
        setList(result);
      });
  }, [debounceObj]);

  useMount(() => {
    fetch(`${url}/users`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((result) => {
        setUsers(result);
      });
  });

  return (
    <div>
      <SearchPancel params={params} setParams={setParams} users={users} />
      <ListComp list={list} users={users} />
    </div>
  );
};
export default ProjectList;
