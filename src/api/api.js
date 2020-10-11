import http from "./http";
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl,
    cinemaListUrl,
} from "../config/url";

export const nowPlayingListData = (pageNum = 1) => {
    http.defaults.headers.info = "";
    return http.get(nowPlayingListUri + pageNum);
};

export const comingListData = (pageNum = 1) => {
    http.defaults.headers.info = "";
    return http.get(comingSoonListUri + pageNum);
};

export const moiveDetail = (filmId) => {
    http.defaults.headers.info = "info";
    return http.get(moiveDetailUrl + filmId);
};

export const cinemaListData = () => {
    http.defaults.headers.info = "cinema";
    return http.get(cinemaListUrl);
};
