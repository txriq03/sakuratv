import axios from 'axios';
import AniList from 'anilist-node';

const anilist = new AniList();

export const getAnilistAnimeInfo: any = async (animeId: number) => {
    try {
        const data = await anilist.media.anime(21);
        console.log(data);
        return data;        
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export const getTrending: any = async () => {
    const url = "http://localhost:3000/meta/anilist/trending"
        try {
            const { data: { results }} = await axios.get(url);  // Store the response object here
            // console.log(results);  // Log the actual response data
            return results;  // Return the response data
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message);
            }
        }
}

export const getStreamingLinks: any = async () => {
    const url = "http://localhost:3000/meta/anilist/watch/spy-x-family-episode-1";
    try {
        const { data: { results }} = await axios.get(url);  // Store the response object here
        console.log(results);  // Log the actual response data
        return results;  // Return the response data
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export const getEpisodeStreamingLink = async (episodeId: any) => {
    const url =  process.env.NEXT_PUBLIC_API_URL + "/api/v2/hianime/episode/sources?animeEpisodeId=" + episodeId;
    try {
        const { data: { data: episodeData } } = await axios.get(url);
        console.log(episodeData);
        return episodeData;
    } catch (err) {
        if (err instanceof Error){
            throw new Error(err.message);
        }
    }
}

// export const getSpotlightAnime: any = async () => {
//     const url =  process.env.NEXT_PUBLIC_API_URL + "/v2/hianime/home";
//     try {
//         const { data: { results }} = await axios.get(url);
//         console.log(results);
//         return results;
//     } catch (err) {
//         if (err instanceof Error){
//             throw new Error(err.message);
//         }
//     }
// }

export const getHomeScreen: any = async () => {
    const url =  process.env.NEXT_PUBLIC_API_URL + "/api/v2/hianime/home";
    try {
        const { data: { data: homeData } } = await axios.get(url);
        console.log(homeData);
        return homeData;
    } catch (err) {
        if (err instanceof Error){
            throw new Error(err.message);
        }
    }
}

export const getAnimeInfo: any = async (animeId: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/v2/hianime/anime/" + animeId;
    try {
        const { data } = await axios.get(url);
        console.log(data);
        return data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

export const getAnimeEpisodes: any = async (animeId: string) => {
    const url = process.env.NEXT_PUBLIC_API_URL + "/api/v2/hianime/anime/" + animeId + "/episodes";
    try {
        const { data } = await axios.get(url);
        console.log(data);
        return data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
    }
}

// export const getHomeScreen: any = async () => {
//     try {
//         const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/v2/hianime/home"); // Replace with actual API URL

//         if (response.data.success) {
//             const spotlightAnimes = response.data.data;
//             console.log('Spotlight Animes:', spotlightAnimes);
//         } else {
//             console.error('API request was not successful.');
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };
