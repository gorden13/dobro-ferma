export interface IProduct {
  id: string;
  name: string;
  category: string;
}

export interface IProductsRequest {
  search?: string;
  page: {
    pageNumber: number;
    pageSize: number;
    sortProperties: string[];
  };
}
