import { tagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProject: build.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),

    getSingleProjectById: build.query({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),

    createAProject: build.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.project],
    }),

    getAllBlog: build.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    getSingleBlogById: build.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),

    createABlog: build.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const {
  useGetAllProjectQuery,
  useGetSingleProjectByIdQuery,
  useCreateAProjectMutation,
  // blog
  useCreateABlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogByIdQuery
} = projectApi;
