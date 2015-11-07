json.array!(@results) do |result|
  if result.class == Track 
    json.partial! "api/tracks/basic_track", track: result
  elsif result.class == Playlist
    json.partial! "api/playlists/basic_playlist", playlist: result
  elsif result.class == User
    json.partial! "api/users/basic_user", user: result
  end
end