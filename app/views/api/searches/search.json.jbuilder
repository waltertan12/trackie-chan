json.array!(@results) do |result|
  p result

  if result.class == Track 
    json.partial! "api/tracks/track", track: result
  elsif result.class == Playlist
    json.partial! "api/playlists/playlist", playlist: result
  elsif result.class == User
    json.partial! "api/users/user", user: result
  end

  # case result.class

  # when Track
  #   json.partial! "api/tracks/track", track: result
  # when Playlist
  #   json.partial! "api/playlists/playlist", playlist: result
  # when User
  #   json.partial! "api/users/user", user: result
  # end
end