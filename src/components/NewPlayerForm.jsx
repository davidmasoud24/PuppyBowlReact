import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

import { createPuppy } from "../ajaxHelpers/puppies";

export default function NewPlayerForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await createPuppy(name, email);
          navigate("/");
        }}
      >
        <h3>Create a New Player</h3>
        <label>Name:</label>
        <TextField
          variant="standard"
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Email:</label>
        <TextField
          variant="filled"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
