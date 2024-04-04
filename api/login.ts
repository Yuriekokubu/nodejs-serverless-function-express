import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    // Assuming you receive username and password in the request body
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Authenticate the user (this is a simplified example, you would typically validate credentials against a database)
    if (username === 'admin' && password === 'password') {
        // Generate a token for the authenticated user (this is a simplified example, you would typically use a library like JWT)
        const token = 'your_generated_token_here';

        // Return the token to the client
        return res.status(200).json({ token });
    } else {
        // If authentication fails, return an error message
        return res.status(401).json({ message: 'Invalid username or password' });
    }
}