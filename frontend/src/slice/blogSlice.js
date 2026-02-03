import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../apis/ApiInstence";

/* ================= FETCH ALL BLOGS ================= */
export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getRequest("/blog");
      return res.data?.data || res.data || [];
    } catch (error) {
      return rejectWithValue("Failed to fetch blogs");
    }
  }
);

/* ================= FETCH BLOG BY ID ================= */
export const fetchBlogById = createAsyncThunk(
  "blog/fetchBlogById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getRequest(`/blog/${id}`);
      return res.data?.data || res.data;
    } catch (error) {
      return rejectWithValue("Failed to fetch blog details");
    }
  }
);


/* ================= ADD BLOG ================= */
export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await postRequest("blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue("Failed to add blog");
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    singleBlog: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSingleBlog: (state) => {
      state.singleBlog = null;
    },
  },
  extraReducers: (builder) => {
    builder
      /* ===== FETCH BLOGS ===== */
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== FETCH BLOG BY ID ===== */
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ===== ADD BLOG ===== */
      .addCase(addBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBlog.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSingleBlog } = blogSlice.actions;
export default blogSlice.reducer;
