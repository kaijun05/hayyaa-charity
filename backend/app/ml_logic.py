def calculate_urgency_score(data: dict) -> float:
    score = 0

    # Health condition weights
    health_weights = {
        "Critical": 50,  
        "Disabled": 45,
        "Chronic Illness": 35,
        "Elderly Care": 25,
        "Other": 2,
        "Healthy": 2,
    }
    score += health_weights.get(data["health_condition"], 0)

    # Income (lower income = higher score)
    if data["income"] < 1000:
        score += 30
    elif data["income"] < 3000:
        score += 20
    elif data["income"] < 6000:
        score += 10
    elif data["income"] < 8000:
        score += 5
    else:
        score += 2

    # Household size (bigger family = higher need)
    score += min(data["household_size"] * 2, 15)

    # Employment status contribution
    employment_weights = {
        "Unemployed": 15,
        "Student": 10,
        "Retired": 8,
        "Employed": 2,
    }
    score += employment_weights.get(data["employment_status"], 0)

    return round(score, 2)