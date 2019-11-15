export const getVideoIds = state => state.videos;
export const getVideoThumbnails = state => getVideoIds(state)
  .map(videoId => ({
    videoId,
    img: `https://img.youtube.com/vi/${videoId}/0.jpg`
  }));

export const getVideoThumbnailUrls = state => getVideoThumbnails(state)
  .map(videoThumbnails => videoThumbnails.img);

export const getVideoEmbedUrl = (state, id) => `https://www.youtube.com/embed/${id}`;
