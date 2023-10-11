import { XPathsObject } from "@ts-stack/openapi-spec";

export const login: XPathsObject = {
    "/api/v1/auth/login": {
        post: {
            description: "Logs in a user (returns http-only cookies with the access and refresh tokens).",
            tags: ["Auth"],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            required: ["username", "password"],
                            properties: {
                                username: { type: "string", example: "user1" },
                                password: { type: "string", example: "labas123" }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Log in successful!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", default: "Log in successful!" },
                                },
                            }
                        }
                    }
                },
                "400": {
                    description: "The request body is invalid. Message provided in the response body."
                },
                "401": {
                    description: "Invalid username or password. Please check your credentials and try again."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const register: XPathsObject = {
    "/api/v1/auth/register": {
        post: {
            description: "Registers a user (returns http-only cookies with the access and refresh tokens).",
            tags: ["Auth"],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            required: ["username", "password", "role"],
                            properties: {
                                username: { type: "string", example: "user3" },
                                password: { type: "string", example: "labas123" },
                                role: { type: "string", example: "renter" }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Registration successful!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", default: "Registration successful!" },
                                },
                            }
                        }
                    }
                },
                "400": {
                    description: "The data provided in the request body is invalid. Please check your registration information and try again."
                },
                "409": {
                    description: 'The requested username is already taken. Please choose a different username.'
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const logout: XPathsObject = {
    "/api/v1/auth/logout": {
        delete: {
            description: "Logs out the user (deletes the access and refresh token cookies).",
            tags: ["Auth"],
            responses: {
                "200": {
                    description: "Log out successful!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", default: "Log out successful!" },
                                },
                            }
                        }
                    }
                }
            },
        },
    }
}