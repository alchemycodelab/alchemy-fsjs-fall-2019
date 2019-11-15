# Steps

## Create AddVideo ✔️

* presentational components
  * Form component
* reducer
  * videos = []
* actions
  * ADD_VIDEO
* container
  * AddVideo
* **validate** a new id is pushed to state

## Create Videos list ✔️

* presentational components
  * Thumbnail
  * Thumbnails
* selectors
  * getVideoIds
  * getVideoThumbnailUrls
* container
  * Videos
* **validate** add a video and see its thumbnail render

## Create VideoPlayer ✔️

* presentational components
  * VideoPlayer
* selectors
  * getVideoEmbedUrl
* container
  * VideoPlayerContainer
* **validate** see video playing

## Use react router to display different pages ✔️

* dispaly the Video list on `/`
* display the VideoPlayer on `/video/:videoId`
* **validate** by clicking links
