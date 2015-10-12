# SoClo
[SoClo](http://soundcloud.com)

## Minimum Viable Product
- [ ] Create / update an account
- [ ] Log in / Log out
- [ ] Follow users
- [ ] Songs
  - [ ] Upload songs
  - [ ] Play songs
  - [ ] Tag songs
  - [ ] Comment on songs
  - [ ] Like songs
- [ ] Create playlists
- [ ] View feed from followed users
- [ ] Search for users and songs

## Design Docs
- [Views](./docs/views.md)
- [Schema](./docs/schema.md)

## Implementation Timeline
### Phase 1: User Sign Up and Authentication (1 day)
Implement user sign up and authentication. Create a simple landing page that will hold the container for the root React component. Create `followers` and `followed` associations for users.

[Details](./docs/phases/phase_1.md)

### Phase 2: Flux Architecture (2 day)
Set up the Flux framework and React component hierarchy. Create React components for the landing page, user sign up, and user sign in.

[Details](./docs/phases/phase_2.md)

### Phase 3: Tracks (2 days)
Develop JSON API for Tracks. Tracks should be commentable, taggable, and likable. This will involve creating the following models: `comments`, `likings`, `taggings`. Tracks will get their own React components called `TrackIndex` and `TrackItem`.

### Phase 4: Playlists (1 day)
Create API for Playlists which will require a `playlist` and `playlistings` model. It will also require a React `Playlist` component which will show `TrackItem`s

### Phase 5: Feed (1 day)
Create a feed on the dashboard page.

### Phase 6: Search (2 days)
Create a component `SearchIndex` that allows users to search for users, songs, and tags.

### Phase 7: Styling (1 day)
Make it look better...

## Bonus Features
- [ ] Album art
- [ ] Avatars
- [ ] Waveform visualizer / Use WaveSurferJS
- [ ] Facebook Auth
- [ ] Trending Artists / Songs
- [ ] Track collections / albums
- [ ] Continuous playback
- [ ] Public and private tracks
- [ ] Explore feed
- [ ] Download songs
- [ ] Use SendGrid as mailserver
