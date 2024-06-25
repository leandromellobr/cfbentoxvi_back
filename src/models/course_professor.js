// .../src/models/course_professor.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./course');
const Professor = require('./professor');

const CourseProfessor = sequelize.define('CourseProfessor', {
    courseId: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        }
    },
    professorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Professor,
            key: 'id'
        }
    },
}, {
    timestamps: false,
});

Course.belongsToMany(Professor, { through: CourseProfessor });
Professor.belongsToMany(Course, { through: CourseProfessor });

module.exports = CourseProfessor;
