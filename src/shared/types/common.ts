export interface MenuItem {
  name: string;
  route: { name: string };
  icon: {
    namespace: string;
    name: string;
  };
}

export interface IPaging<T> {
  totalCount: number;
  searchCount: number;
  items: T;
}
