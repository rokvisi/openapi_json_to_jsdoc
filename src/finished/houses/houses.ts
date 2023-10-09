import { XPathsObject } from "@ts-stack/openapi-spec";

export const post_houses: XPathsObject = {
    "/api/v1/houses": {
        post: {
            description: "Creates a house listing (requires to be logged-in as a renter)",
            tags: ["Houses"],
            responses: {
                "200": {
                    description: "Successfully created listing!",
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
                "401": {
                    description: "Only renters can create houses. Please login."
                },
                "400": {
                    description: "The request formData is invalid. Please check your data and try again."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            required: ["name", "region", "district", "location_description", "wifi_speed", "image"],
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
            }
        }
    }
}

export const get_houses: XPathsObject = {
    "/api/v1/houses": {
        get: {
            description: "Gets all house listings",
            tags: ["Houses"],
            responses: {
                "200": {
                    description: "Returns a list of houses.",
                    content: {
                        "application/json": {
                            schema: {
                                type: 'array',
                                items: {
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
                    }
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
            parameters: [
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
            ]
        }
    }
}

export const put_houses: XPathsObject = {
    "/api/v1/houses": {
        put: {
            description: "Update a house listing.",
            tags: ["Houses"],
            responses: {
                "200": {
                    description: "Updated successfully!",
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
        }
    }
}

export const delete_houses: XPathsObject = {
    "/api/v1/houses": {
        delete: {
            description: "Deletes a house listing (requires to be logged-in as a renter)",
            tags: ["Houses"],
            responses: {
                "200": {
                    description: "Successfully deleted listing!",
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
                "401": {
                    description: "User was not logged-in as a renter or is not the one that created the specified house."
                },
                "404": {
                    description: "The house with the specified id does not exist."
                },
                "400": {
                    description: "The request formData is invalid. Please check your data and try again."
                },
                "503": {
                    description: "Sorry, we are currently experiencing technical difficulties. Please try again later."
                }
            },
            requestBody: {
                content: {
                    "multipart/form-data": {
                        schema: {
                            type: "object",
                            required: ["id"],
                            properties: {
                                id: { type: "integer", example: "1" },
                            }
                        }
                    }
                }
            }
        }
    }
}
