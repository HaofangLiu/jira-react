import React, { useEffect, useState } from "react";
import { paramsInterface, User } from "model/ProjectListModel";
import { Input, Select } from "antd";

interface searchPanelProps {
  users: User[];
  params: paramsInterface;
  setParams: Function;
}

export const SearchPancel = (props: searchPanelProps) => {
  const { params, setParams, users } = props;

  return (
    <>
      <Input
        type="text"
        value={params.name}
        onChange={(event) => setParams({ ...params, name: event.target.value })}
      />
      <Select
        id="user-dropdown"
        placeholder="Select a person"
        onChange={(val) => setParams({ ...params, personId: val })}
      >
        <Select.Option value="">全部</Select.Option>
        {users.map((user) => (
          <Select.Option key={user.id} value={user.id}>
            {user.name}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};
