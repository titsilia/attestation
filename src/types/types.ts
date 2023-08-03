export interface ItemsResponse {
  login: string;
  id: number;
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
