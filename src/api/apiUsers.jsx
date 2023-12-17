import useAxios from ".";
// Mendapatkan semua content untuk ditaruh di halaman dashboard

//untuk menampilkan semua user
export const GetAllUser = async () => {
  try {
    const response = await useAxios.get("/users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(`ini responnya : ${response}` );
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const GetUserByLogin = async () => {
  try {
     const response = await useAxios.get(`/userLogin`,{
      header : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }
     })
     console.log(`resonse : ${response.status}`);
     return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
}

export const GetUserById = async (id) => {
  try {
     const response = await useAxios.get(`/users/${id}`,{
      header : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      }
     })
     console.log(`resonse : ${response.status}`);
     return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
}

export const UpdateProfile = async (data) => {
  console.log(data);
  try {
    const response = await useAxios.put(`/users`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
// Menghaspu content
export const DeleteUser = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await useAxios.delete(`/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

