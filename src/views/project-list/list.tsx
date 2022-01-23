import React from "react";
import { List, User } from "model/ProjectListModel";

interface listProps {
  list: List[];
  users: User[];
}

export const ListComp = (props: listProps) => {
  const { list, users } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                {users.find((user) => user.id === item.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
