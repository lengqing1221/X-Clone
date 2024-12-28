import { NextResponse, NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

export const getTokenData = (res: NextResponse, req: NextRequest) => {
    try {
        const token = req.cookies.get('token')?.value
        return token ? jwt.decode(token) : null        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

}