import { XPathsObject } from "@ts-stack/openapi-spec";

export const login: XPathsObject = {
    "/api/v1/auth/login": {
        post: {
            description: "Logs in a user (returns an http-only cookie with the auth token).",
            tags: ["Auth"],
            responses: {
                "200": {
                    description: "Login successful!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", example: "Login successful!" },
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
            }
        }
    }
}