import { RootState } from "../../../reducers/store";
import { useGetUsersQuery } from "../../../reducers/reducer";
import { setParam } from "../../../reducers/action-creation";

import { baseQueryResponse, ItemsResponse } from "../../../types/types";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import {
  DivMainUsers,
  UsersText,
  Buttons,
  UsersTitleText,
  DivMainItems,
  DivMainOrder,
  DivMainOrderButtons,
  DivPageButtons,
} from "../../styles/userItem-styles";

function UsersItem({ valueInput }: { valueInput: string }): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let params: string = useSelector(
    (state: RootState) => state.sort.orderSort.param
  );

  let page: number = useSelector(
    (state: RootState) => state.sort.orderSort.page
  );

  const login: string = valueInput;

  const { data, isError, isLoading } = useGetUsersQuery<baseQueryResponse>({
    login,
    params,
    page,
  });

  if (isLoading) {
    return <UsersText>Загружается...</UsersText>;
  }

  let users = data.items;
  console.log(users);
  if (users.length === 0) {
    return <UsersText>Нет такого пользователя</UsersText>;
  }

  function prevPage() {
    if (page === 1) {
      return;
    }
    --page;
    dispatch(setParam(page));
  }
  function nextPage() {
    ++page;
    dispatch(setParam(page));
  }

  return (
    <>
      {isError ? (
        <UsersTitleText>
          Слишком много запросов, попробуйте позже или перезагрузите страницу.
        </UsersTitleText>
      ) : (
        <DivMainItems>
          <DivMainOrder>
            <UsersTitleText>Количество репозиториев:</UsersTitleText>
            <DivMainOrderButtons>
              <Buttons
                onClick={() => {
                  params = "desc";
                  dispatch(setParam(params));
                }}
              >
                По возрастанию
              </Buttons>
              <Buttons
                onClick={() => {
                  params = "asc";
                  dispatch(setParam(params));
                }}
              >
                По убыванию
              </Buttons>
            </DivMainOrderButtons>
          </DivMainOrder>

          <UsersTitleText>Список пользователей:</UsersTitleText>
          <DivMainUsers>
            {users.map((user) => (
              <UsersText
                key={user.id}
                onClick={() => {
                  navigate(`/user/${user.login}`);
                }}
              >
                {user.login}
              </UsersText>
            ))}
          </DivMainUsers>

          <DivPageButtons>
            <Buttons onClick={prevPage}>Предыдущая страница</Buttons>
            <Buttons onClick={nextPage}>Следующая страница</Buttons>
          </DivPageButtons>
        </DivMainItems>
      )}
    </>
  );
}

export default UsersItem;
