/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('medicamentos', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    presentacion: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    via: {
      type: DataTypes.ENUM('Oral','Intramuscular','Intravenosa','Subcutánea','Inhalatoria','Transdérmica','Nasal','Oftálmica','Ótica','Tópica','Rectal','Vaginal'),
      allowNull: false
    },
    concentracion: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    fraccion: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    distintivo: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    registro_sanitario: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    titular: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    situacion: {
      type: DataTypes.ENUM('Prorrogado','En evaluación'),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(512),
      allowNull: false
    }
  }, {
    tableName: 'medicamentos'
  });
};


