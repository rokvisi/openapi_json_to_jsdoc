import { XPathsObject } from "@ts-stack/openapi-spec";

export const logout: XPathsObject = {
    "/api/v1/auth/logout": {
        post: {
            description: "Deletes the user auth token cookie.",
            tags: ["Auth"],
            responses: {
                "200": {
                    description: "Log out successful!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", example: "Log out successful!" },
                                },
                            }
                        }
                    }
                }
            },
        },
    }
}