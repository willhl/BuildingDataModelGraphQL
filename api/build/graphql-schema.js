"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = undefined;

var _neo4jGraphqlJs = require("neo4j-graphql-js");

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Check for GRAPHQL_SCHEMA environment variable to specify schema file
 * fallback to schema.graphql if GRAPHQL_SCHEMA environment variable is not set
 */

//var tdesf1 = fs.readFileSync(process.env.GRAPHQL_SCHEMA || path.join(__dirname, "schema.graphql")).toString("utf-8");


var typesArray = (0, _mergeGraphqlSchemas.fileLoader)(_path2.default.join(__dirname, './typesEnabled'));
//const typeDefs = mergeTypes(typesArray, { all: true });
//console.log(mergedTypes)
var typeDefs = exports.typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(typesArray, { all: true }).toString("utf-8");