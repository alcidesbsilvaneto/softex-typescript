import { User } from "./modules/User/User.model";

async function inicializar() {
  await User.sync();
  const users = await User.findAll();
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(
      user.dataValues.id,
      user.dataValues.name,
      user.dataValues.email
    );
  }
  //const user = await User.create({ name: "John Doe", email: "john@gmail.com" });
}

inicializar();
