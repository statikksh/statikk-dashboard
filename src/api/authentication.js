import api from './index';

const REGISTER_ROUTE = '/register';
const AUTHENTICATE_ROUTE = '/auth';

const TOKEN_KEY = '__TOKEN';

/**
 * Stores the JWT token.
 */
function storeToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

/**
 * Retrieves the JWT token.
 */
function retrieveToken() {
    return localStorage.getItem(TOKEN_KEY);
}

/**
 * @returns true if the JWT token exists.
 */
function tokenExists() {
    return !!retrieveToken();
}

/**
 * Destroys the current JWT token.
 */
function destroyToken() {
    localStorage.removeItem(TOKEN_KEY);
}

/**
 * Authenticates a user.
 * @returns Array<[boolean authenticated?, string message]>
 */
async function authenticate(email, password) {
    const response = await api
        .post(AUTHENTICATE_ROUTE, { email, password })
        .then((response) => response.data)
        .catch((error) => error.response.data);

    if (!response.error) {
        storeToken(response.token);
        return [true, null];
    } else {
        return [false, response.message];
    }
}

/**
 * Creates a new account.
 * @returns Array<[boolean created?, string message]>
 */
async function register(user) {
    const response = await api
        .post(REGISTER_ROUTE, user)
        .then((response) => response.data)
        .catch((error) => error.response.data);

    if (!response.error) {
        storeToken(response.token);
        return [true, null];
    } else {
        return [false, response.message];
    }
}

/**
 * Logouts from the current user account.
 */
function logout() {
    destroyToken();
    return true;
}

export default {
    retrieveToken,

    authenticate,
    register,
    logout,
    isAuthenticated: tokenExists,
};
