// apiController.js

import useAxios from "."; // Sesuaikan dengan path sesuai struktur proyek Anda

// Menampilkan semua jenis pengambilan
export const GetAllJenisPengambilan = async () => {
  try {
    const response = await useAxios.get("/jenisPengambilans", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Menampilkan jenis pengambilan berdasarkan ID
export const GetJenisPengambilanById = async (id) => {
  try {
    const response = await useAxios.get(`/jenisPengambilans/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Menambahkan jenis pengambilan baru
export const AddJenisPengambilan = async (data) => {
  try {
    const response = await useAxios.post("/jenisPengambilans", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Mengupdate jenis pengambilan berdasarkan ID
export const UpdateJenisPengambilan = async (id, data) => {
  try {
    const response = await useAxios.put(`/jenisPengambilans/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Menghapus jenis pengambilan berdasarkan ID
export const DeleteJenisPengambilan = async (id) => {
  try {
    const response = await useAxios.delete(`/jenisPengambilans/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};
