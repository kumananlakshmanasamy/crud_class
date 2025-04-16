export const createAccount = async (req, res) => {
// usename 
// email id 
// password
res.json('Account Created')
}

export const login = async (req, res) => {
// email
// password
res.json('login successfully')
}

export const logout = async (req, res) => {
// id --> user id
res.json('logout successfully')
}