"""
Bharat Nursery - AI Plant Recommendation Scoring Engine (Python)
Evaluates environmental microclimate constraints to recommend optimal plant species.
"""

import sys
import json

SAMPLE_SPECIES = [
    {
        "id": "p1",
        "name": "Tulsi (Holy Basil)",
        "scientific": "Ocimum sanctum",
        "category": "Medicinal",
        "price": 99,
        "sunlight": "direct",
        "space": "balcony",
        "soil": "loamy",
        "water": "daily",
        "purpose": "medicinal"
    },
    {
        "id": "p2",
        "name": "Snake Plant (Sansevieria)",
        "scientific": "Dracaena trifasciata",
        "category": "Indoor",
        "price": 249,
        "sunlight": "indirect",
        "space": "indoor",
        "soil": "sandy",
        "water": "low",
        "purpose": "air"
    },
    {
        "id": "p3",
        "name": "Neem Tree",
        "scientific": "Azadirachta indica",
        "category": "Outdoor Trees",
        "price": 149,
        "sunlight": "direct",
        "space": "ground",
        "soil": "loamy",
        "water": "low",
        "purpose": "shade"
    },
    {
        "id": "p4",
        "name": "Mogra (Arabian Jasmine)",
        "scientific": "Jasminum sambac",
        "category": "Flowering",
        "price": 129,
        "sunlight": "direct",
        "space": "balcony",
        "soil": "loamy",
        "water": "daily",
        "purpose": "fragrance"
    },
    {
        "id": "p5",
        "name": "Areca Palm",
        "scientific": "Dypsis lutescens",
        "category": "Indoor",
        "price": 349,
        "sunlight": "indirect",
        "space": "indoor",
        "soil": "cocopeat",
        "water": "moderate",
        "purpose": "air"
    },
    {
        "id": "p6",
        "name": "Aloe Vera",
        "scientific": "Aloe barbadensis miller",
        "category": "Medicinal",
        "price": 89,
        "sunlight": "direct",
        "space": "desk",
        "soil": "sandy",
        "water": "low",
        "purpose": "medicinal"
    }
]

def calculate_compatibility(criteria, plant):
    score = 50.0

    if criteria.get("sunlight") == plant["sunlight"]:
        score += 15.0
    if criteria.get("space") == plant["space"]:
        score += 12.0
    if criteria.get("soil") == plant["soil"]:
        score += 10.0
    if criteria.get("water") == plant["water"]:
        score += 8.0
    if criteria.get("purpose") == plant["purpose"]:
        score += 10.0

    return min(score, 98.0)

def rank_recommendations(criteria):
    results = []
    for plant in SAMPLE_SPECIES:
        score = calculate_compatibility(criteria, plant)
        results.append({
            "name": plant["name"],
            "scientific": plant["scientific"],
            "category": plant["category"],
            "price": plant["price"],
            "compatibility_percentage": score
        })
    results.sort(key=lambda x: x["compatibility_percentage"], reverse=True)
    return results

if __name__ == "__main__":
    test_criteria = {
        "sunlight": "indirect",
        "space": "indoor",
        "soil": "cocopeat",
        "water": "low",
        "purpose": "air"
    }

    if len(sys.argv) > 1:
        try:
            test_criteria = json.loads(sys.argv[1])
        except Exception:
            pass

    ranked = rank_recommendations(test_criteria)
    print("Bharat Nursery AI Recommendation Output (Python):")
    print(json.dumps(ranked[:3], indent=2))
