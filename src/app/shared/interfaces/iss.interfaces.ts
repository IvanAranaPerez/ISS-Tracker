export interface SearchResponse {
  message:      string;
  iss_position: IssPosition;
  timestamp:    number;
}

export interface IssPosition {
  longitude: string;
  latitude:  string;
}
