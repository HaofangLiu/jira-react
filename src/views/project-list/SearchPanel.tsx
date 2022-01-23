import React, { useEffect, useState } from "react";
import { paramsInterface, User } from "model/ProjectListModel";

interface searchPanelProps {
  users: User[];
  params: paramsInterface;
  setParams: Function;
}

export const SearchPancel = (props: searchPanelProps) => {
  const { params, setParams, users } = props;

  return (
    <form>
      <input
        type="text"
        value={params.name}
        onChange={(event) => setParams({ ...params, name: event.target.value })}
      />
      <select
        name="user-dropdown"
        id="user-dropdown"
        onChange={(event) =>
          setParams({ ...params, personId: event.target.value })
        }
      >
        <option value="">负责人</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </form>
  );
};
