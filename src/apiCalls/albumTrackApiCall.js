/* API call for fetching album tracks of selected album of related artists of specified artists
   on the homepage in the dropdown menu from the Spotify API endpoint.  */
async function getAlbumTracks(albumID) {
    // Validation for albumID param
    if (albumID === null || albumID === undefined) {
        throw Error('albumID param is required.');
    } else if (typeof albumID !== 'string') {
        throw TypeError('albumID param must be a string.');
    } else if (albumID.length < 22) {
        throw Error('albumID param must be 22 characters long.');
    };
    const url = `/api/tracks/${albumID}`;
    const response = await fetch(url);
    if (response.status !== 200) {
        return {error: <div className='rainbow'>Failed to fetch related album track data.</div>};
    };
    const results = await response.json();
    return results;
};

export default getAlbumTracks;