module.exports = {
    "info": {
        "description": "StartDoing API",
        "title": "StartDoing API",
        "version": "1.0.0"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "produces": ["application/json"],
    "schemes": ["http"],
    "securityDefinitions": {
        "JWT": {
            "type": "apiKey",
            "in": "header",
            "name": "Authorization"
        }
    },
    "swagger": "2.0",
    "paths": {
        "/getuser/:_id": {
            "get": {
                "parameters": [{
                    "name": "_id",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string"
                }],
                "description": "Search user by id",
                "tags": ["Users"],
                "responses": {
                    "200": {
                        "description": "Existent user returned",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/users"
                            }
                        }
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "404": {
                        "description": "Students not found!"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            }
        },
        "/login": {
            "post": {
                "parameters": [{
                    "name": "email",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                },
                {
                    "name": "password",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }
                ],
                "description": "User login",
                "tags": ["Users"],
                "responses": {
                    "200": {
                        "description": "Login with success",
                    },
                    "400": {
                        "description": "Not Authorized"
                    },
                    "401": {
                        "description": "Not Authorized"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            },

        },
        "/register": {
            "post": {
                "parameters": [{
                    "name": "name",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }, {
                    "name": "email",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }, {
                    "name": "password",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }, {
                    "name": "heigth",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "number"
                }, {
                    "name": "birth",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "Date"
                }, {
                    "name": "weight",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "number"
                }, {
                    "name": "photoUrl",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }],
                "description": "Register users",
                "tags": ["Users"],
                "responses": {
                    "200": {
                        "description": "Registered User"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "406": {
                        "description": "Duplicated User"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            }
        },
        "/users": {
            "post": {
                "parameters": [{
                    "name": "email",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"

                }],
                "description": "Check if email is already in use",
                "tags": ["Users"],
                "responses": {
                    "200": {
                        "description": "Available email for use"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "406": {
                        "description": "This email is already in use"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            }
        },
        "/recoverpassword/:email": {
            "post": {
                "parameters": [{
                    "name": "email",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string"

                }],
                "description": "Reset user password",
                "tags": ["Users"],
                "responses": {
                    "200": {
                        "description": "Password reseted"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "404": {
                        "description": "Email not found"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            }
        },
        "/update/:_id": {
            "post": {
                "parameters": [{
                    "name": "_id",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "weight",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "number",


                },
                {
                    "name": "height",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "number",
                }],
                "description": "Update user details",
                "tags": ["Users"],
                "responses": {
                    "200": {
                        "description": "Password reseted"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "404": {
                        "description": "Not found"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            }
        },

        "/exercises": {
            "post": {
                "parameters": [{
                    "name": "exerciseName",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "category",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string",


                },
                {
                    "name": "videoUrl",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "duration",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "number",
                }],
                "description": "Create exercises",
                "tags": ["Exercises"],
                "responses": {
                    "200": {
                        "description": "Exercise created"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },

                },
                "security": [{
                    "JWT": []
                }]
            },
            "get": {
                "description": "Get all exercises",
                "tags": ["Exercises"],
                "responses": {
                    "200": {
                        "description": "Success"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },

                },
                "security": [{
                    "JWT": []
                }]
            }
        },

        "/exercises/category/:category": {
            "get": {
                "parameters": [{
                    "name": "category",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string",
                }],
                "description": "Get exercises by category",
                "tags": ["Exercises"],
                "responses": {
                    "200": {
                        "description": "Success"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },

                },
                "security": [{
                    "JWT": []
                }]
            }
        },

        "/exercises/:_id": {
            "get": {
                "parameters": [{
                    "name": "_id",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string",
                }],
                "description": "Get exercise by id",
                "tags": ["Exercises"],
                "responses": {
                    "200": {
                        "description": "Success"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },

                },
                "security": [{
                    "JWT": []
                }]
            }
        },

        "/sql/students/:id": {
            "get": {
                "parameters": [{
                    "name": "id",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string"
                }],
                "description": "",
                "tags": ["SQL | Students"],
                "responses": {
                    "200": {
                        "description": "Student found",
                        "schema": {
                            "$ref": "#/definitions/StudentsMONGO"
                        }
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "404": {
                        "description": "Student not found!"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            },
            "delete": {
                "parameters": [{
                    "name": "id",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string"
                }],
                "description": "",
                "tags": ["SQL | Students"],
                "responses": {
                    "200": {
                        "description": "Student deleted!"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "404": {
                        "description": "Student not found!"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            },
            "put": {
                "parameters": [{
                    "name": "id",
                    "in": "params",
                    "description": null,
                    "required": true,
                    "type": "string"
                }, {
                    "name": "name",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }, {
                    "name": "email",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }, {
                    "name": "password",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                }, {
                    "name": "regime",
                    "in": "body",
                    "description": null,
                    "required": false
                }, {
                    "name": "number",
                    "in": "body",
                    "description": null,
                    "required": false,
                    "type": "number"
                }, {
                    "name": "register_date",
                    "in": "body",
                    "description": null,
                    "required": false,
                    "type": "Date"
                }, {
                    "name": "favorite_color",
                    "in": "body",
                    "description": null,
                    "required": false,
                    "type": "string"
                }],
                "description": "",
                "tags": ["SQL | Students"],
                "responses": {
                    "200": {
                        "description": "Student updated"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },
                    "404": {
                        "description": "Student not found!"
                    }
                },
                "security": [{
                    "JWT": []
                }]
            }
        }
    },
    "definitions": {
        "users": {
            "required": ["name", "email"],
            "properties": {
                "_id": {
                    "type": "string",
                    "description": "_id ",
                    "example": "5fa1e02bb50c63049c5f0a1a"
                },
                "name": {
                    "type": "string",
                    "description": "name ",
                    "example": "John"
                },
                "email": {
                    "type": "string",
                    "description": "email ",
                    "example": "4010123@esmad.ipp.pt"
                },
                "password": {
                    "type": "string",
                    "description": "password ",
                    "example": "123sdhb45a6asd78"
                },
                " height": {
                    "type": "number",
                    "description": " height ",
                    "example": "185"
                },
                "birth": {
                    "type": "date",
                    "description": "birth ",
                    "example": "1990-10-11"
                },
                "weight": {
                    "type": "number",
                    "description": "weight ",
                    "example": "70"
                },
                "photoUrl": {
                    "type": "string",
                    "description": "photoUrl ",
                    "example": "https://firebasestorage.googleapis.com/v0/b/startdoing-bd1bc.appspot.com/o/person.jpg?alt=media&token=d201079f-9035-4f11-9421-58d1e9293359"
                }
            },
            "allOf": [{
                "$ref": "#/definitions/Object"
            }]
        },
        "StudentsSQL": {
            "required": ["name", "email"],
            "properties": {
                "id": {
                    "type": "string",
                    "description": "id ",
                    "example": "1"
                },
                "name": {
                    "type": "string",
                    "description": "name ",
                    "example": "John"
                },
                "email": {
                    "type": "string",
                    "description": "email ",
                    "example": "4010123@esmad.ipp.pt"
                },
                "password": {
                    "type": "string",
                    "description": "password ",
                    "example": "123sdhb45a6asd78"
                },
                "favorite_color": {
                    "type": "string",
                    "description": "favorite_color ",
                    "example": "#ffffff"
                },
                "number": {
                    "type": "number",
                    "description": "number ",
                    "example": "4010123"
                },
                "createdAt": {
                    "type": "Date",
                    "description": "createdAt ",
                    "example": "2020-01-01"
                },
                "updatedAt": {
                    "type": "Date",
                    "description": "updatedAt ",
                    "example": "2020-01-01"
                },
                "regime": {
                    "type": "string",
                    "description": "regime ",
                    "enum": ["PL", "DR"]
                }
            }
        }
    },
    "responses": {},
    "parameters": {},
    "tags": [{
        "name": "Users",
        "description": ""
    },

    {
        "name": "Exercises",
        "description": ""
    },
    {
        "name": "SQL | Students",
        "description": ""
    }]




}