"use server";

interface LoginForm {
  email: string;
  password: string;
}

export const userLogin = async (data: LoginForm) => {
  const response = await fetch(
    `http://localhost:3000/api/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const result = await response.json();
  return result;
};
