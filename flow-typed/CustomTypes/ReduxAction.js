declare type ReduxAction<T> = {|
  type: string,
  payload: T
|};
