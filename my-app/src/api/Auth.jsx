// Апи регистрации и входа
const token = "https://skypro-music-api.skyeng.tech/user/token/";
export async function register({ email, password, username }) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/signup/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const registerData = await response.json();

  if (response.status === 400) {
    const errorEmail = registerData.email ? `Email: ${registerData.email}` : "";
    const errorUserName = registerData.username
      ? `Имя пользователя: ${registerData.username}`
      : "";
    const errorPassword = registerData.password
      ? `Password: ${registerData.password}`
      : "";
    throw new Error(`${errorEmail} ${errorUserName} ${errorPassword}`);
  }
  return registerData;
}
export async function login(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/login/",
    {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  const loginData = await response.json();

  if (response.status === 400) {
    const errorEmail = loginData.email ? `Email: ${loginData.email}` : "";
    const errorUserName = loginData.username
      ? `Имя пользователя: ${loginData.username}`
      : "";
    const errorPassword = loginData.password
      ? `Password: ${loginData.password}`
      : "";
    throw new Error(`${errorEmail} ${errorUserName} ${errorPassword}`);
  }
  if (response.status === 401) {
    throw new Error(`${loginData.detail}`);
  }
  return loginData;
}
export async function getToken(email, password) {
  const response = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
    {
      method: "POST",
      body: JSON.stringify({
        password,
        email,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return response.json();
}
export const getUserToken =
  async () =>
  async ({ email, password }) => {
    const response = await fetch(token, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    return response.json();
  };
