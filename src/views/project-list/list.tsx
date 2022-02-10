import React from "react";
import { List, User } from "model/ProjectListModel";
import { Table } from "antd";
import { title } from "process";

interface listProps {
  list: List[];
  users: User[];
}

export const ListComp = (props: listProps) => {
  const { list, users } = props;
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render(value, list, index) {
            return (
              <span key={list.id}>
                {users.find((user) => user.id === list.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    ></Table>
  );
};
