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
  }),
});

export const {
  useGetAllProjectQuery,
  useGetSingleProjectByIdQuery,
  useCreateAProjectMutation,
} = projectApi;
