const SHOP_DATA = [
  {
    title: 'Processors',
    items: [
      {
        id: 1,
        name: "Intel Core i3",
        imageUrl: "https://cdn.mdcomputers.in/image/cache/catalog/processor/intel/bx80684i39350kf/bx80684i39350kf-image-main-600x600.jpg",
        price: 120
      },
      {
        id: 2,
        name: "Intel Core i5",
        imageUrl: "https://m.media-amazon.com/images/I/71709S6VMTL._SY450_.jpg",
        price: 180
      },
      {
        id: 3,
        name: "Intel Core i7",
        imageUrl: "https://cdn.mdcomputers.in/image/cache/catalog/processor/intel/i7-10700k/i7-10700k-image-main-600x600.jpg",
        price: 250
      },
      {
        id: 4,
        name: "Intel Core i9",
        imageUrl: "https://m.media-amazon.com/images/I/61ZRFy6GZ4L._SL1280_.jpg",
        price: 250
      },
      {
        id: 5,
        name: 'Ryzen 3',
        imageUrl: 'https://www.powerplanetonline.com/cdnassets/amd_ryzen_3_4100_01_l.jpg',
        price: 130,
      },
      {
        id: 6,
        name: 'Ryzen 5',
        imageUrl: 'https://www.notebookcheck.net/fileadmin/Notebooks/AMD/ryzen5_badge.jpg',
        price: 170,
      },
      {
        id: 7,
        name: 'Ryzen 7',
        imageUrl: 'https://m.media-amazon.com/images/I/61DYLoyNRWL._SL1384_.jpg',
        price: 220,
      },
      {
        id: 8,
        name: 'Ryzen 9',
        imageUrl: 'https://www.tradeinn.com/f/13821/138214230/amd-ryzen-9-5950x-3.4ghz-cpu.jpg',
        price: 260,
      }
    ],
  },
  {
    title: 'Graphics Cards',
    items: [
      {
        id: 10,
        name: 'NVIDIA RTX 3090',
        imageUrl: 'https://m.media-amazon.com/images/I/81QuOSSvYAS._AC_SL1500_.jpg',
        price: 750,
      },
      {
        id: 11,
        name: 'NVIDIA RTX 3080Ti',
        imageUrl: 'https://m.media-amazon.com/images/I/619h9dd1VhS._SL1000_.jpg',
        price: 280,
      },
      {
        id: 12,
        name: 'NVIDIA RTX 3070',
        imageUrl: 'https://m.media-amazon.com/images/I/519Rza80gZS.jpg',
        price: 110,
      },
      {
        id: 13,
        name: 'NVIDIA RTX 3050',
        imageUrl: 'https://m.media-amazon.com/images/I/61+jWW9yGLL._SL1200_.jpg',
        price: 160,
      },
      {
        id: 14,
        name: 'NVIDIA RTX 4080',
        imageUrl: 'https://fdn.gsmarena.com/imgroot/news/22/10/4080-unlaunched/inline/-1200/gsmarena_001.jpg',
        price: 160,
      },
      {
        id: 15,
        name: 'NVIDIA RTX 4090',
        imageUrl: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg',
        price: 160,
      },
      {
        id: 16,
        name: 'NVIDIA RTX 2080Ti',
        imageUrl: 'https://m.media-amazon.com/images/I/61aZgZmpHaL._SL1100_.jpg',
        price: 190,
      },
      {
        id: 17,
        name: 'NVIDIA GTX 1660Ti',
        imageUrl: 'https://m.media-amazon.com/images/I/8149aCXpDlL._SL1500_.jpg',
        price: 200,
      },
    ],
  },
  {
    title: 'Mother Boards',
    items: [
      {
        id: 18,
        name: 'Asus ROG Crosshair VIII Dark Hero',
        imageUrl: 'https://m.media-amazon.com/images/I/814Rm4HxFIL._AC_SS450_.jpg',
        price: 125,
      },
      {
        id: 19,
        name: 'Asus ROG Maximus XII Extreme',
        imageUrl: 'https://m.media-amazon.com/images/I/418P8lP5zvL.jpg',
        price: 90,
      },
      {
        id: 20,
        name: 'Asus ROG Strix B550-F',
        imageUrl: 'https://elitehubs.com/wp-content/uploads/2020/12/90mb14s0-m0iay0-image-main-600x600-1.jpg',
        price: 90,
      },
      {
        id: 21,
        name: 'Gigabyte X670E Aorus Master',
        imageUrl: 'https://gamesncomps.com/wp-content/uploads/2022/10/1-2022-10-10T172542.060.jpg',
        price: 165,
      },
      {
        id: 22,
        name: 'Gigabyte B650 Aorus Pro AX Motherboard',
        imageUrl: 'https://gamesncomps.com/wp-content/uploads/2022/10/6-2022-10-10T175912.495.jpg',
        price: 185,
      },
    ],
  },
  {
    title: 'Storage',
    items: [
      {
        id: 23,
        name: 'WD Internal 4TB',
        imageUrl: 'https://5.imimg.com/data5/IC/AN/RY/SELLER-86555969/wd-hard-disk-drive-500x500.jpg',
        price: 25,
      },
      {
        id: 24,
        name: 'Crucial P3 500GB',
        imageUrl: 'https://www.pcworld.com/wp-content/uploads/2022/08/Crucial-P3-SSD-Flat-Front-Image-color-hero.jpg?quality=50&strip=all&w=1024',
        price: 20,
      },
      {
        id: 25,
        name: 'WD Green SATA 240GB',
        imageUrl: 'https://m.media-amazon.com/images/I/81mB3Lho7dL._SL1500_.jpg',
        price: 80,
      },
      {
        id: 26,
        name: 'Samsung 980 500GB',
        imageUrl: 'https://itimpactdeal.in/wp-content/uploads/2021/06/71pUbfXmVlL._SL1500_-600x400.jpg',
        price: 80,
      },
      {
        id: 27,
        name: 'Western Digital Black 250GB',
        imageUrl: 'https://m.media-amazon.com/images/I/51vNa5DEr4L._SY450_.jpg',
        price: 45,
      },
      {
        id: 28,
        name: 'Western Digital Green SN350',
        imageUrl: 'https://m.media-amazon.com/images/I/518nip6n34L._SL1357_.jpg',
        price: 135,
      }
    ],
  },
  {
    title: 'Cabinets',
    items: [
      {
        id: 30,
        name: 'Asus TUF Gaming GT301 ARGB Cabinet',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/cabinet/asus/tuf-gaming-gt301/tuf-gaming-gt301-image-main-600x600.jpg',
        price: 325,
      },
      {
        id: 31,
        name: 'Asus TUF Gaming GT501 RGB Cabinet',
        imageUrl: 'https://m.media-amazon.com/images/I/81nuQ9AOxGL._SL1500_.jpg',
        price: 20,
      },
      {
        id: 32,
        name: 'Ant Esports ICE-5000 RGB',
        imageUrl: 'https://megacompuworldjaipur.com/image/cache/catalog/Product/Cabinet/ANT%20ESPORTS/ICE-5000-5-700x550.jpg',
        price: 25,
      },
      {
        id: 33,
        name: 'Ant Esports ICE-200TG ARGB',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/cabinet/ant-esports/ice-200tg/ice-200tg-image-main-600x600.jpg',
        price: 25,
      },
      {
        id: 34,
        name: 'Cooler Master CMP 510',
        imageUrl: 'https://cdn.coolermaster.com/media/assets/1125/cmp510_webpage_1175x1120_imagewithtext-3-imageleftorright.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Ant Esports ICE-280TG',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0615/1906/9368/products/61XDW52EEiL._SL1080.jpg?v=1648621242',
        price: 25,
      },
    ],
  },
  {
    title: 'Cooling Systems',
    items: [
      {
        id: 36,
        name: 'Aerocool Mirage L360 ARGB',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/cpu%20cooler/aerocool/mirage-l360-argb-white/mirage-l360-argb-white-image-main-600x600.jpg',
        price: 325,
      },
      {
        id: 37,
        name: 'Alseye M360 PLUS ARGB',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/cpu%20cooler/alseye/m360-plus-argb-black/m360-plus-argb-black-image-main-600x600.jpg',
        price: 20,
      },
      {
        id: 38,
        name: 'Antec Symphony 360 ARGB',
        imageUrl: 'https://www.antec.com/product/cooling/images/gallery-symphony-360-argb-02.jpg',
        price: 25,
      },
      {
        id: 39,
        name: 'Asus ROG Strix LC II 360 ARGB',
        imageUrl: 'https://m.media-amazon.com/images/I/71E7Nnlt-JL._SL1500_.jpg',
        price: 25,
      },
      {
        id: 40,
        name: 'Cooler Master Hyper H410R RGB',
        imageUrl: 'https://m.media-amazon.com/images/I/71+QnNXvUSL._SY450_.jpg',
        price: 40,
      }
    ],
  },
  {
    title: 'Power Supply',
    items: [
      {
        id: 41,
        name: 'Corsair CX750M',
        imageUrl: 'https://m.media-amazon.com/images/I/51HHEX9ENhL.jpg',
        price: 325,
      },
      {
        id: 42,
        name: 'EVGA 850 BQ',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/smps/evga/110-bq-0850-v1/110-bq-0850-v1-image-main-600x600.jpg',
        price: 20,
      },
      {
        id: 43,
        name: 'Adata XPG Core Reactor 650',
        imageUrl: 'https://techpc7.com/wp-content/uploads/2022/08/product_2250_1.png',
        price: 25,
      },
      {
        id: 44,
        name: 'Asus ROG Strix 1000G',
        imageUrl: 'https://rukminim1.flixcart.com/image/416/416/ko4ni4w0/psu/6/t/a/rog-strix-1000g-asus-original-imag2n9w5hu8zh6t.jpeg?q=70',
        price: 25,
      },
      {
        id: 45,
        name: 'Asus ROG Thor 1200P2',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/smps/asus/rog-thor-1200p2-gaming/rog-thor-1200p2-gaming-image-main-600x600.jpg',
        price: 40,
      }
    ],
  },
  {
    title: 'RAM',
    items: [
      {
        id: 46,
        name: 'Adata XPG Spectrix D60G 8GB',
        imageUrl: 'https://m.media-amazon.com/images/I/51nt7V2HWAL._SL1061_.jpg',
        price: 325,
      },
      {
        id: 47,
        name: 'Adata XPG Gammix D30 16GB',
        imageUrl: 'https://m.media-amazon.com/images/I/710ak2j2wtL._SY450_.jpg',
        price: 20,
      },
      {
        id: 48,
        name: 'Adata Spectrix D50 RGB 16GB',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/memory/adata/ax4u3000716g16a-st50/ax4u3000716g16a-st50-image-main-600x600.jpg',
        price: 25,
      },
      {
        id: 49,
        name: 'Adata XPG Gammix D20 8GB',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/memory/adata/ax4u36008g18i--cbk20/ax4u36008g18i--cbk20--image--main-600x600.jpg',
        price: 25,
      },
      {
        id: 50,
        name: 'Corsair Vengeance RGB RS 16GB',
        imageUrl: 'https://cdn.mdcomputers.in/image/cache/catalog/memory/corsair/cmg16gx4m1e3200c16/corsair-vengeance-rgb-rs-series-16gb-ddr4-3200mhz-image-main-600x600.jpg',
        price: 40,
      }
    ],
  },
];

export default SHOP_DATA