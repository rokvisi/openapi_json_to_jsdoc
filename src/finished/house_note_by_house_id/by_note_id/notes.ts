import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_house_notes_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/notes/{note_id}": {
        get: {
            description: "Gets a note of a house.",
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
                    description: "Gets a note of a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "number", example: 1 },
                                    note: { type: "string", example: "The front door doesn't work." },
                                },
                            }
                        }
                    }
                },
                "404": {
                    description: "The note with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const patch_house_notes_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/notes/{note_id}": {
        patch: {
            description: "Updates a note of a house. (requires to be logged-in as a renter)",
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
                                note: { type: "string", example: "The front door doesn't work." },
                            },
                        },
                    }
                },
            },
            responses: {
                "200": {
                    description: "Updated a note of a house.",
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
                    description: "User not logged-in or the specified note of the house was created by a different renter."
                },
                "404": {
                    description: "The note with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const delete_house_notes_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/notes/{note_id}": {
        delete: {
            description: "Deletes a note of a house. (requires to be logged-in as a renter)",
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
                    description: "Deleted the note of the house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", default: "Successfully deleted the note of the house." },
                                },
                            }
                        }
                    }
                },
                "401": {
                    description: "User not logged-in or the specified note of the house was created by a different renter."
                },
                "404": {
                    description: "The note with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}