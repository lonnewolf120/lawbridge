import { NextResponse } from 'next/server';
import {parseCookies } from 'nookies';
const BACKEND_URL = process.env.BASE_URL || 'http://localhost:10101';

// --- Authentication Routes ---
export async function auth_signup(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {   
        console.error("Signup error:", error);
        return NextResponse.json({ error: 'Failed to signup' }, { status: 500 });
    }
}

export async function auth_login(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: 'Failed to login' }, { status: 500 });
    }
}

export async function auth_send_otp(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/auth/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Send OTP error:", error);
        return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
    }
}

export async function auth_verify_otp(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/auth/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Verify OTP error:", error);
        return NextResponse.json({ error: 'Failed to verify OTP' }, { status: 500 });
    }
}

export async function auth_forgot_password(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/auth/forgot-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Forgot password error:", error);
        return NextResponse.json({ error: 'Failed to request password reset' }, { status: 500 });
    }
}

export async function auth_reset_password(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/auth/reset-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Reset password error:", error);
        return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 });
    }
}

export async function auth_set_address(body: any, req: Request) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/auth/set-address`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Set address error:", error);
        return NextResponse.json({ error: 'Failed to set address' }, { status: 500 });
    }
}

export async function auth_update_profile(body: any, req: Request) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/auth/update-profile`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Update profile error:", error);
        return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
    }
}

export async function auth_delete_user(body: any, req: Request) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/auth/user/delete`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Delete user error:", error);
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}

// --- Lawyers Routes ---
export async function lawyers_GET() {
    try {
        const res = await fetch(`${BACKEND_URL}/lawyers`);
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Get lawyers error:", error);
        return NextResponse.json({ error: 'Failed to get lawyers' }, { status: 500 });
    }
}

export async function lawyers_GET_ID(id: string) {
    try {
        const res = await fetch(`${BACKEND_URL}/lawyers/${id}`);
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Get lawyer by ID error:", error);
        return NextResponse.json({ error: 'Failed to get lawyer by ID' }, { status: 500 });
    }
}

export async function lawyers_me_GET(req: Request) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/lawyers/me`, {
            headers: { 'Authorization': `${token}` },
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Get lawyer profile error:", error);
        return NextResponse.json({ error: 'Failed to get lawyer profile' }, { status: 500 });
    }
}

export async function lawyers_add_POST(body: any, req: Request) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/lawyers/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Add lawyer error:", error);
        return NextResponse.json({ error: 'Failed to add lawyer' }, { status: 500 });
    }
}

export async function lawyers_update_PUT(body: any, req: Request, id: string) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/lawyers/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Update lawyer error:", error);
        return NextResponse.json({ error: 'Failed to update lawyer' }, { status: 500 });
    }
}

export async function lawyers_delete_DELETE(body: any, id: string) {
    try {
        const res = await fetch(`${BACKEND_URL}/lawyers/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Delete lawyer error:", error);
        return NextResponse.json({ error: 'Failed to delete lawyer' }, { status: 500 });
    }
}

export async function lawyers_nearby_POST(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/lawyers/nearby`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Nearby lawyers error:", error);
        return NextResponse.json({ error: 'Failed to find nearby lawyers' }, { status: 500 });
    }
}

export async function lawyers_search_POST(body: any) {
    try {
        const res = await fetch(`${BACKEND_URL}/lawyers/search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Search lawyers error:", error);
        return NextResponse.json({ error: 'Failed to search lawyers' }, { status: 500 });
    }
}


// --- Clients Routes ---
export async function clients_GET_ID(id: string) {
    try {
        const res = await fetch(`${BACKEND_URL}/clients/${id}`);
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Get client by ID error:", error);
        return NextResponse.json({ error: 'Failed to get client by ID' }, { status: 500 });
    }
}

export async function get_req(endpoint:string) {
    const token = parseCookies().token;
    if(!token ) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
             }
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error(`Failed to get req for endpoint ${endpoint}`, error);
        return NextResponse.json({ error: `Failed to get req for endpoint ${endpoint}` }, { status: 500 });
    }
}


export async function put_req(body: any,endpoint:string) {
    const token = parseCookies().token;
    if(!token ) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
             },
             body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error(`Failed PUT req for endpoint ${endpoint}`, error);
        return NextResponse.json({ error: `Failed PUT req for endpoint ${endpoint}` }, { status: 500 });
    }
}
export async function post_req(body: any, endpoint:string) {
    const token = parseCookies().token;
    if(!token ) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const res = await fetch(`${BACKEND_URL}/${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
             },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error(`Failed POST req for endpoint ${endpoint}`, error);
        return NextResponse.json({ error: `Failed POST req for endpoint ${endpoint}` }, { status: 500 });
    }
}


// --- Cases Routes ---
// export async function cases_GET_ID(id: string) {
//     try {
//         const token = req.headers.get('Authorization');
//         const res = await fetch(`${BACKEND_URL}/cases/${id}`, {
//             headers: { 'Authorization': `${token}` },
//         });
//         const data = await res.json();
//         return NextResponse.json(data, { status: res.status });
//     } catch (error) {
//         console.error("Get case by ID error:", error);
//         return NextResponse.json({ error: 'Failed to get case by ID' }, { status: 500 });
//     }
// }

export async function cases_client_POST(body: any, req: Request) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/cases/client`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Create case (client) error:", error);
        return NextResponse.json({ error: 'Failed to create case (client)' }, { status: 500 });
    }
}

export async function cases_lawyer_POST(body: any, req: Request) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/cases/lawyer`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Create case (lawyer) error:", error);
        return NextResponse.json({ error: 'Failed to create case (lawyer)' }, { status: 500 });
    }
}

export async function cases_client_update_PUT(body: any, req: Request, id: string) {
    try {
        const token = req.headers.get('Authorization');
        const res = await fetch(`${BACKEND_URL}/cases/client/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Update case (client) error:", error);
        return NextResponse.json({ error: 'Failed to update case (client)' }, { status: 500 });
    }
}
