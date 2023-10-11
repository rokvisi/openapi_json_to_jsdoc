import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_notes: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}/notes": {
        get: {
            description: "Gets all notes of the room.",
            tags: ["Room Notes by {house_id} and {room_id}"],
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
                    description: "Returns a list of notes in a room.",
                    content: {
                        "application/json": {
                            schema: {
                                type: 'array',
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "number", example: 1 },
                                        note: { type: "string", example: "The lamp doesn't work." },
                                    },
                                }
                            }
                        }
                    }
                },
                "404": {
                    description: "The specified room has no notes."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const post_notes: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}/notes": {
        post: {
            description: "Creates a note for a room (requires to be logged-in as a renter).",
            tags: ["Room Notes by {house_id} and {room_id}"],
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
                            required: ["note"],
                            properties: {
                                note: { type: "string", example: "The lamp doesn't work." },
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Successfully created a note for the room in the house!",
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
                    description: "The specified room does not exist in the specified house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}