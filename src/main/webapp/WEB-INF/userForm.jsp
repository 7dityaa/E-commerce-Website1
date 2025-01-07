<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Registration</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 20px;
      }
      .container {
        width: 50%;
        margin: auto;
        background: #ffffff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
      h1 {
        text-align: center;
        color: #333;
      }
      form {
        margin-top: 20px;
      }
      label {
        display: block;
        margin: 10px 0 5px;
        font-weight: bold;
      }
      input[type="text"],
      input[type="email"],
      button {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
      button {
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: #0056b3;
      }
      .error {
        color: red;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>User Registration</h1>
      <form action="user" method="post">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  </body>
</html>
