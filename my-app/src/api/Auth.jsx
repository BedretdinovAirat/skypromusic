// Апи регистрации и входа
export async function register({ email, password, username }) {
  const repsonse = await fetch(
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
  return repsonse.json();
}
export async function login(email, password) {
  const repsonse = await fetch(
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
  return repsonse.json();
}
export async function getToken(email, password) {
  const repsonse = await fetch(
    "https://skypro-music-api.skyeng.tech/user/token/",
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
  return repsonse.json();
}
