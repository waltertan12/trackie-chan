# SoClo
[SoClo](http://soundcloud.com)

## Minimum Viable Product
- [ ] Create / update an account
- [ ] Log in / Log out
- [ ] Follow users
- [ ] Songs
  - [ ] Upload
  - [ ] Play songs
  - [ ] Tag songs
  - [ ] Comment on songs
  - [ ] Like songs
- [ ] Create playlists
- [ ] Search for users
- [ ] View feed from followed users
- [ ] Searching by song title
- [ ] Filter by tags

## Design Docs
- [Views](docs/views.md)
- [Schema](docs/schema.md)

## Implementation Timeline
### Phase 1: User Sign Up and Authentication (1 day)
Implement user sign up and authentication. Create a simple landing page that will hold the container for the root React component. Create associations for users to follow each other.

### Phase 2: Flux Architecture (1 day)
Set up the Flux framework and React component hierarchy. Create React components for the landing page, user sign up, and user sign in.

### Phase 3: Tracks (2.5 day)
Develop JSON API for Tracks. Tracks should be commentable, taggable, and likable. Users should be able to search for Tracks by title and tags. A React `Search` component will facilitate this process. Tracks will get their own React components called `Track Index` and `Track Item`.

### Phase 4: Playlists (1 day)
Create API for Playlists which will require a `playlist` and `playlistings` model.

### Phase 5: Search

## Bonus
- [ ] Album art
- [ ] Avatars
- [ ] Waveform visualizer / Use WaveSurferJS
- [ ] Facebook Auth
- [ ] Trending Artists / Songs
- [ ] Track collections / albums
- [ ] Continuous playback
- [ ] Public and private tracks
- [ ] Explore feed
