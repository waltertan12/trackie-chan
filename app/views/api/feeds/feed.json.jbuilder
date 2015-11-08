json.array!(@feed.each) do |feed|

  source = feed.source

  if source.class == Track
    json.partial! "api/tracks/basic_track", track: source
  else
    json.partial! "api/playlists/basic_playlist", playlist: source
  end
end