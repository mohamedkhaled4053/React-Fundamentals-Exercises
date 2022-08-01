import { profiles, users } from "./App";

 function Fans({ movie }) {
  let fans = [];

  for (const profile of profiles) {
    if (movie.id == profile.favoriteMovieID) {
      fans.push(users[profile.userID].name);
    }
  }

  if (fans.length == 0) {
    return <p>no one love this</p>;
  } else {
    return <ul>
      {fans.map((fan) => <li key={fan}>{fan}</li>)}
    </ul>;
  }
}
