json.feed do
  json.array!(@feed.each) do |feed|

    source = feed.source

    if source.class == Track
      json.partial! "api/tracks/track", track: source
    else
      json.partial! "api/playlists/playlist", playlist: source
    end
  end
end