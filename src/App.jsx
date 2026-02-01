import { useState } from "react"
import "./App.css"

function App() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.nama || !form.email || !form.password) {
      setError("Semua field wajib diisi")
      return
    }

    if (!form.email.includes("@")) {
      setError("Email tidak valid")
      return
    }

    if (form.password.length < 6) {
      setError("Password minimal 6 karakter")
      return
    }

    setError("")
    alert("Login berhasil (dummy)")
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Form Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default App
