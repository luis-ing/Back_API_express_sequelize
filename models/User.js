module.exports = (sequalize, DataTypes) => {
    const User = sequalize.define('Persona', {
        id_user: {
            type: DataTypes.INTERGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url_img: {
            type: DataTypes.STRING,
            allowNull: false
        },
        create_time: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    return User;
}