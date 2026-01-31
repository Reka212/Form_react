import { useState } from "react"

function App() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.nama || !form.email || !form.password) {
      setError("Semua field wajib diisi")
      return
    }

    setError("")
    alert("Form valid & siap dikirim")
  }

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h2>Form Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default App
