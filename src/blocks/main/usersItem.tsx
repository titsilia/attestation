import React from "react";
import { useGetUsersQuery } from "../../reducers/reducer";
import { setParam } from "../../reducers/action-creation";
import { baseQueryResponse, ItemsResponse } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import { RootState } from "../../reducers/store";

function UsersItem({ valueInput }: { valueInput: string }): JSX.Element {
  const dispatch = useDispatch();

  let params = useSelector((state: RootState) => state.setParam.param);

  const login: string = valueInput;

  const { data, isError, isLoading } = useGetUsersQuery<baseQueryResponse>({
    login,
    params,
  });

  if (isError) {
    return <div>{isError}</div>;
  }

  if (isLoading) {
    return <p className="main__users_user">Загружается...</p>;
  }

  let users = data.items;

  if (users.length === 0) {
    return <p className="main__users_user">Нет такого пользователя</p>;
  }

  return (
    <>
      <div className="main__items">
        <div className="">
          <p className="main__users_user">Количество репозиториев:</p>
          <button
            onClick={() => {
              params = "desc";
            }}
          >
            По возрастанию
          </button>
          <button
            onClick={() => {
              params = "asc";
            }}
          >
            По убыванию
          </button>
        </div>
        <p className="main__items_title">Список пользователей:</p>

        <div className="main__users">
          {users.map((user) => (
            <p key={user.id} className="main__users_user">
              {user.login}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default UsersItem;
