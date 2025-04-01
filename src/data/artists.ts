
export interface Artist {
  name: string;
  image: string;
  bio: string;
  day?: string;
}

export const artistsData: Record<string, Artist> = {
  "TAME IMPALA": {
    name: "TAME IMPALA",
    image: "https://i.scdn.co/image/ab6761610000e5ebadb1580e2d7bd286ca33bda1",
    bio: "Tame Impala (Kevin Parker) is an Australian <span style='text-decoration: underline;'>psychedelic</span> music project founded by <span style='text-decoration: underline;'>Kevin Parker</span> in <span style='text-decoration: underline;'>Perth</span> in 2007. Kevin Parker, as frontman, writes, records, performs, and produces all of the project's music. As a touring act, Tame Impala consists of Parker, Dominic Simper, Jay Watson, Cam Avery, and Julien Barbagallo. Parker's music is heavily influenced by late 1960s and early 1970s psychedelic rock.",
  },
  "KING GIZZARD & THE LIZARD WIZARD": {
    name: "KING GIZZARD & THE LIZARD WIZARD",
    image: "https://i.scdn.co/image/ab6761610000e5eb5911bc4fd56516e6114ae15d",
    bio: "King Gizzard &amp; the Lizard Wizard (KGLW) are an Australian <span style='text-decoration: underline;'>rock</span> band formed in 2010 in <span style='text-decoration: underline;'>Melbourne, Victoria</span>. <span style='text-decoration: underline;'>[1][2]</span> The band's current lineup consists of <span style='text-decoration: underline;'>Stu Mackenzie</span> (vocals, guitar), <span style='text-decoration: underline;'>Ambrose Kenny-Smith</span> (vocals, harmonica, keyboards), <span style='text-decoration: underline;'>Cook Craig</span> (guitar, keyboards), <span style='text-decoration: underline;'>Joey Walker</span> (guitar), <span style='text-decoration: underline;'>Lucas Harwood</span> (bass), and Michael Cavanagh (drums). They are known for exploring multiple <span style='text-decoration: underline;'>genres</span>, staging energetic live shows, and building <span style='text-decoration: underline;'>a prolific discography</span>.",
  },
  "FLYING LOTUS": {
    name: "FLYING LOTUS",
    image: "https://i.scdn.co/image/ab6761610000e5eb3cb0f9f56eb5f822bef259cc",
    bio: "Steven Ellison, known professionally as Flying Lotus or FlyLo, is an American record producer, musician, DJ, filmmaker, and rapper from <span style='text-decoration: underline;'>Los Angeles, California</span>. Flying Lotus has released six studio albums and created music for <span style='text-decoration: underline;'>Adult Swim</span>. His 2014 album <span style='text-decoration: underline;'>You're Dead!</span> was awarded the Independent Music Award for Best Dance/Electronica Album.",
  },
  "THUNDERCAT": {
    name: "THUNDERCAT",
    image: "https://i.scdn.co/image/ab6761610000e5eb32145a26a8a9e5ce86cac75d",
    bio: "Stephen Lee Bruner, better known by his stage name Thundercat, is an American bassist, vocalist, and songwriter from <span style='text-decoration: underline;'>Los Angeles</span>. First coming to prominence as a member of <span style='text-decoration: underline;'>Suicidal Tendencies</span>, he has released four solo studio albums and is known for his work with <span style='text-decoration: underline;'>Flying Lotus</span> and <span style='text-decoration: underline;'>Kendrick Lamar</span> on the 2015 album <span style='text-decoration: underline;'>To Pimp a Butterfly</span>.",
  },
  "SLOWDIVE": {
    name: "SLOWDIVE",
    image: "https://i.scdn.co/image/ab6761610000e5eb66e398ee635beb7bc995d983",
    bio: "Slowdive are an English <span style='text-decoration: underline;'>shoegaze</span> band that formed in <span style='text-decoration: underline;'>Reading, Berkshire</span> in 1989. The band consists of <span style='text-decoration: underline;'>Rachel Goswell</span> (vocals, guitar), <span style='text-decoration: underline;'>Neil Halstead</span> (vocals, guitar), <span style='text-decoration: underline;'>Christian Savill</span> (guitar), <span style='text-decoration: underline;'>Nick Chaplin</span> (bass) and <span style='text-decoration: underline;'>Simon Scott</span> (drums). Considered one of the pioneers of the shoegaze genre, they are known for their dreamy, reverb-heavy sound.",
  },
};

// Fill in the rest of the artists with placeholder data for now
const artistNames = [
  "THE BLACK ANGELS",
  "WARPAINT",
  "BORIS",
  "SHAME",
  "DIIV",
  "MDOU MOCTAR",
  "CRUMB",
  "L'ECLAIR",
  "BLACK COUNTRY, NEW ROAD",
  "AUTOMATIC",
  "GODSPEED YOU! BLACK EMPEROR",
  "ELDER",
  "FRANKIE AND THE WITCH FINGERS",
  "NIGHT BEATS",
  "ACID DAD"
];

artistNames.forEach(name => {
  if (!artistsData[name]) {
    artistsData[name] = {
      name: name,
      image: "https://placehold.co/440x247/181717/DDFD51?text=" + encodeURIComponent(name),
      bio: `${name} is an experimental music group known for their unique sound and captivating performances. With influences spanning multiple <span style='text-decoration: underline;'>genres</span>, the band has created a distinctive style that resonates with fans around the world.`,
    };
  }
});

export default artistsData;
