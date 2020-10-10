import http from "./http";
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl,
} from "../config/url";

export const nowPlayingListData = (pageNum = 1) => {
    return http.get(nowPlayingListUri + pageNum);
};

export const moiveDetail = (filmId) => {
    http.defaults.headers.info = "info";
    return http.get(moiveDetailUrl + filmId);
};
