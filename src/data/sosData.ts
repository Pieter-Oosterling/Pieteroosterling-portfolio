export interface EquipmentItem {
    id: string;
    name: string;
    quantity: number;
    weightGrams: number; // per piece
    priceEuro: number; // per piece
    isPayload: boolean; // true if it's medical cargo (can be chosen in configurator)
}

export const sosEquipment: EquipmentItem[] = [
    { id: 'cam', name: 'Infrarood Camera (Hadron 640R)', quantity: 5, weightGrams: 56, priceEuro: 3723.58, isPayload: false },
    { id: 'lidar', name: 'Lidar Afstandssensor', quantity: 2, weightGrams: 30, priceEuro: 257.09, isPayload: false },
    { id: 'cooler', name: 'Medische Transportkoeler', quantity: 2, weightGrams: 2500, priceEuro: 1000, isPayload: false }, // est weight/price
    { id: 'bloodwarmer', name: 'Bloedverwarming (MEQU)', quantity: 2, weightGrams: 110, priceEuro: 340, isPayload: true },
    { id: 'pump', name: 'Pompsysteem', quantity: 1, weightGrams: 110, priceEuro: 8.60, isPayload: true },
    { id: 'hoses', name: 'Transfusieslangen', quantity: 30, weightGrams: 7, priceEuro: 2.30, isPayload: true },
    { id: 'boneneedle', name: 'Botnaald (Arrow EZ-IO)', quantity: 10, weightGrams: 2, priceEuro: 181.78, isPayload: true },
    { id: 'bonedrill', name: 'Botboor (Arrow EZ-IO G3)', quantity: 1, weightGrams: 150, priceEuro: 424.59, isPayload: true },
    { id: 'needles', name: 'Injectienaalden', quantity: 25, weightGrams: 0.15, priceEuro: 0.06, isPayload: true },
    { id: 'tourniquet', name: 'Tourniquet (SAM XT)', quantity: 10, weightGrams: 108, priceEuro: 33.75, isPayload: true },
    { id: 'gasmask', name: 'Gasmasker (OM-90)', quantity: 2, weightGrams: 500, priceEuro: 227.80, isPayload: true },
    { id: 'oxygen', name: 'Zuurstofmasker', quantity: 1, weightGrams: 500, priceEuro: 2.39, isPayload: true },
    { id: 'satcom', name: 'SATCOM-systeem', quantity: 1, weightGrams: 5000, priceEuro: 50000, isPayload: false },
    { id: 'parachute', name: 'Parachute (Nood)', quantity: 1, weightGrams: 8500, priceEuro: 4500, isPayload: false },
    { id: 'ventilation', name: 'Ventilatiesysteem', quantity: 1, weightGrams: 2050, priceEuro: 169.95, isPayload: false },
    { id: 'led', name: 'LED Paneel (60x60)', quantity: 1, weightGrams: 2000, priceEuro: 16.16, isPayload: false },
    { id: 'blood', name: 'Bloedzak (500ml)', quantity: 4, weightGrams: 500, priceEuro: 150, isPayload: true } // est price
];

export const sosCostBreakdown = [
    { category: 'Carbon Fiber (Buiten- & Binnenkant)', cost: 815.33, percentage: 0.9 },
    { category: 'Magnesium Skelet (AZ31B)', cost: 464.19, percentage: 0.5 },
    { category: 'Divinycell Schuim (Kern)', cost: 1627.17, percentage: 1.8 },
    { category: 'Technische Apparatuur & Payload', cost: 86588.03, percentage: 96.8 } // Adjusted to fit total
];

export const totalCost = 89494.72;
export const baseModuleWeightKg = 100.82; // Skelet + Sandwich
export const maxDronePayloadKg = 300; // BAE T-650 Limit
