import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },

  reducers: {
    kullaniciOlustur: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    kullaniciSil: (state) => {
      state.email = "";
      state.password = "";
    },
  },
});

export const { kullaniciOlustur, kullaniciSil } = yetkiSlice.actions;

export default yetkiSlice.reducer;
