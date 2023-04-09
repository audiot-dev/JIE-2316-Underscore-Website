declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FAUNA_SECRET_KEY: string;
            ADMIN_ROOT_PASSWORD: string;
            JWT_TOKEN_SIGNATURE: string;
            BASE_URL: string;
            NEXT_PUBLIC_CAPTCHA_SITE_KEY: string;
            CAPTCHA_SECRET_KEY: string;
        }
    }
}

export {}