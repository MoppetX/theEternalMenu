const User = require('./models/user');
// const Recipe = require('./models/recipe');
// const RecipeService = require('./services/recipe-service');
const UserService = require('./services/user-service');
// let mockRecipes = require('./recipes');


console.log('The Eternal Menu!');
console.log('===========================');

async function main() {
  // const mert = new Person('Mert', 34);
  // const armagan = new Person('Armagan', 35);

  let user1 = new User('Antonia', 'Antonia@mail.com', '1234');
  let user2 = new User('Berta', 'Berta@mail.com', 'qwerty');
  let user3 = new User('Chris Christofferson', 'Chris@mail.com', 'qwertz');

  // let users = [user1, user2, user3];
  // console.log(users);

  // below now works
  // console.log(await UserService.add(user1));
  // no await: returns a promise <pending>

  // TODO: problem seems to lie here
  // users.forEach((user) => UserService.add(user));

  await UserService.add(user1);
  await UserService.add(user2);
  await UserService.add(user3);

  const loadedUsers = await UserService.findAll();
  console.log(loadedUsers);

  // addRecipe
// console.log('======================================');
// console.log(recipe1.versions[0]);
// user1.addRecipe(recipe1.title, recipe1.versions[0]);
// console.log(user1.recipes);

  // const wtmb = new Meetup('Women Techmakers Berlin', 'Wayfair');
  // armagan.attend(wtmb);
  // mert.attend(wtmb);
  // wtmb.report();
  //
  // await PersonService.add(mert);
  // await PersonService.add(armagan);
  //
  // const people = await PersonService.findAll();
  //
  // console.log(people);
  //
  // await MeetupService.add(wtmb);
  //
  // const meetup = await MeetupService.find();
  //
  // meetup.report();
}

main();