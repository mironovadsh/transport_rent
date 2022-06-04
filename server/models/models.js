const sequelize = require('../db')
const {DataTypes, DATE} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type:DataTypes.STRING},
    patronumic: {type:DataTypes.STRING},
    phone: {type:DataTypes.INTEGER},
    email: {type: DataTypes.STRING, unique: true},
    has_drive_lic: {type:DataTypes.BOOLEAN},
    drive_number: {type:DataTypes.DATE, unique: true},
    password: {type:DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    user_photo: {type: DataTypes.STRING},
    vu_photo: {type: DataTypes.STRING},
})

const Rent = sequelize.define('rent', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Rent_TS = sequelize.define('rent_ts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const TS = sequelize.define('rent_ts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allownull: false},
    price: {type:DataTypes.INTEGER, allownull:false},
    territory: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Type_TS = sequelize.define('type_ts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allownull: false},
})

const Brand_TS = sequelize.define('brand_ts', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allownull: false},
})

const TS_info = sequelize.define('ts_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    tittle: {type: DataTypes.STRING, allownull: false},
    description: {type: DataTypes.STRING, allownull: false},
    date: {type:DATE},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

TS.hasMany(TS_info, {as: 'info'});
TS_info.belongsTo(TS)

User.hasOne(Rent)
Rent.belongsTo(User)

Rent.hasMany(Rent_TS)
Rent_TS.belongsTo(Rent)

Type_TS.hasMany(TS)
TS.belongsTo(Type_TS)

Brand_TS.hasMany(TS)
TS.belongsTo(Brand_TS)

TS.hasMany(Rent)
Rent.belongsTo(TS)

Type_TS.belongsToMany(Brand_TS, {through: TypeBrand})
Brand_TS.belongsToMany(Type_TS, {through: TypeBrand})

module.exports = {
    User,
    Rent,
    Rent_TS,
    TS,
    Type_TS,
    Brand_TS,
    TS_info,
    TypeBrand

}