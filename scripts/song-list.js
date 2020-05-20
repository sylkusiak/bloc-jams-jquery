{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
      <td>
       <button>
          <span class="song-number">${index + 1}</span>
          <span class="ion-play"></span>
          <span class="ion-pause"></span>
       </button>
      </td>
       <td>${song.title}</td>
       <td>${song.duration}</td>
     </tr>
   `);

   song.element.on('click', event => {
      player.playPause(song);
      $('button#play-pause').attr('playState', player.playState);
    });

    $('button#next').on('click', function() {
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) { return; }

      const nextSong = album.songs[nextSongIndex];
      player.playPause(nextSong);

    $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex <= -1) { return; }

    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });
});

   $('#song-list').append(song.element);
  });
}
