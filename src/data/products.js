export const products = [
    {
        id: "201",
        name: "Ergonomic Office Lumbar Support Massager Mesh Cushion",
        mrp: 35.00,
        finalPrice: 19.99,
        savePer: 43,
        sold: 140,
        limited: true,
        imgSrc: ["https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?w=500"]
    },
    {
        id: "205",
        name: "Premium Leather Steering Wheel Cover - Canadian Edition",
        mrp: 45.00,
        finalPrice: 24.50,
        savePer: 46,
        sold: 95,
        limited: false,
        imgSrc: ["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500"]
    },
    {
        id: "206",
        name: "Adjustable Aluminum Laptop Stand with Cooling Vents",
        mrp: 59.99,
        finalPrice: 34.99,
        savePer: 41,
        sold: 320,
        limited: true,
        imgSrc: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"]
    }
];

export const infos = [
    {
        id: "201",
        about: [
            "Ergonomic structural design provides premium lower back support alignment.",
            "Breathable woven mesh lets airflow cycle freely to minimize temperature buildup."
        ],
        spec: {
            "Material": "Premium Nylon Mesh & Polymer Frame",
            "Weight": "450 grams",
            "Dimensions": "40cm x 39cm x 10cm",
            "Origin": "Designed in Canada"
        }
    },
    {
        id: "206",
        about: [
            "Multi-angle customizable pivot structure supports clean ergonomic heights.",
            "Premium sandblasted anti-corrosion aluminum alloy matches workspace ecosystems."
        ],
        spec: {
            "Compatibility": "Fits 11-inch to 17-inch Laptops and Tablets",
            "Max Weight Capacity": "10 kg",
            "Material": "Anodized Aerospace Aluminum Alloy"
        }
    }
];

export const reviews = [
    {
        id: "201",
        rev: [
            { name: "Arshdeep S.", des: "Saves my back during long library study sessions. Essential for students.", dp: null },
            { name: "Jessica M.", des: "Very lightweight but sturdy. Air flow keeps it cool.", dp: null }
        ]
    },
    {
        id: "206",
        rev: [
            { name: "Kabir D.", des: "Excellent typing stability. Aluminum does not flex at all.", dp: null }
        ]
    }
];