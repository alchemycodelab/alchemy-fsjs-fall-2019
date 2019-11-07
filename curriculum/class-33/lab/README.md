# LAB - Custom Hooks with Artist Search

Continue the Artist Search lab.

## APIs

* [Music Brainz](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2)
* [Lyrics](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search)

## Refactor

* create a custom `useArtists` hook to get a list of artists
* create a custom `useReleases` hook to get a list of releases
* create a custom `useLyrics` hook to get lyrics

## New Features

* Create a release view which displays a list of recordings (songs, intro, outro, etc.) for a release
  * Use `http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json`
* Create a song view which displays the lyrics of a song
  * Use `https://api.lyrics.ovh/v1/<ARTIST>/<TITLE>` to get lyrics

## Testing

* Snapshot testing
* Test state changes
* Mock services

## Rubric

* fetches: 1 points
* Components / state management 4 points
* Router 3 points
* Tests 1 points
* syntax/Clean code 1 points
