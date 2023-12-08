import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///animals');

export class Human extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }

  getFullName() {
  //TODO
  }
}

Human.init(
  {
    humanId: {
      type: DataTypes.integer,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }
)

export class Animal extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Animal.init(
  {
    animalId: {
      type: DataTypes.integer,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    species: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    birthYear: {
      type: DataTypes.INTEGER
    }
  }
)

// Define Relationship
Human.hasMany(Animal, {foreignKey: 'humanId'})
Animal.belongTo(Human, {foreignKey: 'humanId'})

export default {Human, Animal};
