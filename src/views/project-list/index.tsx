import React, { useState, useEffect } from "react";
import { SearchPancel } from "./SearchPanel";
import { ListComp } from "./list";
import { cleanObject, useMount, useDebounce } from "utils";
import { useHttp } from "utils/http";

const ProjectList = () => {
  const [params, setParams] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceObj = useDebounce(params, 1000);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debounceObj) }).then((result) => {
      setList(result);
    });
  }, [debounceObj]);

  useMount(() => {
    client("users").then((result) => {
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
