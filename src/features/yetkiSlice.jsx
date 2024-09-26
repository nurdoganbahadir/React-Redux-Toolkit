import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    kullaniciOlustur: (state) => {},
    kulaniciSil: (state) => {},
  },
});
export const { kullaniciOlustur, kulaniciSil } = yetkiSlice.actions;
export default yetkiSlice.reducer;
