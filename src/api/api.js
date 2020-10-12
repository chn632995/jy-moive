import http from "./http";
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl,
    cinemaListUrl,
    cityListUrl,
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

export const cityListData = async () => {
    http.defaults.headers.info = "city";
    let ret = await http.get(cityListUrl);
    let cities = ret.data.data.cities;
    // 城市字母索引
    let cityIndex = [];
    // 处理完成后的数据
    let dataList = [];
    let indexList = [];

    for (let i = 65; i <= 90; i++) {
        cityIndex.push(String.fromCharCode(i));
    }
    cityIndex.forEach((index) => {
        let tmpArr = cities.filter(
            (item) => index.toLowerCase() == item.pinyin.substr(0, 1)
        );
        if (tmpArr.length > 0) {
            indexList.push(index);
            dataList.push({
                index,
                data: tmpArr,
            });
        }
    });

    return Promise.resolve([dataList, indexList]);
};
