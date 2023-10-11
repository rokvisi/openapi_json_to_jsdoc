import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_house_notes: XPathsObject = {
    "/api/v1/houses/{house_id}/notes": {
        get: {
            description: "Gets all notes of the house.",
            tags: ["House Notes by {house_id}"],
            parameters: [
                {
                    in: "path",
                    name: "house_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The house ID."
                    }
                },
                {
                    in: "query",
                    name: "offset",
                    description: "The number of notes to skip.",
                    schema: {
                        type: "integer",
                        default: 0
                    },
                },
                {
                    in: "query",
                    name: "limit",
                    description: "The numbers of notes to return.",
                    schema: {
                        type: "integer",
                        default: 10
                    },
                }
            ],
            responses: {
                "200": {
                    description: "Returns a list of notes in a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: 'array',
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "number", example: 1 },
                                        note: { type: "string", example: "The front door doesn't work." },
                                    },
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "The specified house has no notes."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const post_house_notes: XPathsObject = {
    "/api/v1/houses/{house_id}/notes": {
        post: {
            description: "Creates a note for a house.",
            tags: ["House Notes by {house_id}"],
            parameters: [
                {
                    in: "path",
                    name: "house_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The house ID."
                    }
                },
            ],
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            required: ["note"],
                            properties: {
                                note: { type: "string", example: "The front door doesn't work." },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Successfully created a note for the house!",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    type: { type: "string", default: "success" },
                                    status: { type: "number", default: 200 },
                                    data: { type: "string", example: "*omitted*" },
                                },
                            }
                        }
                    }
                },
                "400": {
                    description: "The request formData is invalid. Please check your data and try again."
                },
                "401": {
                    description: "User not logged-in or the specified house was created by a different renter."
                },
                "404": {
                    description: "The specified house does not exist."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}