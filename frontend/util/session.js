export const API_fetchUser = (user) =>
  $.ajax({
    method: "GET",
    url: `/api/users/${user.id}`,
  });
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
export const API_toggleUserTutorial = (user) =>
  $.ajax({
    method: "PATCH",
    url: `/api/session/user/${user.id}`,
    data: { user },
  });
export const API_sessionLogout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
