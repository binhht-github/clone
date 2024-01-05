import React from 'react';


export const userAPI = "https://d24617459b014c4da31d0c35c1b38b96.api.mockbin.io/"
export const postsAPI = "https://1f86f54a68fe4fb08b2e9740b2b557f5.api.mockbin.io/"
export const commentAPI = "https://26b0b29c7d294259bebe16755640d6f3.api.mockbin.io/"
export const likeAPI = "https://7ee60c5a1d46486780a1043bbe519800.api.mockbin.io/"
export const saveAPI = "https://fdcedd0436ed4d75ba37ef9fca1cdb5b.api.mockbin.io/"

export const postApi = "https://6592d1ecbb1297071990150f.mockapi.io/post?limit:10"
export const userApi = "https://6592d1ecbb1297071990150f.mockapi.io/users" // tk fpt

export const commentApi = "https://6592d2c1bb12970719901735.mockapi.io/comments" // tk zzz
export const likeApi = "https://6592d2c1bb12970719901735.mockapi.io/like" // tk zzz




export const getPostFollower = (arr, arrFollower) => {
    let result = []
    arrPost.map(item => {
        item.userId == "3" || item.userId == "5" ? result.push(item) : null
    })
    return result;
}


export let arrUser = [
    {
        "userName": "userName 1",
        "avtSrc": "avtSrc 1",
        "follower": [
            "3",
            "5"
        ],
        "id": "1"
    },
    {
        "userName": "userName 2",
        "avtSrc": "avtSrc 2",
        "follower": [],
        "id": "2"
    },
    {
        "userName": "userName 3",
        "avtSrc": "avtSrc 3",
        "follower": [],
        "id": "3"
    },
    {
        "userName": "userName 4",
        "avtSrc": "avtSrc 4",
        "follower": [],
        "id": "4"
    },
    {
        "userName": "userName 5",
        "avtSrc": "avtSrc 5",
        "follower": [],
        "id": "5"
    }
]

export let arrPost = [
    {
        "shareQuantity": 60,
        "title": "title 1",
        "hashtag": "hashtag 1",
        "potsType": "potsType 1",
        "music": "music 1",
        "avtImg": "https://cungcau.qltns.mediacdn.vn/421196537165905920/2022/12/25/hinh-nen-gai-xinh-hd-1-16719638820711104326521.jpg",
        "src": "https://cungcau.qltns.mediacdn.vn/421196537165905920/2022/12/25/hinh-nen-gai-xinh-hd-1-16719638820711104326521.jpg",
        "musicImg": "https://cungcau.qltns.mediacdn.vn/421196537165905920/2022/12/25/hinh-nen-gai-xinh-hd-1-16719638820711104326521.jpg",
        "createDate": "createDate 1",
        "id": "1",
        "userId": "1"
    },
    {
        "shareQuantity": 81,
        "title": "title 2",
        "hashtag": "hashtag 2",
        "potsType": "potsType 2",
        "music": "music 2",
        "avtImg": "https://media.muanhatructuyen.vn/post/221/31/3/hinh-nen-gai-xinh-trong-bo-ao-vang-ngo-nghinh.jpg",
        "src": "https://media.muanhatructuyen.vn/post/221/31/3/hinh-nen-gai-xinh-trong-bo-ao-vang-ngo-nghinh.jpg",
        "musicImg": "https://media.muanhatructuyen.vn/post/221/31/3/hinh-nen-gai-xinh-trong-bo-ao-vang-ngo-nghinh.jpg",
        "createDate": "createDate 2",
        "id": "2",
        "userId": "2"
    },
    {
        "shareQuantity": 51,
        "title": "title 3",
        "hashtag": "hashtag 3",
        "potsType": "potsType 3",
        "music": "music 3",
        "avtImg": "https://meliawedding.com.vn/wp-content/uploads/2022/05/hinh-nen-gai-xinh-19-1-edited.jpg",
        "src": "https://meliawedding.com.vn/wp-content/uploads/2022/05/hinh-nen-gai-xinh-19-1-edited.jpg",
        "musicImg": "https://meliawedding.com.vn/wp-content/uploads/2022/05/hinh-nen-gai-xinh-19-1-edited.jpg",
        "createDate": "createDate 3",
        "id": "3",
        "userId": "3"
    },
    {
        "shareQuantity": 52,
        "title": "title 4",
        "hashtag": "hashtag 4",
        "potsType": "potsType 4",
        "music": "music 4",
        "avtImg": "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-7.jpg",
        "src": "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-7.jpg",
        "musicImg": "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-7.jpg",
        "createDate": "createDate 4",
        "id": "4",
        "userId": "4"
    },
    {
        "shareQuantity": 32,
        "title": "title 5",
        "hashtag": "hashtag 5",
        "potsType": "potsType 5",
        "music": "",
        "avtImg": "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-2.jpg",
        "src": "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-2.jpg",
        "musicImg": "https://i.9mobi.vn/cf/Images/huy/2021/12/6/hinh-nen-girl-xinh-2.jpg",
        "createDate": "createDate 5",
        "id": "5",
        "userId": "5"
    },
    {
        "shareQuantity": 46,
        "title": "title 6",
        "hashtag": "hashtag 6",
        "potsType": "potsType 6",
        "music": "",
        "avtImg": "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-gai-xinh-hot-girl-cute.jpg",
        "src": "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-gai-xinh-hot-girl-cute.jpg",
        "musicImg": "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-gai-xinh-hot-girl-cute.jpg",
        "createDate": "createDate 6",
        "id": "6",
        "userId": "1"
    },
    {
        "shareQuantity": 93,
        "title": "title 7",
        "hashtag": "hashtag 7",
        "potsType": "potsType 7",
        "music": "music 7",
        "avtImg": "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg",
        "src": "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg",
        "musicImg": "https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-gai-xinh-hd.jpg",
        "createDate": "createDate 7",
        "id": "7",
        "userId": "2"
    },
    {
        "shareQuantity": 87,
        "title": "title 8",
        "hashtag": "hashtag 8",
        "potsType": "potsType 8",
        "music": "music 8",
        "avtImg": "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/01/tai-hinh-nen-gai-dep-ve-may.jpg",
        "src": "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/01/tai-hinh-nen-gai-dep-ve-may.jpg",
        "musicImg": "https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/01/tai-hinh-nen-gai-dep-ve-may.jpg",
        "createDate": "createDate 8",
        "id": "8",
        "userId": "3"
    },
    {
        "shareQuantity": 73,
        "title": "title 9",
        "hashtag": "hashtag 9",
        "potsType": "potsType 9",
        "music": "music 9",
        "avtImg": "https://i1.sndcdn.com/artworks-oSLwusnOZCsTWUY4-ysX9FQ-t500x500.jpg",
        "src": "https://i1.sndcdn.com/artworks-oSLwusnOZCsTWUY4-ysX9FQ-t500x500.jpg",
        "musicImg": "https://i1.sndcdn.com/artworks-oSLwusnOZCsTWUY4-ysX9FQ-t500x500.jpg",
        "createDate": "createDate 9",
        "id": "9",
        "userId": "4"
    },
    {
        "shareQuantity": 60,
        "title": "title 10",
        "hashtag": "hashtag 10",
        "potsType": "potsType 10",
        "music": "music 10",
        "avtImg": "https://i.ytimg.com/vi/Li01nftGNKQ/maxresdefault.jpg",
        "src": "https://i.ytimg.com/vi/Li01nftGNKQ/maxresdefault.jpg",
        "musicImg": "https://i.ytimg.com/vi/Li01nftGNKQ/maxresdefault.jpg",
        "createDate": "createDate 10",
        "id": "10",
        "userId": "5"
    },
    {
        "shareQuantity": 5,
        "title": "title 11",
        "hashtag": "hashtag 11",
        "potsType": "potsType 11",
        "music": "music 11",
        "avtImg": "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg",
        "src": "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg",
        "musicImg": "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-gai-xinh-cap-2-3-mac-ao-dai-dep.jpg",
        "createDate": "createDate 11",
        "id": "11",
        "userId": "1"
    },
    {
        "shareQuantity": 2,
        "title": "title 12",
        "hashtag": "hashtag 12",
        "potsType": "potsType 12",
        "music": "music 12",
        "avtImg": "https://honghot.net/wp-content/uploads/www_HongHot_net-Hinh-nen-girl-xinh-dien-thoai-1.jpg",
        "src": "https://honghot.net/wp-content/uploads/www_HongHot_net-Hinh-nen-girl-xinh-dien-thoai-1.jpg",
        "musicImg": "https://honghot.net/wp-content/uploads/www_HongHot_net-Hinh-nen-girl-xinh-dien-thoai-1.jpg",
        "createDate": "createDate 12",
        "id": "12",
        "userId": "2"
    },
    {
        "shareQuantity": 75,
        "title": "title 13",
        "hashtag": "hashtag 13",
        "potsType": "potsType 13",
        "music": "music 13",
        "avtImg": "https://mas.edu.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh-3-1-522x1024.jpg",
        "src": "https://mas.edu.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh-3-1-522x1024.jpg",
        "musicImg": "https://mas.edu.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh-3-1-522x1024.jpg",
        "createDate": "createDate 13",
        "id": "13",
        "userId": "3"
    },
    {
        "shareQuantity": 26,
        "title": "title 14",
        "hashtag": "hashtag 14",
        "potsType": "potsType 14",
        "music": "music 14",
        "avtImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEl9TYijvx-4IP6_YpNTAhpm2Rh-pVUmIn9yxoYPGi-JzHHajQoX4TSiafIs0G4UEqPHc&usqp=CAU",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEl9TYijvx-4IP6_YpNTAhpm2Rh-pVUmIn9yxoYPGi-JzHHajQoX4TSiafIs0G4UEqPHc&usqp=CAU",
        "musicImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEl9TYijvx-4IP6_YpNTAhpm2Rh-pVUmIn9yxoYPGi-JzHHajQoX4TSiafIs0G4UEqPHc&usqp=CAU",
        "createDate": "createDate 14",
        "id": "14",
        "userId": "4"
    },
    {
        "shareQuantity": 46,
        "title": "title 15",
        "hashtag": "hashtag 15",
        "potsType": "potsType 15",
        "music": "music 15",
        "avtImg": "https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-2k-cho-pc_121750528.jpg",
        "src": "https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-2k-cho-pc_121750528.jpg",
        "musicImg": "https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-2k-cho-pc_121750528.jpg",
        "createDate": "createDate 15",
        "id": "15",
        "userId": "5"
    },
    {
        "shareQuantity": 26,
        "title": "title 16",
        "hashtag": "hashtag 16",
        "potsType": "potsType 16",
        "music": "music 16",
        "avtImg": "https://icdn.dantri.com.vn/2018/12/25/co-gai-nong-thon-dep-diu-dang-13-1545741190739100518761.jpg",
        "src": "https://icdn.dantri.com.vn/2018/12/25/co-gai-nong-thon-dep-diu-dang-13-1545741190739100518761.jpg",
        "musicImg": "https://icdn.dantri.com.vn/2018/12/25/co-gai-nong-thon-dep-diu-dang-13-1545741190739100518761.jpg",
        "createDate": "createDate 16",
        "id": "16",
        "userId": "1"
    },
    {
        "shareQuantity": 18,
        "title": "title 17",
        "hashtag": "hashtag 17",
        "potsType": "potsType 17",
        "music": "music 17",
        "avtImg": "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-gai-xinh-de-thuong-keo-toc-338x600.jpg",
        "src": "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-gai-xinh-de-thuong-keo-toc-338x600.jpg",
        "musicImg": "https://haycafe.vn/wp-content/uploads/2022/02/Hinh-gai-xinh-de-thuong-keo-toc-338x600.jpg",
        "createDate": "createDate 17",
        "id": "17",
        "userId": "2"
    },
    {
        "shareQuantity": 50,
        "title": "title 18",
        "hashtag": "hashtag 18",
        "potsType": "potsType 18",
        "music": "music 18",
        "avtImg": "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong-457x600.jpg",
        "src": "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong-457x600.jpg",
        "musicImg": "https://antimatter.vn/wp-content/uploads/2022/10/hinh-anh-gai-xinh-de-thuong-457x600.jpg",
        "createDate": "createDate 18",
        "id": "18",
        "userId": "3"
    },
    {
        "shareQuantity": 14,
        "title": "title 19",
        "hashtag": "hashtag 19",
        "potsType": "potsType 19",
        "music": "music 19",
        "avtImg": "https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-nen-em-be-gai-cho-dien-thoai-8-07-11-53-24.jpg",
        "src": "https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-nen-em-be-gai-cho-dien-thoai-8-07-11-53-24.jpg",
        "musicImg": "https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-nen-em-be-gai-cho-dien-thoai-8-07-11-53-24.jpg",
        "createDate": "createDate 19",
        "id": "19",
        "userId": "4"
    },
    {
        "shareQuantity": 63,
        "title": "title 20",
        "hashtag": "hashtag 20",
        "potsType": "potsType 20",
        "music": "music 20",
        "avtImg": "https://img.thuthuat123.com/uploads/2019/10/17/hinh-nen-gai-xinh-cho-dien-thoai-cuc-dep_110154166.jpg",
        "src": "https://img.thuthuat123.com/uploads/2019/10/17/hinh-nen-gai-xinh-cho-dien-thoai-cuc-dep_110154166.jpg",
        "musicImg": "https://img.thuthuat123.com/uploads/2019/10/17/hinh-nen-gai-xinh-cho-dien-thoai-cuc-dep_110154166.jpg",
        "createDate": "createDate 20",
        "id": "20",
        "userId": "5"
    },
    {
        "shareQuantity": 28,
        "title": "title 21",
        "hashtag": "hashtag 21",
        "potsType": "potsType 21",
        "music": "music 21",
        "avtImg": "https://i.pinimg.com/1200x/20/ca/4f/20ca4fd02972bbae35500a6e7a336b7f.jpg",
        "src": "https://i.pinimg.com/1200x/20/ca/4f/20ca4fd02972bbae35500a6e7a336b7f.jpg",
        "musicImg": "https://i.pinimg.com/1200x/20/ca/4f/20ca4fd02972bbae35500a6e7a336b7f.jpg",
        "createDate": "createDate 21",
        "id": "21",
        "userId": "1"
    },
    {
        "shareQuantity": 43,
        "title": "title 22",
        "hashtag": "hashtag 22",
        "potsType": "potsType 22",
        "music": "music 22",
        "avtImg": "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-6-600x600.jpg",
        "src": "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-6-600x600.jpg",
        "musicImg": "https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-6-600x600.jpg",
        "createDate": "createDate 22",
        "id": "22",
        "userId": "2"
    },
    {
        "shareQuantity": 51,
        "title": "title 23",
        "hashtag": "hashtag 23",
        "potsType": "potsType 23",
        "music": "music 23",
        "avtImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYTzJEQ6aAgMB4IRD17arTivhBPhQbSz9FdD0b-Xp0gZiQ-mamz09mm7y5V0nM_exEyo&usqp=CAU",
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYTzJEQ6aAgMB4IRD17arTivhBPhQbSz9FdD0b-Xp0gZiQ-mamz09mm7y5V0nM_exEyo&usqp=CAU",
        "musicImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYTzJEQ6aAgMB4IRD17arTivhBPhQbSz9FdD0b-Xp0gZiQ-mamz09mm7y5V0nM_exEyo&usqp=CAU",
        "createDate": "createDate 23",
        "id": "23",
        "userId": "3"
    },
    {
        "shareQuantity": 81,
        "title": "title 24",
        "hashtag": "hashtag 24",
        "potsType": "potsType 24",
        "music": "music 24",
        "avtImg": "https://luv.vn/wp-content/uploads/2021/10/hinh-nen-gai-xinh-50.jpg",
        "src": "https://luv.vn/wp-content/uploads/2021/10/hinh-nen-gai-xinh-50.jpg",
        "musicImg": "https://luv.vn/wp-content/uploads/2021/10/hinh-nen-gai-xinh-50.jpg",
        "createDate": "createDate 24",
        "id": "24",
        "userId": "4"
    }
]


export let comments = [
    {
        "id": 1,
        "userId": 1,
        "postsId": 1,
        "content": "cảnh thiên nhiên quá đẹp",
        "createDate": "31/12/2023  10:08:00"
    }
]
export let like = [
    {
        "id": 1,
        "userId": 1,
        "postsId": 1,
        "createDate": "31/12/2023  10:08:00"
    }
]
export let save = [
    {
        "id": 1,
        "userId": 1,
        "postsId": 1,
        "createDate": "31/12/2023  10:08:00"
    }
]



