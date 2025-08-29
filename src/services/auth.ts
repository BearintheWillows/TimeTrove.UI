import axios from 'axios'

const API_URL = 'https://localhost:7272'

export async function login(username, password) {
    const res = await axios.post(`${API_URL}/login`, { username, password })
    localStorage.setItem('token', res.data.token)
}

export function getAuthHeader() {
    const token = localStorage.getItem('token')
    return { Authorization: `Bearer ${token}` }
}


class AccountDto {
}

export class ApiClient {
    constructor(baseUrl: string);
    getAccounts(): Promise<AccountDto[]>;
}



