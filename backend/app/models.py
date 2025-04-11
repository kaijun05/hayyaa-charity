from pydantic import BaseModel
from typing import Literal

class RecipientInput(BaseModel):
    income: float
    household_size: int
    employment_status: Literal["Unemployed", "Employed", "Student", "Retired"]
    health_condition: Literal["Healthy", "Chronic Illness", "Elderly Care", "Disabled", "Other"]

class UrgencyScoreResponse(BaseModel):
    urgency_score: float