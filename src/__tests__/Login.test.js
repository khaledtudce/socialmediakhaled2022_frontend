import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../pages/login/Login";

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("username value should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});

test("password input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/password/i);
  expect(userInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByTestId("loginButton");
  expect(userInputEl).toBeInTheDocument();
});

test("login button should be disabled", () => {
  render(<Login />);
  const userInputEl = screen.getByTestId("loginButton");
  expect(userInputEl).toBeDisabled();
});

test("username value should change when provided", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

test("password input should change when provided", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

test("Login button should be visible when user and password provided", () => {
  render(<Login />);
  const userInputButton = screen.getByTestId("loginButton");
  expect(userInputButton).toBeDisabled();

  const userInput = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInput, { target: { value: testValue } });

  const userPassword = screen.getByPlaceholderText(/password/i);
  fireEvent.change(userPassword, { target: { value: testValue } });
  expect(userInputButton).toBeEnabled();
});

test("Login button should contain please wait when user and password provided", () => {
  render(<Login />);
  const userInputButton = screen.getByTestId("loginButton");
  expect(userInputButton).toBeDisabled();

  const userInput = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInput, { target: { value: testValue } });

  const userPassword = screen.getByPlaceholderText(/password/i);
  fireEvent.change(userPassword, { target: { value: testValue } });
  expect(userInputButton).toBeEnabled();

  fireEvent.click(userInputButton);
  expect(userInputButton).toHaveTextContent(/please wait/i);
});
