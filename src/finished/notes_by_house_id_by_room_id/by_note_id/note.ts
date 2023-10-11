import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_notes_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}/notes/{note_id}": {
        get: {
            description: "Gets a note in a room of a house.",
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
                    in: "path",
                    name: "note_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The note ID."
                    }
                },
            ],
            responses: {
                "200": {
                    description: "Gets a note in a room of a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "number", example: 1 },
                                    note: { type: "string", example: "The lamp doesn't work." },
                                },
                            }
                        }
                    }
                },
                "404": {
                    description: "The note with the specified id does not exist in the room of the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const patch_notes_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}/notes/{note_id}": {
        patch: {
            description: "Updates a note in a room of a house. (requires to be logged-in as a renter)",
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
                    in: "path",
                    name: "note_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The note ID."
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
                            },
                        },
                    }
                },
            },
            responses: {
                "200": {
                    description: "Updated a note in a room of a house.",
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
                    description: "User not logged-in or the specified note in a room of a house was created by a different renter."
                },
                "404": {
                    description: "The note with the specified id does not exist in the room of the the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const delete_notes_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/rooms/{room_id}/notes/{note_id}": {
        delete: {
            description: "Deletes a note in a room of a house. (requires to be logged-in as a renter)",
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
                    in: "path",
                    name: "note_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The note ID."
                    }
                },
            ],
            responses: {
                "200": {
                    description: "Deleted the note of the room in the house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", default: "Successfully deleted the note of the room in the house." },
                                },
                            }
                        }
                    }
                },
                "401": {
                    description: "User not logged-in or the specified note of the room in the house was created by a different renter."
                },
                "404": {
                    description: "The note with the specified id does not exist in the room of the the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}