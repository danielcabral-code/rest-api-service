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
        "/getuser/{_id}": {
            "get": {
                "parameters": [{
                    "name": "_id",
                    "in": "path",
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
                            "$ref": "#components/schemas/users"
                        },

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
        "/update/{_id}": {
            "post": {
                "parameters": [{
                    "name": "_id",
                    "in": "path",
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

        "/exercises/category/{category}": {
            "get": {
                "parameters": [{
                    "name": "category",
                    "in": "path",
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

        "/exercises/{_id}": {
            "get": {
                "parameters": [{
                    "name": "_id",
                    "in": "path",
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

        "/exercises/category/{category}": {
            "get": {
                "parameters": [{
                    "name": "category",
                    "in": "path",
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

        "/user_plans": {
            "post": {
                "parameters": [{
                    "name": "plan_name",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "user_id",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "exercises",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/ArrayOfExercises"
                    }
                }],
                "description": "Create new user plan",
                "tags": ["User Plans"],
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
        "/user_plans/{_id}": {
            "get": {
                "parameters": [{
                    "name": "_id",
                    "in": "path",
                    "description": null,
                    "required": true,
                    "type": "string",
                }],
                "description": "Get plans by user id",
                "tags": ["User Plans"],
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
            },
            "delete": {
                "parameters": [{
                    "name": "id",
                    "in": "path",
                    "description": null,
                    "required": true,
                    "type": "string"
                }],
                "description": " Delete plan",
                "tags": ["User Plans"],
                "responses": {
                    "200": {
                        "description": "Plan deleted!"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },

                },
                "security": [{
                    "JWT": []
                }]
            },
            "put": {
                "parameters": [{
                    "name": "id",
                    "in": "path",
                    "description": null,
                    "required": true,
                    "type": "string"
                },
                {
                    "name": "plan_name",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "string"
                },
                {
                    "name": "exercises",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/ArrayOfExercises"
                    }
                }],
                "description": "Update user plan",
                "tags": ["User Plans"],
                "responses": {
                    "200": {
                        "description": "Plan deleted!"
                    },
                    "400": {
                        "description": "Unexpected error"
                    },

                },
                "security": [{
                    "JWT": []
                }]
            },
        },
        "/user_plans/plan/{_id}": {
            "get": {
                "parameters": [{
                    "name": "_id",
                    "in": "path",
                    "description": null,
                    "required": true,
                    "type": "string",
                }],
                "description": "Get plans by id",
                "tags": ["User Plans"],
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

        "/default_plans": {
            "post": {
                "parameters": [{
                    "name": "maxAge",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "type": "number",
                },
                {
                    "name": "exercises",
                    "in": "body",
                    "description": null,
                    "required": true,
                    "schema": {
                        "$ref": "#/definitions/ArrayOfExercisesDefaultPlan"
                    }
                }],
                "description": "Create default plans",
                "tags": ["Default Plans"],
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
        "/default_plans/getdefault/{maxAge}": {
            "get": {
                "parameters": [{
                    "name": "maxAge",
                    "in": "path",
                    "description": null,
                    "required": true,
                    "type": "number",
                }],
                "description": "Get default plans by max age (30 , 40, 50 ,60)",
                "tags": ["Default Plans"],
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


    },
    "definitions": {
        "Users": {
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

        },
        "Exercises": {
            "properties": {
                "_id": {
                    "type": "string",
                    "description": "_id ",
                    "example": "5fa1e02bb50c63049c5f0a1a"
                },
                "category": {
                    "type": "string",
                    "description": "category ",
                    "example": "CHEST"
                },
                "videoUrl": {
                    "type": "string",
                    "description": "videoUrl ",
                    "example": "https://firebasestorage.googleapis.com/v0/b/startdoing-bd1bc.appspot.com/o/CHEST%20-%20INCLINE%20PUSH%20UP%20-%20ov40.png?alt=media&token=bbb87509-4dd5-4bfe-b687-45751ee393af"
                },
                "duration": {
                    "type": "number",
                    "description": "duration ",
                    "example": "40"
                },

            },

        },
        "ArrayOfExercises": {
            "type": "array",
            "items": {
                "type": "object",
                "required": [
                    "exercise_id",
                    "exercise_duration"
                ],
                "properties": {
                    "exercise_id": {
                        "type": "string"
                    },
                    "exercise_duration": {
                        "type": "number"
                    }
                }
            }
        },

        "ArrayOfExercisesDefaultPlan": {
            "type": "array",
            "items": {
                "type": "object",
                "required": [
                    "exercise_id",

                ],
                "properties": {
                    "exercise_id": {
                        "type": "string"
                    },

                }
            }
        },

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
        "name": "User Plans",
        "description": ""
    },
    {
        "name": "Default Plans",
        "description": ""
    }]




}