'use strict';

const BINARY_OPTIONS = require('../lib/core/jhipster/binary_options'),
    UNARY_OPTIONS = require('../lib/core/jhipster/unary_options'),
    RELATIONSHIP_TYPES = require('../lib/core/jhipster/relationship_types'),
    VALIDATIONS = require('../lib/core/jhipster/validations'),
    JDLReader = require('../lib/reader/jdl_reader'),
    JDLObject = require('../lib/core/jdl_object'),
    JDLEntity = require('../lib/core/jdl_entity'),
    JDLField = require('../lib/core/jdl_field'),
    JDLValidation = require('../lib/core/jdl_validation'),
    JDLEnum = require('../lib/core/jdl_enum'),
    JDLRelationship = require('../lib/core/jdl_relationship'),
    JDLRelationships = require('../lib/core/jdl_relationships'),
    JDLUnaryOption = require('../lib/core/jdl_unary_option'),
    JDLBinaryOption = require('../lib/core/jdl_binary_option');

module.exports = {
  /* JHipster notions */
  JHipsterBinaryOptions: BINARY_OPTIONS,
  JHipsterUnaryOptions: UNARY_OPTIONS,
  JHipsterRelationshipTypes: RELATIONSHIP_TYPES,
  JHipsterValidations: VALIDATIONS,
  /* JDL objects */
  JDLObject: JDLObject,
  JDLEntity: JDLEntity,
  JDLField: JDLField,
  JDLValidation: JDLValidation,
  JDLEnum: JDLEnum,
  JDLRelationship: JDLRelationship,
  JDLRelationships: JDLRelationships,
  JDLUnaryOption: JDLUnaryOption,
  JDLBinaryOption: JDLBinaryOption,
  /* JDL reading */
  parse: JDLReader.read,
  parseFromFiles: JDLReader.readFiles,
  /* JDL utils */
  isJDLFile: JDLReader.checkFileIsJDLFile
};
