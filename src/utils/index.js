const TOKEN_KEY = 'affiliateId';

export const login = (credentials) => {
    localStorage.setItem(TOKEN_KEY, credentials.password);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}

export const affiliateId = () =>{
    return localStorage.getItem(TOKEN_KEY)
}

export const saveGoals = (id, data) => {
    localStorage.setItem(`${id}-data`, JSON.stringify(data))
}   

export const loadData = (id) =>{
    const data = localStorage.getItem(`${id}-data`)
    if(data){
        return data
    }
    else{
        return null
    }
}