# TrackieChan
[TrackieChan](http://trackiechan.herokuapp.com)

## Minimum Viable Product
- [x] Create / update an account
- [x] Log in / Log out
- [x] Follow users
- [x] Songs
  - [x] Upload songs
  - [x] Play songs
  - [x] Tag songs
  - [x] Comment on songs
  - [x] Like songs
- [x] Create playlists
- [x] View feed from followed users
- [x] Search for users and songs

## Design Docs
- [Views](./docs/views.md)
- [Schema](./docs/schema.md)

## Implementation Timeline
### Phase 1: User Sign Up and Authentication (1 day)
Implement user sign up and authentication. Create a simple landing page that will hold the container for the root React component.

[Details](./docs/phases/phase_1.md)

### Phase 2: Flux Architecture (2 day)
Set up the Flux framework and React component hierarchy. Create React components for user sign up, and user sign in. Create `followers` and `followed` associations for users.

[Details](./docs/phases/phase_2.md)

### Phase 3: Tracks (2 days)
Develop JSON API for Tracks. Tracks should be commentable, taggable, and likable. This will involve creating the following models: `comments`, `likings`, `taggings`. Tracks will get their own React components called `TrackIndex` and `TrackItem`.

[Details](./docs/phases/phase_3.md)

### Phase 4: Playlists (1 day)
Create API for Playlists which will require a `playlist` and `playlistings` model. It will also require a React `Playlist` component which will show `TrackItem`s

[Details](./docs/phases/phase_4.md)

### Phase 5: Feed (1 day)
Create a feed on the dashboard page.

[Details](./docs/phases/phase_5.md)

### Phase 6: Search (2 days)
Create a component `SearchIndex` that allows users to search for users, songs, and tags.

[Details](./docs/phases/phase_6.md)

### Phase 7: Styling (1 day)
Style all views with a consistent theme

[Details](./docs/phases/phase_7.md)

## Bonus Features
- [x] Explore feed
- [x] Trending Artists / Songs
- [x] Continuous playback
- [ ] Album art
- [ ] Avatars
- [ ] Waveform visualizer / Use WaveSurferJS
- [ ] Facebook Auth
- [ ] Track collections / albums
- [ ] Public and private tracks
- [ ] Download songs
- [ ] Use SendGrid as mailserver