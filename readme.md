# slopes4osm

This project aims to provide beautiful slope visualisations for OpenStreetMap contributors to help them map paths, roads and whatever else they are into.

## Current coverage

**[Culebra Island, US](https://github.com/osmlab/editor-layer-index/blob/gh-pages/sources/north-america/us/pr/usgs-culebra-slope.geojson)**

![](https://i.imgur.com/jur1mFv.jpeg)

**[Saint Barthélemy, France](https://github.com/osmlab/editor-layer-index/blob/gh-pages/sources/europe/fr/ign-bl-slope.geojson)**

![](https://i.imgur.com/JFJ0E15.jpeg)

## Future plans

I hope to be able to increase the coverage of these tilesets to large fractions of the United States and France.

Currently, tiles are hosted on SRCF ([Student-Run Computing Facility](https://www.srcf.net/) of University of Cambridge), a volunteer-run organisation providing some storage. Storing large tilesets there is not possible, unfortunately.

I plan to move the tilesets to UpCloud. Their object storage offers 1TB of storage for €20 a month, fixed price (ie [no egress fee](https://upcloud.com/products/object-storage/)).
The Cloudflare proxy currently in use provides 100000 free invocations a day (after that, it's cut off, ie no extra charge).

I like that this setup has a fixed monthly cost, and it does not require me to maintain servers. I hope this project becomes an [OpenStreetMap US Community Project](https://openstreetmap.us/our-work/community-charter-projects/) to cover the costs.
