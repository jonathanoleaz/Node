var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// Se define el esquema de GraphQL con sus queries, mutaciones y objetos que puede devolver
//mutaciones para modificar 
//queries: para devolver datos
var schema = buildSchema(`
    type Query {        
        course(id: Int!): Course
        courses(topic: String): [Course]
    },
    type Mutation {     
        updateCourseTopic(id: Int!, topic: String!): Course
    }
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

var coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

var getCourse = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        return course.id == id;
    })[0];
}

var getCourses = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

var updateCourseTopic = function({id, topic}) {
    coursesData.map(course => {
        if (course.id === id) {
            course.topic = topic;
            return course;
        }
    });
    return coursesData.filter(course => course.id === id) [0];
}
//Aquí se ligan las operaciones declaradas en el schema con las funciones en donde se define la lógica
var root = {
    course: getCourse,
    courses: getCourses,
    coursesPaginados: getCourses,
    updateCourseTopic: updateCourseTopic
};

//Se crea el server express y el endpoint GraphQL
var app = express();
app.use('/endpointGraphQL', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));


/** 
 ::::::::::::::::::::Ejemplos de como mandar la petición:::::::::::::::
 %  Cambiar el tema de un curso dado el id %
            mutation updateCourseTopic($id: Int!, $topic: String!) {
            updateCourseTopic(id: $id, topic: $topic) {
                ...courseFields
            }
            }

            fragment courseFields on Course {
            author
            description
            topic
            url
            }

        % Variables de la query%
            {
            "id": 1,
            "topic": "JavaScript"
            }

% Mas de una consulta%
            query getCourseWithFragments($courseID1: Int!, $courseID2: Int!) {
                course1: course(id: $courseID1) {
                        ...courseFields
                },
                course2: course(id: $courseID2) {
                        ...courseFields
                } 
            }

            fragment courseFields on Course 
            {
                title
                author
                description
                topic
                url
            }
        % Variables de la query%
            {
                "courseID1":1,
                "courseID2":2
            }

% Consulta de id y title de todos los cursos%
            {courses{
                id,
                title
                }
            }

% Consulta de algunos atributos de curso dado su id%
            query getSingleCourse($courseID: Int!) {
                course(id: $courseID) {
                    title
                    author
                }
            }
        % Variables de la query%
            {
                "courseID":3
            }

 */