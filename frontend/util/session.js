export const userSignup = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user },
  });
export const sessionLogin = (user) =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user },
  });
export const sessionLogout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
