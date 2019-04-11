const farmAnimals = 'cow horse sheep pig chicken'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};


const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ")

const [Bessie, , Dolly, Babe, Little] = farmAnimals.split(" ")

const [black_and_white, , black, pink,] = farmAnimals.split(" ")

const [red, orange, yellow, green, blue, indigo, violet] = colors

const [r, o, y, g, b, , v] = colors

const [, , , , , indg,] = colors

const {name, color, song, job, partner} = muppet

const song_2 = k_muppet.k_album.the_muppet_movie.song_2

const song_4 = k_muppet.k_album.the_muppet_movie.song_4

const k_job = k_muppet.k_job
const k_partner = k_muppet.k_partner
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
