export const products = [
    {
        id: "stonesip-ceramic-cup",
        name: "StoneSip Ceramic Cup",
        price: 24.00,
        originalPrice: 30.00,
        discount: 20,
        rating: 4.9,
        reviews: 128,
        description: "Hand-thrown artisanal mug. A rustic, dark brown textured ceramic cup resting on a wooden plinth next to a dark brown plate. Dark, moody background, dramatic lighting, highly photorealistic, premium eco-friendly kitchenware.",
        features: [
            "Hand-thrown ceramic",
            "Textured matte finish",
            "Dishwasher safe",
            "Ethically sourced clay"
        ],
        colors: [
            { name: "Dark Brown", hex: "#4A3B32" },
            { name: "Terracotta", hex: "#E2725B" },
            { name: "Sage", hex: "#7C8B76" }
        ],
        images: [
            "/images/gallery_stonesip.png",
            "/images/category_cupeco.png"
        ]
    },
    {
        id: "sizzlepro-non-stick-pan",
        name: "SizzlePro Non-Stick Pan",
        price: 85.00,
        originalPrice: null,
        discount: null,
        rating: 4.7,
        reviews: 84,
        description: "A dark charcoal non-stick cooking pan and its soft terracotta colored lid overlapping. Top-down view, premium aesthetic, soft lighting, eco-friendly kitchenware.",
        features: [
            "Ceramic non-stick coating",
            "Free from PFAS, PFOA, lead, and cadmium",
            "Oven safe up to 550°F",
            "Suitable for all stovetops"
        ],
        colors: [
            { name: "Charcoal", hex: "#333333" },
            { name: "Terracotta", hex: "#E2725B" }
        ],
        images: [
            "/images/gallery_sizzlepro.png",
            "/images/gallery_glowpot.png"
        ]
    },
    {
        id: "bamboo-utensil-set",
        name: "Bamboo Utensil Set",
        price: 26.27,
        originalPrice: 35.00,
        discount: 25,
        rating: 4.8,
        reviews: 215,
        description: "Vibrant sage green silicone cooking utensils with bamboo wooden handles arranged in a sage green cylindrical holder on a bright green surface. Photorealistic, eco-friendly kitchenware.",
        features: [
            "FSC-certified bamboo handles",
            "Food-grade silicone",
            "Heat resistant up to 400°F",
            "Includes holder"
        ],
        colors: [
            { name: "Sage Green", hex: "#7C8B76" },
            { name: "Cream", hex: "#F5F5DC" }
        ],
        images: [
            "/images/gallery_bambooutensil.png",
            "/images/category_naturesip.png"
        ]
    },
    {
        id: "freshpitcher",
        name: "FreshPitcher Water Bottle",
        price: 32.00,
        originalPrice: null,
        discount: null,
        rating: 4.6,
        reviews: 56,
        description: "A sleek, matte olive green reusable water bottle. Soft directional lighting highlighting the matte texture of the bottle. Highly photorealistic, matching a premium eco-friendly brand.",
        features: [
            "Double-wall vacuum insulation",
            "Keeps drinks cold 24h, hot 12h",
            "BPA-free",
            "Leak-proof lid"
        ],
        colors: [
            { name: "Olive Green", hex: "#556B2F" },
            { name: "Charcoal", hex: "#333333" }
        ],
        images: [
            "/images/category_freshpitcher.png"
        ]
    },
    {
        id: "bestseller-ceramic-pot",
        name: "Kindred Earth Ceramic Pot",
        price: 120.00,
        originalPrice: 150.00,
        discount: 20,
        rating: 5.0,
        reviews: 42,
        description: "A light sage green ceramic cooking pot and a soft cream ceramic cooking pot with lids. Wide banner aspect ratio, highly photorealistic, premium eco-friendly kitchenware.",
        features: [
            "Handcrafted ceramic",
            "Excellent heat retention",
            "Non-toxic glaze",
            "Oven-to-table design"
        ],
        colors: [
            { name: "Sage Green", hex: "#7C8B76" },
            { name: "Cream", hex: "#F5F5DC" }
        ],
        images: [
            "/images/bestseller_banner.png"
        ]
    }
];

export function getProductById(id) {
    return products.find(p => p.id === id);
}
