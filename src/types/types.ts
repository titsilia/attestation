export interface ItemsResponse {
  login: string;
  id: number;
  avatar_url: string;
  followers_url: string;
  repos_url: string;
  html_url: string;
}

export interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: ItemsResponse[];
}

export interface baseQueryResponse {
  data: SearchResponse;
  isLoading: boolean;
  isError: boolean;
}
