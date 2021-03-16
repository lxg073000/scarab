export const API_userSignup = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });
export const API_sessionLogin = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });
export const API_sessionLogout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
