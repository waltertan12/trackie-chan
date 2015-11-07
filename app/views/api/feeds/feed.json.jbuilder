json.array!(@feed.each) do |feed|

  source = feed.source

  if source.class == Track
    json.partial! "api/tracks/basic_track", track: source
  else
    json.partial! "api/playlists/playlist", playlist: source
  end
end