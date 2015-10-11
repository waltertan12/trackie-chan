# TrackieChan
[TrackieChan](http://soundcloud.com)

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
- [Views](docs/views.md)
- [Schema](docs/schema.md)

## Implementation Timeline
### Phase 1: User Sign Up and Authentication (1 day)
Implement user sign up and authentication. Create a simple landing page that will hold the container for the root React component. Create associations for users to follow each other.

### Phase 2: Flux Architecture (1 day)
Set up the Flux framework and React component hierarchy. Create React components for the landing page, user sign up, and user sign in.

### Phase 3: Tracks (2 days)
Develop JSON API for Tracks. Tracks should be commentable, taggable, and likable. Tracks will get their own React components called `TrackIndex` and `TrackItem`.

### Phase 4 Comments (1 day)
Create API for comments. This will require a `comment` model on the backend and a `CommentIndex` and `CommentIndexItem` on the front end.

### Phase 5: Playlists (1 day)
Create API for Playlists which will require a `playlist` and `playlistings` model. It will also require a `Playlist` component which will show `TrackItem`s

### Phase 6: Feed (1 day)
Create a feed on the dashboard page.

### Phase 7: Search (2 days)
Create a component `SearchIndex` that allows users to search for users, songs, and tags. 

### Phase 8: Styling (1 day)
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
