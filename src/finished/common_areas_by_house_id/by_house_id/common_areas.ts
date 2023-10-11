import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_common_areas_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/common-areas/{area_id}": {
        get: {
            description: "Gets a common area of a house.",
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
                    in: "path",
                    name: "area_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The common area ID."
                    }
                },
            ],
            responses: {
                "200": {
                    description: "Gets a common area of a house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    id: { type: "number", example: 1 },
                                    name: { type: "string", example: "Kitchen." },
                                },
                            }
                        }
                    }
                },
                "404": {
                    description: "The common area with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const patch_common_areas_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/common-areas/{area_id}": {
        patch: {
            description: "Updates a common area of a house. (requires to be logged-in as a renter)",
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
                    in: "path",
                    name: "area_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The common area ID."
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
                                name: { type: "string", example: "Kitchen." },
                            },
                        },
                    }
                },
            },
            responses: {
                "200": {
                    description: "Updated a common area of a house.",
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
                    description: "User not logged-in or the specified common area of the house was created by a different renter."
                },
                "404": {
                    description: "The common area with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const delete_common_areas_by_id: XPathsObject = {
    "/api/v1/houses/{house_id}/common-areas/{area_id}": {
        delete: {
            description: "Deletes a common area of a house. (requires to be logged-in as a renter)",
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
                    in: "path",
                    name: "area_id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The common area ID."
                    }
                },
            ],
            responses: {
                "200": {
                    description: "Deleted the common area of the house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", default: "Successfully deleted the common area of the house." },
                                },
                            }
                        }
                    }
                },
                "401": {
                    description: "User not logged-in or the specified common area of the house was created by a different renter."
                },
                "404": {
                    description: "The common area with the specified id does not exist in the house."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}