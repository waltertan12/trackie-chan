# Phase 3: Tracks

## Rails
### Models
* Track
* Comment
* Liking
* Tag
* Tagging

### Controllers
* Tracks (index, show, create, update, destroy)
* Comments (index, create, update, destroy)
* Tags (create)
* Likes (create)

### Views
* api/tracks/show.json.jbuilder
* api/tracks/index.json.jbuilder
* api/comment/show.json.jbuilder
* api/comment/index.json.jbuilder
* api/tags/index.json.jbuilder

## Flux
### Views (React Components)
* Track
  * TrackShow
  * TrackIndex
  * TrackIndexItem
  * TrackForm
* Comment
  * CommentShow
  * CommentIndex
  * CommentIndexItem
  * CommentForm
* Tags
  * TagsForm

### Stores
* Tracks
* Comments
* Tags

### Actions
* ApiAction.receiveTracks
* ApiAction.receiveComments
* ApiAction.createTrack
* ApiAction.receiveComments
* ApiAction.createComment
* ApiAction.createTag
* ApiAction.createLike

### ApiUtil
* ApiUtil.fetchTracks
* ApiUtil.fetchSingleTrack
* ApiUtil.createTrack
* ApiUtil.fetchComments
* ApiUtil.createComment
* ApiUtil.createTag
* ApiUtil.createLike

## Gems/Libraries