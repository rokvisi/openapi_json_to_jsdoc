import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_common_areas: XPathsObject = {
    "/api/v1/houses/{house_id}/common-areas": {
        get: {
            description: "Gets all common areas of the house.",
            tags: ["Common Areas by {house_id}"],
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
                    description: "Returns a list of common areas in a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: 'array',
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "number", example: 1 },
                                        name: { type: "string", example: "Kitchen" },
                                    },
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: 'The specified house has no common areas.'
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const post_common_areas: XPathsObject = {
    "/api/v1/houses/{house_id}/common-areas": {
        post: {
            description: "Creates a common area for a house.",
            tags: ["Common Areas by {house_id}"],
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
                            required: ["name"],
                            properties: {
                                name: { type: "string", example: "Kitchen" },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Successfully created a common area for the house!",
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