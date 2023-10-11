import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_rooms_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}": {
        get: {
            description: "Gets a room in a house.",
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
                    in: "path",
                    name: "room_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The room ID."
                    }
                },
            ],
            responses: {
                "200": {
                    description: "Gets a room in a house.",
                    content: {
                        "application/json": {
                            schema: {
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
                },
                "404": {
                    description: "The room with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const patch_rooms_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}": {
        patch: {
            description: "Updates a room in a house. (requires to be logged-in as a renter)",
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
                    in: "path",
                    name: "room_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The room ID."
                    }
                },
            ],
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            properties: {
                                number: { type: "string", example: "1" },
                                price: { type: "integer", example: "325" },
                                description: { type: "string", example: "Invoices are included. There is a double bed, wardrobe, desk, chair and lampshade." },
                            },
                        },
                    }
                },
            },
            responses: {
                "200": {
                    description: "Updated a room in a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    type: { type: "string", default: "success" },
                                    status: { type: "number", default: 200 },
                                    data: { type: "string", default: "*omitted*" },
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
                    description: "The room with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const delete_rooms_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}": {
        delete: {
            description: "Deletes a room in a house. (requires to be logged-in as a renter)",
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
                    in: "path",
                    name: "room_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The room ID."
                    }
                },
            ],
            responses: {
                "200": {
                    description: "Deleted a room in a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", default: "Successfully deleted the room listing." },
                                },
                            }
                        }
                    }
                },
                "401": {
                    description: "User not logged-in or the specified room was created by a different renter."
                },
                "404": {
                    description: "The room with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}