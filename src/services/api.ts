import axios from "axios";
import type { Category, PaginatedResponse, Product, OrderData } from "../types";

const API_BASE_URL = import.meta.env.VITE_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const categoryAPI = {
  getAll: () => api.get<PaginatedResponse<Category>>("/categories/"),
  getBySlug: (slug: string) => api.get<Category>(`/categories/${slug}/`),
};

export const productAPI = {
  getAll: () => api.get<PaginatedResponse<Product>>("/products/"),
  getBySlug: (slug: string) => api.get<Product>(`/producrs/${slug}/`),
  getByCategory: (categorySlug: string) =>
    api.get<Product[]>(`/products/by_category/?category=${categorySlug}`),
};

export const orderAPI = {
  create: (orderData: OrderData) => api.post("/orders/", orderData),
};
