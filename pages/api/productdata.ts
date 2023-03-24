import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    _id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}[];

const productData = [
    {
        _id: 101,
        title: "Canon EOS Rebel T100",
        price: 559,
        image: "https://i.ibb.co/1r28gMk/1.webp",
        category: "cat1",
    },

    {
        _id: 102,
        title: "DJI Air",
        price: 999,
        image: "https://i.ibb.co/qdfB3s6/2.webp",
        category: "cat1",
    },
    {
        _id: 103,
        title: "Apple 10.2-inch iPad",
        price: 269,
        image: "https://i.ibb.co/VL1Dnv1/4.webp",
        category: "cat1",
    },
    {
        _id: 104,
        title: "iPhone 14",
        price: 1200,
        image: "https://i.ibb.co/5F3nWv6/7.webp",
        category: "cat1",
    },
    {
        _id: 105,
        title: "Apple Watch SE",
        price: 249,
        image: "https://i.ibb.co/xgZWmdq/8.jpg",
        category: "cat1",
    },
    {
        _id: 106,
        title: "Beats Solo3",
        price: 130,
        image: "https://i.ibb.co/rQKjVC2/5.webp",
        category: "cat1",
    },
    {
        _id: 107,
        title: "uhomepro TV Stand Cabinet",
        price: 125,
        image: "https://i.ibb.co/Ycz8hkV/6.webp",
        category: "cat1",
    },
    {
        _id: 108,
        title: "T-Shirt Men",
        price: 18,
        image: "https://i.ibb.co/BLCDw7v/3.webp",
        category: "cat2",
    },
    {
        _id: 109,
        title: "Picnic Table Bench Set",
        price: 298,
        image: "https://i.ibb.co/qCXcPhq/8.webp",
        category: "cat2",
    },
    {
        _id: 110,
        title: "Grill Heavy Duty",
        price: 107,
        image: "https://i.ibb.co/TTS9wY4/9.webp",
        category: "cat2",
    },
    {
        _id: 111,
        title: "Girls Cropped",
        price: 15,
        image: "https://i.ibb.co/BVzsqvz/10.webp",
        category: "cat2",
    },
    {
        _id: 112,
        title: "Night of Olay Firming Night Cream Face Moisturizer, 1.9 oz",
        price: 7,
        image: "https://i.ibb.co/zPDcCQY/top4.webp",
        category: "cat3",
    },
    {
        _id: 113,
        title: "Face LiquidSweet Lightweight Beauty Products for Women",
        price: 7,
        image: "https://i.ibb.co/QC4L3RF/top8.jpg",
        category: "cat3",
    },
    {
        _id: 114,
        title:
            "L'Oreal Paris Revitalift Triple Power Anti-Aging Cream Face Moisturizer 1.7 oz",
        price: 21,
        image: "https://i.ibb.co/dKmw2sC/top2.webp",
        category: "cat3",
    },
    {
        _id: 115,
        title:
            "L'Oreal Paris 55+ Moisturizer Anti-Aging Face Moisturizer, Wrinkle Expert, 1.7 oz",
        price: 10,
        image: "https://i.ibb.co/sJwg0YF/top1.webp",
        category: "cat3",
    },
    {
        _id: 116,
        title:
            "Vaseline Intensive Care™ Advanced Repair Unscented Body Lotion, 20.3 oz",
        price: 6,
        image: "https://i.ibb.co/v1sPXLq/top5.webp",
        category: "cat3",
    },
    {
        _id: 117,
        title: "CeraVe Healing Ointment, Protects and Soothes Cracked Skin, 12 oz",
        price: 20,
        image: "https://i.ibb.co/yPJjB3r/top6.webp",
        category: "cat3",
    },
    {
        _id: 118,
        title:
            "Neutrogena Hydro Boost Hyaluronic Acid Water Gel Face Moisturizer, 1.7 oz",
        price: 19,
        image: "https://i.ibb.co/zmw8xFY/top7.webp",
        category: "cat3",
    },
    {
        _id: 119,
        title:
            "L'Oreal Paris Collagen Moisture Filler Facial Treatment Day Night Cream, Anti-Aging, 1.7 oz",
        price: 8,
        image: "https://i.ibb.co/vHJkwzt/top3.webp",
        category: "cat3",
    },
    {
        _id: 120,
        title: "Girls Sleeveless Cutout",
        price: 22,
        image: "https://i.ibb.co/BNXTLkq/12.webp",
        category: "cat2",
    },
];
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(productData)
}
 