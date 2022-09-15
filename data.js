'use strict'

let baseId = 1;
const getCardId = () => baseId++;

const cardGroupFirst = [
    {
        id: 1,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Okul-Aktivite-Boya.png',
            text: 'Okul Aktivite ve Boya'
        }


    },

    {
        id: 2,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Kalem-Kutusu.png',
            text: 'Kalem Kutusu'
        }


    },
    {
        id: 3,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Suluk.png',
            text: 'Okul Suluk & Matara'
        }


    },
    {
        id: 4,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Masaüstü-Gereçleri.png',
            text: 'Masa Üstü Gereçleri'
        }


    },
    {
        id: 5,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Beslenme-cantası.png',
            text: 'Beslenme Çantası ve Kapları'
        }


    },
    {
        id: 6,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Boya-Kalemi.png',
            text: 'Boya Kalemi'
        }


    },
    {
        id: 7,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Erkek-Çocuk-Ayakkabı.png',
            text: 'Erkek Çocuk Ayakkabı'
        }


    },
    {
        id: 8,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/cocuk-Giyim.png',
            text: 'Çocuk Giyim'
        }


    },
    {
        id: 9,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Kız-Çocuk-Ayakkabı.png',
            text: 'Kız Çocuk Ayakkabı'
        }


    },
    {
        id: 10,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/calışma-Koltukları.png',
            text: 'Çalışma Koltukları'
        }


    },
    {
        id: 11,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Defterler.png',
            text: 'Defterler'
        }


    },
    {
        id: 12,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Kulaklıklar.png',
            text: 'Kulaklıklar'
        }


    }
]
const cardGroupSecond = [
    {
        id: 1,
        card: [
            {
                id: getCardId(),
                image: './assets/image/card-image/Sac-Bakım-urunleri.png',
                text: 'Saç Bakım Ürünleri'
            }

        ]
    },
    {
        id: 2,
        card: [
            {
                id: getCardId(),
                image: './assets/image/card-image/Deodorantlar.png',
                text: 'Deodorantlar'
            }

        ]
    },
    {
        id: 3,
        card: [
            {
                id: getCardId(),
                image: './assets/image/card-image/Besin-Takviyeleri.png',
                text: 'Besin Takviyeleri ve OTC'
            }

        ]
    },
    {
        id: 4,
        card: [
            {
                id: getCardId(),
                image: './assets/image/card-image/Hijyen-ürünleri.png',
                text: 'Hijyen Ürünleri'
            }

        ]
    },
    {
        id: 5,
        card: [
            {
                id: getCardId(),
                image: './assets/image/card-image/Erkek-Sırt-Çantası.png',
                text: 'Erkek Sırt Çantası'
            }

        ]
    },
    {
        id: 6,
        card: [
            {
                id: getCardId(),
                image: './assets/image/card-image/Kadın-Sırt-Çantası.png',
                text: 'Kadın Sırt Çantası'
            }

        ]
    }

]
const cardGroupThird = [
    {
        id: 1,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Bebek-Sabunları.png',
            text: 'Bebek, Çocuk Sabunları'
        }


    },
    {
        id: 2,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/bebek-Kolonyası.png',
            text: 'Bebek, Çocuk Kolonya'
        }


    },
    {
        id: 3,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Bebek-sampuan.png',
            text: 'Bebek, Çocuk Şampuan'
        }


    },
    {
        id: 4,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Sağlıklı-Yiyecekler.png',
            text: 'Sağlıklı Yiyecekler'
        }


    },
    {
        id: 5,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Kuruyemiş.png',
            text: 'Kuruyemiş ve Kuru Meyve'
        }


    },
    {
        id: 6,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Dosyalama.png',
            text: 'Dosyalama ve Arşivleme'
        }


    },
    {
        id: 7,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Defter-Ajanda.png',
            text: 'Defter ve Ajanda'
        }


    },
    {
        id: 8,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Fotokopi-Kağıtları.png',
            text: 'Fotokopi Kağıtları'
        }


    },
    {
        id: 9,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Kalemler.png',
            text: 'Kalemler'
        }


    },
    {
        id: 10,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/Oyuncu-Koltukları.png',
            text: 'Oyuncu Koltukları'
        }


    },
    {
        id: 11,
        card:
        {
            id: getCardId(),
            image: './assets/image/card-image/akıllı-Saatler.png',
            text: 'Akıllı Saat ve Bileklikler'
        }


    }
]

