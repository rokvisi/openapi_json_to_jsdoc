import { XPathsObject } from "@ts-stack/openapi-spec";

export const get_houses_by_id: XPathsObject = {
    "/api/v1/houses/{id}": {
        get: {
            description: "Gets a single house.",
            tags: ["Houses"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The house ID."
                    }
                }
            ],
            responses: {
                "200": {
                    description: "Gets a single house.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: { type: "string", example: "BAHARİYE ERASMUS HOUSE" },
                                    region: { type: "string", example: "KADIKÖY" },
                                    district: { type: "string", example: "OSMANAĞA" },
                                    location_description: { type: "string", example: "*omitted*" },
                                    wifi_speed: { type: "number", example: 50 },
                                    image_url: { type: "string", example: "https://ghryg4oekbndllfk.public.blob.vercel-storage.com/banner-cIMQn3oWYmBK2lWw1mtF19WSbxc7ec.webp" },
                                },
                            }
                        }
                    }
                },
                "404": {
                    description: "The house with the specified id does not exist."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const patch_houses_by_id: XPathsObject = {
    "/api/v1/houses/{id}": {
        patch: {
            description: "Updates a house listing (requires to be logged-in as a renter that created the house).",
            tags: ["Houses"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The house ID."
                    }
                }
            ],
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            properties: {
                                name: { type: "string", example: "Butas Kaune 1" },
                                region: { type: "string", example: "Kaunas" },
                                district: { type: "string", example: "Šilainiai" },
                                location_description: { type: "string", example: "Arti parduotuvė." },
                                wifi_speed: { type: "integer", example: "20" },
                                image: { type: "string", format: "binary" }
                            }
                        }
                    }
                }
            },
            responses: {
                "200": {
                    description: "Successfully updated the house listing.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    type: { type: "string", example: "success" },
                                    status: { type: "number", example: 200 },
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
                    description: "User was not logged-in as a renter or is not the one that created the specified house."
                },
                "404": {
                    description: "The house with the specified id does not exist."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const delete_houses_by_id: XPathsObject = {
    "/api/v1/houses/{id}": {
        delete: {
            description: "Deletes a house listing (requires to be logged-in as a renter that created the house).",
            tags: ["Houses"],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                        description: "The house ID."
                    }
                }
            ],
            responses: {
                "200": {
                    description: "Successfully deleted the house listing.",
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    message: { type: "string", example: "Successfully deleted house listing." },
                                },
                            }
                        }
                    }
                },
                "401": {
                    description: "User was not logged-in as a renter or is not the one that created the specified house."
                },
                "404": {
                    description: "The house with the specified id does not exist."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}
