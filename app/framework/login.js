export const checkJwtTokenCookie = () => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].trim().startsWith("jwtToken=")) {
      return;
    }
  }
  alert("토큰이 만료됨");
  window.location.href = "https://sso1.yulchon.com/login";
};
