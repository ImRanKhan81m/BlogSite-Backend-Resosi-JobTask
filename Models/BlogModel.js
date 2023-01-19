const mongoose = require("mongoose");
const validator = require("validator");

const blogSchema = mongoose.Schema(
    {
        image: {
            type: String,
        },
        tags: {
            type: Array,
            items: [
                {
                    type: Object,
                    properties: {
                        name: {
                            type: String
                        }
                    }
                }
            ]
        },  
        user: {
            type: Object,
            properties: {
                fullName: {
                    type: String
                },
                nickName: {
                    type: String
                },
                email: {
                    type: String
                },
                gender: {
                    type: String
                },
                avatar: {
                    type: String
                },
                bio: {
                    type: String
                }
            }
        },
        type: {
            type: String
        },
        title: {
            type: String
        },
        publicDate: {
            type: Date,
            default: Date.now
        },
        isTrending: {
            type: Boolean
        },
        category: {
            type: Object,
            properties: {
                name: {
                    type: String
                },
                key: {
                    type: String
                },
                quantity: {
                    type: Number
                },
                image: {
                    type: String
                }
            }
        },
        description: {
            type: String
        },
        comments: {
            type: Array,
            items: [
                {
                    type: Object,
                    properties: {
                        publicDate: {
                            type: Date,
                            default: Date.now
                        },
                        favourite: {
                            type: Number
                        },
                        shared: {
                            type: Number
                        },
                        content: {
                            type: String
                        },
                        user: {
                            type: Object,
                            properties: {
                                name: {
                                    type: String
                                },
                                avatar: {
                                    type: String
                                }
                            },
                        },
                        replies: {
                            type: Array,
                            items: [
                                {
                                    type: Object,
                                    properties: {
                                        user: {
                                            type: Object,
                                            properties: {
                                                name: {
                                                    type: String
                                                },
                                                avatar: {
                                                    type: String
                                                }
                                            },
                                        },
                                        publicDate: {
                                            type: Date,
                                            default: Date.now
                                        },
                                        favourite: {
                                            type: Number
                                        },
                                        shared: {
                                            type: Number
                                        },
                                        content: {
                                            type: String
                                        }
                                    }
                                }
                            ]
                        }
                    },
                },
            ]
        }
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
