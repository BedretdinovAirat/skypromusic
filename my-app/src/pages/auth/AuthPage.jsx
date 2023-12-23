import { Link } from "react-router-dom";
import * as S from "../../styledComponents/StyledAuth";
import { useContext, useEffect, useState } from "react";
import { getRefreshToken, getUserToken, login, register } from "../../api/Auth";
import { AuthContext } from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
export default function AuthPage({ isLoginMode = false }) {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // изменение кнопки
  // const [button, setButton] = useState(false);

  const handleLogin = async ({ email, password }) => {
    try {
      const user = await login(email, password);
      loginUser(user);
      const token = await getUserToken({ email, password });
      localStorage.setItem("access", token.access.toString());
      localStorage.setItem("refresh", token.refresh.toString());
      setInterval(async () => {
        const refresh = localStorage.getItem("refresh");
        const refreshToken = await getRefreshToken({ refresh });
        localStorage.setItem("access", refreshToken.access.toString());
      }, 190000);
      navigate("/");
      if (email === "" && password === "") {
        setError("Заполните почту и пароль");
        return;
      }

      if (email === "") {
        setError("Заполните почту");
        return;
      }
      if (password === "") {
        setError("Заполните пароль");
        return;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async () => {
    try {
      const user = await register({ email, password, username: email });
      loginUser(user);
      const token = await getUserToken({ email, password });
      localStorage.setItem("access", token.access.toString());
      localStorage.setItem("refresh", token.refresh.toString());
      setInterval(async () => {
        const refresh = localStorage.getItem("refresh");
        const refreshToken = await getRefreshToken({ refresh });
        localStorage.setItem("access", refreshToken.access.toString());
      }, 190 * 1000);
      navigate("/");
      if (email === "" && password === "") {
        setError("Заполните почту и пароль");
        return;
      }

      if (email === "") {
        setError("Заполните почту");
        return;
      }
      if (password === "") {
        setError("Заполните пароль");
        return;
      }

      if (password !== repeatPassword) {
        setError("Пароли не совпадают");
        return;
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
    // console.log('job');
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
