/*!
 * all Data 串資料
 */

// 店家資訊 JSON
stores = [
  {
    ID: 1,
    class: {
      mainClass: "食",
      subClass: "飲料．冰品．咖啡．甜品"
    },
    name: "迷客夏 板中店",
    logo: "images/迷客夏/迷客夏logo.jpg",
    banner: "images/迷客夏/迷客夏banner.png",
    deliveryNews: {
      deliveryTakesTimeM: {
        minM: 10, // 最快時間(分鐘 M)
        maxM: 20 // 最慢分鐘(分鐘 M)
      },
      deliveryMinAmount: "低消200元",
      deliveryServiceFee: "0%",
      deliveryTime: "上午10:00~下午10:00"
    },
    tel: "02-22720003",
    add: "新北市板橋區中正路271號",
    addMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4509798299273!2d121.45333281500604!3d25.018764983979523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a805400009d7%3A0x52ddb6ed5d7f9eab!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5Lit5q2j6LevMjcx6Jmf!5e0!3m2!1szh-TW!2stw!4v1556596407115!5m2!1szh-TW!2stw",
    businessHours: "上午10:00~下午10:00",
    about:
      "為了你，我們養了一群牛；身為綠光牧場酪農第二代的林建燁，領悟的一種責任、一種感恩 迷客夏，「客」字擺中間，就是堅持將顧客放在心中最重要的位置。創立初期，沒有品牌知名度，尚未流行鮮奶做為手搖飲的年代，迷客夏就堅持使用鮮乳做為奶茶的原料，我們堅持推廣健康的鮮乳飲品。對原物料的把關，我們堅信，堅持好的東西，有一天一定會被看見。",
    menu: [
      {
        menuClassNo: "1",
        menuClass: "人氣精選",
        menuItem: {
          name: "珍珠紅茶拿鐵",
          img: "images/迷客夏/珍珠紅茶拿鐵.jpg",
          description:
            "大正紅茶做的紅茶拿鐵，大正紅茶本身有獨特的茶香味，加了糖之後香味會更加散發，再配上自家經營的牧場所提供的鮮奶及獨特的白色蜂蜜珍珠，絕對稱的上排行榜的第一名！",
          remarks: "",
          recommend: "店長推薦",
          unitPrice: 55,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 10
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "甜度",
              option: [
                {
                  optionTitle: "無糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "微糖(三分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "半糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "少糖(七分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常糖",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            }
          ]
        }
      },
      {
        menuClassNo: "2",
        menuClass: "綠光牧場鮮奶",
        menuItem: {
          name: "大甲芋頭鮮奶",
          img: "images/迷客夏/大甲芋頭鮮奶.jpg",
          description:
            "喝過一次保證上癮，芋頭香和芋頭的口感，搭配綠光牧場鮮奶真的是絕配！",
          remarks: "",
          recommend: "招牌",
          unitPrice: 65,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 20
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "1",
        menuClass: "人氣精選",
        menuItem: {
          name: "柳丁綠茶",
          img: "",
          description: "",
          remarks: "",
          recommend: "",
          unitPrice: 55,
          salesStatus: "已售完",
          customItem: [
            {
              itemNo: 1,
              title: "冰量",
              option: [
                {
                  optionTitle: "去冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "甜度",
              option: [
                {
                  optionTitle: "無糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "微糖(三分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "半糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "少糖(七分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常糖",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "1",
        menuClass: "人氣精選",
        menuItem: {
          name: "小山迎露冷泡茶",
          img: "images/迷客夏/小山迎露冷泡茶.jpg",
          description: "",
          remarks: "無糖。去冰。金萱。瓶裝, 800毫升",
          recommend: "",
          unitPrice: 65,
          salesStatus: "銷售中",
          customItem: []
        }
      },
      {
        menuClassNo: "1",
        menuClass: "人氣精選",
        menuItem: {
          name: "出雲抹茶鮮奶",
          img: "",
          description: "",
          remarks: "",
          recommend: "",
          unitPrice: 70,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 20
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "甜度",
              option: [
                {
                  optionTitle: "無糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "微糖(三分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "半糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "少糖(七分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常糖",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 4,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "1",
        menuClass: "人氣精選",
        menuItem: {
          name: "大正紅茶拿鐵",
          img: "",
          description: "",
          remarks: "",
          recommend: "",
          unitPrice: 45,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 10
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "甜度",
              option: [
                {
                  optionTitle: "無糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "微糖(三分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "半糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "少糖(七分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常糖",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 4,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "2",
        menuClass: "綠光牧場鮮奶",
        menuItem: {
          name: "珍珠鮮奶",
          img: "images/迷客夏/珍珠鮮奶.jpg",
          description:
            "第一次喝迷客夏必點之一，可以喝到鮮奶的原味和珍珠帶一點蜂蜜的甜味，在加上珍珠的口感～一喝保證愛上迷客夏！",
          remarks: "",
          recommend: "人氣商品",
          unitPrice: 65,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 20
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "2",
        menuClass: "綠光牧場鮮奶",
        menuItem: {
          name: "草莓鮮奶",
          img: "",
          description: "",
          remarks: "",
          recommend: "",
          unitPrice: 65,
          salesStatus: "已售完",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 20
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "冰量",
              option: [
                {
                  optionTitle: "去冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "3",
        menuClass: "台灣鮮豆奶",
        menuItem: {
          name: "烏龍茶鮮豆奶",
          img: "",
          description: "",
          remarks: "",
          recommend: "",
          unitPrice: 45,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 10
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "甜度",
              option: [
                {
                  optionTitle: "無糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "微糖(三分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "半糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "少糖(七分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常糖",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 4,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "2",
        menuClass: "綠光牧場鮮奶",
        menuItem: {
          name: "手炒黑糖鮮奶",
          img: "",
          description:
            "正港的黑糖鮮奶，之所以叫手炒就表示我們的黑糖都是自己手炒的噢！",
          remarks: "手工現炒黑糖，香濃的黑糖香味",
          recommend: "店長推薦",
          unitPrice: 60,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "份量",
              option: [
                {
                  optionTitle: "中",
                  increasePrice: 0
                },
                {
                  optionTitle: "大",
                  increasePrice: 20
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      },
      {
        menuClassNo: "4",
        menuClass: "愛茶的牛",
        menuItem: {
          name: "決明大麥",
          img: "images/迷客夏/決明大麥.jpg",
          description: "",
          remarks: "大",
          recommend: "",
          unitPrice: 25,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "溫度",
              option: [
                {
                  optionTitle: "微冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "少冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常冰",
                  increasePrice: 0
                },
                {
                  optionTitle: "常溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "溫",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "甜度",
              option: [
                {
                  optionTitle: "無糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "微糖(三分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "半糖",
                  increasePrice: 0
                },
                {
                  optionTitle: "少糖(七分糖)",
                  increasePrice: 0
                },
                {
                  optionTitle: "正常糖",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "加料選擇",
              option: [
                {
                  optionTitle: "加珍珠",
                  increasePrice: 5
                },
                {
                  optionTitle: "加紅豆",
                  increasePrice: 10
                },
                {
                  optionTitle: "加仙草凍",
                  increasePrice: 10
                },
                {
                  optionTitle: "加布丁",
                  increasePrice: 10
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            }
          ]
        }
      }
    ]
  },
  {
    ID: 2,
    class: {
      mainClass: "食",
      subClass: "漢堡．飲料．美式料理"
    },
    name: "Gatsby 蓋子美式餐廳",
    logo: "images/Gatsby蓋子美式餐廳/Gatsby蓋子美式餐廳logo.jpg",
    banner: "images/Gatsby蓋子美式餐廳/Gatsby蓋子美式餐廳banner.jpg",
    deliveryNews: {
      deliveryTakesTimeM: {
        minM: 15, // 最快時間(分鐘 M)
        maxM: 30 // 最慢分鐘(分鐘 M)
      },
      deliveryMinAmount: "低消300元",
      deliveryServiceFee: "5%",
      deliveryTime: "週一至週五 上午11:30~下午09:00,六日 下午12:30~下午09:00"
    },
    tel: "02-29650557",
    add: "新北市板橋區建國街127號",
    addMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14461.935626356708!2d121.4610085!3d25.0176469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff1592a83b1f41a6!2z6JOL5a2Q576O5byP6aSQ5buz!5e0!3m2!1szh-TW!2stw!4v1556609571849!5m2!1szh-TW!2stw",
    businessHours: "週一至週五 上午11:30~下午09:00,六日 下午12:30~下午09:00",
    about:
      "吃一場沒有距離的美式創意料理 堅持使用最新鮮的食材，自製的安心料理，帶來海外人氣商品，加上在地化的創意，成為蓋子獨一無二的經典美味。我們不會把美好的食物當作理所當然，就好像我們不會把客人的滿足當作理所當然！",
    menu: [
      {
        menuClassNo: "1",
        menuClass: "經典開胃菜",
        menuItem: {
          name: "蓋幫小海陸拼盤",
          img: "images/Gatsby蓋子美式餐廳/蓋幫小海陸拼盤.jpg",
          description:
            "集合了蓋幫歡聚派對經典組合，CP值一定破表，配上濃郁起司條，香酥花枝圈，酸辣炸雞翅，香脆過癮的蓋幫小海陸拼盤，炸得酥酥脆脆，一口讓人欲罷不能！",
          remarks: "辣雞翅、花枝圈、起司條",
          recommend: "",
          unitPrice: 295,
          salesStatus: "銷售中",
          customItem: []
        }
      },
      {
        menuClassNo: "1",
        menuClass: "經典開胃菜",
        menuItem: {
          name: "花生醬可可脆薯",
          img: "images/Gatsby蓋子美式餐廳/花生醬可可脆薯.jpg",
          description: "",
          remarks: "",
          recommend: "店長推薦",
          unitPrice: 130,
          salesStatus: "銷售中",
          customItem: []
        }
      },
      {
        menuClassNo: "1",
        menuClass: "經典開胃菜",
        menuItem: {
          name: "薄皮辣雞翅",
          img: "images/Gatsby蓋子美式餐廳/薄皮辣雞翅.jpg",
          description: "",
          remarks: "微辣",
          recommend: "人氣推薦",
          unitPrice: 190,
          salesStatus: "已售完",
          customItem: []
        }
      },
      {
        menuClassNo: "5",
        menuClass: "輕食沙拉",
        menuItem: {
          name: "香煎雞柳莎莎拉",
          img: "images/Gatsby蓋子美式餐廳/香煎雞柳莎莎拉.jpg",
          description: "",
          remarks: "",
          recommend: "",
          unitPrice: 190,
          salesStatus: "銷售中",
          customItem: []
        }
      },
      {
        menuClassNo: "2",
        menuClass: "蓋氏堡(附薯條、飲料)",
        menuItem: {
          name: "花生醬起司培根漢堡",
          img: "images/Gatsby蓋子美式餐廳/花生醬起司培根漢堡.jpg",
          description:
            "誘人的花生醬，香濃又不膩，還可以自由搭配麵包體(菠蘿or漢堡)，好吃飽食感十足！",
          remarks: "附薯條、飲料",
          recommend: "招牌",
          unitPrice: 240,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "漢堡蓋子選擇",
              option: [
                {
                  optionTitle: "美式漢堡麵包",
                  increasePrice: 0
                },
                {
                  optionTitle: "香酥菠蘿",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "漢堡肉餡選擇",
              option: [
                {
                  optionTitle: "100%澳洲純牛肉",
                  increasePrice: 0
                },
                {
                  optionTitle: "香酥轟炸雞柳",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 3,
              title: "漢堡加購",
              option: [
                {
                  optionTitle: "起司醬",
                  increasePrice: 30
                },
                {
                  optionTitle: "甜酒醬",
                  increasePrice: 30
                },
                {
                  optionTitle: "墨西哥辣肉醬",
                  increasePrice: 40
                },
                {
                  optionTitle: "起司片",
                  increasePrice: 30
                }
              ],
              requiredItem: true,
              itemType: "checkbox"
            },
            {
              itemNo: 4,
              title: "套餐飲料",
              option: [
                {
                  optionTitle: "可口可樂",
                  increasePrice: 0
                },
                {
                  optionTitle: "雪碧",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱咖啡",
                  increasePrice: 50
                }
              ],
              requiredItem: true,
              itemType: "radio"
            }
          ]
        }
      },
      {
        menuClassNo: "2",
        menuClass: "蓋氏堡(附薯條、飲料)",
        menuItem: {
          name: "雙層牛肉起司堡",
          img: "images/Gatsby蓋子美式餐廳/雙層牛肉起司堡.jpg",
          description: "",
          remarks: "附薯條、飲料",
          recommend: "招牌",
          unitPrice: 290,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "漢堡蓋子選擇",
              option: [
                {
                  optionTitle: "美式漢堡麵包",
                  increasePrice: 0
                },
                {
                  optionTitle: "香酥菠蘿",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "漢堡加購",
              option: [
                {
                  optionTitle: "起司醬",
                  increasePrice: 30
                },
                {
                  optionTitle: "甜酒醬",
                  increasePrice: 30
                },
                {
                  optionTitle: "墨西哥辣肉醬",
                  increasePrice: 40
                },
                {
                  optionTitle: "起司片",
                  increasePrice: 30
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            },
            {
              itemNo: 3,
              title: "套餐飲料",
              option: [
                {
                  optionTitle: "可口可樂",
                  increasePrice: 0
                },
                {
                  optionTitle: "雪碧",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱咖啡",
                  increasePrice: 50
                }
              ],
              requiredItem: true,
              itemType: "radio"
            }
          ]
        }
      },
      {
        menuClassNo: "2",
        menuClass: "蓋氏堡(附薯條、飲料)",
        menuItem: {
          name: "岩漿辣起司轟炸雞腿堡",
          img: "",
          description:
            "特製的辣起司醬，熱熔過後像瀑布一樣流下，令人難以忘懷的滋味。",
          remarks: "固定雞腿，附薯條、飲料",
          recommend: "",
          unitPrice: 315,
          salesStatus: "已售完",
          customItem: [
            {
              itemNo: 1,
              title: "漢堡蓋子選擇",
              option: [
                {
                  optionTitle: "美式漢堡麵包",
                  increasePrice: 0
                },
                {
                  optionTitle: "香酥菠蘿",
                  increasePrice: 0
                }
              ],
              requiredItem: true,
              itemType: "radio"
            },
            {
              itemNo: 2,
              title: "漢堡加購",
              option: [
                {
                  optionTitle: "起司醬",
                  increasePrice: 30
                },
                {
                  optionTitle: "甜酒醬",
                  increasePrice: 30
                },
                {
                  optionTitle: "墨西哥辣肉醬",
                  increasePrice: 40
                },
                {
                  optionTitle: "起司片",
                  increasePrice: 30
                }
              ],
              requiredItem: false,
              itemType: "checkbox"
            },
            {
              itemNo: 3,
              title: "套餐飲料",
              option: [
                {
                  optionTitle: "可口可樂",
                  increasePrice: 0
                },
                {
                  optionTitle: "雪碧",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱咖啡",
                  increasePrice: 50
                }
              ],
              requiredItem: true,
              itemType: "radio"
            }
          ]
        }
      },
      {
        menuClassNo: "3",
        menuClass: "墨西哥起司薄餅",
        menuItem: {
          name: "夏威夷雞肉起司薄餅",
          img: "images/Gatsby蓋子美式餐廳/夏威夷雞肉起司薄餅.jpg",
          description:
            "淡淡微醺的威士忌烤肉醬，裹在鮮嫩多汁的雞米花上面，加入焙煎鳳梨，撒上滿滿的起司，最後用小火慢慢呵護慢煎至酥脆。",
          remarks: "",
          recommend: "",
          unitPrice: 195,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "加購飲料",
              option: [
                {
                  optionTitle: "可口可樂",
                  increasePrice: 0
                },
                {
                  optionTitle: "雪碧",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱咖啡",
                  increasePrice: 50
                }
              ],
              requiredItem: false,
              itemType: "radio"
            }
          ]
        }
      },
      {
        menuClassNo: "3",
        menuClass: "墨西哥起司薄餅",
        menuItem: {
          name: "嫩煎松阪豬起司薄餅",
          img: "",
          description: "",
          remarks: "",
          recommend: "熱銷商品",
          unitPrice: 295,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "加購飲料",
              option: [
                {
                  optionTitle: "可口可樂",
                  increasePrice: 0
                },
                {
                  optionTitle: "雪碧",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱咖啡",
                  increasePrice: 50
                }
              ],
              requiredItem: false,
              itemType: "radio"
            }
          ]
        }
      },
      {
        menuClassNo: "4",
        menuClass: "義大利麵",
        menuItem: {
          name: "明太子鮮蝦奶油培根麵",
          img: "",
          description:
            "哇~超鮮的明太子鮮蝦奶油培根義大利麵，給想吃好吃義大利麵的朋友，這是您最佳選擇唷！",
          remarks: "",
          recommend: "",
          unitPrice: 240,
          salesStatus: "銷售中",
          customItem: [
            {
              itemNo: 1,
              title: "加購飲料",
              option: [
                {
                  optionTitle: "可口可樂",
                  increasePrice: 0
                },
                {
                  optionTitle: "雪碧",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "熱紅茶",
                  increasePrice: 0
                },
                {
                  optionTitle: "冰奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱奶茶",
                  increasePrice: 10
                },
                {
                  optionTitle: "熱咖啡",
                  increasePrice: 50
                }
              ],
              requiredItem: false,
              itemType: "radio"
            }
          ]
        }
      }
    ]
  }
];

// 建立 DOM
let shoppingData = JSON.parse(localStorage.getItem("shopping")) || [];
let storesLen = stores.length;
let storeSelect = document.getElementById("storeSelect");
let myShoppingList = document.querySelector("#myShopping .UnitContent");
let XSmyShoppingList = document.querySelector("#myShopping-xs");
let shoppingIcon = document.querySelector("#shoppingIcon");

// 監聽
storeSelect.addEventListener("change", selectUpDate, false);

// 網頁預設
function init() {
  // select 店家
  let storeOption = `<option selected disabled>- - 請選擇店家 - -</option>`;
  for (let i = 0; i < storesLen; i++) {
    let storeName = stores[i].name;
    storeOption += `<option>${storeName}</option>`;
  }
  storeSelect.innerHTML = storeOption;

  // 預設店家資料(更新資料)
  localStorage.setItem('thisStore',JSON.stringify(stores[1]));
  upData(stores[1]);
}
init();

// 選擇 select 更新資料
function selectUpDate(e) {
  let nowStoreOption = e.target.value;

  for (let i = 0; i < storesLen; i++) {
    if (nowStoreOption == stores[i].name) {
      // 更新資料
      localStorage.setItem('thisStore',JSON.stringify(stores[i]));
      upData(stores[i]);
    }
  }
}

// 更新資料
function upData(store) {
  // 依 產品類別(menuClass) 排序
  store.menu = store.menu.sort(function(a, b) {
    return a.menuClassNo > b.menuClassNo ? 1 : -1;
  });

  const storeName = store.name;
  const storeMainClass = store.class.mainClass;
  const storeSubClass = store.class.subClass;
  const storeLogoUrl = store.logo;
  const storeBannerUrl = store.banner;
  const deliveryTakesTimeM =
    store.deliveryNews.deliveryTakesTimeM.minM +
    "-" +
    store.deliveryNews.deliveryTakesTimeM.maxM;
  const deliveryMinAmount = store.deliveryNews.deliveryMinAmount;
  const deliveryServiceFee = store.deliveryNews.deliveryServiceFee;
  if (deliveryServiceFee == "0%") {
    var nowDeliveryServiceFee = "免";
  } else {
    var nowDeliveryServiceFee = deliveryServiceFee;
  }
  const deliveryTime = timeStrGroup(store.deliveryNews.deliveryTime);
  const storeTel = store.tel;
  const storeAdd = store.add;
  const storeAddMap = store.addMap;
  const businessHours = timeStrGroup(store.businessHours);
  // 組成 外送時間 或 營業時間 字串 - 結尾不加<br/> 故陣列長度需要 -1
  function timeStrGroup(str) {
    const strSplit = str.split(",");
    const strSplitLen = strSplit.length - 1;
    const strSplitEnd = `<li>${strSplit[strSplitLen]}</li>`;
    if (strSplitLen > 0) {
      let str = "";
      for (let i = 0; i < strSplitLen; i++) {
        str += `<li>${strSplit[i]}</li>`;
        let time = str + strSplitEnd;
        return time;
      }
    } else {
      return strSplitEnd;
    }
  }

  const storeAboutSplit = store.about.split(" ");
  // 組成 關於我(storeAbout) 字串 - 結尾不加<br/> 故陣列長度需要 -1
  const storeAboutSplitLen = storeAboutSplit.length - 1;
  const storeAboutEnd = storeAboutSplit[storeAboutSplitLen];
  if (storeAboutSplitLen > 0) {
    let str = "";
    for (let i = 0; i < storeAboutSplitLen; i++) {
      str += `${storeAboutSplit[i]}<br/>`;
      var storeAbout = str + storeAboutEnd;
    }
  } else {
    var storeAbout = storeAboutEnd;
  }

  // banner 店家招牌
  let bannerAll = document.getElementById("banner-all");
  bannerAll.innerHTML = `<div class="banner-ImgFrame"> <img src="${storeBannerUrl}" alt="${storeName}">
  <div id="banner-StoreText">
    <div class="StoreText-content">
      <div class="d-flex justify-content-start align-items-center">
        <div class="ImgFrame"><img src="${storeLogoUrl}" alt="${storeName}logo" class="img-circle"></div>
        <h1 class="StoreName">${storeMainClass}．${storeName}</h1>
      </div>
      <ul class="list-unstyled">
        <li>${storeSubClass}</li>
        <li><i class="fas fa-shipping-fast"></i>外送${deliveryTakesTimeM}分鐘</li>
        <li class="divider"></li>
        <li class="aboutStore">關於店家<a href="#storeModal" class="pull-right" type="button"
            data-toggle="modal"><i class="icon-angle-right"></i>詳情</a></li>
      </ul>
    </div>
  </div>
</div>`;

  // 關於店家 Modal
  let storeModal = document.getElementById("storeModal");
  storeModal.innerHTML = `
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <div class="bgFrame"> <img src="${storeBannerUrl}" alt="${storeName}"></div>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
        <div class="modal-StoreText">
          <div class="ImgFrame hidden-xs"><img src="${storeLogoUrl}" alt="${storeName}logo"></div>
          <div class="modal-StoreText-content">
            <h2 class="StoreName">${storeMainClass}．${storeName}</h2>
            <p>${storeSubClass}</p>
            <div class="titleLine"></div>
            <ul class="list-inline">
              <li><i class="fas fa-shipping-fast"></i>外送${deliveryTakesTimeM}分鐘</li>
              <li><i class="fas fa-info-circle"></i>${deliveryMinAmount}</li>
              <li><i class="fas fa-info-circle"></i>${nowDeliveryServiceFee}服務費</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
              <div class="row">
                <div class="content-flex">
                  <div class="col-md-7">
                    <ul class="list-unstyled">
                      <li class="font-444"><strong>外送時間</strong></li>${deliveryTime}
                      <li class="titleLine"></li>
                      <li><i class="fas fa-phone-volume"></i>${storeTel}</li>
                      <li><i class="fas fa-map-marker-alt"></i>${storeAdd}</li>
                      <li class="titleLine"></li>
                      <li class="font-444"><strong>營業時間</strong></li>${businessHours}
                    </ul>
                  </div>
                  <div class="col-md-5">
                    <div class="iframe-border">
                      <div class="embed-responsive embed-responsive-custom">
                        <iframe class="embed-responsive-item"
                          src="${storeAddMap}" frameborder="0" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 class="UnitTitle">關於我</h2>
              <div class="titleLine"></div>
              <p>${storeAbout}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  // 分類菜單(選單)
  let classMenu = document.querySelector("#ClassMenu ul");
  let MenuClassArr = [];
  let storeMenuLen = store.menu.length;
  for (let x = 0; x < storeMenuLen; x++) {
    let nowMenuClass = store.menu[x].menuClass;
    if (MenuClassArr.indexOf(nowMenuClass) == -1) {
      MenuClassArr.push(nowMenuClass);
      let menuClassArrLen = MenuClassArr.length;
      let menuClassItem = "";
      for (let y = 0; y < menuClassArrLen; y++) {
        if (y == 0) {
          var activeMenuItem = `<li class="swiper-slide active"><a href="#ClassMenu${y +
            1}">${MenuClassArr[y]}</a></li>`;
        } else {
          menuClassItem += `<li class="swiper-slide"><a href="#ClassMenu${y +
            1}">${MenuClassArr[y]}</a></li>`;
        }
      }
      classMenu.innerHTML = activeMenuItem + menuClassItem;
    }
  }

  let productList = document.getElementById("productList");
  let menuClassArrLen = MenuClassArr.length;
  let productListStr = "";
  // 產品系列 標題+內容
  for (let x = 0; x < menuClassArrLen; x++) {
    let productSingleContent = "";
    // 產品內容
    for (let y = 0; y < storeMenuLen; y++) {
      if (MenuClassArr[x] == store.menu[y].menuClass) {
        const productName = store.menu[y].menuItem.name;
        const productUrl = store.menu[y].menuItem.img;
        if (productUrl !== "") {
          var newProductUrl = `<div class="ImgFrame"><img src="${productUrl}" alt="${storeName}-${productName}"></div>`;
        } else {
          var newProductUrl = "";
        }

        const productRemarks = store.menu[y].menuItem.remarks;
        if (productRemarks !== "") {
          var newProductRemarks = `<p>${productRemarks}</p>`;
        } else {
          var newProductRemarks = "";
        }

        const productRecommend = store.menu[y].menuItem.recommend;
        if (productRecommend !== "") {
          var newProductRecommend = `<h6><i class="fas fa-thumbs-up"></i>${productRecommend}</h6>`;
        } else {
          var newProductRecommend = "";
        }
        const productUnitPrice = store.menu[y].menuItem.unitPrice;
        const productSalesStatus = store.menu[y].menuItem.salesStatus;
        if (productSalesStatus == "已售完") {
          var newProductSalesStatus = `<div class="soldOut">${productSalesStatus}</div>`;
          var soldOutClass = "disabled";
        } else {
          var newProductSalesStatus = "";
          var soldOutClass = "";
        }
        productSingleContent += `<div class="productSingle">${newProductSalesStatus}<a href="#productModal" type="button" data-toggle="modal" data-title="${productName}" class="btn ${soldOutClass}">
          <div class="productSingle-flex">${newProductUrl}
            <div class="ProductText">
              <h3>${productName}</h3>${newProductRemarks}${newProductRecommend}
            </div>
            <div class="ml-auto ProductPrice">$${productUnitPrice}</div>
          </div>
        </a></div>`;
      }
    }
    // 產品系列 標題
    productListStr += `<!--單一 產品系列-->
    <div id="ClassMenu${x + 1}" class="productClass-single">
      <!-- 產品系列 標題-->
      <h2 class="UnitTitle">${MenuClassArr[x]}</h2><!-- 產品內容 -->
      <div class="UnitContent">${productSingleContent}</div></div>`;
    productList.innerHTML = productListStr;
  }
  
  
  // 產品詳情 Modal
  $("#productModal").on("show.bs.modal", function(e) {
    let store = JSON.parse(localStorage.getItem('thisStore'));
    let storeMenuLen = store.menu.length;
    let productModalBtn = $(e.relatedTarget); // 選擇當初觸發事件的按鈕
    let nowProductName = productModalBtn.data("title"); // 使用 data-* 來取得特定內容
    // 建立 產品詳情 Modal 內容
    for (let i = 0; i < storeMenuLen; i++) {
      let menuArr = store.menu[i];
      if (nowProductName == menuArr.menuItem.name) {
        let productName = menuArr.menuItem.name;
        let productDescription = menuArr.menuItem.description;
        if (productDescription !== "") {
          var newProductDescription = `<!-- 產品介紹--><p class="ProductIntroduction">${productDescription}</P>`;
        } else {
          var newProductDescription = "";
        }

        let productImgUrl = menuArr.menuItem.img;
        if (productImgUrl !== "") {
          var newProductImgUrl = `<div class="LeftImg"><img src="${productImgUrl}" alt="${storeName}-${productName}"></div>`;
        } else {
          var newProductImgUrl = "";
        }
        let productRecommend = menuArr.menuItem.recommend;
        if (productRecommend !== "") {
          var newProductRecommend = `<span class="label label-outline-orange"><i class="fas fa-thumbs-up"></i>${productRecommend}</span>`;
        } else {
          var newProductRecommend = "";
        }
        let productRemarks = menuArr.menuItem.remarks;
        if (productRemarks !== "") {
          var newProductRemarks = `<p>${productRemarks}</p>`;
        } else {
          var newProductRemarks = "";
        }
        let productUnitPrice = menuArr.menuItem.unitPrice;
        let productCustomItem = menuArr.menuItem.customItem;
        let productCustomItemLen = productCustomItem.length;
        if (productCustomItemLen > 0) {
          for (let y = 0; y < productCustomItemLen; y++) {
            let customItemNo = menuArr.menuItem.customItem[y].itemNo;
            let customItemTitle = menuArr.menuItem.customItem[y].title;
            let customItemRequired =
              menuArr.menuItem.customItem[y].requiredItem;
            if (customItemRequired) {
              var newCustomItemRequired = `<div class="required error">必填</div>`;
            } else {
              var newCustomItemRequired = "";
            }
            let customItemOptionArr = menuArr.menuItem.customItem[y].option;
            let customItemOptionArrLen = customItemOptionArr.length;
            let customItemType = menuArr.menuItem.customItem[y].itemType;
            let newCustomItemOptionArr = "";
            for (let x = 0; x < customItemOptionArrLen; x++) {
              let customItemOptionTitle =
                menuArr.menuItem.customItem[y].option[x].optionTitle;
              let customItemIncreasePrice =
                menuArr.menuItem.customItem[y].option[x].increasePrice;
              if (customItemIncreasePrice !== 0) {
                var newCustomItemIncreasePrice = `<font>(+$${customItemIncreasePrice})</font>`;
              } else {
                var newCustomItemIncreasePrice = "";
              }
              if (customItemType == "radio") {
                var checkStyle = "checkround";
                var name = `optionsRadios${customItemNo}`;
              } else if (customItemType == "checkbox") {
                var checkStyle = "checkmark";
                /*  customItemNo += 1; */
                var name = `optionsCheckbox${customItemNo}`;
              }
              let inputId = customItemType + (x + 1);
              newCustomItemOptionArr += `<label class="${customItemType}">
            <input data-title="${customItemTitle}" data-required="${customItemRequired}" type="${customItemType}" id="${inputId}" name="${name}" value="${customItemOptionTitle}+$${customItemIncreasePrice}">${customItemOptionTitle}${newCustomItemIncreasePrice}<span class="${checkStyle} ml-auto"></span></label>`;
            }

            if (customItemNo == 1) {
              var newProductCustomItem = `<div class="panel panel-default">
              <div class="panel-heading" role="tab" id="heading-${customItemNo}">
                <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion"
                    href="#collapse-${customItemNo}" aria-expanded="true" aria-controls="collapse-${customItemNo}">${customItemTitle}${newCustomItemRequired}
                  </a> </h4>
              </div>
              <div id="collapse-${customItemNo}" class="panel-collapse collapse in" role="tabpane${customItemNo}" aria-labelledby="heading-${customItemNo}">
                <div class="panel-body">${newCustomItemOptionArr}
                </div>
              </div>
            </div>`;
            } else {
              newProductCustomItem += `<div class="panel panel-default">
              <div class="panel-heading" role="tab" id="heading-${customItemNo}">
                <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion"
                    href="#collapse-${customItemNo}" aria-expanded="false" aria-controls="collapse-${customItemNo}" class="collapsed">${customItemTitle}${newCustomItemRequired}
                  </a> </h4>
              </div>
              <div id="collapse-${customItemNo}" class="panel-collapse collapse" role="tabpane${customItemNo}" aria-labelledby="heading-${customItemNo}">
                <div class="panel-body">${newCustomItemOptionArr}</form>
                </div>
              </div>
            </div>`;
            }
          }
        } else {
          var newProductCustomItem = "";
        }

        let CustomTextareaNum = productCustomItemLen + 1;
        let CustomTextarea = `<div class="panel panel-default">
          <div class="panel-heading" role="tab" id="heading-${CustomTextareaNum}">
            <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion"
                href="#collapse-${CustomTextareaNum}" aria-expanded="true" aria-controls="collapse-${CustomTextareaNum}">特殊指示
                <div class="remarks">EX.不要小黃瓜等</div>
              </a> </h4>
          </div>
          <div id="collapse-${CustomTextareaNum}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading-${CustomTextareaNum}">
            <div class="panel-body">
              <div class="px-4 py-3">
                <textarea class="form-control" placeholder="請寫下會讓您「過敏」或是「不想加的食材」
EX.不要小黃瓜、不要花生...等"></textarea>
              </div>
            </div>
          </div>
        </div>`;
        let productModal = document.getElementById("productModal");
        productModal.innerHTML = `
        <div class="modal-dialog modal-lg" role="document">
        <form id="shoppingForm">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
            <div class="d-flex justify-content-start align-items-center">${newProductImgUrl}
              <div class="RightText">
                <h4 class="modal-title">${productName}${newProductRecommend}</h4>${newProductRemarks}
                <font>$${productUnitPrice}</font>
              </div>
            </div>${newProductDescription}
          </div>
          <div class="modal-body">
            <!-- 自訂項目(摺疊 Collapse)-->
            <div class="panel-group" id="CustomAccordion" role="tablist" aria-multiselectable="true">${newProductCustomItem}${CustomTextarea}</div>
          </div>
          <div class="modal-footer">
            <!-- 數量-->
            <div class="inputQuantity">
              <div class="input-group"> <span class="input-group-btn">
                  <button type="button" class="btn btn-LightGray btn-number" data-type="minus" data-field="quant[1]">
                    <span class="glyphicon glyphicon-minus"></span> </button>
                </span>
                <input type="text" name="quant[1]" class="form-control input-number" value="1" min="1" max="100" autocomplete="off">
                <span class="input-group-btn">
                  <button type="button" class="btn btn-LightGray btn-number" data-type="plus" data-field="quant[1]"> <span
                      class="glyphicon glyphicon-plus"></span> </button>
                </span> </div>
            </div>
            <div class="addBtn">
              <button type="button" class="btn btn-orange btn-block" data-dismiss="modal" disabled="disabled">新增1份至購物車<font class="pull-right">$${productUnitPrice}</font></button>
            </div>
          </div>
        </div>
        </form>
      </div>`;
      }
    }

    // 驗證表單(產品詳情 Modal)
    let shoppingForm = document.getElementById("shoppingForm");
    let quantityBtn = document.querySelector(".inputQuantity");
    let addShoppingBtn = document.querySelector(".addBtn button");
    shoppingForm.addEventListener("input", checkedData, false);
    shoppingForm.addEventListener("focus", checkedData, false);
    quantityBtn.addEventListener("click", checkedData, false);
    addShoppingBtn.addEventListener("click", addShopping, false);

    function checkedData(e) {
      let AllFormEl = shoppingForm.elements;
      let AllFormElLen = AllFormEl.length;
      let customItem = [];
      for (let x = 0; x < AllFormElLen; x++) {
        let thisType = AllFormEl[x].type;
        let thisValue = AllFormEl[x].value;
        let thisChecked = AllFormEl[x].checked;
        if (thisType == "radio" || thisType == "checkbox") {
          let customItemTitle = AllFormEl[x].dataset.title;
          let nowElRequired = e.target.dataset.required;
          if (nowElRequired == "true") {
            let removeBtn =
              e.target.parentNode.parentNode.parentNode.parentNode.firstChild
                .nextSibling.firstChild.nextSibling.firstChild.nextSibling
                .firstChild.nextSibling;
            let nowElName = e.target.name;
            let nowElNameArr = document.getElementsByName(nowElName);
            let nowElNameArrLen = nowElNameArr.length;
            let nowElNameArrChecked = [];
            for (let y = 0; y < nowElNameArrLen; y++) {
              nowElNameArrChecked.push(nowElNameArr[y].checked);
              if (nowElNameArrChecked.indexOf(true) == -1) {
                addShoppingBtnHasDisabled();
                removeBtn.classList.add("error");
              } else {
                removeBtn.classList.remove("error");
                addShoppingBtnHasDisabled();
              }
            }
          }

          if (thisChecked) {
            let thisValueSplit = thisValue.split("+$");
            let optionTitle = thisValueSplit[0];
            let increasePrice = parseInt(thisValueSplit[1]);
            let customItemContent = {
              Title: customItemTitle,
              option: {
                optionTitle: optionTitle,
                increasePrice: increasePrice
              }
            };
            customItem.push(customItemContent);
          }
        } else if (thisType == "textarea") {
          var customRemarks = thisValue;
        } else if (thisType == "text") {
          var quantity = parseInt(thisValue);
        }
      }

      let unitPrice = parseInt(
        document.querySelector(".RightText font").textContent.split("$")[1]
      );
      let customItemLen = customItem.length;
      let customItemTotal = 0;
      for (let a = 0; a < customItemLen; a++) {
        let increasePrice = customItem[a].option.increasePrice;
        customItemTotal += increasePrice;
      }

      let total = (unitPrice + customItemTotal) * quantity;
      let shoppingItemID = Math.floor(Date.now());
      let shoppingItem = {
        id: shoppingItemID,
        storeName: storeName,
        name: nowProductName,
        unitPrice: unitPrice,
        customItem: customItem,
        customRemarks: customRemarks,
        quantity: quantity,
        customItemTotal: customItemTotal,
        total: total
      };

      addShoppingBtn.innerHTML = `新增${quantity}份至購物車<font class="pull-right">$${total}</font>`;
      localStorage.setItem("thisShoppingItem", JSON.stringify(shoppingItem));
    }

    // 新增至購物車
    function addShopping() {
      let thisShoppingItem = JSON.parse(
        localStorage.getItem("thisShoppingItem")
      );
      shoppingData.push(thisShoppingItem);
      localStorage.setItem("shopping", JSON.stringify(shoppingData));
      addShoppingList(shoppingData);
    }

    // 新增至購物車 按鈕 是否停用
    addShoppingBtnHasDisabled();
    function addShoppingBtnHasDisabled() {
      let errorArrLen = document.getElementsByClassName("error").length;
      if (errorArrLen == 0) {
        addShoppingBtn.disabled = false;
      } else {
        addShoppingBtn.disabled = true;
      }
    }
  });

  //  我的購物車 訂購列表
  addShoppingList(shoppingData);
  function addShoppingList(shoppingData) {
    let thisStore = JSON.parse(localStorage.getItem('thisStore'));
    let storeName = thisStore.name;
    let shoppingDataFilter = shoppingData.filter(function(item, index, array) {
      return item.storeName == storeName;
    });

    let shoppingDataFilterLen = shoppingDataFilter.length;
    if (shoppingDataFilterLen === 0) {
      myShoppingList.innerHTML = `<p>您的購物車為空的<br/>立即訂購您喜歡的產品！</p>`;
      XSmyShoppingList.innerHTML = `<a class="btn btn-LightGray disabled btn-block btn-lg" href="#" role="button"><i class="fas fas fa-cart-plus"></i>購物車為空的，立即訂購</a>`;
      // Shopping ICON
      shoppingIcon.setAttribute("class", "font-888");
      shoppingIcon.innerHTML = `<i class="fas fa-shopping-cart"></i></i><span class="badge">0</span>`;
    } else {
      let shoppingListTotalQuantity = 0;
      let shoppingListSubtotal = 0;
      let shoppingItem = "";
      for (let i = 0; i < shoppingDataFilterLen; i++) {
        let id = shoppingDataFilter[i].id;
        let name = shoppingDataFilter[i].name;
        let quantity = shoppingDataFilter[i].quantity;
        shoppingListTotalQuantity += quantity;
        let itemTotal = shoppingDataFilter[i].total;
        shoppingListSubtotal += itemTotal;
        var serviceFee = Math.round(
          shoppingListSubtotal * (parseInt(deliveryServiceFee) / 100)
        );
        var allShoppingTotal = shoppingListSubtotal + serviceFee;
        let customRemarks = shoppingDataFilter[i].customRemarks;
        if (customRemarks == "") {
          var nowCustomRemarks = "";
        } else {
          var nowCustomRemarks = `<li>${customRemarks}</li>`;
        }
        let customItemArr = shoppingDataFilter[i].customItem;
        let customItem = "";
        for (let x = 0; x < customItemArr.length; x++) {
          let optionTitle = customItemArr[x].option.optionTitle;
          let increasePrice = customItemArr[x].option.increasePrice;
          if (increasePrice == 0) {
            var nowIncreasePrice = "";
          } else {
            var nowIncreasePrice = `(+$${increasePrice})`;
          }
          customItem += `<li>${optionTitle}${nowIncreasePrice}</li>`;
        }
        if (customItem == "" && customRemarks == "") {
          var customItemList = "";
        } else {
          var customItemList = `<ul class="list-inline">${customItem}${nowCustomRemarks}</ul>`;
        }
        shoppingItem += `<!-- 單一 訂購產品 -->
          <tr>
            <td class="shoppingProduct"><h5>${name}</h5>${customItemList}</td>
            <td class="text-right">×${quantity}</td>
            <td class="text-right">$${itemTotal}</td>     
            <td class="shoppingDel"><button class="btn btn-delete" type="button" data-id="${id}"><i
                  class="fas fa-trash-alt"></i></button></td>
          </tr>`;
      }
      // SM 尺寸以上 myShoppingList
      myShoppingList.innerHTML = `<table class="table table-hover shoppingList">
        <tbody>${shoppingItem}</tbody></table>
        <!--訂購金額-->
                <table class="table shoppingAmount">
                  <tbody>
                    <tr class="active">
                      <td scope="row" class="text-left">小計</td>
                      <td class="text-right">$${shoppingListSubtotal}</td>
                    </tr>
                    <tr class="active">
                      <td scope="row" class="text-left">服務費</td>
                      <td class="text-right">$${serviceFee}</td>
                    </tr>
                    <tr class="active">
                      <td colspan="2" class="divider">
                        <div class="line"></div>
                      </td>
                    </tr>
                    <tr class="active total">
                      <td scope="row" class="text-left">總計(共${shoppingListTotalQuantity}份)</td>
                      <td class="text-right">$${allShoppingTotal}</td>
                    </tr>
                  </tbody>
                </table>`;

      // XS 尺寸以下 myShoppingList
      XSmyShoppingList.innerHTML = `<a class="btn btn-orange disabled btn-block btn-lg" href="#" role="button"><i class="fas fa-shopping-cart"></i>檢視購物車
        <div class="pull-right"><strong>總計(共${shoppingListTotalQuantity}份)<font>$${allShoppingTotal}</font></strong></div></a>`;

      // Shopping ICON
      shoppingIcon.setAttribute("class", "font-orange");
      shoppingIcon.innerHTML = `<i class="fas fa-shopping-cart"></i></i><span class="badge orange">${shoppingListTotalQuantity}</span>`;
    }
  }

  // 刪除訂購項目
  myShoppingList.addEventListener("click", delData, false);
  function delData(e) {
    console.log(storeName);
    let thisClick = e.target;
    let thisName = thisClick.nodeName;
    if (thisName == "I") {
      let thisClickID = thisClick.parentNode.dataset.id;
      let shoppingDataLen = shoppingData.length;
      for (let i = 0; i < shoppingDataLen; i++) {
        if (shoppingData[i].id == thisClickID) {
          shoppingData.splice(i, 1);
          localStorage.setItem("shopping", JSON.stringify(shoppingData));
          addShoppingList(shoppingData);
          console.log(storeName);
          break;
        }
      }
    }
  }
}
