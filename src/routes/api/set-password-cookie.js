import cookie from 'cookie';

export async function post(request) {
    return {
        status: 200,
        headers: {
            'Set-Cookie': cookie.serialize('passwordAuthenticated', 'true', {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7 // 1 week
            })
        }
    };
}
