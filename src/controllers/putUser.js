const { tblUsers } = require("../DB_connection.js");

const putUser = async (user) => {
  const { PK_User, Name, Image, UserType} = user;
 

  try {
    // Buscar el usuario en la tabla tblUsers
    let foundUser = await tblUsers.findOne({
      where: {
        PK_User: PK_User,
      },
    });

    // Si no se encuentra el usuario, devolver un mensaje de error
    if (!foundUser) {
      return `El usuario con ID ${PK_User} no existe`;
    }

    // Actualizar los datos del usuario con los valores proporcionados en user
    foundUser.Name = Name || foundUser.Name;
    foundUser.Image = Image || foundUser.Image;
    foundUser.UserType = UserType || foundUser.UserType;

    // Guardar los cambios en la base de datos
    await foundUser.save();

    // Devolver el usuario actualizado
    return foundUser;
  } catch (error) {
    // Devolver un mensaje de error si hay algún problema
    return error.message;
  }
};

module.exports = putUser;