const API_BASE = "http://localhost:8001/api"

async function request(path, { method = "GET", token, body } = {}) {
    const headers = { "Content-Type": "application/json" }
    if (token) headers.Authorization = `Bearer ${token}`

    const res = await fetch(`${API_BASE}${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined
    })

    const data = await res.json()
    if (!res.ok) {
        throw new Error(data.errMsg || "Something went wrong")
    }
    return data
}

export const authApi = {
    signup: (username, password) => request("/auth/signup", { method: "POST", body: { username, password } }),
    login: (username, password) => request("/auth/login", { method: "POST", body: { username, password } })
}

export const issueApi = {
    getAll: () => request("/issues"),
    getOne: (id) => request(`/issues/${id}`),
    create: (token, title, description) => request("/issues", { method: "POST", token, body: { title, description } }),
    update: (token, id, title, description) => request(`/issues/${id}`, { method: "PUT", token, body: { title, description } }),
    remove: (token, id) => request(`/issues/${id}`, { method: "DELETE", token }),
    upvote: (token, id) => request(`/issues/${id}/upvote`, { method: "PUT", token }),
    downvote: (token, id) => request(`/issues/${id}/downvote`, { method: "PUT", token })
}

export const commentApi = {
    getAll: () => request("/comments"),
    create: (token, issueId, text) => request("/comments", { method: "POST", token, body: { issueId, text } }),
    update: (token, id, text) => request(`/comments/${id}`, { method: "PUT", token, body: { text } }),
    remove: (token, id) => request(`/comments/${id}`, { method: "DELETE", token })
}
