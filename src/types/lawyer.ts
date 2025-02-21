export interface Lawyer {
    lawyer_id: number; // SERIAL PRIMARY KEY, NOT NULL
    user_id: number; // INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE, NOT NULL
    specialization?: string | null; // VARCHAR(255), can be null
    bar_number?: string | null; // VARCHAR(100) UNIQUE, can be null
    biography?: string | null; // TEXT, can be null
    rating?: number | null; // DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5), can be null
    location?: string | null; // VARCHAR(255), can be null
    practice_areas?: string | null; // TEXT, can be null (consider if you want to parse this into an array of strings on the frontend)
    profile_picture_url?: string | null; // VARCHAR(255), can be null
    office_contact_number?: string | null; // VARCHAR(20), can be null
    latitude?: number | null; // DECIMAL, can be null
    longitude?: number | null; // DECIMAL, can be null
    nid?: string | null; // TEXT, can be null
    fees?: number | null; // DECIMAL, can be null
    experience?: number | null; // INTEGER, can be null
  
    // Fields from the users table that you are likely to fetch in your query (based on your backend code)
    first_name?: string | null;
    last_name?: string | null;
    email?: string | null;
    phone_number?: string | null;
    username?: string | null; 
    // profile_picture_url?: string | null; // You already have this above, might be redundant depending on your use case. Could be user's profile picture.
  }