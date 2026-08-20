CREATE TABLE support_tasks(
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(150) NOT NULL,
    password_hash TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'open' CHECK (status IN('open','in_progress','reserved')),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
);