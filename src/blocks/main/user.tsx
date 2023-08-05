import { useParams } from "react-router-dom";

import { useGetUserQuery } from "../../reducers/reducer";
import { baseQueryResponse, ItemsResponse } from "../../types/types";

import {
  UsersText,
  DivMain,
  DivMainItemsUser,
  Image,
  UserLink,
  UsersTitleText,
} from "../styles/userItem-styles";

function UserPage(): JSX.Element {
  const { login } = useParams();

  let name = "";

  if (login) {
    name = login;
  }

  const { data, isLoading } = useGetUserQuery<baseQueryResponse>(name);

  if (isLoading) {
    return <UsersText>Загружается...</UsersText>;
  }

  if (data === undefined) {
    return <UsersText>Данные не были получены, попробуйте заново</UsersText>;
  }
  let user = data.items[0];

  console.log(user);

  return (
    <DivMain>
      <DivMainItemsUser>
        <Image src={user.avatar_url} alt="" />
        <UsersTitleText>{user.login}</UsersTitleText>
        <UsersText>Количество подписок: {user.followers_url.length}</UsersText>
        <UsersText>Количество репозиториев: {user.repos_url.length}</UsersText>

        <UsersText>
          Ссылка на гитхаб:
          <UserLink href={user.html_url}> {user.html_url}</UserLink>
        </UsersText>
      </DivMainItemsUser>
    </DivMain>
  );
}

export default UserPage;
