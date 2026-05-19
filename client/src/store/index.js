import { configureStore, createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    success: false,
    error: null
  },
  reducers: {
    submitStart: (state) => {
      state.loading = true
      state.success = false
      state.error = null
    },
    submitSuccess: (state) => {
      state.loading = false
      state.success = true
    },
    submitFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    resetForm: (state) => {
      state.success = false
      state.error = null
    }
  }
})

export const { submitStart, submitSuccess, submitFailure, resetForm } = contactSlice.actions

export const store = configureStore({
  reducer: {
    contact: contactSlice.reducer,
  }
})
