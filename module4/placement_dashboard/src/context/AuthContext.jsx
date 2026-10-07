import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedStudent = localStorage.getItem("student");

    if (savedStudent) {
      return JSON.parse(savedStudent);
    }

    const savedEmail = localStorage.getItem("studentEmail");

    if (savedEmail) {
      return {
        name: "Harini",
        email: savedEmail,
        course: "Computer Science"
      };
    }

    return null;
  });

  const login = (email) => {
    const savedStudent = localStorage.getItem("student");

    let loggedInUser;

    if (savedStudent) {
      const student = JSON.parse(savedStudent);

      loggedInUser = {
        ...student,
        email
      };
    } else {
      loggedInUser = {
        name: "Harini",
        email,
        course: "Computer Science"
      };
    }

    localStorage.setItem(
      "student",
      JSON.stringify(loggedInUser)
    );

    localStorage.setItem("studentEmail", email);

    setUser(loggedInUser);
  };

  const logout = () => {
    localStorage.removeItem("studentEmail");
    setUser(null);
  };

  const register = (student) => {
    localStorage.setItem(
      "student",
      JSON.stringify(student)
    );

    setUser(student);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}