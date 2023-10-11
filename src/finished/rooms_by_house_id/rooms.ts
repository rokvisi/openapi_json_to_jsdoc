import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_rooms: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms": {
        get: {
            description: "Gets all rooms in the house.",
            tags: ["Rooms by house id"],
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
                    description: "The number of houses to skip.",
                    schema: {
                        type: "integer",
                        default: 0
                    },
                },
                {
                    in: "query",
                    name: "limit",
                    description: "The numbers of houses to return",
                    schema: {
                        type: "integer",
                        default: 10
                    },
                }
            ],
            responses: {
                "200": {
                    description: "Returns a list of rooms in a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: 'array',
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "number", example: 1 },
                                        number: { type: "number", example: 1 },
                                        description: { type: "string", example: "Invoices are included. There is a double bed, wardrobe, desk, chair and lampshade." },
                                        price: { type: "number", example: 325 },
                                    },
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "The specified house has no rooms."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const post_rooms: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms": {
        post: {
            description: "Creates a room listing in a house (requires to be logged-in as a renter).",
            tags: ["Rooms by house id"],
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
                            required: ["number", "price", "description"],
                            properties: {
                                number: { type: "string", example: "1" },
                                price: { type: "integer", example: "325" },
                                description: { type: "string", example: "Invoices are included. There is a double bed, wardrobe, desk, chair and lampshade." },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Successfully created listing!",
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
                    description: "User not logged-in or the specified room was created by a different renter."
                },
                "404": {
                    description: "The specified house does not exist."
                },
                "409": {
                    description: "The requested room number is already taken. Please choose a different room number."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}