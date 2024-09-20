export interface IProduct {
  id: string;
  name: string;
  category: string;
  author: string;
  available: true;
  createdAt: string;
  description: string;
  discount: number | null;
  likes: [];
  pictures: string[];
  price: number;
  review: string[];
  stock: number;
  tags: string[];
  updatedAt: string;
  weight: number | null;
}

export interface IProductsRequest {
  search?: string;
  page: {
    pageNumber: number;
    pageSize: number;
    sortProperties: string[];
  };
}

export interface IProductCreateRequest {
  name: string;
  price: number | null;
  category: string;
  available: true;
  _id: string;
  description?: string;
  discount?: number;
  pictures?: File[];
  stock: number;
  weight: number | null;
}
