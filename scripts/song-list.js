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

    $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
    });

    setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
    }, 1000);

   $('#song-list').append(song.element);
  });

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
    });

  changeVolume( () => {
    if (player.playState !== 'playing') { return; }
    const currentVolume = player.getVolume();
    const maxVolume = 100;
    const percent = (currentVolume / maxVolume) * 100;
    $('#volume-control .current-volume').text( currentVolume );
    $('#volume-control input').val(percent);
   }, 1000);
}
